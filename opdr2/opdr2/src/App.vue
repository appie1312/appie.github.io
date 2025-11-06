<script setup>
import Navbar from './components/navbar.vue'
import card from './components/card.vue'
import cardinfo from './components/card-info.vue'
import icon2 from '@/assets/icon2.svg'
import icon3 from '@/assets/icon3.svg'
import icon4 from '@/assets/icon4.svg'
import check from '@/assets/check.png'
import { loadConfigFromFile } from 'vite'
</script>

<template>
  <navbar />
  <section class="hero-background">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-12 d-flex flex-column col-height-hero ">
          <h1 class="mt-auto">Mobile App Development</h1>
        </div>
        <div class="col-md-6 ">
          <div class="row justify-content-center d-flex">
            <card text="strategy" :icon="icon2" />
            <card text="ux design" :icon="icon2" />

          </div>
          <div class="row justify-content-center d-flex">
            <card text="development" :icon="icon3" />
            <card text="testing" :icon="icon4" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="d-flex flex-column justify-content-center align-items-center mt-5">
    <h2>we create super-awesome desgins</h2>
    <p class="text-center">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      <br> Atque doloremque placeat culp aliquid harum,quibus
    </p>
    <div class="row justify-content-between"">
      <cardinfo :check=" check" title="Amazing design"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit.Inventore unde nihil repudiandae aliquid quasi commodi ? Dolore alias aspernatur cupiditate" />
    <cardinfo :check="check" title="Amazing design"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit.Inventore unde nihil repudiandae aliquid quasi commodi ? Dolore alias aspernatur cupiditate" />
    </div>

    <div class="row justify-content-between"">
      <cardinfo :check="check" title="Amazing design"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit.Inventore unde nihil repudiandae aliquid quasi commodi ? Dolore alias aspernatur cupiditate" />
    <cardinfo :check="check" title="Amazing design"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit.Inventore unde nihil repudiandae aliquid quasi commodi ? Dolore alias aspernatur cupiditate" />
    </div>
  </section>
</template>



<style scoped>
.hero-background {
  background-image: url('@/assets/jtjtjtjuy-min.jpg');
  height: 80vh;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
