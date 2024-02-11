async function getData () {
  const query = `
  *[_type == 'blog'] | order(_creadtedAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
  }
  `
}

export default function Home() {
  return (
    <div>
      <h1>Hello from index page</h1>
    </div>
  );
}
