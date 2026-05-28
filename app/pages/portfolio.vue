<template>
    <div class="flex flex-col gap-6 lg:gap-8 items-center mt-24 lg:mt-32">
        <div class="w-full">
            <p class="text-xl md:text-2xl lg:text-3xl uppercase">Профессиональное творчество</p>
            <p class="uppercase text-xs tracking-[0.25em] text-[#131313]/50 dark:text-[#f9f9f9]/50">Мои работы - ваше впечатление</p>        
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-4 gap-y-8">
            <Card v-for="site in cases" v-bind="site"/>            
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


/* получение данных */
const cases = ref(
  [
    {
      "id": 1,
      "created_at": "2026-02-18 18:17:11.037089+00",
      "desc": "Сайт ИИ помощника",
      "image": "ai.webp",
      "link": "https://ai83274.vercel.app/",
      "tags": ["Rest API", "Nuxt 3", "ru"]
    },
    {
      "id": 2,
      "created_at": "2026-02-18 18:17:21.231303+00",
      "desc": "Маркетплейс товаров California",
      "image": "california.webp",
      "link": "https://fire8327.github.io/California/",
      "tags": ["Landing", "Mobile first", "en"]
    },
    {
      "id": 3,
      "created_at": "2026-02-25 09:45:43.523167+00",
      "desc": "UI-кит для ИнформТехники",
      "image": "informtechnika.webp",
      "link": "https://www.minicom.ru/",
      "tags": ["UI", "Vue 3", "ru"]
    },
    {
      "id": 4,
      "created_at": "2026-02-25 09:45:43.523167+00",
      "desc": "Концепт веб-банка",
      "image": "webbank.webp",
      "link": "https://fire8327.github.io/WebBank/index.html",
      "tags": ["UI/UX", "Mobile First", "ru"]
    },
    {
      "id": 5,
      "created_at": "2026-02-25 09:45:43.523167+00",
      "desc": "Лендинг для мобильного приложения EQVI",
      "image": "eqvilibria.webp",
      "link": "https://eqvilibria.com/",
      "tags": ["Landing", "Tailwind", "en"]
    },
    {
      "id": 6,
      "created_at": "2026-02-25 09:45:43.523167+00",
      "desc": "Концепт студии фотографии Aperture",
      "image": "aperture.webp",
      "link": "https://fire8327.github.io/Aperture/",
      "tags": ["Landing", "en"]
    },
    {
      "id": 7,
      "created_at": "2026-02-25 09:45:43.523167+00",
      "desc": "Сайт для консалтинговой компании Akocheck",
      "image": "akocheck.webp",
      "link": "https://akocheck.ru/",
      "tags": ["UI/UX", "Tailwind", "ru"]
    },
    {
      "id": 8,
      "created_at": "2026-02-25 09:45:43.523167+00",
      "desc": "Академия альтернативного образования",
      "image": "elenasouly.webp",
      "link": "https://fire8327.github.io/ElenaSouly/",
      "tags": ["Tailwind", "ru"]
    },
    {
      "id": 9,
      "created_at": "2026-02-25 09:45:43.523167+00",
      "desc": "Профильная онлайн-школа дизайна",
      "image": "designschool.webp",
      "link": "https://fire8327.github.io/DesignSchool/",
      "tags": ["Landing", "HTML", "ru"]
    },
    {
      "id": 10,
      "created_at": "2026-02-25 09:45:43.523167+00",
      "desc": "UI-кит для сервиса здоровья",
      "image": "onhes.webp",
      "link": "https://fire8327.github.io/DesignSchool/",
      "tags": ["UI", "Tailwind", "ru"]
    },
    {
      "id": 11,
      "created_at": "2026-02-25 09:45:43.523167+00",
      "desc": "Сайт медиа о чайной культуре",
      "image": "proliv.webp",
      "link": "https://fire8327.github.io/Proliv/index.html",
      "tags": ["HTML", "Tailwind", "ru"]
    },
    {
      "id": 12,
      "created_at": "2026-02-25 09:45:43.523167+00",
      "desc": "Лендинг для КП «Крёкшино Вилладж»",
      "image": "village.webp",
      "link": "https://fire8327.github.io/Village/",
      "tags": ["Landing", "ru"]
    },
    {
      "id": 13,
      "created_at": "2026-02-25 09:45:43.523167+00",
      "desc": "Сайт для RSNBIM",
      "image": "rsnbim.webp",
      "link": "https://rsnbim.ru/",
      "tags": ["Vue 3", "Nuxt 3", "ru"]
    },
    {
      "id": 14,
      "created_at": "2026-02-25 09:45:43.523167+00",
      "desc": "Инновационное книжное издательство",
      "image": "worldwords.webp",
      "link": "https://worldwords.io/ru",
      "tags": ["React", "Rest Api", "ru"]
    },
    {
      "id": 15,
      "created_at": "2026-02-25 09:45:43.523167+00",
      "desc": "Студенческий проект в содействии с федеральным проектом",
      "image": "eco.webp",
      "link": "https://fire8327.github.io/EcoLanding/",
      "tags": ["Landing", "Tailwind", "ru"]
    },
    {
      "id": 16,
      "created_at": "2026-02-25 09:45:43.523167+00",
      "desc": "Лендин для мусороперерабатывающей компании",
      "image": "ecostar.webp",
      "link": "https://ecostar-pro.ru/",
      "tags": ["Landing", "Telegram API", "ru"]
    },
    {
      "id": 17,
      "created_at": "2026-02-25 09:45:43.523167+00",
      "desc": "Лендинг для шароварни",
      "image": "brusco.webp",
      "link": "https://bruskoshar.ru/",
      "tags": ["Landing", "HTML", "ru"]
    }
  ]
)
</script>