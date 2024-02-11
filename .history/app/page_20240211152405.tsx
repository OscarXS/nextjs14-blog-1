import { Card } from "@/components/ui/card";
import { simpleBlogCard } from "./lib/interface";
import { client } from "./lib/sanity";

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4">
      {
        data.map((post, idx) => (
          <Card key={idx}>

          </Card>
        ))
      }
    </div>
  );
}
