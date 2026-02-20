import { ref } from 'vue';

// On crée la variable en DEHORS de la fonction pour qu'elle soit partagée par tout le site
const isOpen = ref(false);

export function useContactModal() {
  
  const openModal = () => {
    isOpen.value = true;
  };

  const closeModal = () => {
    isOpen.value = false;
  };

  return {
    isOpen,
    openModal,
    closeModal
  };
}