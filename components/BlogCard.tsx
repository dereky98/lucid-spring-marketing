import { Post } from "@/lib/blog";
import Link from "next/link";

interface BlogCardProps {
  post: Post;
  featured?: boolean;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <article className="p-6 bg-white/5 rounded-lg border border-neutral-800 transition-all hover:border-primary/50 w-full hover:bg-white/10">
        <div className="flex flex-col gap-2">
          <div className="text-sm text-neutral-400">{post.date}</div>
          <h2 className="text-2xl font-semibold">
            <span className="hover:text-primary transition-colors">{post.title}</span>
          </h2>
          <p className="text-neutral-300 mt-2">{post.excerpt}</p>
          {post.author && <div className="text-sm text-neutral-400 mt-3">By {post.author}</div>}
          <div className="mt-4">
            <span className="text-primary hover:underline">Read more</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
