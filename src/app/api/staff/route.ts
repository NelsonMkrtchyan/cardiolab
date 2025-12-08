import { type NextRequest, NextResponse } from "next/server";
import { getAllStaff } from "~/lib/sanity/queries";
import { type LocaleT } from "~/types";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const locale = (searchParams.get("locale") ?? "en") as LocaleT;

  try {
    const staff = await getAllStaff();

    if (!staff) {
      return NextResponse.json(
        { error: "No staff data found" },
        { status: 404 },
      );
    }

    return NextResponse.json(staff);
  } catch (error) {
    console.error("Error fetching staff:", error);
    return NextResponse.json(
      { error: "Failed to fetch staff data" },
      { status: 500 },
    );
  }
}
