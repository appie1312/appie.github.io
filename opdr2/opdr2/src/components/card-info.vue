    <template>
        <div class="card col-6">
            <div class="row">
                <div class="checkbox col-3 m-2">
                    <img :src="check" alt="check icon">
                </div>

                <div class="d-flex flex-column col-9 justify-content-center">
                    <h3>{{ title }}</h3>
                    <p>{{ text }}</p>
                </div>
            </div>
        </div>
    </template>


<script setup>
defineProps({
    check: String,
    title: String,
    text: String
})
</script>

<style scoped>
 .checkbox{
    background-color: #1847B8;
    border-radius: 20rem;
    width:4rem;
    height: 4rem;
 }

img {
    margin-top: 1rem;
    margin-left: 4px;
    width: 2rem;
    height: 2rem;
}
</style>