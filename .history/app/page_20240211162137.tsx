import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { simpleBlogCard } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_creadtedAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
  }
  `
  const data = client.fetch(query)

  return data
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();

  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-5">
      {
        data.map((post, idx) => (
          <Card key={idx}>
            <Image 
              src={urlFor(post.titleImage).url()} 
              alt='blog image' 
              width='500' 
              height='500' 
              className="rounded-t-lg h-[200px] object-cover" />
              <CardContent className="mt-5 flex flex-col space-be">
                <div>
                <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
                <p className="text-sm line-clamp-3 mt-2 text-gray-600 dark:text-gray-400">{post.smallDescription}</p>
                </>
                <Button asChild className="w-full mt-7 self-end">
                  <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
                </Button>
              </CardContent>
          </Card>
        ))
      }
    </div>
  );
}
