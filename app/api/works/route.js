import connect from "@/lib/dbConfig"; // Connection to db

import workModel from "@/models/workModel";

import { NextRequest, NextResponse } from "next/server";

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
    const {title, description, issues, technos, githubLink, imageUrl} = await NextRequest.json()
    try {
        await connect()
        await workModel.create({title, description, issues, technos, githubLink, imageUrl})
        return NextResponse.json({
            message: ["Work added to the database."],
            success: true,
        });
    } catch(err) {
        return NextResponse.json({message: "Something went wrong while creating Work."})
    }
}