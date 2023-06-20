import BlogPostContainer from "@/components/BlogPostContainer";
import React from "react";
import { getPostFromId } from "@/lib/getData";
import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image";
import Link from "next/link";
import { TfiCommentAlt, TfiHeart, TfiEye } from "react-icons/tfi";

interface PostProps {
  params: {
    id: string[]
    slug: string[]
    title: string[]
  }
}
async function getPostFromParams(params: PostProps["params"]) {
  const id = params?.id?.join("/")
  const post = getPostFromId(id)
  if (!post) {
    null
  }
  return post
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params }: PostProps) {
  const post = await getPostFromParams(params);
  return (
    <BlogPostContainer blogPosts={post} />
  )
}