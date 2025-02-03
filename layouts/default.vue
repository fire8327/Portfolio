<template>
    <Header v-if="showHeader"/>
    <main class="grid-container gap-y-16 lg:gap-y-20 py-8 md:py-12 lg:py-16">
        <slot/>
    </main>
    <!-- <Footer/> -->
</template> 

<script setup>
const showHeader = ref(false)
const showFooter = ref(false)

/* подгрузка шапки и подвала после монтирования основного контента */
onMounted(() => {
  setTimeout(() => {
    showHeader.value = true
    showFooter.value = true
  }, 150)
})
</script>