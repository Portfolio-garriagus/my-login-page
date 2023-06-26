import Image from 'next/image'
import BlogPostContainer from "@/components/BlogPostContainer";
import Form from "@/components/form";
import { getPublishedPosts } from "@/lib/getData";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation"


interface PostProps {
  params: {
    slug: string[]
  }
}


export default async function Home() {
  const posts = await getPublishedPosts();

  return (    
<h1>sda</h1>
  );
}