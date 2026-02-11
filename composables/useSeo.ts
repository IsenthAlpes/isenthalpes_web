interface SeoConfig {
  title: string
  description: string
  image?: string
  url?: string
  type?: 'website' | 'article'
}

export const useSeo = (config: SeoConfig) => {
  const runtimeConfig = useRuntimeConfig()
  const route = useRoute()

  const baseUrl = runtimeConfig.public.siteUrl || 'https://isentalpes.fr'
  const fullUrl = config.url || `${baseUrl}${route.fullPath}`
  const image = config.image || `${baseUrl}/og-image.jpg`

  useSeoMeta({
    title: config.title,
    description: config.description,
    ogTitle: config.title,
    ogDescription: config.description,
    ogImage: image,
    ogUrl: fullUrl,
    ogType: config.type || 'website',
    ogLocale: 'fr_FR',
    ogSiteName: "Isenth'Alpes",
    twitterCard: 'summary_large_image',
    twitterTitle: config.title,
    twitterDescription: config.description,
    twitterImage: image,
  })

  useHead({
    link: [
      { rel: 'canonical', href: fullUrl }
    ],
    meta: [
      { name: 'geo.region', content: 'FR-ARA' },
      { name: 'geo.placename', content: 'Grenoble' },
      { name: 'geo.position', content: '45.21083791959252;5.701528391045427' },
      { name: 'ICBM', content: '45.21083791959252;5.701528391045427' }

    ]
  })
}

export const useLocalBusinessSchema = () => {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://isentalpes.com/#business',
          name: "Isenth'Alpes",
          description: 'Plombier Chauffagiste et Climaticien à Grenoble et dans les Alpes. Installation et maintenance de chauffage, climatisation, plomberie pour un service sur mesure.',
          url: 'https://isentalpes.com',
          telephone: '+33 7 60 44 61 16',
          email: 'contact@isentalpes.com',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Grenoble',
            addressRegion: 'Auvergne-Rhône-Alpes',
            addressCountry: 'FR'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 45.188529,
            longitude: 5.724524
          },
          areaServed: [
            { '@type': 'City', name: 'Grenoble' },
            { '@type': 'City', name: 'Annecy' },
            { '@type': 'City', name: 'Chambéry' },
            { '@type': 'City', name: 'Chamonix' },
            { '@type': 'City', name: 'Megève' }
          ],
          serviceType: [
            'Plomberie',
            'Chauffage',
            'Climatisation',
            'Pompe à chaleur',
            'Maintenance'
          ],
          priceRange: '€€€',
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '08:00',
              closes: '18:00'
            }
          ],
          sameAs: [
            'https://www.facebook.com/isentalpes',
            'https://www.linkedin.com/company/isentalpes'
          ]
        })
      }
    ]
  })
}
