import { client } from "@/app/lib/sanity"

async function getData() {
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
  return (
    <div>{params.slug}</div>
  )
}

export default BlogArticle