import { Post, Prisma } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TfiCommentAlt, TfiHeart, TfiEye } from "react-icons/tfi";
interface Props {
  blogPost: Post;
}

const Card = ({ blogPost }: Props) => {
  return (
    <div className="mb-6 last:mb-0 lg:mb-0 flex flex-col gap-2 group  justify-center items-center">
      <Image
        className="mb-4 inline rounded-md drop-shadow transition group-hover:scale-105"
        src={`${blogPost.imageUrl}.jpg`}
        alt={blogPost.title}
        width={400}
        height={300}
      />
      <h6 className="text-lg text-slate-800 text-2xl font-bold">{blogPost.title}</h6>
      <p className="text-slate-500 text-center">{blogPost.content}</p>
      <h2 className="text-lg text-slate-800 text-2xl font-bold">#{blogPost.description}</h2>
      <h2 className="text-lg text-slate-800 text-2xl font-bold">#{blogPost.description}</h2>
      <div className="footer-article flex w-full justify-center items-center">
        <Link href={`/post/${blogPost.slug}`} className="text-slate-500 hover:text-sky-500 flex items-center justify-center flex-1">
          <TfiHeart className="text-slate-500 hover:text-sky-500 w-6 h-6 flex-shrink-0" />
          <span className="ml-1">58</span>
        </Link>
        <Link href={`/post/${blogPost.slug}`} className="text-slate-500 hover:text-sky-500 flex items-center justify-center flex-1">
          <TfiCommentAlt className="text-slate-500 hover:text-sky-500 w-6 h-6 flex-shrink-0" />
          <span className="ml-1">58</span>
        </Link>
        <Link href={`/post/${blogPost.slug}`} className="text-slate-500 hover:text-sky-500 flex items-center justify-center flex-1">
          <TfiEye className="text-slate-500 hover:text-sky-500 w-6 h-6 flex-shrink-0" />
          <span className="ml-1">58</span>
        </Link>
      </div>
      <Link href={`/post/${blogPost.slug}`} className="text-slate-500 hover:text-sky-500 flex items-center transition-all duration-300 ease-in-out transform hover:scale-105">
        <span className="text-base">See More</span>
      </Link>

    </div>
  );
};

export default Card;