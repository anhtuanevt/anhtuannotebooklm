import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(postsDirectory);
  const posts: Post[] = filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      const excerpt = content.slice(0, 200).replace(/\n/g, " ").trim() + "...";

      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString().split("T")[0],
        excerpt: data.excerpt || excerpt,
        content,
        tags: data.tags || [],
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  const posts = getPosts();
  return posts.find((post) => post.slug === slug);
}

export interface GraphData {
  nodes: { id: string; label: string }[];
  links: { source: string; target: string }[];
}

export function getGraphData(): GraphData {
  const posts = getPosts();
  const nodes: { id: string; label: string }[] = [];
  const links: { source: string; target: string }[] = [];

  const tagToPosts = new Map<string, string[]>();

  posts.forEach((post) => {
    nodes.push({
      id: post.slug,
      label: post.title,
    });

    post.tags.forEach((tag) => {
      if (!tagToPosts.has(tag)) {
        tagToPosts.set(tag, []);
      }
      tagToPosts.get(tag)!.push(post.slug);
    });
  });

  tagToPosts.forEach((postSlugs) => {
    for (let i = 0; i < postSlugs.length; i++) {
      for (let j = i + 1; j < postSlugs.length; j++) {
        links.push({
          source: postSlugs[i],
          target: postSlugs[j],
        });
      }
    }
  });

  return { nodes, links };
}
