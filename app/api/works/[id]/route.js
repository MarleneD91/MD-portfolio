import connect from "@/lib/dbConfig";

import workModel from "@/models/workModel";

import { NextRequest, NextResponse } from "next/server";

{/*export async function GET({params}){
    try{
        await connect()

        const {id} = params
        const work = await workModel.findOne({_id: id})

        return NextResponse.json({work}, {status: 200})

    } catch(err) {
        return NextResponse.json({message: "Work not found."})
    }
}*/}

export async function PUT(NextRequest, {params}){
    try{
        await connect()

        const {id} = params
        const {newTitle: title,
                newDescription: description,
                newIssues: issues,
                newTechnos: technos,
                newgithubLink: githubLink,
                newImageUrl: imageUrl }  = await NextRequest.json()

        const oldWork = await workModel.findOne({_id: id}).updateOne({})

        //A retrouver, Comment récupérer les infos du body sans que cela prenne autant de place (cf vieux grimoir etc)

        return NextResponse.json({work}, {status: 200})

    } catch(err) {
        return NextResponse.json({message: "Work not found."})
    }
}

export async function DELETE(NextRequest, {params})