import { createClient } from 'next-sanity'

export const client = createClient {
    apiVersion: '2023-05-',
    dataset: 'production'
}