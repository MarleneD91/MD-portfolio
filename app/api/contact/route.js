import connect from "@/lib/dbConfig"; // Connection to db

import contactModel from "@/models/contactModel"; // Data model for form info

import { NextResponse } from "next/server";

export async function POST(req) {
    
     try {
        const { name, firstname, email, message } = await req.json()

        await connect()

        await contactModel.create({ name, firstname, email, message })

        return NextResponse.json({message: "Message sent!"}, {status: 200})

    } catch(err) {

        return NextResponse.json({message: "Something went wrong while sending the message : " + err}, {status: 400})
    
    }

}
