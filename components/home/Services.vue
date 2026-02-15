<script setup lang="ts">
const services = [
  {
    id: 'chauffage',
    icon: 'heating',
    title: 'Chauffage',
    intro: "L'excellence thermique pour votre habitat",
    description: "Des systèmes de chauffage haut de gamme adaptés à vos besoins. Pompes à chaleur dernière génération, chaudières à condensation premium, planchers chauffants basse température : nos solutions allient performance énergétique et confort absolu.",
    image: '/pictures/service/heating-service.png',
    url: '/chauffage',
    features: [
      'Pompes à chaleur air/eau',
      'Pompe à chaleur Hybride',
      'Chaudières gaz à condensation haute efficacité',
      'Planchers chauffants hydrauliques',
      'Radiateurs design et connectés'
    ]
  },
  {
    id: 'climatisation',
    icon: 'cooling',
    title: 'Climatisation',
    intro: 'La fraîcheur maîtrisée avec élégance',
    description: "Des systèmes de climatisation haut de gamme vous garantissent une température idéale en toute saison. Silencieux, économes et esthétiques, ils s'intègrent parfaitement à votre intérieur tout en respectant l'environnement.",
    image: '/pictures/service/cooling-service.png',
    url: "/climatisation",
    features: [
      'Climatisation réversible gainable',
      'Systèmes multi-split design',
      'Régulation intelligente',
      'Plancher Rafraîchissant'
    ],
    reverse: true
  },
  {
    id: 'plomberie',
    icon: 'plumbing',
    title: 'Plomberie',
    intro: "L'art de la plomberie",
    description: "De la conception à la réalisation, je vous accompagne pour créer des espaces sanitaires d'exception.",
    image: '/pictures/service/plumbing-service.png',
    url:"/plomberie",
    features: [
      'Création de salles de bains',
      "Génération d'eau chaude sanitaire",
      "Adoucisseurs et filtration d'eau",
      'Réseaux encastrés et gainés'
    ]
  },
  {
    id: 'service',
    icon: 'service',
    title: 'Service & Maintenance',
    intro: "L'engagement d'un accompagnement sans faille",
    description: "Je m'assure du bon fonctionnement de vos installations tout au long de l'année. Contrats d'entretien personnalisés, interventions rapides, assistance téléphonique : je suis à vos côtés à chaque instant.",
    image: '/pictures/service/service-service.jpg',
    url:"/service",
    features: [
      'Contrats de maintenance',
      'Dépannage urgent',
      'Diagnostic et optimisation',
    ],
    reverse: true
  }
]
</script>

<template>
  <section id="services" class="services-section">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Nos Expertises</span>
        <h2 class="section-title">Des solutions sur mesure pour votre confort</h2>
        <p class="section-description">
            Vous cherchez un partenaire de confiance pour vos travaux de plomberie, chauffage ou climatisation dans 
            l'agglomération grenobloise ? Chez Isenth'Alpes, nous croyons que le travail bien fait commence par une 
            l'écoute et l'expertise de vos besoins. Installé à Saint-Martin-le-Vinoux, nous intervenons rapidement dans l'agglomération Grenoble, sur un rayon de 40 km : Échirolles, Meylan, Fontaine, Voiron, Saint-Martin-d'Hères, Vizille, Crolles... 
            Mon parcours, débuté par l'apprentissage du geste (CAP, Bac Pro) et abouti par un diplôme d'Ingénieur, 
            est la garantie d'un diagnostic précis et d'une installation durable. 
            De la simple fuite d'eau à l'installation complète de votre système de chauffage, 
            bénéficiez d'un savoir-faire local, pointu et à l'écoute de vos besoins.

        </p>
      </div>
      <router-link
          v-for="service in services"
          :key="service.id"
          :to="service.url"
          target="_blank"
          rel="noopener"
          title="Nos réalisations"
          class="service-block"
          :class="{ reverse: service.reverse }"
        >
          <div class="service-image">
            <img :src="service.image" :alt="service.title" />
            <div class="image-accent"></div>
          </div>
          <div class="service-content">
            <div class="service-icon" :class="service.icon">
              <img v-if="service.icon === 'heating'" src="/pictures/icon/icon-heating.svg" width="80%" height="auto"/>
              <img v-if="service.icon === 'cooling'" src="/pictures/icon/icon-cooling.svg" width="70%" height="auto"/>
              <img v-if="service.icon === 'plumbing'" src="/pictures/icon/icon-plumbing.svg" width="70%" height="auto"/>
              <img v-if="service.icon === 'service'" src="/pictures/icon/icon-service.svg" width="60%" height="auto"/>
            </div>
            <h3>{{ service.title }}</h3>
            <p class="service-intro">{{ service.intro }}</p>
            <p class="service-description">{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="(feature, index) in service.features" :key="index">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  padding: 8rem 2rem;
  background: linear-gradient(180deg, var(--bg-light) 0%, white 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 5rem;
}

.section-label {
  display: inline-block;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-gold));
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--primary-dark);
  margin-bottom: 1rem;
  font-weight: 700;
}

