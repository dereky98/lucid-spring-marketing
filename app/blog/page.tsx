import { BlogCard } from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import { getAllPosts } from "@/lib/blog";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://trypalace.com";
  const title = "Blog | Palace";
  const description = "Latest insights, updates, and articles from Palace";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: `${baseUrl}/api/og?title=${encodeURIComponent("Palace Blog")}`,
          width: 1200,
          height: 630,
          alt: "Palace Blog",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/api/og?title=${encodeURIComponent("Palace Blog")}`],
    },
  };
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0A0C1B] to-black text-white">
      <Navbar navbarTheme="dark" />
      <main className="flex-grow container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white font-playfair font-light">
            Blog
          </h1>

          {posts.length > 0 && (
            <div className="grid gap-8 mt-12">
              {/* All posts in a single column */}
              {posts.map((post, index) => (
                <BlogCard key={post.slug} post={post} featured={index === 0} />
              ))}
            </div>
          )}

          {/* If no posts available */}
          {posts.length === 0 && (
            <div className="text-center py-16 border border-gray-800/30 rounded-xl bg-black/30 backdrop-blur-sm">
              <h2 className="text-2xl font-medium mb-4 text-white">No posts yet!</h2>
              <p className="text-gray-400">Check back soon for new content.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
