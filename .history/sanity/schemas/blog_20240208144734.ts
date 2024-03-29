export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title of blog article'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug of your blog article'
      },
      {
        name: 'titleImage',
        type: 'image',
        title: 'Title Image'
      }
    ]
  }