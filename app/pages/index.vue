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
        <p class="text-xl md:text-2xl lg:text-3xl">Краткая информация обо мне</p>
        <p class="text-lg text-[#131313]/60 dark:text-[#f9f9f9]/60 max-w-2xl">Меня зовут Леонид. Я Веб-разработчик. Специализируюсь на фронтенде и использую tailwindcss для вёрстки сайтов. Изучаю vue и nuxt. Надеюсь, вы <span class="text-transparent bg-gradient-to-r from-[#ff7a18] via-[#af002d] to-[#319197] bg-clip-text">горите своим делом</span> также, как я.</p>
        <div class="grid grid-cols-2 items-center w-full md:w-1/2 lg:w-1/3">
            <img src="/images/about/1.webp" alt="" class="-rotate-6 w-full"/>
            <img src="/images/about/2.webp" alt="" class="rotate-6 w-full"/>
        </div>
    </div>
    <div class="flex flex-col gap-6">
        <p class="text-xl md:text-2xl lg:text-3xl uppercase">Кейсы</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            <Card v-for="site in examples" v-bind="site"/>            
        </div>
        <NuxtLink to="/portfolio" class="flex items-center self-end gap-4 w-fit rounded-full relative p-2 group">
            <Icon name="material-symbols:arrow-forward-ios-rounded" class="text-lg z-10 dark:text-[#131313] text-[#f9f9f9]"/>
            <span class="uppercase text-sm tracking-widest z-10 transition-colors duration-500 group-hover:dark:text-[#131313] group-hover:text-[#f9f9f9]">Посмотреть ещё</span>
            <span class="absolute rounded-full dark:bg-[#f9f9f9] bg-[#131313] h-full w-9 z-0 left-0 top-0 transition-all duration-500 group-hover:w-full"></span>
        </NuxtLink>
    </div>
    <CoopOptions/>
    <div class="py-8 lg:py-10">
        <div class="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-black/5 via-black/0 to-black/20 dark:from-white/5 dark:via-white/0 dark:to-white/10 px-4 lg:px-8 py-8">
            <div class="flex flex-col gap-6">
                <p class="uppercase text-xs tracking-[0.25em] text-[#131313]/50 dark:text-[#f9f9f9]/50">кастомная веб‑разработка</p>
                <div class="flex max-lg:flex-col gap-6 lg:justify-between">
                    <p class="text-xl lg:text-2xl leading-relaxed text-[#131313] dark:text-[#f9f9f9] max-w-2xl">
                        Начните создавать адаптивные сайты вместе со мной и получайте
                        <span class="text-transparent bg-gradient-to-r from-[#ff7a18] via-[#af002d] to-[#319197] bg-clip-text">
                            быстрые и продуктивные решения
                        </span>, которые идеально подходят под ваши задачи.
                    </p>
                    <div class="flex flex-col gap-4">
                        <div class="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 dark:bg-white/5 px-4 py-2 text-xs uppercase text-[#f9f9f9]/80">
                            <div class="h-2 w-2 rounded-full shrink-0 bg-emerald-400 animate-pulse"></div>
                            <p>Свободен для новых проектов</p>
                        </div>
                        <div class="text-sm text-[#f9f9f9]/60">
                            <p class="text-base font-semibold text-[#f9f9f9]">5–7 дней</p>
                            <p>средний срок запуска</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <NewProject/>
</template>

<script setup>
/* кейсы */
const examples = [
  {
    "title": "Корпоративный сайт для TechFlow",
    "link": "https://techflow-example.com",
    "img": "https://img.freepik.com/free-photo/beautiful-landscape-mother-nature_23-2148992406.jpg?t=st=1770759405~exp=1770763005~hmac=37a67a207025abf33291bb9b80ba881e233de784a213394839a17103d77313f8&w=1060",
    "tags": ["Nuxt 3", "Vue.js", "Tailwind CSS", "Адаптивная верстка"]
  },
  {
    "title": "Интернет-магазин FreshMarket",
    "link": "https://freshmarket-store.com",
    "img": "https://img.freepik.com/free-photo/beautiful-landscape-mother-nature_23-2148992406.jpg?t=st=1770759405~exp=1770763005~hmac=37a67a207025abf33291bb9b80ba881e233de784a213394839a17103d77313f8&w=1060",
    "tags": ["Vue 3", "Pinia", "REST API", "UI/UX Design"]
  },
  {
    "title": "Лендинг для студии дизайна ArtVision",
    "link": "https://artvision-landing.com",
    "img": "https://img.freepik.com/free-photo/beautiful-landscape-mother-nature_23-2148992406.jpg?t=st=1770759405~exp=1770763005~hmac=37a67a207025abf33291bb9b80ba881e233de784a213394839a17103d77313f8&w=1060",
    "tags": ["SSG", "GSAP анимации", "Figma to Code"]
  },
  {
    "title": "Админ-панель AnalyticsPro",
    "link": "https://analyticspro-dashboard.com",
    "img": "https://img.freepik.com/free-photo/beautiful-landscape-mother-nature_23-2148992406.jpg?t=st=1770759405~exp=1770763005~hmac=37a67a207025abf33291bb9b80ba881e233de784a213394839a17103d77313f8&w=1060",
    "tags": ["Vue.js", "Chart.js", "JWT Auth", "PostgreSQL"]
  },
  {
    "title": "Портфолио фотографа",
    "link": "https://photo-portfolio-example.com",
    "img": "https://img.freepik.com/free-photo/beautiful-landscape-mother-nature_23-2148992406.jpg?t=st=1770759405~exp=1770763005~hmac=37a67a207025abf33291bb9b80ba881e233de784a213394839a17103d77313f8&w=1060",
    "tags": ["Nuxt 3", "Lightbox Gallery", "SEO оптимизация"]
  },
  {
    "title": "Сайт для кофейни Brew&Bean",
    "link": "https://brewbean-cafe.com",
    "img": "https://img.freepik.com/free-photo/beautiful-landscape-mother-nature_23-2148992406.jpg?t=st=1770759405~exp=1770763005~hmac=37a67a207025abf33291bb9b80ba881e233de784a213394839a17103d77313f8&w=1060",
    "tags": ["Mobile First", "PWA", "Online Menu"]
  },
]
</script>