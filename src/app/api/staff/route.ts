import { type NextRequest, NextResponse } from "next/server";
import { staff } from "~/constants/staff";
import { type LocaleT } from "~/types";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  console.log("searchParams --->", searchParams);
  const locale = (searchParams.get("locale") ?? "en") as LocaleT;

  // Get the localized staff data
  const localizedStaff = staff[locale];

  if (!localizedStaff) {
    return NextResponse.json(
      { error: "Locale not supported" },
      { status: 400 },
    );
  }

  return NextResponse.json(localizedStaff);
}
