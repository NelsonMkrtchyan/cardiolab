import { type NextRequest, NextResponse } from "next/server";
import { getAllGalleries } from "~/lib/sanity/queries";
import { type LocaleT } from "~/types";
import {
  type SanityGallery,
  type APIGalleryResponse,
  getLocalizedGalleryValue,
  getLocalizedGalleryDescription,
} from "~/types/gallery";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const locale = (searchParams.get("locale") ?? "en") as LocaleT;

  try {
    const galleries = await getAllGalleries();

    if (!galleries) {
      return NextResponse.json(
        { error: "No galleries data found" },
        { status: 404 },
      );
    }

    // Localize the response to only include requested locale content
    const localizedGalleries: APIGalleryResponse[] = galleries.map(
      (gallery: SanityGallery) => ({
        id: gallery.id,
        slug:
          typeof gallery.slug === "string"
            ? gallery.slug
            : gallery.slug.current,
        title: getLocalizedGalleryValue(gallery.title, locale),
        description: getLocalizedGalleryDescription(
          gallery.description,
          locale,
        ),
        type: gallery.type,
        images: gallery.images?.map((img) => ({
          url: img.url,
          caption: img.caption
            ? getLocalizedGalleryValue(img.caption, locale)
            : undefined,
        })),
        videos: gallery.videos?.map((video) => ({
          url: video.url,
          title: getLocalizedGalleryValue(video.title, locale),
          thumbnail: video.thumbnail,
        })),
        coverImage: gallery.coverImage
          ? {
              url: gallery.coverImage,
            }
          : undefined,
        order: gallery.order,
        publishedAt: gallery.publishedAt,
      }),
    );

    return NextResponse.json(localizedGalleries, {
      headers: {
        "Cache-Control": "public, max-age=300", // 5 minute cache
      },
    });
  } catch (error) {
    console.error("Error fetching galleries:", error);
    return NextResponse.json(
      { error: "Failed to fetch galleries data" },
      { status: 500 },
    );
  }
}
