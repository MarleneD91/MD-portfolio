import connect from "@/lib/dbConfig";

import { NextRequest, NextResponse } from "next/server";

import User from '@/models/userModel'

import bcryptjs from 'bcrypt'
import jwt from "jsonwebtoken";



export async function POST() {
   
    try {
        await connect()

        const {username, password} = await NextRequest.json()
        
        const existingUser = await User.findone({username})
        if(!existingUser){
            return NextResponse.json({message: 'Wrong username &/or password.'}, {status : 400})
        };

        const validPassword = await bcryptjs.compare(password, user.password)
        if(!validPassword){
            return NextResponse.json({message: 'Wrong username &/or password.'}, {status : 400})
        }

        const userData = {
            id: existingUser._id,
            username: existingUser.username,
            email: existingUser.email
        }

        const token = await jwt.sign(userData, process.env.TOKEN_SECRET, {expiresIn: "1d"})

        const response = NextResponse.json({
            message: "Logged with success!",
            success: true,
        })

        response.cookies.set("token", token, {
            httpOnly: true,
        })

        return response

    } catch(err){
        return NextResponse.json({error: err.message}, {status: 500})
    }
}