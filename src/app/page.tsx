import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log('posts', posts);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        <span className="text-[hsl(280,100%,70%)]">Cardiolab Landing Page</span>
      </h1>
      <div>
        {posts.map((post, index) => {
          return(
            <div key={`${post.id}-${index}`}>
              <span>{post.name}</span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
