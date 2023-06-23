import { Post, Prisma } from "@prisma/client";
import { GetStaticPaths } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TfiCommentAlt, TfiHeart, TfiEye } from "react-icons/tfi";

interface Props {
  blogPost: Post;
}

const Card = ({ blogPost }: Props) => {

  return (
    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
        <div className="flex flex-wrap no-underline hover:no-underline">
          <Image src="https://source.unsplash.com/collection/3106804/800x600" className="h-64 w-full rounded-t pb-6"
            alt={''}
            layout='responsive'
            quality={100}
            width="100"
            height="100" />
          <p className="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
          <h6 className="text-lg text-slate-800 text-2xl font-bold">{blogPost.title}</h6>
          <div className="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
          <p className="text-gray-800 font-serif text-base px-6 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ip Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
          </p>
          <Link href={`/post/${blogPost.slug}`} className="text-slate-500 hover:text-sky-500 flex items-center justify-center flex-1">
            <span className="text-base">See More</span>
          </Link>
          <div className="flex items-center justify-between">
            <Image className="w-8 h-8 rounded-full mr-4 avatar"
              data-tippy-content="Author Name"
              src="http://i.pravatar.cc/300"
              alt="Avatar of Author"
              width={10}
              height={10}
            />

            <p className="flex justify-end text-gray-600 text-xs md:text-sm">1 MIN READ</p>
          </div>
          <h1 className="text-slate-500 text-center">{blogPost.content}</h1>
          <h2 className="text-lg text-slate-800 text-2xl font-bold">#{blogPost.description}</h2>
        </div>
      </div>
      <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">

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
      </div>



    </div>
  );
};

export default Card;