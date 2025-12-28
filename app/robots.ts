import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://あなたのサイトURL.vercel.app/sitemap.xml', // ここも書き換え
  }
}