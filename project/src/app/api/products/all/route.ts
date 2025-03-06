import fs from 'fs'
import path from 'path';
import { TItem } from "@/types/Item";
import { NextResponse } from "next/server";

// get the data file path
const dataFilePath: string = path.join(process.cwd(), 'data.json');

export async function GET(req: Request): Promise<NextResponse> {
    try {
        const data: TItem[] = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8')) 
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}