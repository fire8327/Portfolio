<template>
    <div class="fixed inset-0 bg-[#f9f9f9] dark:bg-[#131313] bg-[url(/images/body/bg_white.png)] dark:bg-[url(/images/body/bg_black.png)] bg-fixed grid-container h-full transition-transform duration-500 z-40"
        :class="{ '-translate-y-[1000px]': !isOpen }" @click.self="$emit('close')">
        <div class="flex max-lg:flex-col h-full gap-6 items-center py-20 relative">
            <!-- Навигация -->
            <ul
                class="z-10 w-full lg:w-1/2 xl:w-[65%] flex flex-col max-lg:items-center h-full justify-center gap-8 md:gap-12 lg:gap-16 lg:list-decimal-leading-zero list-inside marker:text-base marker:dark:text-[#f9f9f9]/25 marker:text-[#131313]/30">
                <li v-for="link in links" :key="link.to" class="text-2xl md:text-3xl lg:text-4xl link w-fit">
                    <NuxtLink @click="$emit('close')" :to="link.to">{{ link.text }}</NuxtLink>
                </li>
            </ul>

            <div class="w-px h-5/6 dark:bg-[#f9f9f9]/25 bg-[#131313]/30 max-lg:w-5/6 max-lg:h-px"></div>

            <!-- Контакты -->
            <div
                class="z-10 w-full lg:w-1/2 xl:w-[35%] flex flex-col max-lg:items-center h-full justify-center gap-8 md:gap-12 lg:gap-16 text-lg">
                <div class="flex flex-col gap-4 max-lg:items-center">
                    <p class="text-transparent !bg-clip-text text-xl animate-text">Контакты</p>
                    <div class="flex flex-col gap-2 max-lg:items-center">
                        <NuxtLink to="tel:+79093044826" class="link w-fit">+7-909-304-48-26</NuxtLink>
                        <NuxtLink to="mailto:fire83274@gmail.com" class="link w-fit">fire83274@gmail.com</NuxtLink>
                        <NuxtLink to="https://t.me/fire83274" target="_blank" class="link w-fit">@fire83274</NuxtLink>
                    </div>
                </div>

                <div class="flex flex-col gap-4 max-lg:items-center">
                    <p class="text-transparent !bg-clip-text text-xl animate-text">Соцсети</p>
                    <div class="flex gap-4 items-center">
                        <NuxtLink to="https://t.me/fire83274" target="_blank" class="link">Telegram.</NuxtLink>
                        <NuxtLink to="https://github.com/fire8327" target="_blank" class="link">GitHub.</NuxtLink>
                    </div>
                </div>
            </div>

            <div
                class="absolute left-1/2 -translate-x-1/2 top-1/4 lg:top-1/2 lg:-translate-y-1/2 lg:left-4 lg:translate-x-0 opacity-5 text-[13vw] z-0">
                МЕНЮ</div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    isOpen: Boolean
})

const links = [
    { to: '/', text: 'Главная' },
    { to: '/portfolio', text: 'Портфолио' },
    { to: '/about', text: 'Обо мне' },
    { to: '/feedback', text: 'Связаться со мной' },
    { to: '/', text: 'Api' }
]
</script>