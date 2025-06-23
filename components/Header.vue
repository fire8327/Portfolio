<template>
    <header class="w-full grid-container py-2 relative">
        <div class="flex items-center justify-between z-[4]">
            <NuxtLink to="/">
                <img src="/images/header/logo.webp" alt="" class="rounded-full w-14">
            </NuxtLink>
            <div class="flex items-center gap-6">
                <button class="cursor-pointer rounded-full text-xl flex items-center justify-center p-2 bg-black border border-white/20 text-white">
                    <Icon :name="isDark ? 'ph:sun-dim' : 'material-symbols:dark-mode-outline-rounded'"/>
                </button>
                <button @click="isMenuShow = !isMenuShow" class="cursor-pointer flex flex-col justify-between w-[26px] transition-[height] ease-linear duration-100" :class="isMenuShow ? 'h-5' : 'h-3.5'">
                    <span :class="{'rotate-45' : isMenuShow}" class="w-full h-0.5 bg-[#131313] rounded-[1px] origin-[0] transition-transform ease-linear duration-500"></span>
                    <span :class="{'opacity-0' : isMenuShow}" class="w-full h-0.5 bg-[#131313] rounded-[1px] transition-opacity ease-linear duration-500"></span>
                    <span :class="{'-rotate-45' : isMenuShow}" class="w-full h-0.5 bg-[#131313] rounded-[1px] origin-[0] transition-transform ease-linear duration-500"></span>
                </button>
            </div>
        </div>
        <div class="fixed inset-0 bg-[url(/images/body/bg_white.webp)] bg-[#f9f9f9] bg-fixed grid-container transition-all duration-500 z-[3]" :class="{'-translate-y-full' : !isMenuShow}">
            <div class="flex max-lg:flex-col gap-6 items-center py-20 z-[2]">
                <ul class="w-full lg:1/2 xl:w-[65%] flex flex-col max-lg:items-center h-full justify-center gap-8 md:gap-12 lg:gap-16 list-inside lg:list-decimal marker:text-base marker:text-[#131313]/30 text-2xl md:text-3xl lg:text-4xl">
                    <li class="mainLink w-fit"><NuxtLink to="/">Главная</NuxtLink></li>
                    <li class="mainLink w-fit"><NuxtLink to="/">Портфолио</NuxtLink></li>
                    <li class="mainLink w-fit"><NuxtLink to="/">Обо мне</NuxtLink></li>
                    <li class="mainLink w-fit"><NuxtLink to="/">Связаться со мной</NuxtLink></li> <!-- Возможно, перенести на правую сторону -->
                </ul>
                <div class="w-5/6 lg:w-px h-px lg:h-5/6 bg-[#131313]/30"></div>
                <div class="w-full lg:w-1/2 xl:w-[35%] flex flex-col max-lg:items-center h-full justify-center gap-8 md:gap-12 lg:gap-16">
                    <div class="flex flex-col gap-6">
                        <p class="text-transparent !bg-clip-text mainAnimateText text-xl">Контакты</p>
                        <div class="flex items-center gap-4">
                            <NuxtLink to="https://t.me/fire83274" target="_blank" class="mainLink">Telegram.</NuxtLink>
                            <NuxtLink to="https://github.com/fire8327" target="_blank" class="mainLink">GitHub.</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute left-1/2 -translate-x-1/2 top-1/4 lg:top-1/2 lg:-translate-y-1/2 lg:left-4 lg:translate-x-0 opacity-5 text-[13vw] z-0">МЕНЮ</div>
        </div>
    </header>
</template>

<script setup>
/* переключение темы */
const isDark = ref(false)


/* мобильное меню */
const isMenuShow = ref(false)


/* закрытие мобильного меню */
const nuxtApp = useNuxtApp()
nuxtApp.hook('page:start', () => {
    isMenuShow.value = false
})
</script>