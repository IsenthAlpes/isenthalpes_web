<script setup lang="ts">
useSeoMeta({
  title: 'Entretien Chaudière & Dépannage Chauffage Grenoble | Contrat Maintenance - ISENTH\'ALPES',
  description: 'Entretien chaudière et dépannage chauffage à Grenoble : contrat maintenance PAC, chaudière gaz, climatisation. Intervention urgente 7j/7 Échirolles, Meylan, Voiron, Fontaine. Diagnostic gratuit ISENTH\'ALPES.',
  ogTitle: 'Entretien & Dépannage Chauffage Grenoble | ISENTH\'ALPES',
  ogDescription: 'Contrat entretien chaudière, PAC, climatisation à Grenoble. Dépannage urgent 7j/7 en Isère.',
  ogType: 'website',
  ogUrl: 'https://isenthalpes.com/service',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Entretien Chaudière Grenoble - ISENTH\'ALPES',
  twitterDescription: 'Contrat maintenance et dépannage chauffage à Grenoble et 40km autour.',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://isenthalpes.com/service' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Maintenance chauffage",
        "name": "Entretien & Dépannage Chauffage Grenoble - Isenth'Alpes",
        "description": "Contrat entretien chaudière gaz, PAC, climatisation à Grenoble. Dépannage urgent 7j/7, diagnostic, mise en service. Intervention rapide en Isère.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Isenth'Alpes",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Grenoble",
            "addressRegion": "Isère",
            "postalCode": "38000"
          }
        },
        "areaServed": ["Grenoble", "Échirolles", "Meylan", "Fontaine", "Voiron", "Saint-Martin-d'Hères", "Crolles", "Voreppe", "Moirans", "Tullins"]
      })
    }
  ]
})

interface Realisation {
  title: string
  description: string
  type: string
  duration: string
  price: string
  images: string[]
  features: string[]
}

interface Contract {
  id: number
  name: string
  price: string
  period: string
  featured: boolean
  badgeText: string
  headerClass: string
  features: string[]
}

const { data: realisationsData } = await useAsyncData('realisations-service', () =>
  queryContent('/realisations/service').find()
)

const { data: contractsData } = await useAsyncData('contracts', () =>
  queryContent('/contrats').findOne()
)

const realisations = computed<Realisation[]>(() => realisationsData.value || [])
const contracts = computed<Contract[]>(() => contractsData.value?.contracts || [])

const heroConfig = {
  title: 'Service & Maintenance',
  subtitle: "Accompagnement et maintenance de vos installations tout au long de l'année",
  icon: 'service',
  backgroundImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  overlayGradient: 'linear-gradient(135deg, rgba(199, 109, 57, 0.9) 0%, rgba(139, 69, 19, 0.85) 100%)',
  badgeGradient: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
  priceColor: 'var(--primary-color)'
}

const sectionHeader = {
  label: 'Nos Interventions',
  title: 'Exemples de prestations de service',
  description: 'Découvrez nos interventions de maintenance, dépannage et optimisation'
}

const contractsHeader = {
  label: 'Nos Contrats',
  title: 'Formules de maintenance',
  description: 'Choisissez la formule adaptée à vos besoins'
}

const ctaConfig = {
  title: "Besoin d'une intervention ou d'un contrat ?",
  description: 'Contactez-nous pour un diagnostic gratuit',
  buttonText: 'Nous contacter'
}
</script>

<template>
  <div class="expertise-page">
    <!-- Hero Section -->
    <section class="expertise-hero" :style="{ backgroundImage: `url(${heroConfig.backgroundImage})` }">
      <div class="hero-overlay" :style="{ background: heroConfig.overlayGradient }"></div>
      <div class="hero-content">
        <NuxtLink to="/" class="back-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Retour à l'accueil
        </NuxtLink>
        <div class="hero-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="48" height="48">
            <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
          </svg>
        </div>
        <h1>{{ heroConfig.title }}</h1>
        <p class="hero-subtitle">{{ heroConfig.subtitle }}</p>
      </div>
    </section>

    <!-- Réalisations Section -->
    <section class="realisations-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">{{ sectionHeader.label }}</span>
          <h2>{{ sectionHeader.title }}</h2>
          <p>{{ sectionHeader.description }}</p>
        </div>

        <div class="realisations-grid">
          <SharedRealisationCard
            v-for="realisation in realisations"
            :key="realisation.title"
            :realisation="realisation"
            :badge-gradient="heroConfig.badgeGradient"
            :price-color="heroConfig.priceColor"
          />
        </div>
      </div>
    </section>

    <!-- Contracts Section
    <section class="contracts-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">{{ contractsHeader.label }}</span>
          <h2>{{ contractsHeader.title }}</h2>
          <p>{{ contractsHeader.description }}</p>
        </div>

        <div class="contracts-grid">
          <div
            v-for="contract in contracts"
            :key="contract.id"
            class="contract-card"
            :class="{ featured: contract.featured }"
          >
            <div v-if="contract.badgeText" class="contract-badge">{{ contract.badgeText }}</div>
            <div class="contract-header" :class="contract.headerClass">
              <h3>{{ contract.name }}</h3>
              <div class="contract-price">
                <span class="price">{{ contract.price }}</span>
                <span class="period">{{ contract.period }}</span>
              </div>
            </div>
            <ul class="contract-features">
              <li v-for="(feature, index) in contract.features" :key="index">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section> -->

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>{{ ctaConfig.title }}</h2>
        <p>{{ ctaConfig.description }}</p>
        <NuxtLink to="/#contact" class="cta-button">
          {{ ctaConfig.buttonText }}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.expertise-page {
  min-height: 100vh;
}

