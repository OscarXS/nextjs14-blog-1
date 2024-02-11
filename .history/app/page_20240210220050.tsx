import { client } from "./lib/sanity";

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_creadtedAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
  }
  `
  const data = client.fetch(query)
}

export default function Home() {
  return (
    <div>
      <h1>Hello from index page</h1>
    </div>
  );
}
