import connect from "@/lib/dbConfig";

import Work from "@/models/workModel";

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
        await connect()

        const findWork = await workModel.findOne({_id: workId})
        const {title, description, issues, technos, githubLink, imageUrl} = await res.json()

        if(!findWork){
            return NextResponse.json({ message: "Work not found!" }, { status: 400 })
        } else {
            await workModel.updateOne({_id: workId}, {title: title, description: description, issues: issues, technos: technos, githubLink: githubLink, imageUrl: imageUrl} )
            return NextResponse.json({ message: "Work updated." }, { status: 200 })
        }
    } catch(err){
        return NextResponse.json({message: "Something went wrong while updating Work : " + err}, { status: 400 })
    }
}