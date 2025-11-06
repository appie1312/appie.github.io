<script setup>
import { ref, onMounted } from 'vue'

const cards = ref([])

onMounted(async () => {
  const res = await fetch('http://jemx.nl/FTED/ExOp/')
  const data = await res.json()
  cards.value = data.service.services
})
</script>

<template>
  <div class="row card-list px-5">
    <div v-for="card in cards" :key="card.id" class="col-md-6 col-lg-4 col-sm-12 mb-4">
      <div class="card rounded-3">
        <h2>{{ card.title }}</h2>
        <p>{{ card.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>