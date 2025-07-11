import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type Params = {
  slug: string;
};

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  // Properly await the params
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found | Palace Blog",
      description: "The requested blog post could not be found",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://trypalace.com";
  const ogImage = {
    url: `${baseUrl}/api/og?title=${encodeURIComponent(post.title)}`,
    width: 1200,
    height: 630,
    alt: post.title,
  };

  return {
    title: `${post.title} | Palace Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  // Properly await the params
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Debug: Log the first part of the HTML content
  console.log("POST CONTENT (first 500 chars):", post.content.slice(0, 500));

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://trypalace.com";

  // Create JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: post.author
      ? {
          "@type": "Person",
          name: post.author,
        }
      : undefined,
    datePublished: post.date,
    image: `${baseUrl}/api/og?title=${encodeURIComponent(post.title)}`,
    publisher: {
      "@type": "Organization",
      name: "Palace",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/palace_logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${resolvedParams.slug}`,
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0A0C1B] to-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar navbarTheme="dark" />
      <main className="flex-grow container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-neutral-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all posts
          </Link>

          <article>
            <div className="mb-8">
              <div className="text-neutral-400 mb-2">{post.date}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">{post.title}</h1>
              {post.author && <div className="text-neutral-300">By {post.author}</div>}
            </div>

            <div
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
