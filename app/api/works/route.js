import connect from "@/lib/dbConfig"; // Connection to db

import workModel from "@/models/workModel";

import { NextResponse } from "next/server";

import mime from "mime";
import { join } from "path";
import { stat, mkdir, writeFile } from "fs/promises";
import { headers } from "next/dist/client/components/headers";


export async function GET() {
    try {
        await connect()

        const works = await workModel.find()

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
      const filename = `${data.get("title")}.${mime.getExtension(file.type)}`;
      await writeFile(`${uploadDir}/${filename}`, buffer);

      const imageUrl = `${relativeUploadDir}/${filename}`
      const title = data.get('title')
      const description = data.get('description')
      const issues = data.get('issues')
      const technos = data.get('technos').split(',')
      const githubLink = data.get('githubLink')

      const newWork = {title, description, issues, technos, githubLink, imageUrl: imageUrl}
        
      await workModel.create({
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

exports.config = {
  api: {
      bodyParser: false,
  },
};

