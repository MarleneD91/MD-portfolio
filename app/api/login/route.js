import connect from "@/lib/dbConfig";

import { NextResponse } from "next/server";

import User from '@/models/userModel'

import bcryptjs from 'bcrypt'
import jwt from "jsonwebtoken";



export async function POST(req) {
   
    try {
        const {username, password} = await req.json()

        await connect()
        
        const existingUser = await User.findOne({username})

        if(!existingUser){
            return NextResponse.json({message: 'Wrong username &/or password.'}, {status : 400})
        };

        const validPassword = await bcryptjs.compare(password, existingUser.password)

        if(!validPassword){
            return NextResponse.json({message: 'Wrong username &/or password.'}, {status : 400})
        }

        const userData = {
            id: existingUser._id,
            username: existingUser.username,
            password: existingUser.password
        }

        const token = await jwt.sign(userData, process.env.TOKEN_SECRET, {expiresIn: "2h"})
        console.log(token)

        const response = NextResponse.json({message: "Logged with success!"}, {status: 200}, {token})
        
        console.log(response)


        return response

    } catch(err){
        return NextResponse.json({message: "Unable to log user : " + err}, {status: 500})
    }
}