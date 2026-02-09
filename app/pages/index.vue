<template>
     <div class="flex flex-col justify-center min-h-screen bg-cover bg-[url(/images/hero/main.webp)] w-full col-span-full bg-center relative bg-fixed">
        <div class="wrapper flex flex-col gap-8 md:gap-12 lg:gap-16 z-[1] text-[#f9f9f9] text-2xl md:text-3xl lg:text-4xl">
            <p>Привет!</p>
            <p class="text-5xl md:text-6xl lg:text-7xl">Я — Веб-разработчик</p>
            <p>Перевоплощаю идеи в код.</p>
        </div>
        <div class="absolute bg-[#131313] bg-opacity-30 inset-0 z-0"></div>
        <Scroll/>
    </div>
    <div class="flex flex-col items-center text-center gap-6 lg:gap-8 uppercase" id="text">
        <p class="text-2xl md:text-3xl lg:text-4xl">Краткая информация обо мне</p>
        <p class="text-lg text-[#131313]/60 dark:text-[#f9f9f9]/60 max-w-2xl">Меня зовут Леонид. Я Веб-разработчик. Специализируюсь на фронтенде и использую tailwindcss для вёрстки сайтов. Изучаю vue и nuxt. Надеюсь, вы <span class="text-transparent !bg-clip-text animate-text">горите своим делом</span> также, как я.</p>
        <div class="grid grid-cols-2 items-center w-full md:w-1/2 lg:w-1/3">
            <img src="/images/about/1.webp" alt="" class="-rotate-6 w-full"/>
            <img src="/images/about/2.webp" alt="" class="rotate-6 w-full"/>
        </div>
    </div>
    <CoopOptions/>
    <NewProject/>
</template>

<script setup>

</script>