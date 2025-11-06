<script setup>
import { ref, onMounted } from 'vue'

const TitleIntro = ref([])

onMounted(async () => {
    const res = await fetch('http://jemx.nl/FTED/ExOp/')
    const data = await res.json()
    TitleIntro.value = data.service
})
</script>

<template>
    <div class="">
                <h2>{{ TitleIntro.title }}</h2>
                <p>{{ TitleIntro.intro }}</p>
    </div>
</template>

<style scoped></style>