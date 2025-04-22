import { type NextRequest, NextResponse } from "next/server";
import { staff } from "~/constants/staff";
import { type LocaleT } from "~/types";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const locale = (searchParams.get("locale") ?? "en") as LocaleT;

  if (!staff) {
    return NextResponse.json(
      { error: "Locale not supported" },
      { status: 400 },
    );
  }

  return NextResponse.json(staff);
}
