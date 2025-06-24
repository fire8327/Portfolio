<template>
    <header ref="headerRef" class="grid-container w-full py-2 transition-all duration-500 z-[5] transform-gpu"
        :class="{
            'fixed top-0 left-0': isHeaderSticky,
            '-translate-y-[calc(100%+5px)]': !isHeaderVisible,
            'translate-y-0': isHeaderVisible,
            'bg-[#f9f9f9] dark:bg-[#131313] backdrop-blur-md shadow-[0px_0px_20px_-5px] shadow-[#131313]/40 dark:shadow-[#f9f9f9]/40': isHeaderSticky,
            'bg-transparent': !isHeaderSticky
        }">
        <div class="flex items-center justify-between z-[4]">
            <NuxtLink to="/">
                <img src="/images/header/logo.webp" alt="" class="rounded-full w-14">
            </NuxtLink>
            <div class="flex items-center gap-6">
                <button @click="isDark = !isDark" class="cursor-pointer rounded-full text-xl flex items-center justify-center p-2 bg-[#131313] dark:bg-[#f9f9f9] border border-[#f9f9f9]/20 dark:border-[#131313]/20">
                    <Icon class="text-[#f9f9f9] dark:text-[#131313]" :name="isDark ? 'ph:sun-dim' : 'material-symbols:dark-mode-outline-rounded'" />
                </button>
                <button @click="isMenuShow = !isMenuShow" class="cursor-pointer flex flex-col justify-between w-[26px] transition-[height] ease-linear duration-100" :class="isMenuShow ? 'h-5' : 'h-3.5'">
                    <span :class="{'rotate-45' : isMenuShow}" class="w-full h-0.5 bg-[#131313] dark:bg-[#f9f9f9] rounded-[1px] origin-[0] transition-all ease-linear duration-500"></span>
                    <span :class="{'opacity-0' : isMenuShow}" class="w-full h-0.5 bg-[#131313] dark:bg-[#f9f9f9] rounded-[1px] transition-all ease-linear duration-500"></span>
                    <span :class="{'-rotate-45' : isMenuShow}" class="w-full h-0.5 bg-[#131313] dark:bg-[#f9f9f9] rounded-[1px] origin-[0] transition-all ease-linear duration-500"></span>
                </button>
            </div>
        </div>
        <div class="fixed col-span-full w-full top-0 left-0 h-screen bg-[url(/images/body/bg_white.webp)] dark:bg-[url(/images/body/bg_black.webp)] bg-[#f9f9f9] dark:bg-[#131313] bg-fixed grid-container transition-all duration-500 z-[3]" :class="{'-translate-y-[3000px]' : !isMenuShow}">
            <div class="flex max-lg:flex-col gap-6 items-center py-20 z-[2]">
                <ul class="w-full lg:w-3/5 xl:w-[65%] flex flex-col max-lg:items-center h-full justify-center gap-8 md:gap-12 lg:gap-16 list-inside lg:list-decimal marker:text-base marker:text-[#131313]/30 dark:marker:text-[#f9f9f9]/30 text-2xl md:text-3xl lg:text-4xl">
                    <li class="mainLink w-fit">
                        <NuxtLink to="/">Главная</NuxtLink>
                    </li>
                    <li class="mainLink w-fit">
                        <NuxtLink to="/">Портфолио</NuxtLink>
                    </li>
                    <li class="mainLink w-fit">
                        <NuxtLink to="/">Обо мне</NuxtLink>
                    </li>
                </ul>
                <div class="w-5/6 lg:w-px h-px lg:h-5/6 bg-[#131313]/30 dark:bg-[#f9f9f9]/30"></div>
                <div class="w-full lg:w-2/5 xl:w-[35%] flex flex-col max-lg:items-center h-full justify-center gap-8 xl:gap-12">
                    <div class="flex flex-col gap-4">
                        <p class="text-transparent !bg-clip-text mainAnimateText text-xl">Контакты</p>
                        <div class="flex items-center gap-4">
                            <NuxtLink to="https://t.me/fire83274" target="_blank" class="mainLink">Telegram.</NuxtLink>
                            <NuxtLink to="https://github.com/fire8327" target="_blank" class="mainLink">GitHub.</NuxtLink>
                        </div>
                    </div>
                    <NuxtLink to="/" class="rounded-xl p-[2px] w-fit flex items-center justify-center mainAnimateText mainLink">
                        <span class="grow py-1.5 px-8 text-[#131313] dark:text-[#f9f9f9] bg-[#f9f9f9] dark:bg-[#131313] rounded-[10px] relative z-[2]">Связаться со мной</span>
                    </NuxtLink>
                </div>
            </div>
            <p class="absolute left-1/2 -translate-x-1/2 top-1/4 lg:top-1/2 lg:-translate-y-1/2 lg:left-4 lg:translate-x-0 opacity-5 text-[13vw] z-0">МЕНЮ</p>
        </div>
    </header>
</template>

<script setup>
/* переключение темы */
const isDark = ref(false)

watch(isDark, (newVal) => {
    if (process.client) {
        const html = document.documentElement
        html.classList.toggle('dark', newVal)
  }
}, { immediate: true })


/* мобильное меню */
const isMenuShow = ref(false)

watch(isMenuShow, (newVal) => {
    if (process.client) {
        const html = document.documentElement
        html.classList.toggle('overflow-y-hidden', newVal)
  }
}, { immediate: true })


/* закрытие мобильного меню */
const nuxtApp = useNuxtApp()
nuxtApp.hook('page:start', () => {
    isMenuShow.value = false
})


/* обработка скролла */
const { y: scrollY } = useWindowScroll()
const isHeaderVisible = ref(true)
const isHeaderSticky = ref(false)
const lastScrollY = ref(0)
const headerRef = ref(null)

// 1. Интеллектуальная обработка скролла
debouncedWatch(
  scrollY,
  (newY) => {
    const scrollDelta = newY - lastScrollY.value
    const scrollingDown = scrollDelta > 0
    
    // показывать шапку при скролле вверх или в начале страницы
    if (!scrollingDown || newY < 100) {
      isHeaderVisible.value = true
    } 
    // плавно скрывать при скролле вниз после 100px
    else if (newY > 100 && Math.abs(scrollDelta) > 10) {
      isHeaderVisible.value = false
    }
    
    // фиксировать шапку после 100px
    isHeaderSticky.value = newY > 100
    lastScrollY.value = newY
  },
  { debounce: 50, maxWait: 100 }
)

// 2. Управление видимостью при фокусе
const handleInteraction = (e) => {
  // показывать шапку при взаимодействии с навигацией
  if (headerRef.value?.contains(e.target)) {
    isHeaderVisible.value = true
    return
  }
  
  // скрывать при клике вне шапки (кроме интерактивных элементов)
  const interactiveTags = ['A', 'BUTTON', 'INPUT', 'LABEL']
  const isInteractive = interactiveTags.includes(e.target.tagName) || e.target.closest('a, button, input, label, [role="button"]')
  
  if (!isInteractive) {
    isHeaderVisible.value = !isHeaderVisible.value
  }
}

// 3. Автоматический показ при смене страницы
const route = useRoute()
watch(() => route.path, () => {
  isHeaderVisible.value = true
  isHeaderSticky.value = false
})

// 4. Инициализация обработчиков
onMounted(() => {
  document.addEventListener('click', handleInteraction)
  window.addEventListener('focusin', () => isHeaderVisible.value = true)
  
  onUnmounted(() => {
    document.removeEventListener('click', handleInteraction)
    window.removeEventListener('focusin', () => isHeaderVisible.value = true)
  })
})
</script>