import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Image from 'next/image'
import { Metadata } from "next"
import { useSession } from "next-auth/react"
import { getUserByEmail } from "@/lib/userData";
import Link from "next/link";
import { notFound } from "next/navigation"

interface UserProps {
  params: {
    email: string[]
    id: string[]
  }
}
export default async function Profile({ params }: UserProps) {
  
  if (!params) {
    notFound()
  }
  return (
    <div className="py-6 prose dark:prose-invert">
      {params && (
        <div className="text-xl mt-0 text-slate-700 dark:text-slate-200">
          <div className="max-w-full flex-row justify-center mb-8 md:mr-2">
            <div className="text-center bg-white shadow-md mb-4">
              <div className="mb-6 last:mb-0 lg:mb-0 flex flex-col gap-2 group  justify-center items-center">                
                <h6 className="text-lg text-slate-800 text-2xl font-bold">{params.email}</h6>
                <div className="footer-article flex w-full justify-center items-center">

                </div>
              </div>
            </div>
            <h1>Este es un posteo completo Slug</h1>
          </div>
          
          <hr className="my-4" />
        </div>
          )},          
          </div>
          )}
