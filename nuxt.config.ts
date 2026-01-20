// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Mode SSG (Static Site Generation)
  ssr: true,

  // Modules
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/sitemap'
  ],

  // Configuration Nuxt Content
  content: {
    documentDriven: false
  },

  // Configuration Sitemap
  site: {
    url: 'https://isenthalpes.com'
  },

  sitemap: {
    strictNuxtContentPaths: true
  },

  // Configuration Image
  image: {
    domains: ['images.unsplash.com'],
    format: ['webp', 'avif']
  },

  // Meta globales SEO
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "Plombier Chauffagiste Grenoble | ISENTH'ALPES - Climatisation & Plomberie",
      meta: [
        { name: 'description', content: "ISENTH'ALPES - Plombier chauffagiste à Grenoble dirigé par Samy Idelcadi. Expert en plomberie, chauffage, climatisation et pompe à chaleur haut de gamme. Installation, dépannage et maintenance en Isère. Devis gratuit." },
        { name: 'keywords', content: 'plombier Grenoble, chauffagiste Grenoble, Samy Idelcadi, ISENTH ALPES, plomberie Grenoble, climatisation Grenoble, pompe à chaleur Grenoble, PAC Grenoble, chaudière gaz Grenoble, plancher chauffant Isère, dépannage chauffage Grenoble, installation climatisation Isère, plombier Échirolles, chauffagiste Meylan, plombier Saint-Martin-d-Hères, RGE Grenoble, QualiPAC Isère' },
        { name: 'author', content: "Samy Idelcadi - ISENTH'ALPES" },
        { name: 'theme-color', content: '#c76d39' },
        { name: 'robots', content: 'index, follow' },
        // Geo tags
        { name: 'geo.region', content: 'FR-ARA' },
        { name: 'geo.placename', content: 'Grenoble' },
        { name: 'geo.position', content: '45.188529;5.724524' },
        { name: 'ICBM', content: '45.188529, 5.724524' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://isenthalpes.com/' },
        { property: 'og:title', content: "Plombier Chauffagiste Grenoble | ISENTH'ALPES - Climatisation & Plomberie" },
        { property: 'og:description', content: "Votre plombier chauffagiste à Grenoble. Expert en plomberie, chauffage et climatisation haut de gamme. Certifié RGE. Devis gratuit." },
        { property: 'og:image', content: 'https://isenthalpes.com/og-image.jpg' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:site_name', content: "ISENTH'ALPES" },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://isenthalpes.com/' },
        { name: 'twitter:title', content: "Plombier Chauffagiste Grenoble | ISENTH'ALPES" },
        { name: 'twitter:description', content: "Votre plombier chauffagiste à Grenoble. Expert en plomberie, chauffage et climatisation haut de gamme. Certifié RGE." },
        { name: 'twitter:image', content: 'https://isenthalpes.com/og-image.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
        { rel: 'canonical', href: 'https://isenthalpes.com/' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://isenthalpes.com",
            "name": "ISENTH'ALPES",
            "alternateName": "Isenth'Alpes Plomberie Chauffage",
            "description": "Plombier chauffagiste à Grenoble. Expert en plomberie, chauffage, climatisation et pompe à chaleur. Installation, dépannage et maintenance.",
            "url": "https://isenthalpes.com",
            "logo": "https://isenthalpes.com/logo.svg",
            "image": "https://isenthalpes.com/og-image.jpg",
            "telephone": "+33400000000",
            "email": "contact@isenthalpes.fr",
            "founder": {
              "@type": "Person",
              "name": "Samy Idelcadi",
              "jobTitle": "Dirigeant"
            },
            "employee": {
              "@type": "Person",
              "name": "Samy Idelcadi",
              "jobTitle": "Gérant"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "",
              "addressLocality": "Grenoble",
              "addressRegion": "Isère",
              "postalCode": "38000",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 45.188529,
              "longitude": 5.724524
            },
            "areaServed": [
              { "@type": "City", "name": "Grenoble" },
              { "@type": "City", "name": "Échirolles" },
              { "@type": "City", "name": "Saint-Martin-d'Hères" },
              { "@type": "City", "name": "Fontaine" },
              { "@type": "City", "name": "Meylan" },
              { "@type": "City", "name": "Seyssinet-Pariset" },
              { "@type": "City", "name": "Voiron" },
              { "@type": "City", "name": "Vienne" },
              { "@type": "City", "name": "Bourgoin-Jallieu" },
              { "@type": "State", "name": "Isère" },
              { "@type": "State", "name": "Rhône-Alpes" }
            ],
            "serviceType": ["Plomberie", "Chauffage", "Climatisation", "Pompe à chaleur", "Chaudière gaz", "Plancher chauffant", "Dépannage plomberie", "Installation sanitaire"],
            "priceRange": "€€€",
            "currenciesAccepted": "EUR",
            "paymentAccepted": "Cash, Credit Card, Bank Transfer",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services ISENTH'ALPES",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Installation pompe à chaleur",
                    "description": "Installation de pompes à chaleur air/eau et géothermiques"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Installation climatisation",
                    "description": "Climatisation réversible, gainable et multi-split"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Plomberie sanitaire",
                    "description": "Création et rénovation de salles de bains"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Contrat de maintenance",
                    "description": "Entretien annuel et dépannage prioritaire"
                  }
                }
              ]
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "47",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Plombier Chauffagiste",
            "provider": {
              "@type": "LocalBusiness",
              "name": "ISENTH'ALPES",
              "founder": {
                "@type": "Person",
                "name": "Samy Idelcadi"
              }
            },
            "areaServed": [
              { "@type": "City", "name": "Grenoble" },
              { "@type": "City", "name": "Échirolles" },
              { "@type": "City", "name": "Saint-Martin-d'Hères" },
              { "@type": "State", "name": "Isère" }
            ],
            "description": "Services de plomberie, chauffage et climatisation à Grenoble et en Isère. Installation, maintenance et dépannage par Samy Idelcadi et son équipe.",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "areaServed": "Grenoble et agglomération"
            }
          })
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "ISENTH'ALPES",
            "url": "https://isenthalpes.com",
            "description": "Site officiel d'ISENTH'ALPES - Plombier chauffagiste à Grenoble",
            "publisher": {
              "@type": "Organization",
              "name": "ISENTH'ALPES",
              "founder": {
                "@type": "Person",
                "name": "Samy Idelcadi"
              }
            }
          })
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": "https://isenthalpes.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Chauffage",
                "item": "https://isenthalpes.com/chauffage"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Climatisation",
                "item": "https://isenthalpes.com/climatisation"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Plomberie",
                "item": "https://isenthalpes.com/plomberie"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Service & Maintenance",
                "item": "https://isenthalpes.com/service"
              }
            ]
          })
        }
      ]
    }
  },

  // CSS global
  css: [
    '~/assets/css/main.css'
  ],

  // Variables d'environnement
  runtimeConfig: {
    public: {
      siteUrl: 'https://isenthalpes.com'
    }
  },

  // Generation statique
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/chauffage', '/climatisation', '/plomberie', '/service']
    }
  },

  // Compatibilité
  compatibilityDate: '2024-11-01',

  // DevTools
  devtools: { enabled: true }
})
