import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import gfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

export interface Post {
  slug: string;
  title: string;
  date: string;
  author?: string;
  excerpt: string;
  content: string;
}

const postsDirectory = path.join(process.cwd(), '/content/blog');

// Get all post files from the posts directory
export async function getAllPosts(): Promise<Post[]> {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  // Get markdown files
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map(async (fileName) => {
        // Remove ".md" from file name to get slug
        const slug = fileName.replace(/\.md$/, '');
        
        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
        
        // Process content
        const processedContent = await processMarkdown(matterResult.content);
        
        // Combine the data with the slug
        return {
          slug,
          title: matterResult.data.title,
          date: matterResult.data.date,
          author: matterResult.data.author,
          excerpt: matterResult.data.excerpt || '',
          content: processedContent,
        };
      })
  );
    
  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Get a specific post by slug
export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return undefined;
  }
  
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return undefined;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    
    // Process content
    const processedContent = await debugMarkdown(matterResult.content);
    
    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      author: matterResult.data.author,
      excerpt: matterResult.data.excerpt || '',
      content: processedContent,
    };
  } catch (error) {
    console.error(`Error getting post ${slug}:`, error);
    return undefined;
  }
}

// Process markdown content
async function processMarkdown(content: string): Promise<string> {
  try {
    // Using unified pipeline for better control
    const processedContent = await unified()
      .use(remarkParse)
      .use(gfm) // Add GitHub Flavored Markdown support
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw) // Parse HTML elements in markdown
      .use(rehypeStringify, { allowDangerousHtml: true })
      .process(content);
      
    return processedContent.toString();
  } catch (error) {
    console.error('Error processing markdown:', error);
    return '';
  }
}

// Add a debug function to ensure markdown is being processed
export async function debugMarkdown(content: string): Promise<string> {
  try {
    console.log('Original markdown content (first 300 chars):', content.slice(0, 300));
    
    // Process the content and get the HTML
    const processed = await processMarkdown(content);
    
    // Log the HTML result
    console.log('Processed HTML content (first 300 chars):', processed.slice(0, 300));
    
    // Check if the HTML contains paragraph tags and headers
    const hasParagraphs = processed.includes('<p>');
    const hasHeaders = processed.includes('<h');
    console.log('Contains paragraphs:', hasParagraphs);
    console.log('Contains headers:', hasHeaders);
    
    return processed;
  } catch (error) {
    console.error('Error in debugMarkdown:', error);
    return '';
  }
} 