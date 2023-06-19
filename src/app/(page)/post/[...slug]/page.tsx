import BlogPostContainer from "@/components/BlogPostContainer";
import React from "react";
import { getPostFromSlug } from "@/lib/getData";
import { Metadata } from "next"
import { notFound } from "next/navigation"

interface PostProps {
  params: {
    slug: string[]
    title: string[]
  }
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = getPostFromSlug(slug)
  if (!post) {
    null
  }
  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const slug = params?.slug?.join("/")
  const post = getPostFromSlug(slug)
  console.log(post)
  if (!post) {
    return {}
  }
  return {
    title: slug,
    description: slug,
  }
}
{/*
export async function generateStaticParams(): Promise<PostProps["params"][]> {
  const post = getPostFromSlug(params)
  return post((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}
*/}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromSlug("java");
  if (!post) {
    notFound()
  }
  return (
    <article className="py-6 prose dark:prose-invert">    
      {post && (
        <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
          <BlogPostContainer blogPosts={post} />
        </p>
      )}
      <hr className="my-4" />
    </article>
  )
}

