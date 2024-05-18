import { getCompanyData } from "@/lib/getCompanyData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const ticker = searchParams.get("ticker");
    if (!ticker) {
        return NextResponse.json(
            { error: "Ticker is required" },
            { status: 400 }
        );
    }
    try {
        const data = await getCompanyData(ticker);
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json(
            { error: "Error fetching data" },
            { status: 500 }
        );
    }
}
