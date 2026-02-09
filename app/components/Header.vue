<template>
    <header class="grid-container w-full">
        <div class="w-full flex items-center justify-between py-4">
            <NuxtLink to="/">
                <img src="/images/header/logo.webp" alt="Logo" class="w-14 rounded-full">
            </NuxtLink>
            <div class="flex items-center gap-6 text-base">
                <NuxtLink to="/" class="flex flex-col after:w-0 after:h-px after:bg-[#f9f9f9] after:transition-all after:duration-500 hover:after:w-full">Главная</NuxtLink>
                <NuxtLink to="/" class="flex flex-col after:w-0 after:h-px after:bg-[#f9f9f9] after:transition-all after:duration-500 hover:after:w-full">Кейсы</NuxtLink>
                <NuxtLink to="/" class="flex flex-col after:w-0 after:h-px after:bg-[#f9f9f9] after:transition-all after:duration-500 hover:after:w-full">Обо мне</NuxtLink>
                <NuxtLink to="/" class="flex flex-col after:w-0 after:h-px after:bg-[#f9f9f9] after:transition-all after:duration-500 hover:after:w-full">Контакты</NuxtLink>
            </div>
            <div class="flex items-center gap-4">
                <a href="http://" target="_blank" rel="noopener noreferrer" class="flex transition-all duration-500 hover:opacity-80 active:opacity-50">
                    <Icon class="text-4xl" name="logos:telegram"/>
                </a>
                <button class="px-4 py-1.5 rounded-lg bg-[#f9f9f9] text-[#131313] font-medium transition-all duration-500 hover:opacity-80 active:opacity-50">Обсудить проект</button>
            </div>
        </div>
    </header>
</template>

<script setup>
/* мобильное меню */
const isMenuShow = ref(false)


</script>