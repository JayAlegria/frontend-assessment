import { TItem } from "@/types/Item";
import { getData } from "@/utils/getData";
import { NextResponse } from "next/server";

export async function GET(req: Request): Promise<NextResponse> {
    try {
        const data: TItem[] = getData()
        const favoriteItems: TItem[] = data.filter(item => item.favorite)
        return NextResponse.json(favoriteItems)
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}