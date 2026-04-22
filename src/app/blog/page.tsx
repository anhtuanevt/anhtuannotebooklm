import { getPosts, getGraphData } from "@/lib/posts";
import BlogPageClient from "./BlogPageClient";

export default function BlogPage() {
  const posts = getPosts();
  const graphData = getGraphData();

  return <BlogPageClient posts={posts} graphData={graphData} />;
}
