import connect from "@/lib/dbConfig";

import workModel from "@/models/workModel";

import { NextResponse } from "next/server";

export async function DELETE({params}) {

    const workId = params.id

    try{
        await connect()

        const findWork = await workModel.findOne({_id: workId})
        if(!findWork){
            return NextResponse.json({ message: "Work not found!" }, { status: 400 })
        } else {
            await workModel.deleteOne({_id: workId})
            return NextResponse.json({ message: "Work deleted." }, { status: 200 })
        }
    } catch(err){
        return NextResponse.json({message: "Something went wrong while deleting Work : " + err}, { status: 400 })
    }
}

export async function PUT({params}) {

    const workId = params.id

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