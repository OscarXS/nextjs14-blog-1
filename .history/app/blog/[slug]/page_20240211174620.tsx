import { fullBlog } from "@/app/lib/interface"
import { client, urlFor } from "@/app/lib/sanity"
import { PortableText } from "@portabletext/react"
import Image from "next/image"

async function getData(slug: string) {
    const query = `
    *[_type == 'blog' && slug.current == '${slug}'] {
        "currentSlug": slug.current,
          title,
          content,
          titleImage
      }[0]
    `
    const data = await client.fetch(query)
    return data
}


export default async function BlogArticle({ 
    params, 
}: { 
    params: { slug: string } 
}) {
    const data: fullBlog = await getData(params.slug)
    console.log(data);
    return (
    <div className="mt-8">
        <h1>
            <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">Oscar The Blogger</span>

            <span className='mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl'>
                {data.title}
            </span>
        </h1>

        <Image 
            src={urlFor(data.titleImage).url()} 
            priority 
            width={800} 
            height={800} 
            alt='Blog Image' 
            className="mt-8 rounded-lg border"
        />
        <div className="mt-16">
            {/* <p>{data.content}</p> */} {/* THIS WONT WORK, THE CONTENT DATA NEEDS TO BE SANITISED. RUN @portable */}


            <PortableText value={data.content} />

        </div>
    </div>
  )
}