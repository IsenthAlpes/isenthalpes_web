<script setup lang="ts">
useSeoMeta({
  title: 'Plombier Grenoble | Dépannage, Rénovation Salle de Bain, Fuite Eau - ISENTH\'ALPES',
  description: 'Plombier à Grenoble et agglomération : dépannage urgent, rénovation salle de bain, remplacement WC, chauffe-eau, fuite d\'eau. Intervention Échirolles, Meylan, Voiron, Fontaine, Vizille. Devis gratuit ISENTH\'ALPES.',
  ogTitle: 'Plombier Grenoble - Dépannage & Rénovation | ISENTH\'ALPES',
  ogDescription: 'Plombier expert à Grenoble : dépannage fuite, remplacement WC, chauffe-eau, rénovation salle de bain. Intervention rapide en Isère.',
  ogType: 'website',
  ogUrl: 'https://isenthalpes.com/plomberie',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Plombier Grenoble - ISENTH\'ALPES',
  twitterDescription: 'Dépannage plomberie et rénovation salle de bain à Grenoble et 40km autour.',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://isenthalpes.com/plomberie' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Plombier",
        "name": "Plombier Grenoble - Isenth'Alpes",
        "description": "Plombier à Grenoble : dépannage fuite eau, remplacement WC, chauffe-eau, débouchage, rénovation salle de bain. Intervention urgente en Isère.",
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
        "areaServed": ["Grenoble", "Échirolles", "Meylan", "Fontaine", "Voiron", "Saint-Martin-d'Hères", "Vizille", "Vif", "Claix", "Seyssins"]
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
const { data: realisationsData } = await useAsyncData('realisations-plomberie', () => 
  queryContent<Realisation>('/realisations/plomberie').find() 
)

const heroConfig = {
  title: 'Plomberie',
  subtitle: "L'art de la plomberie d'exception pour des espaces sanitaires uniques",
  icon: 'plumbing',
  backgroundImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  overlayGradient: 'linear-gradient(135deg, rgba(26, 188, 156, 0.9) 0%, rgba(22, 160, 133, 0.85) 100%)',
  badgeGradient: 'linear-gradient(135deg, #1abc9c, #16a085)',
  priceColor: '#1abc9c'
}

const sectionHeader = {
  label: 'Nos Réalisations',
  title: 'Projets de plomberie réalisés',
  description: 'Découvrez nos créations de salles de bains et installations sanitaires haut de gamme'
}

const ctaConfig = {
  title: 'Vous avez un projet de plomberie ?',
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
            <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM17 14v3a4 4 0 01-4 4h-2M7 10v4M17 10v4"/>
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
  cursor: pointer;
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
