<template>
    <div class="flex flex-col gap-6 lg:gap-8 items-center mt-24 lg:mt-32">
        <div class="w-full">
            <p class="text-xl md:text-2xl lg:text-3xl uppercase">Профессиональное творчество</p>
            <p class="uppercase text-xs tracking-[0.25em] text-[#131313]/50 dark:text-[#f9f9f9]/50">Мои работы - ваше впечатление</p>        
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            <Card v-for="site in examples" v-bind="site"/>            
        </div>
    </div>
    <div class="flex flex-col gap-6 py-8 lg:py-10 border-y border-black/10 dark:border-white/10">
        <div>
            <p class="text-xl md:text-2xl lg:text-3xl uppercase">План выполнения работ</p>
            <p class="uppercase text-xs tracking-[0.25em] text-[#131313]/50 dark:text-[#f9f9f9]/50">
                Кратко о том, как мы двигаемся от макета до живого сайта.
            </p>
        </div>
        <div class="w-full rounded-xl border border-white/10 bg-gradient-to-r from-[#ff7a18]/10 via-[#af002d]/10 to-[#319197]/10 p-4 md:p-6">
            <div class="flex flex-col gap-2">
                <div v-for="(step, index) in steps" :key="step.title" class="flex gap-4">
                    <div class="flex flex-col items-center">
                        <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#131313]/90 dark:bg-[#f9f9f9] text-[12px] uppercase tracking-[0.15em] text-[#f9f9f9] dark:text-[#131313]">
                            0{{ index + 1 }}
                        </div>
                        <div v-if="index !== steps.length - 1" class="h-full mt-1.5 w-px bg-white/20"></div>
                    </div>
                    <div class="flex gap-4">
                        <div class="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/60 dark:bg-white/10">
                            <Icon :name="step.icon" class="text-lg text-[#131313]/80 dark:text-[#f9f9f9]/80" />
                        </div>
                        <div class="flex-1 flex flex-col gap-1.5">
                            <p class="text-sm md:text-base font-medium">
                            {{ step.title }}
                            </p>
                            <p class="text-sm text-[#131313]/60 dark:text-[#f9f9f9]/60">
                            {{ step.desc }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <NewProject/>
</template>

<script setup>
const steps = [
  {
    icon: 'mdi:target-variant',
    title: 'Определяем цели и задачи сайта',
    desc: 'Фиксируем, для кого делаем сайт и что он должен делать: продавать, знакомить, собирать заявки.'
  },
  {
    icon: 'mdi:palette-outline',
    title: 'Оцениваем и обсуждаем дизайн',
    desc: 'Смотрим макеты, сложность анимаций, сетку, шрифты и детали, чтобы понимать объём работ.'
  },
  {
    icon: 'mdi:code-tags',
    title: 'Верстаю страницы',
    desc: 'Переношу макеты в аккуратный HTML / Vue‑код с учётом адаптива и состояния элементов.'
  },
  {
    icon: 'mdi:animation-outline',
    title: 'Добавляю функционал',
    desc: 'Подключаю скрипты, формы, навигацию, анимации и проверяю валидность кода.'
  },
  {
    icon: 'mdi:cloud-upload-outline',
    title: 'Публикация проекта',
    desc: 'Помогаю с выгрузкой: архив, GitHub или размещение на хостинге по договорённости.'
  }
]


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