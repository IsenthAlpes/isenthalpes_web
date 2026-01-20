<script setup lang="ts">
interface Realisation {
  title: string
  description: string
  type: string
  duration: string
  price: string
  images: string[]
  features: string[]
}

interface Props {
  realisation: Realisation
  badgeGradient?: string
  priceColor?: string
}

withDefaults(defineProps<Props>(), {
  badgeGradient: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
  priceColor: 'var(--primary-color)'
})
</script>

<template>
  <div class="realisation-card">
    <div class="realisation-image">
      <SharedImageGallery :images="realisation.images" :alt="realisation.title" />
      <span class="realisation-badge" :style="{ background: badgeGradient }">{{ realisation.type }}</span>
    </div>
    <div class="realisation-content">
      <h3>{{ realisation.title }}</h3>
      <p class="realisation-description">{{ realisation.description }}</p>
      <div class="realisation-details">
        <div class="detail">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
          <span>{{ realisation.duration }}</span>
        </div>
        <div class="detail price" :style="{ color: priceColor }">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" :style="{ color: priceColor }">
            <line x1="12" y1="1" x2="12" y2="23"/>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
          <span>{{ realisation.price }}</span>
        </div>
      </div>
      <ul class="realisation-features">
        <li v-for="(feature, index) in realisation.features" :key="index">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          {{ feature }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.realisation-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
}

.realisation-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
}

.realisation-image {
  position: relative;
  height: 100%;
  min-height: 300px;
}

.realisation-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 10;
}

.realisation-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

.realisation-content h3 {
  font-size: 1.3rem;
  color: var(--primary-dark);
  margin-bottom: 0.8rem;
  line-height: 1.3;
}

.realisation-description {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.2rem;
}

.realisation-details {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.2rem;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid var(--bg-light);
}

.detail {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-light);
  font-size: 0.9rem;
}

.detail svg {
  color: var(--primary-color);
}

.detail.price {
  font-weight: 600;
}

.realisation-features {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
}

.realisation-features li {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 0;
  font-size: 0.9rem;
  color: var(--text-dark);
}

.realisation-features svg {
  color: #27ae60;
  flex-shrink: 0;
}

@media (max-width: 968px) {
  .realisation-card {
    grid-template-columns: 1fr;
  }

  .realisation-image {
    min-height: 250px;
  }
}

@media (max-width: 480px) {
  .realisation-image {
    min-height: 200px;
  }

  .realisation-badge {
    font-size: 0.75rem;
    padding: 0.3rem 0.8rem;
  }

  .realisation-content {
    padding: 1.2rem;
  }

  .realisation-content h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .realisation-description {
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }

  .realisation-details {
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }

  .detail {
    font-size: 0.85rem;
  }

  .realisation-features li {
    font-size: 0.85rem;
    padding: 0.3rem 0;
  }
}
</style>
