<script setup lang="ts">
interface Partner {
  id: number
  name: string
  description: string
  category: string
}

interface Qualification {
  id: number
  name: string
  icon: string 
  description: string
  bgColor: string
  textColor: string
}

const { data: partnersData } = await useAsyncData('partners', () =>
  queryContent('/partenaires').findOne()
)

const { data: qualificationsData } = await useAsyncData('qualifications', () =>
  queryContent('/qualifications').findOne()
)

const partners = computed<Partner[]>(() => partnersData.value?.partners || [])
const qualifications = computed<Qualification[]>(() => qualificationsData.value?.qualifications || [])
</script>

<template>
  <section id="partenaires" class="partners-section">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Nos Partenaires</span>
        <h2 class="section-title">Des marques d'excellence</h2>
        <p class="section-description">
          Nous collaborons avec les plus grandes marques du secteur pour vous garantir
          des équipements fiables, performants et durables.
        </p>
      </div>

      <div class="partners-grid">
        <div
          v-for="partner in partners"
          :key="partner.id"
          class="partner-card"
        >
          <div class="partner-logo">
            <span class="partner-initial">{{ partner.name.charAt(0) }}</span>
          </div>
          <h3>{{ partner.name }}</h3>
          <p>{{ partner.description }}</p>
          <span class="partner-category">{{ partner.category }}</span>
        </div>
      </div>

      <!-- Section Qualifications -->
      <div class="qualifications-section">
        <h3 class="qualifications-title">Nos Qualifications</h3>
        <p class="qualifications-subtitle">
          Des certifications qui garantissent notre expertise et notre engagement qualité
        </p>
        <div class="qualifications-grid">
          <div
            v-for="qualification in qualifications"
            :key="qualification.id"
            class="qualification-card"
          >
            <div class="qualification-logo" :style="{ background: qualification.bgColor }">
              <img class="qualification-icon" :style="{ color: qualification.textColor }" :src="qualification.icon" width="150%"  height="auto">
                
              </img>
            </div>
            <h4>{{ qualification.name }}</h4>
            <p>{{ qualification.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partners-section {
  padding: 8rem 2rem;
  background: linear-gradient(180deg, white 0%, var(--bg-warm) 100%);
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
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
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-bottom: 5rem;
}

.partner-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.partner-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  border-color: var(--primary-color);
}

.partner-logo {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, var(--bg-light), var(--bg-warm));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.partner-card:hover .partner-logo {
  background: linear-gradient(135deg, var(--primary-color), var(--accent-gold));
}

.partner-initial {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  transition: color 0.3s ease;
}

.partner-card:hover .partner-initial {
  color: white;
}

.partner-card h3 {
  font-size: 1.3rem;
  color: var(--primary-dark);
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.partner-card p {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.partner-category {
  display: inline-block;
  background: var(--bg-light);
  color: var(--primary-color);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

/* Section Qualifications */
.qualifications-section {
  background: var(--bg-light);
  border-radius: 24px;
  padding: 3rem;
  text-align: center;
}

.qualifications-title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: var(--primary-dark);
  margin-bottom: 0.8rem;
  font-weight: 700;
}

.qualifications-subtitle {
  color: var(--text-light);
  font-size: 1rem;
  margin-bottom: 2.5rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.qualifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.qualification-card {
  background: white;
  border-radius: 16px;
  padding: 1.5rem 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.qualification-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.qualification-logo {
  width: 70px;
  height: 70px;
  margin: 0 auto 0rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.qualification-card:hover .qualification-logo {
  transform: scale(1.1);
}

.qualification-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px; /* Ajustez selon votre design */
  height: 65px;
  border-radius: 50%; /* Si vous voulez un rond */
}

.qualification-card h4 {
  font-size: 1.1rem;
  color: var(--primary-dark);
  margin-bottom: 0.4rem;
  font-weight: 600;
}

.qualification-card p {
  font-size: 0.8rem;
  color: var(--text-light);
  line-height: 1.4;
}

@media (max-width: 768px) {
  .partners-section {
    padding: 4rem 1rem;
  }

  .section-header {
    margin-bottom: 2.5rem;
  }

  .section-description {
    font-size: 1rem;
  }

  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 3rem;
  }

  .partner-card {
    padding: 1.5rem 1rem;
  }

  .partner-logo {
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;
  }

  .partner-initial {
    font-size: 1.5rem;
  }

  .partner-card h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .partner-card p {
    font-size: 0.85rem;
    margin-bottom: 0.8rem;
  }

  .partner-category {
    font-size: 0.75rem;
    padding: 0.3rem 0.8rem;
  }

  .qualifications-section {
    padding: 2rem 1rem;
    border-radius: 16px;
  }

  .qualifications-title {
    font-size: 1.4rem;
  }

  .qualifications-subtitle {
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }

  .qualifications-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .qualification-card {
    padding: 1rem 0.5rem;
  }

  .qualification-logo {
    width: 50px;
    height: 50px;
  }

  .qualification-text {
    font-size: 0.85rem;
  }

  .qualification-card h4 {
    font-size: 0.85rem;
  }

  .qualification-card p {
    font-size: 0.7rem;
  }
}

@media (max-width: 480px) {
  .partners-section {
    padding: 3rem 1rem;
  }

  .section-label {
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
  }

  .section-title {
    font-size: 1.6rem;
  }

  .partners-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .partner-card {
    padding: 1.2rem;
  }

  .partner-logo {
    width: 55px;
    height: 55px;
    margin-bottom: 1rem;
  }

  .partner-initial {
    font-size: 1.4rem;
  }

  .partner-card h3 {
    font-size: 1rem;
    margin-bottom: 0.4rem;
  }

  .partner-card p {
    font-size: 0.85rem;
    margin-bottom: 0.6rem;
  }

  .partner-category {
    font-size: 0.75rem;
  }

  .qualifications-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }

  .qualification-card {
    padding: 1rem 0.5rem;
  }

  .qualification-logo {
    width: 45px;
    height: 45px;
    margin-bottom: 0.8rem;
  }

  .qualification-text {
    font-size: 0.8rem;
  }

  .qualification-card h4 {
    font-size: 0.8rem;
    margin-bottom: 0.2rem;
  }

  .qualification-card p {
    font-size: 0.65rem;
  }
}
</style>
