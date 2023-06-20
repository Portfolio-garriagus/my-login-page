// pages/api/post/index.ts

import { getSession } from 'next-auth/react';
import {prisma} from '@/lib/prisma';
import { Post } from '@prisma/client';
import { NextResponse } from "next/server";
// POST /api/post
// Required fields in body: title
// Optional fields in body: content


export async function GET(request: Request) {
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts);
}


export async function POST(request: Request) {
  try {
    const json = await request.json();

    const user = await prisma.user.create({
      data: json,
    });

    return new NextResponse(JSON.stringify(user), { 
     status: 201, 
     headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      return new NextResponse("Post with email already exists", {
        status: 409,
      });
    }
    return new NextResponse(error.message, { status: 500 });
  }
}

