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

    // Localize the response to only include requested locale content
    const localizedStaff = staff.map((member) => ({
      id: member.id,
      name: member.name[locale] || member.name.en || member.name.am,
      image: member.image,
      role: member.role[locale] || member.role.en || member.role.am,
      category: member.category,
      visibility: member.visibility,
      personalInfo: member.personalInfo
        ? {
            flags: member.personalInfo.flags,
            // Include only requested locale's content
            [locale]: member.personalInfo[locale],
          }
        : undefined,
    }));

    return NextResponse.json(localizedStaff, {
      headers: {
        "Cache-Control": "public, max-age=300", // 5 minute cache
      },
    });
  } catch (error) {
    console.error("Error fetching staff:", error);
    return NextResponse.json(
      { error: "Failed to fetch staff data" },
      { status: 500 },
    );
  }
}
