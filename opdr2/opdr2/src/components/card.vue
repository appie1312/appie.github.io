<template>
  <div class="col-3 card-custom d-flex flex-column justify-content-center align-items-center">
    <div class="iconContainer">
      <img :src="icon" alt="Icoon" class="icons">
    </div>
    <h3>{{ text }}</h3>
  </div>
</template>

<script setup>
defineProps({
    icon: String,
  text: String
})
</script>

<style scoped>
.card-custom {
    background-color: #F2F2F2;
    border-radius: 26px;
    height: 10rem;
    width: 15rem;
    margin: 15px;
    padding-top: 2rem;
    padding-bottom: 2rem;
}

.icons {
width: 3rem;
height: 3rem;
}

.iconContainer {
  background-color: #E5E5E5;
  border-radius: 20rem;
  padding: 2rem;
  
}
</style>