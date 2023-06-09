"use client";

import { getSession } from 'next-auth/react';
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { prisma } from '../lib/prisma'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { Post } from '@prisma/client'
import { updatePost } from "@/lib/getData";
import Router from 'next/router';


// Array interface
interface FormData {
  blogPost: Post;
}

// Load notes from getServerSideProps server side rendering
const Form: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [slug, setSlug] = useState('');

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, content, slug };
      console.log("este es el body" + body)
      await fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      await Router.push('/drafts');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <form onSubmit={submitData}>
        <h1>Título</h1>
        <input autoFocus onChange={(e) => setTitle(e.target.value)} placeholder="Title" type="text" value={title} />
        <textarea cols={50} onChange={(e) => setContent(e.target.value)} placeholder="Content" rows={8} value={content} />
        <textarea cols={50} onChange={(e) => setSlug(e.target.value)} placeholder="Slug" rows={8} value={slug} />

        <input disabled={!content || !title} type="submit" value="Create" />        
        <a className="back" href="#" onClick={() => Router.push('/')}>
          or Cancel
        </a>
      </form>

      <style jsx>{`
      .page {
        background: var(--geist-background);
        padding: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      input[type='text'],
      textarea {
        width: 100%;
        padding: 0.5rem;
        margin: 0.5rem 0;
        border-radius: 0.25rem;
        border: 0.125rem solid rgba(0, 0, 0, 0.2);
      }

      input[type='submit'] {
        background: #ececec;
        border: 0;
        padding: 1rem 2rem;
      }

      .back {
        margin-left: 1rem;
      }
    `}</style>
    </>

  )
}

export default Form


