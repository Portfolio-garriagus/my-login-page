import Image from "next/image";
import BlogPostContainer from "@/components/BlogPostContainer";
import Card from "@/components/Card";
import Form from "@/components/form";
import { getPublishedPosts, getAllPosts } from "@/lib/getData";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import SideBar from "@/components/Sidebar";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  const posts = await getPublishedPosts();
  const session = await getServerSession(authOptions);
  return (
    <main className="mt-40 container px-4 mx-auto max-w-6xl -mt-32 sm:px-6 flex flex-wrap justify-between pt-12">
      {posts.map((post) => (
        <Card key={post.id} blogPost={post} />
      ))}
    </main>
  );
}
