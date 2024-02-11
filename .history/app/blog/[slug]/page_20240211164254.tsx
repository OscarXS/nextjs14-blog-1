import { client } from "@/app/lib/sanity"

async function getData(slug: string) {
    const query = `
    *[_type == 'blog' && slug.current = '${slug}'] {
        "currentSlug"L slug.current,
          title,
          content,
          titleImage
      }[0]
    `
    const data = await client.fetch(query)
    return data
}


const BlogArticle = ({ params }: { params: { slug: string } }) => {
    const data = await getData(pa)
  return (
    <div>{params.slug}</div>
  )
}

export default BlogArticle