.section-description {
  font-size: 1.15rem;
  color: var(--text-light);
  max-width: 1200px;
  margin: 0 auto;
  line-height: 1.8;
  text-align: center;
}

.service-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 6rem;
}

.service-block.reverse {
  direction: rtl;
}

.service-block.reverse > * {
  direction: ltr;
}

.service-image {
  position: relative;
}

.service-image img {
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

.image-accent {
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 60%;
  height: 60%;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-gold));
  border-radius: 20px;
  z-index: -1;
  opacity: 0.3;
}

.service-block.reverse .image-accent {
  right: auto;
  left: -20px;
}

.service-content {
  padding: 1rem;
}

.service-icon {
  width: 70px;
  height: 70px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
}

.service-icon.heating {
  background: linear-gradient(135deg, #e67e22, #d35400);
}

.service-icon.cooling {
  background: linear-gradient(135deg, #3498db, #2980b9);
}

.service-icon.plumbing {
  background: linear-gradient(135deg, #1abc9c, #16a085);
}

.service-icon.service {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
}

.service-content h3 {
  font-size: 2rem;
  color: var(--primary-dark);
  margin-bottom: 0.8rem;
  font-weight: 700;
}

.service-intro {
  font-size: 1.2rem;
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 1rem;
}

.service-description {
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-features li {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.6rem 0;
  color: var(--text-dark);
  font-weight: 500;
}

.service-features svg {
  color: var(--primary-color);
  flex-shrink: 0;
}

@media (max-width: 968px) {
  .services-section {
    padding: 5rem 1.5rem;
  }

  .section-header {
    margin-bottom: 3rem;
  }

  .section-description {
    font-size: 1rem;
  }

  .service-block,
  .service-block.reverse {
    grid-template-columns: 1fr;
    gap: 2rem;
    direction: ltr;
    margin-bottom: 4rem;
  }

  .service-image img {
    height: 280px;
  }

  .image-accent {
    display: none;
  }

  .service-content h3 {
    font-size: 1.6rem;
  }

  .service-intro {
    font-size: 1.1rem;
  }

  .service-description {
    font-size: 0.95rem;
    line-height: 1.7;
  }
}

@media (max-width: 480px) {
  .services-section {
    padding: 3rem 1rem;
  }

  .section-label {
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
  }

  .section-title {
    font-size: 1.6rem;
  }

  .section-description {
    font-size: 0.9rem;
  }

  .service-block {
    margin-bottom: 3rem;
  }

  .service-image img {
    height: 220px;
    border-radius: 15px;
  }

  .service-icon {
    width: 55px;
    height: 55px;
    border-radius: 12px;
    margin-bottom: 1rem;
  }

  .service-icon svg {
    width: 26px;
    height: 26px;
  }

  .service-content h3 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }

  .service-intro {
    font-size: 1rem;
  }

  .service-description {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .service-features li {
    font-size: 0.9rem;
    padding: 0.5rem 0;
  }

  .service-features svg {
    width: 18px;
    height: 18px;
  }
}
</style>
