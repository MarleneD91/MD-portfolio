import connect from "@/lib/dbConfig"; // Connection to db

import workModel from "@/models/workModel";

import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connect()
        const works = await workModel.find()
        return NextResponse.json({works})
    } catch(err) {
        return NextResponse.json({message: "Something went wrong while retrieving works."})
    }
}

export async function POST() {
    
    try {

        const {title, description, issues, technos, githubLink, imageUrl} = await res.json()

        await connect()

        await workModel.create({title, description, issues, technos, githubLink, imageUrl})

        return NextResponse.json({ message: "Work added to the database." }, { status: 200 })

    } catch(err) {

        return NextResponse.json({message: "Something went wrong while creating Work : " + err}, { status: 400 })
    
    }
}