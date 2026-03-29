import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://gutachter-koop.de'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/vorteile`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/team`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/standort`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/iserlohn`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/impressum`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/datenschutz`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]
}
