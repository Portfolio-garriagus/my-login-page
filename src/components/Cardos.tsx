
import Image from "next/image"
import Link from "next/link"
import { Post, Prisma } from "@prisma/client";
import { format } from 'date-fns'
interface Props {
  item: Post;
}

function Card({ item  }: Props) {

  return (
    <div className="max-w-full bg-white dark:bg-gray-800" >

      {
        item.imageUrl !== null && item.imageUrl !== undefined ? <Link href={`/post/${item.id}`}>
          <Image className="rounded-lg p-3" width={1000} height={324} src={item.imageUrl} alt={item.slug || item.title} />
        </Link> : " "
      }

      <div className="p-3">

        <div className="flex mb-3">
          {
            item.published !== null && item.published !== undefined ? <p className="text-sm text-gray-500 dark:text-gray-400">
              {format(new Date(item.updatedAt), 'dd MMMM, yyyy')}
            </p> : ""
          }
          <p className="text-sm text-gray-500 dark:text-gray-400 mx-1"> , </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {item.viewCount} min read
          </p>
        </div>

        <Link href={`/post/${item.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.title}
          </h5>
        </Link>

      </div>

    </div>

  )

}



export default Card
