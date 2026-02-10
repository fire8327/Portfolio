<template>
    <header
        class="grid-container w-full fixed z-[2] transition-[background-color,backdrop-filter] duration-500"
        :class="isScrolled ? 'bg-[#f9f9f9]/90 dark:bg-[#131313]/90 backdrop-blur-md border-b border-[#131313]/20 dark:border-[#f9f9f9]/20' : ''"
    >
        <div class="w-full flex items-center justify-between py-4">
            <NuxtLink to="/">
                <img src="/images/header/logo.webp" alt="Logo" class="w-14 rounded-full">
            </NuxtLink>
            <div class="flex items-center gap-6 text-base max-lg:hidden">
                <NuxtLink to="/" class="flex flex-col after:w-0 after:h-px after:bg-[#f9f9f9] after:transition-all after:duration-500 hover:after:w-full">Главная</NuxtLink>
                <NuxtLink to="/" class="flex flex-col after:w-0 after:h-px after:bg-[#f9f9f9] after:transition-all after:duration-500 hover:after:w-full">Кейсы</NuxtLink>
                <NuxtLink to="/" class="flex flex-col after:w-0 after:h-px after:bg-[#f9f9f9] after:transition-all after:duration-500 hover:after:w-full">Обо мне</NuxtLink>
                <NuxtLink to="/" class="flex flex-col after:w-0 after:h-px after:bg-[#f9f9f9] after:transition-all after:duration-500 hover:after:w-full">Контакты</NuxtLink>
                <button class="lg:hidden px-4 py-1.5 rounded-lg bg-[#f9f9f9] text-[#131313] font-medium transition-all duration-500 hover:opacity-80 active:opacity-50">Обсудить проект</button>
            </div>
            <div class="flex items-center gap-4">
                <a href="http://" target="_blank" rel="noopener noreferrer" class="flex transition-all duration-500 hover:opacity-80 active:opacity-50">
                    <Icon class="text-4xl" name="logos:telegram"/>
                </a>
                <button class="max-lg:hidden px-4 py-1.5 rounded-lg bg-[#f9f9f9] text-[#131313] font-medium transition-all duration-500 hover:opacity-80 active:opacity-50">Обсудить проект</button>
                <button @click="isMenuShow = !isMenuShow" class="cursor-pointer flex lg:hidden">
                    <Icon class="text-4xl" name="iconamoon:menu-burger-horizontal-light"/>
                </button>
            </div>
        </div>
    </header>
</template>

<script setup>
/* мобильное меню */
const isMenuShow = ref(false)

/* фон шапки при скролле */
const isScrolled = ref(false)
const scrollThreshold = 150

function onScroll() {
    isScrolled.value = window.scrollY > scrollThreshold
}

onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // проверка при монтировании (если страница уже проскроллена)
})

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
})
</script>