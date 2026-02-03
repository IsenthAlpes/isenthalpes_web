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
      title: "Plombier Chauffagiste Grenoble | Isenth'Alpes - Climatisation & Plomberie",
      meta: [
        { name: 'description', content: "Isenth'Alpes - Plombier chauffagiste climaticien à Grenoble et agglomération. Samy Idelcadi, expert en plomberie, chauffage, climatisation, pompe à chaleur. Installation, dépannage urgent, remplacement chaudière, WC, chauffe-eau. Intervention Échirolles, Meylan, Voiron, Fontaine. Devis gratuit." },
        { name: 'keywords', content: 'plombier Grenoble, chauffagiste Grenoble, climatisation Grenoble, Samy Idelcadi, ISENTH ALPES, isenthalpes, isenth-alpes, plomberie Grenoble, clim Grenoble, pompe à chaleur Grenoble, PAC Grenoble, chaudière gaz Grenoble, plancher chauffant Isère, dépannage chauffage Grenoble, installation climatisation Isère, plombier Échirolles, chauffagiste Meylan, plombier Saint-Martin-d-Hères, climaticien Grenoble, RGE Grenoble, QualiPAC Isère, remplacement WC Grenoble, fuite eau Grenoble, chauffe-eau Grenoble, ballon eau chaude Grenoble, rénovation salle de bain Grenoble, dépannage plomberie Grenoble, urgence plombier Grenoble, plombier Fontaine, chauffagiste Voiron, climatisation Échirolles, plombier Seyssinet, chauffagiste Saint-Égrève, plombier Vizille, climatisation Meylan, chauffagiste Crolles, plombier La Tronche, plombier Corenc, chauffagiste Eybens, plombier Gières, climatisation Sassenage, plombier Domène, chauffagiste Le Pont-de-Claix, plombier Claix, climatisation Seyssins, plombier Vif, chauffagiste Voreppe, plombier Moirans, climatisation Tullins, plombier Saint-Ismier, chauffagiste Bernin, plombier Villard-de-Lans, climatisation Chamrousse, plombier Uriage, chauffagiste Vienne, plombier Bourgoin-Jallieu, installation PAC Isère, entretien chaudière Grenoble, contrat maintenance chauffage' },
        { name: 'author', content: "Samy Idelcadi - Isenth'Alpes" },
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
        { property: 'og:title', content: "Plombier Chauffagiste Grenoble | Isenth'Alpes - Climatisation & Plomberie" },
        { property: 'og:description', content: "Votre plombier chauffagiste à Grenoble. Expert en plomberie, chauffage et climatisation haut de gamme. Certifié RGE. Devis gratuit." },
        { property: 'og:image', content: 'https://isenthalpes.com/og-image.jpg' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:site_name', content: "Isenth'Alpes" },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://isenthalpes.com/' },
        { name: 'twitter:title', content: "Plombier Chauffagiste Grenoble | Isenth'Alpes" },
        { name: 'twitter:description', content: "Votre plombier chauffagiste à Grenoble. Expert en plomberie, chauffage et climatisation haut de gamme. Certifié RGE." },
        { name: 'twitter:image', content: 'https://isenthalpes.com/og-image.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo-seul.svg' },
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
            "name": "Isenth'Alpes",
            "alternateName": "Isenth'Alpes Plomberie Chauffage Climatisation",
            "description": "Plombier chauffagiste à Grenoble. Expert en plomberie, chauffage, climatisation et pompe à chaleur. Installation, dépannage et maintenance.",
            "url": "https://isenthalpes.com",
            "logo": "https://isenthalpes.com/logo-seul.svg",
            "image": "https://isenthalpes.com/og-image.jpg",
            "telephone": "+33760446116",
            "email": "contact@isenthalpes.com",
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
              { "@type": "City", "name": "La Tronche" },
              { "@type": "City", "name": "Corenc" },
              { "@type": "City", "name": "Eybens" },
              { "@type": "City", "name": "Gières" },
              { "@type": "City", "name": "Sassenage" },
              { "@type": "City", "name": "Saint-Égrève" },
              { "@type": "City", "name": "Le Pont-de-Claix" },
              { "@type": "City", "name": "Claix" },
              { "@type": "City", "name": "Seyssins" },
              { "@type": "City", "name": "Domène" },
              { "@type": "City", "name": "Vizille" },
              { "@type": "City", "name": "Villard-de-Lans" },
              { "@type": "City", "name": "Chamrousse" },
              { "@type": "City", "name": "Crolles" },
              { "@type": "City", "name": "Montbonnot-Saint-Martin" },
              { "@type": "City", "name": "Varces-Allières-et-Risset" },
              { "@type": "City", "name": "Tullins" },
              { "@type": "City", "name": "Moirans" },
              { "@type": "City", "name": "Voreppe" },
              { "@type": "City", "name": "Saint-Ismier" },
              { "@type": "City", "name": "Bernin" },
              { "@type": "City", "name": "Vif" },
              { "@type": "City", "name": "Uriage-les-Bains" },
              { "@type": "State", "name": "Isère" },
              { "@type": "State", "name": "Auvergne-Rhône-Alpes" }
            ],
            "serviceType": ["Plomberie", "Chauffage", "Climatisation", "Pompe à chaleur", "Chaudière gaz", "Plancher chauffant", "Dépannage plomberie", "Installation sanitaire", "Remplacement WC", "Remplacement chauffe-eau", "Réparation fuite eau", "Rénovation salle de bain", "Installation climatisation réversible", "Entretien chaudière", "Dépannage chauffage", "Installation ballon eau chaude", "Débouchage canalisation", "Recherche de fuite"],
            "priceRange": "€€€",
            "currenciesAccepted": "EUR",
            "paymentAccepted": "Cash, Credit Card, Bank Transfer",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services Isenth'Alpes",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Installation pompe à chaleur Grenoble",
                    "description": "Installation de pompes à chaleur air/eau et géothermiques à Grenoble et agglomération"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Installation climatisation Grenoble",
                    "description": "Climatisation réversible, gainable et multi-split à Grenoble, Échirolles, Meylan"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Plomberie sanitaire Grenoble",
                    "description": "Création et rénovation de salles de bains, remplacement WC, robinetterie à Grenoble"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Dépannage plomberie urgent Grenoble",
                    "description": "Intervention rapide fuite eau, débouchage, urgence plomberie Grenoble et Isère"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Remplacement chauffe-eau Grenoble",
                    "description": "Installation et remplacement ballon eau chaude, chauffe-eau thermodynamique Grenoble"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Installation chaudière gaz Grenoble",
                    "description": "Pose et remplacement chaudière gaz condensation à Grenoble et agglomération"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Entretien chauffage Grenoble",
                    "description": "Contrat maintenance chaudière, entretien PAC, révision annuelle obligatoire"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Plancher chauffant Grenoble",
                    "description": "Installation plancher chauffant hydraulique et électrique en Isère"
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
            "serviceType": ["Plombier", "Chauffagiste", "Climaticien"],
            "provider": {
              "@type": "LocalBusiness",
              "name": "Isenth'Alpes",
              "alternateName": ["Isenth Alpes", "Isenth-Alpes", "Isenthalpes"],
              "founder": {
                "@type": "Person",
                "name": "Samy Idelcadi",
                "alternateName": "Samy Idecadi"
              }
            },
            "areaServed": [
              { "@type": "City", "name": "Grenoble" },
              { "@type": "City", "name": "Échirolles" },
              { "@type": "City", "name": "Saint-Martin-d'Hères" },
              { "@type": "City", "name": "Fontaine" },
              { "@type": "City", "name": "Meylan" },
              { "@type": "City", "name": "Voiron" },
              { "@type": "City", "name": "Seyssinet-Pariset" },
              { "@type": "City", "name": "Saint-Égrève" },
              { "@type": "City", "name": "Le Pont-de-Claix" },
              { "@type": "City", "name": "Vizille" },
              { "@type": "City", "name": "Crolles" },
              { "@type": "City", "name": "Vienne" },
              { "@type": "City", "name": "Bourgoin-Jallieu" },
              { "@type": "State", "name": "Isère" }
            ],
            "description": "Isenth'Alpes - Plombier chauffagiste climaticien à Grenoble. Samy Idelcadi et son équipe interviennent pour installation, dépannage et maintenance : pompe à chaleur, climatisation, chaudière, plomberie, remplacement WC, fuite d'eau. Intervention rapide en Isère.",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "areaServed": "Grenoble et 40km autour : Échirolles, Meylan, Fontaine, Voiron, Vizille, Crolles"
            }
          })
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Isenth'Alpes",
            "url": "https://isenthalpes.com",
            "description": "Site officiel d'Isenth'Alpes - Plombier chauffagiste à Grenoble",
            "publisher": {
              "@type": "Organization",
              "name": "Isenth'Alpes",
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
