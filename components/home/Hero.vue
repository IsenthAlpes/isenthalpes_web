<script setup lang="ts">

const expertises = [
  {
    id: 1,
    icon: 'heating',
    title: 'Chauffage',
    description: 'Solutions de chauffage pour un confort optimal',
    link: '/chauffage'
  },
  {
    id: 2,
    icon: 'cooling',
    title: 'Climatisation',
    description: 'Systèmes de climatisation haute performance',
    link: '/climatisation'
  },
  {
    id: 3,
    icon: 'plumbing',
    title: 'Plomberie',
    description: 'Installations sanitaires',
    link: '/plomberie'
  },
  {
    id: 4,
    icon: 'service',
    title: 'Service',
    description: 'Maintenance et dépannage',
    link: '/service'
  }
]
</script>

<template>
  <section id="accueil" class="hero">
    <!-- <SharedAnnouncementPopup /> -->
    <div class="hero-background"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h2 class="hero-title">
        Isenth'Alpes <span class="legal-suffix">SARL</span>
      </h2>
      <p class="hero-subtitle">
        La maîtrise des fluides, le confort au sommet
      </p>
      <div id="expertises" class="expertise-cards">
        <NuxtLink
          v-for="(expertise, index) in expertises"
          :key="expertise.id"
          :to="expertise.link"
          class="expertise-card"
          :style="{ animationDelay: `${index * 0.15}s` }"
        >
          <div class="card-icon">
            <!-- Heating Icon -->
            <img v-if="expertise.icon === 'heating'"src="/pictures/icon/icon-heating.svg" width="80%"  height="auto"/>
            <!-- Cooling Icon -->
            <img v-if="expertise.icon === 'cooling'" src="/pictures/icon/icon-cooling.svg" width="70%"  height="auto"/>
            <!-- Plumbing Icon -->
            <img v-if="expertise.icon === 'plumbing'" src="/pictures/icon/icon-plumbing.svg" width="60%"  height="auto"/>
            <!-- Service Icon -->
            <img v-if="expertise.icon === 'service'" src="/pictures/icon/icon-service.svg" width="60%"  height="auto"/>
          </div>
          <h3>{{ expertise.title }}</h3>
          <p>{{ expertise.description }}</p>
          <span class="card-link">
            Voir nos réalisations
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </NuxtLink>
      </div>

      <a href="#services" class="cta-button">
        Découvrir nos services
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M7 17l9.2-9.2M17 17V7H7"/>
        </svg>
      </a>
      <!-- <div class="hero-content">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2810.8268632440117!2d5.698957276595767!3d45.21083895030732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478af393ae45a637%3A0x1d7a1b7ad7ba0c6f!2s2%20Rue%20Rosa%20Lee%20Parks%2C%2038950%20Saint-Martin-le-Vinoux!5e0!3m2!1sfr!2sfr!4v1769610852624!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div> -->
      <div class="hero-content-2">
        <!-- <iframe 
          src="https://www.google.com/maps/d/edit?mid=1xjpLCTcR9Ua3UK-76v-2z1RxhnnA298&usp=sharing" 
           width="100%" 
           height="450" 
           style="border:0;" 
           class="map-frame"
           loading="lazy"
        ></iframe> -->
        <iframe src="https://www.google.com/maps/d/embed?mid=1xjpLCTcR9Ua3UK-76v-2z1RxhnnA298&ehbc=2E312F&noprof=1"
          width="100%" 
           height="450" 
           style="border:0;" 
           class="map-frame"
           loading="lazy">
        </iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 2rem 4rem;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /*background:
    url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'); */
  background-image: url('/pictures/fond-image.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(45, 35, 30, 0.92) 0%,
    rgba(80, 50, 35, 0.88) 50%,
    rgba(120, 70, 45, 0.85) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 1200px;
  width: 100%;
  padding: 1rem;
}

.hero-content-2 {
  width: 100%;
  max-width: 1000px; /* Ou la largeur que vous souhaitez */
  margin: 0 auto;
  padding: 1rem;
}

.map-frame {
  width: 100%; /* Prend toute la largeur du conteneur */
  display: block;
  border-radius: 8px; /* Un petit arrondi pour faire plus moderne */
  box-shadow: 0 4px 6px rgba(0,0,0,0.1); /* Une petite ombre pour le relief */
}


.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 2px 4px 20px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 0.8s ease-out;
}

.legal-suffix {
  /* C'est ici que la magie opère : */
  font-size: 0.4em; /* Le SARL fera toujours 40% de la taille du titre */
  
  font-weight: normal; 
  opacity: 0.85;
  text-transform: uppercase;
  margin-left: 10px; /* Un peu d'espace entre Isenth'Alpes et SARL */
  vertical-align: middle; 
  
  /* Pas besoin de répéter color, animation ou text-shadow, le h2 les transmet */
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 4rem;
  font-weight: 300;
  letter-spacing: 1px;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.expertise-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.expertise-card {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeInUp 0.8s ease-out both;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
}

.expertise-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.18);
  border-color: var(--accent-gold);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-gold));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: transform 0.3s ease;
}

.expertise-card:hover .card-icon {
  transform: scale(1.1) rotate(5deg);
}

.expertise-card h3 {
  color: white;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
}

.expertise-card p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent-gold);
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: auto;
}

.expertise-card:hover .card-link {
  color: white;
}

.card-link svg {
  transition: transform 0.3s ease;
}

.expertise-card:hover .card-link svg {
  transform: translateX(5px);
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  text-decoration: none;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  animation: fadeInUp 0.8s ease-out 0.6s both;
  
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(199, 109, 57, 0.5);
  color: white;
}

.cta-button svg {
  transition: transform 0.3s ease;
}

.cta-button:hover svg {
  transform: translate(3px, -3px);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 100px 1rem 3rem;
    min-height: auto;
  }

  .hero-title {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }

  .hero-subtitle {
    font-size: 1rem;
    margin-bottom: 2.5rem;
  }

  .expertise-cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .expertise-card {
    padding: 1.5rem 1rem;
  }

  .expertise-card h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .expertise-card p {
    font-size: 0.85rem;
    line-height: 1.5;
    margin-bottom: 0.8rem;
  }

  .card-icon {
    width: 55px;
    height: 55px;
    margin-bottom: 1rem;
  }

  .card-icon svg {
    width: 28px;
    height: 28px;
  }

  .card-link {
    font-size: 0.8rem;
  }

  .cta-button {
    padding: 0.9rem 2rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 90px 1rem 2rem;
  }

  .hero-title {
    font-size: 1.8rem;
  }

  .hero-subtitle {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }

  .expertise-cards {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .expertise-card {
    padding: 1.5rem;
  }

  .expertise-card h3 {
    font-size: 1.2rem;
  }

  .expertise-card p {
    font-size: 0.9rem;
  }

  .card-icon {
    width: 60px;
    height: 60px;
  }

  .cta-button {
    width: 100%;
    justify-content: center;
  }
}
</style>
