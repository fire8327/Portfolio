<template>
    <header class="w-full py-2 top-0 left-0 duration-500 transition-all fixed z-50 grid-container"
        :class="{ '-translate-y-full': isScrollDown, 'bg-[#f9f9f9] dark:bg-[#131313]': isMenuColor }">
        <!-- Скелетон заголовка -->
        <div v-if="loading" class="flex items-center justify-between animate-pulse">
            <div class="rounded-full w-14 h-14 bg-gray-200 dark:bg-gray-700"></div>
            <div class="flex gap-4">
                <div class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div class="w-24 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            </div>
        </div>

        <!-- Реальный контент -->
        <div v-else class="flex items-center justify-between">
            <NuxtLink to="/" @click="isMenuShow = false">
                <img src="/images/header/logo.webp" alt="Логотип" width="60" height="60" class="rounded-full w-14" />
            </NuxtLink>

            <div class="flex items-center gap-4">
                <button @click="toggleTheme"
                    class="rounded-full text-xl flex items-center justify-center p-2 bg-black border border-white border-opacity-[18%] dark:bg-white text-white dark:text-black"
                    aria-label="Переключить тему">
                    <Icon :name="isDark ? 'ph:sun-dim' : 'material-symbols:dark-mode-outline-rounded'" />
                </button>

                <div class="flex items-center gap-2 text-lg cursor-pointer" @click="toggleMenu">
                    <div class="burger" :class="{ 'open': isMenuShow }">
                        <span class="burger-line top"></span>
                        <span class="burger-line middle"></span>
                        <span class="burger-line bottom"></span>
                    </div>
                    <p>Menu</p>
                </div>
            </div>
        </div>
    </header>

    <HeaderMenu :is-open="isMenuShow" @close="isMenuShow = false" />
</template>

<script setup>
const { isMenuColor, isScrollDown } = useHeaderScroll()
const { isDark, toggleTheme } = useTheme()

const isMenuShow = ref(false)
const loading = ref(true)

// Имитация загрузки
onMounted(() => {
    setTimeout(() => loading.value = false, 800)
    window.addEventListener('keydown', handleEscape)
})

// Закрытие по ESC
const handleEscape = (e) => {
    if (e.key === 'Escape') isMenuShow.value = false
}

onUnmounted(() => {
    window.removeEventListener('keydown', handleEscape)
})
</script>

<style>
.burger {
    @apply relative w-[26px] flex flex-col justify-between;
    height: 21px;
}

.burger-line {
    @apply w-full h-0.5 bg-[#131313] dark:bg-[#f9f9f9] rounded-[1px] origin-[0] transition-all duration-500;
}

.burger.open .top {
    transform: rotate(45deg) translate(4px, 5px);
}

.burger.open .middle {
    @apply opacity-0;
}

.burger.open .bottom {
    transform: rotate(-45deg) translate(4px, -5px);
}
</style>