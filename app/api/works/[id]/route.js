import connect from "@/lib/dbConfig";

import Work from "@/models/workModel";

import mime from "mime";
import { join } from "path";
import { stat, mkdir, writeFile, unlink } from "fs/promises";

import { NextResponse } from "next/server";

export async function DELETE(req) {

    const workId = req.url.split('/').pop()
 
    try{

        await connect()

        const findWork = await Work.findOne({_id: workId})
        if(!findWork){
            return NextResponse.json({ message: "Work not found!" }, { status: 400 })
        } else {
            await Work.deleteOne({_id: workId})
            return NextResponse.json({ message: "Work deleted." }, { status: 200 })
        }
    } catch(err){
        return NextResponse.json({message: "Something went wrong while deleting Work : " + err}, { status: 400 })
    }
}

export async function PUT(req) {

    const workId = req.url.split('/').pop()

    try{
        const data = await req.formData()

        const title = data.get('title')
        const description = data.get('description')
        const issues = data.get('issues')
        const technos = data.get('technos').split(',')
        const githubLink = data.get('githubLink')
        const oldImageUrl = data.get("imageUrl")
        const file = data.get("file")

        await connect()

        if(file){
            
            const oldfileUrl = join(process.cwd(), "public", `/${oldImageUrl}`)

            unlink(oldfileUrl, (err)=>{
                return ("Something went wrong while trying to delete old file" + err)
            })

            const buffer = Buffer.from(await file.arrayBuffer())
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
                        { status: 500 }
                    );
                }
            }
            try {
                const filenameReplace = data.get("title").split(' ').join('-')
                const filename = `Project-${filenameReplace}.${mime.getExtension(file.type)}`;
                await writeFile(`${uploadDir}/${filename}`, buffer);
          
                const imageUrl = `${relativeUploadDir}/${filename}`

                const findWork = await Work.findOne({_id: workId})
                const workData = {title, description, issues, technos, githubLink, imageUrl}

                if(!findWork){
                    return NextResponse.json({ message: "Work not found!" }, { status: 400 })
                } else {
                    await Work.updateOne({_id: workId}, workData )
                    return NextResponse.json({ message: "Work updated." }, { status: 200 })
                }      
          
            } catch (err) {
                return NextResponse.json(
                    { message: "Something went wrong while trying to upload the file" + err },
                    { status: 500 }
                );
            }
        } else {
            const findWork = await Work.findOne({_id: workId})
            const workData = {title, description, issues, technos, githubLink, oldImageUrl}
            if(!findWork){
                return NextResponse.json({ message: "Work not found!" }, { status: 400 })
            } else {
                await Work.updateOne({_id: workId}, workData )
                return NextResponse.json({ message: "Work updated." }, { status: 200 })
            }
        }


    } catch(err){
        return NextResponse.json({message: "Something went wrong while updating Work : " + err}, { status: 400 })
    }
}

export async function GET(req) {

    const workId = req.url.split('/').pop()

    try {
        await connect()

        const work = await workModel.find({_id: workId})

        return NextResponse.json(work)

    } catch(err) {

        return NextResponse.json({message: "Something went wrong while retrieving work infos." + err})

    }
}