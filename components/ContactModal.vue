<script setup>
import { useContactModal } from '@/composables/useContactModal';

// On récupère notre "télécommande"
const { isOpen, closeModal } = useContactModal();

const phoneNumber = "+33760446116"; 
const emailAddress = "contact@isenthalpes.com";
</script>

<template>
  <Transition name="fade">
    <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <button class="close-btn" @click="closeModal">&times;</button>
        
        <h3>Contactez Isenth'Alpes</h3>
        <p class="modal-text">Pour les urgences, privilégiez l'appel.</p>

        <div class="contact-actions">
            <a :href="`tel:${phoneNumber}`" class="action-btn btn-call">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              Appeler le 07 60 44 61 16
            </a>
            <a :href="`mailto:${emailAddress}?subject=Demande de devis - Isenth'Alpes`" class="action-btn btn-mail">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              Envoyer un e-mail
            </a>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Ajout POP UP */
/* Le fond sombre qui recouvre tout le site */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6); /* Noir transparent */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* S'assure d'être au-dessus de tout le reste */
  backdrop-filter: blur(3px); /* Effet de flou moderne sur le fond */
}

/* La boîte blanche de la pop-up */
.modal-content {
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  position: relative;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

/* Le bouton de fermeture (Croix) */
.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #666;
}

.close-btn:hover {
  color: #000;
}

h3 {
  margin-top: 0;
  color: #333;
}

.modal-text {
  font-size: 0.9em;
  color: #666;
  margin-bottom: 25px;
}

/* Conteneur des boutons d'action */
.contact-actions {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* Style commun aux deux boutons */
.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.2s, opacity 0.2s;
}

.action-btn:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

/* Couleurs spécifiques (à adapter à votre charte Isenth'Alpes) */
.btn-call {
  background-color: #25D366; /* Vert style WhatsApp/Appel */
  color: white;
}

.btn-mail {
  background-color: #0056b3; /* Bleu professionnel */
  color: white;
}
/* FIN Ajout POP UP */

/* --- ANIMATION DE LA MODAL (Transition Vue) --- */

/* État actif de l'animation (durée et type) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

/* État de départ (quand ça s'ouvre) et état de fin (quand ça se ferme) */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Animation bonus pour la boîte blanche : elle "glisse" légèrement vers le haut */
.fade-enter-active .modal-content,
.fade-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.fade-enter-from .modal-content,
.fade-leave-to .modal-content {
  transform: translateY(20px); /* Part de 20px plus bas */
}
</style>