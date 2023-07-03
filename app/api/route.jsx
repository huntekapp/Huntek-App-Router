import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        return NextResponse.json("Hello Huntek!")
    } catch (error) {
        return NextResponse.json({error: error.message})
    }
}