import { Metadata } from "next";
import React from "react";

import { getAllPosts, getPublishedPosts } from "@/lib/getData";



interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps["params"]) {
  const posts = await getAllPosts();
  const slug = params?.slug?.join("/")
  const post = posts.find((post) => post.slug === slug)
  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

const AboutPage = () => {
  return <div className="p-10">Este es mi blog.</div>;
};

export default AboutPage;