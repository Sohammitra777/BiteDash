import { menu } from "@/app/lib/menu";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(menu);
}
