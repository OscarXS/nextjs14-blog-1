import { createClient } from 'next-sanity'
import imageBuilder from '@sanity/image-url'

export const client = createClient({
    apiVersion: '2023-05-03',
    dataset: 'production',
    projectId: 'lz6wg4y7',
    useCdn: false,
});

const builder = imageBuilder(client)