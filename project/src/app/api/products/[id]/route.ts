import { getData } from "@/utils/getData"
import { NextResponse } from "next/server"

export async function GET(req: Request, { params }: { params: { id: string } }): Promise<NextResponse> {
  try {
    const data = getData()
    const item = data.find((item) => item.id === params.id)
    if (!item) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }
    return NextResponse.json(item)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch item details" }, { status: 500 })
  }
}
