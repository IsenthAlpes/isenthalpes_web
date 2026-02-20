<script setup lang="ts">
useSeoMeta({
  title: 'Climatisation Grenoble | Installation Clim Réversible, Gainable, Multi-Split - ISENTH\'ALPES',
  description: 'Installation climatisation à Grenoble et agglomération : clim réversible, gainable, multi-split, VRV. Climaticien Échirolles, Meylan, Voiron, Fontaine. Entretien et dépannage clim urgent. Devis gratuit ISENTH\'ALPES.',
  ogTitle: 'Climatisation Grenoble - Installation & Entretien Clim | ISENTH\'ALPES',
  ogDescription: 'Climaticien à Grenoble : installation clim réversible, gainable, multi-split. Dépannage et entretien en Isère.',
  ogType: 'website',
  ogUrl: 'https://isenthalpes.com/climatisation',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Climatisation Grenoble - ISENTH\'ALPES',
  twitterDescription: 'Installation et entretien climatisation à Grenoble et 40km autour. Clim réversible, gainable.',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://isenthalpes.com/climatisation' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Climaticien",
        "name": "Climatisation Grenoble - Isenth'Alpes",
        "description": "Installation et entretien climatisation à Grenoble : clim réversible, gainable, multi-split, VRV. Dépannage rapide en Isère.",
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
        "areaServed": ["Grenoble", "Échirolles", "Meylan", "Fontaine", "Voiron", "Saint-Martin-d'Hères", "Sassenage", "Seyssinet-Pariset", "Corenc", "La Tronche"]
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

const realisations = computed<Realisation[]>(() => realisationsData.value || [])
// Ajoutez <Realisation> juste après queryContent
const { data: realisationsData } = await useAsyncData('realisations-climatisation', () => 
  queryContent<Realisation>('/realisations/climatisation').find() 
)
const heroConfig = {
  title: 'Climatisation',
  subtitle: 'Systèmes de climatisation haute performance pour votre confort été comme hiver',
  icon: 'cooling',
  backgroundImage: 'https://images.unsplash.com/photo-1631545806609-4d567fa0e41c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  overlayGradient: 'linear-gradient(135deg, rgba(52, 152, 219, 0.9) 0%, rgba(41, 128, 185, 0.85) 100%)',
  badgeGradient: 'linear-gradient(135deg, #3498db, #2980b9)',
  priceColor: '#3498db'
}

const sectionHeader = {
  label: 'Nos Réalisations',
  title: 'Projets de climatisation réalisés',
  description: 'Découvrez nos installations de systèmes de climatisation haut de gamme'
}

const ctaConfig = {
  title: 'Vous avez un projet de climatisation ?',
  description: 'Contactez-nous pour un devis personnalisé et gratuit',
  buttonText: 'Demander un devis'
}

// 1. On importe la télécommande
import { useContactModal } from '@/composables/useContactModal';

// 2. On récupère la fonction pour ouvrir
const { openModal } = useContactModal();
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
            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"/>
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
          <span class="section-label" :style="{ background: heroConfig.badgeGradient }">{{ sectionHeader.label }}</span>
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

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>{{ ctaConfig.title }}</h2>
        <p>{{ ctaConfig.description }}</p>
        <NuxtLink @click="openModal" class="cta-button">
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
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .realisations-section {
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
