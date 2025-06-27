<template>
    <Follow/>
    <div class="flex flex-col gap-6 lg:gap-8 items-center text-center uppercase">
        <p class="text-2xl md:text-3xl lg:text-4xl">Обо мне</p>
        <p class="text-lg text-[#131313]/60 dark:text-[#f9f9f9]/60">Меня зовут Леонид. Я Веб-разработчик. Специализируюсь на фронтенде и использую tailwindcss для вёрстки сайтов. Изучаю vue и nuxt. Надеюсь, вы <span class="text-transparent !bg-clip-text mainAnimateText">горите своим делом</span> также, как я.</p>
        <div class="grid grid-cols-2 items-center w-full md:w-1/2 lg:w-1/3">
            <img src="/images/about/1.webp" alt="about-1" class="-rotate-6 w-full">
            <img src="/images/about/2.webp" alt="about-2" class="rotate-6 w-full">
        </div>
    </div>
    <CoopOptions/>
    <NewProject/>
</template>

<script setup>

</script>