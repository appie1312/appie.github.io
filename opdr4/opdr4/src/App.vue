<script setup>
import card from './components/card.vue'
import navbar from './components/navbar.vue'
</script>

<template>
    <navbar />
    <div class="container col-6 mb-5 mt-5 text-center">
        <h2 class="mb-1">Our Marketing Services</h2>
        <p>
            consequuntur tempora? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <card />

    <form action="" class="text-start px-5 mb-5">
        <div class="mb-3">
            <label class="form-label">name</label>
            <input class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">email</label>
            <input class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">subject</label>
            <input class="form-control">
        </div>

        <div class="mb-3">
            <label class="form-label">name</label>
            <textarea class="form-control" rows="3"></textarea>
        </div>
        <button class="btn btn-primary">Submit</button>
    </form>
</template>

<style scoped></style>