.expertise-hero {
  position: relative;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 2rem 4rem;
  background-size: cover;
  background-position: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  color: white;
  max-width: 800px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
}

.back-link:hover {
  color: white;
  transform: translateX(-5px);
}

.hero-icon {
  width: 90px;
  height: 90px;
  margin: 0 auto 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.expertise-hero h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.95;
  max-width: 600px;
  margin: 0 auto;
}

.realisations-section {
  padding: 5rem 2rem;
  background: var(--bg-light);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-label {
  display: inline-block;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.section-header h2 {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: var(--primary-dark);
  margin-bottom: 1rem;
}

.section-header p {
  color: var(--text-light);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.realisations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
}

/* Contracts Section */
.contracts-section {
  padding: 5rem 2rem;
  background: white;
}

.contracts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.contract-card {
  background: var(--bg-light);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
}

.contract-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.contract-card.featured {
  background: white;
  border: 2px solid var(--primary-color);
  transform: scale(1.05);
}

.contract-card.featured:hover {
  transform: scale(1.05) translateY(-5px);
}

.contract-badge {
  position: absolute;
  top: -1px;
  right: 20px;
  background: var(--primary-color);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 0 0 10px 10px;
  font-size: 0.8rem;
  font-weight: 600;
}

.contract-header {
  padding: 2rem;
  text-align: center;
  color: white;
}

.contract-header.essentiel {
  background: linear-gradient(135deg, #95a5a6, #7f8c8d);
}

.contract-header.confort {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
}

.contract-header.premium {
  background: linear-gradient(135deg, #2c3e50, #34495e);
}

.contract-header h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
}

.contract-price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.3rem;
}

.contract-price .price {
  font-size: 2.5rem;
  font-weight: 700;
}

.contract-price .period {
  font-size: 1rem;
  opacity: 0.9;
}

.contract-features {
  list-style: none;
  padding: 2rem;
  margin: 0;
}

.contract-features li {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.7rem 0;
  color: var(--text-dark);
  font-size: 0.95rem;
}

.contract-features svg {
  color: #27ae60;
  flex-shrink: 0;
}

/* CTA Section */
.cta-section {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, var(--primary-dark), var(--secondary-color));
  text-align: center;
  color: white;
}

.cta-section h2 {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  margin-bottom: 1rem;
  color: white;
}

.cta-section p {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: white;
  color: var(--primary-dark);
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.cta-button svg {
  transition: transform 0.3s ease;
}

.cta-button:hover svg {
  transform: translateX(5px);
}

@media (max-width: 968px) {
  .realisations-grid {
    grid-template-columns: 1fr;
  }

  .section-header {
    margin-bottom: 3rem;
  }

  .section-header h2 {
    font-size: 1.8rem;
  }

  .contract-card.featured {
    transform: none;
  }

  .contract-card.featured:hover {
    transform: translateY(-5px);
  }
}

@media (max-width: 480px) {
  .expertise-hero {
    padding: 90px 1rem 2rem;
    min-height: 40vh;
  }

  .back-link {
    font-size: 0.85rem;
    margin-bottom: 1.5rem;
  }

  .hero-icon {
    width: 70px;
    height: 70px;
  }

  .hero-icon svg {
    width: 36px;
    height: 36px;
  }

  .expertise-hero h1 {
    font-size: 1.8rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .realisations-section,
  .contracts-section {
    padding: 2.5rem 1rem;
  }

  .section-label {
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
  }

  .section-header h2 {
    font-size: 1.5rem;
  }

  .section-header p {
    font-size: 0.9rem;
  }

  .contracts-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .contract-header {
    padding: 1.5rem;
  }

  .contract-header h3 {
    font-size: 1.3rem;
  }

  .contract-price .price {
    font-size: 2rem;
  }

  .contract-features {
    padding: 1.5rem;
  }

  .contract-features li {
    font-size: 0.9rem;
    padding: 0.6rem 0;
  }

  .cta-section {
    padding: 3rem 1rem;
  }

  .cta-section h2 {
    font-size: 1.4rem;
  }

  .cta-section p {
    font-size: 0.95rem;
  }

  .cta-button {
    padding: 0.9rem 2rem;
    font-size: 1rem;
    width: 100%;
    justify-content: center;
  }
}
</style>
