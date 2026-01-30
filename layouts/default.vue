<script setup lang="ts">
</script>

<template>
  <div id="app">
    <LayoutHeader />
    <main>
      <slot />
    </main>
    <LayoutFooter />
    <SharedAnnouncementPopup />
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  width: 100%;
}

main {
  flex: 1;
}
</style>
