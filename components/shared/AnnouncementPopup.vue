<script setup lang="ts">
const route = useRoute()
const isVisible = ref(false)

const showPopup = () => {
  isVisible.value = true
  if (import.meta.client) {
    document.body.style.overflow = 'hidden'
  }
}

const closePopup = () => {
  isVisible.value = false
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
}

const handleBackdropClick = (event: MouseEvent) => {
  if ((event.target as HTMLElement).classList.contains('popup-backdrop')) {
    closePopup()
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isVisible.value) {
    closePopup()
  }
}

// Afficher le popup à chaque changement de route
//watch(() => route.fullPath, () => {
//  showPopup()
//})

onMounted(() => {
  if (import.meta.client) {
    showPopup()
    window.addEventListener('keydown', handleKeydown)
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <ClientOnly>
    <Teleport to="body">
      <Transition name="popup">
        <div
          v-if="isVisible"
          class="popup-backdrop"
          @click="handleBackdropClick"
        >
          <div class="popup-container">
          <button
            class="popup-close"
            @click="closePopup"
            aria-label="Fermer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div class="popup-content">
            <div class="popup-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>

            <h2 class="popup-title">Nouvelle aventure</h2>

            <p class="popup-message">
              <strong>Isenth'Alpes</strong> vous propose ses services
              <span class="popup-date">à partir du 2 avril 2025</span>
            </p>

            <p class="popup-subtitle">
              Votre nouveau partenaire de confiance pour tous vos projets de chauffage,
              climatisation et plomberie.
            </p>

            <button class="popup-button" @click="closePopup">
              Découvrir nos services
            </button>
          </div>
        </div>
      </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<style scoped>
.popup-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(45, 35, 30, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
}

.popup-container {
  position: relative;
  background: linear-gradient(145deg, var(--cream) 0%, var(--bg-warm) 100%);
  border-radius: 16px;
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(199, 109, 57, 0.1);
  max-width: 480px;
  width: 100%;
  overflow: hidden;
}

.popup-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-gold), var(--primary-color));
}

.popup-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: var(--text-light);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.popup-close:hover {
  background: rgba(199, 109, 57, 0.1);
  color: var(--primary-color);
  transform: rotate(90deg);
}

.popup-content {
  padding: 3rem 2.5rem 2.5rem;
  text-align: center;
}

.popup-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  margin-bottom: 1.5rem;
  color: white;
  box-shadow: 0 10px 30px rgba(199, 109, 57, 0.3);
}

.popup-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--primary-dark);
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.popup-message {
  font-size: 1.125rem;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
  line-height: 1.6;
}

.popup-date {
  display: inline-block;
  color: var(--primary-color);
  font-weight: 600;
}

.popup-subtitle {
  font-size: 0.95rem;
  color: var(--text-light);
  margin-bottom: 2rem;
  line-height: 1.7;
}

.popup-button {
  display: inline-block;
  padding: 0.875rem 2rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(199, 109, 57, 0.3);
}

.popup-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(199, 109, 57, 0.4);
}

.popup-button:active {
  transform: translateY(0);
}

/* Transitions */
.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.3s ease;
}

.popup-enter-active .popup-container,
.popup-leave-active .popup-container {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.popup-enter-from,
.popup-leave-to {
  opacity: 0;
}

.popup-enter-from .popup-container,
.popup-leave-to .popup-container {
  transform: scale(0.95) translateY(20px);
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .popup-container {
    max-width: 100%;
    margin: 0 0.5rem;
    border-radius: 12px;
  }

  .popup-content {
    padding: 2.5rem 1.5rem 2rem;
  }

  .popup-icon {
    width: 64px;
    height: 64px;
  }

  .popup-icon svg {
    width: 32px;
    height: 32px;
  }

  .popup-title {
    font-size: 1.5rem;
  }

  .popup-message {
    font-size: 1rem;
  }

  .popup-subtitle {
    font-size: 0.875rem;
  }

  .popup-button {
    width: 100%;
    padding: 1rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .popup-backdrop {
    padding: 0.75rem;
  }

  .popup-content {
    padding: 2rem 1.25rem 1.75rem;
  }

  .popup-title {
    font-size: 1.35rem;
  }
}
</style>
