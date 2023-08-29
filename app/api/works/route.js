import connect from "@/lib/dbConfig"; // Connection to db

import Work from "@/models/workModel";

import { NextResponse } from "next/server";

import mime from "mime";
import { join } from "path";
import { stat, mkdir, writeFile } from "fs/promises";

export async function GET() {
    try {
        await connect()

        const works = await Work.find()

        return NextResponse.json(works)

    } catch(err) {

        return NextResponse.json({message: "Something went wrong while retrieving works."})

    }
}

export async function POST(req) {
  try {
    const data = await req.formData()

    await connect()

    //Get file and save it to public folder
    const file = data.get("file")
    const buffer = Buffer.from(await file.arrayBuffer());
    const relativeUploadDir = "/works"
    const uploadDir = join(process.cwd(), "public", relativeUploadDir);

    try {
      await stat(uploadDir);
    } catch (err) {
      if (err.code === "ENOENT") {
        await mkdir(uploadDir, { recursive: true });
      } else {
        return NextResponse.json(
          { message: "Something went wrong while trying to create directory when uploading the file" + err },
          { status: 500 });
      }
    }

    try {
      const filename = `Project-${data.get("title")}.${mime.getExtension(file.type)}`;
      await writeFile(`${uploadDir}/${filename}`, buffer);

      const imageUrl = `${relativeUploadDir}/${filename}`

      const newWork = {title, description, issues, technos, githubLink, imageUrl: imageUrl}
        
      await Work.create({
        ...newWork
      })
            
      return NextResponse.json({ message: "Work added to the database." }, { status: 200 })

      } catch (err) {
        return NextResponse.json(
          { message: "Something went wrong while trying to upload the file" + err },
          { status: 500 }
        );
      }

  } catch(err) {
    return NextResponse.json({message: "Something went wrong while creating Work : " + err}, { status: 400 })
  }
}

/*exports.config = {
  api: {
      bodyParser: false,
  },
};*/