<template>
    <div class="mt-24 lg:mt-32">
        <div class="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/40 via-white/0 to-white/10 dark:from-white/5 dark:via-white/0 dark:to-white/10 px-4 lg:px-8 py-8">
            <div class="flex flex-col gap-6">
                <p class="uppercase text-xs tracking-[0.25em] text-[#131313]/50 dark:text-[#f9f9f9]/50">обо мне</p>
                <div class="flex max-lg:flex-col gap-6 lg:justify-between">
                    <p class="text-xl text-[#131313] dark:text-[#f9f9f9] max-w-2xl">
                        Если <span class="text-transparent bg-gradient-to-r from-[#ff7a18] via-[#af002d] to-[#319197] bg-clip-text">вы</span> ищете человека, который
                        поможет вам реализовать крутой проект и подобрать лучшее решение, тогда вы обратились
                        <span class="text-transparent bg-gradient-to-r from-[#ff7a18] via-[#af002d] to-[#319197] bg-clip-text"> по адресу</span>. Вместе мы выведем ваш
                        сайт на новый уровень.
                    </p>
                    <div class="flex flex-col gap-4">
                        <div class="flex items-center gap-2">
                            <p class="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></p>
                            <p class="text-sm text-[#131313]/70 dark:text-[#f9f9f9]/70">
                                Индивидуальный подход к каждому проекту
                            </p>
                        </div>
                        <div class="flex gap-4 text-sm text-[#131313]/60 dark:text-[#f9f9f9]/60">
                            <div>
                                <p class="text-base font-semibold text-[#f9f9f9]">5+ лет</p>
                                <p>опыта в фронтенде</p>
                            </div>
                            <div>
                                <p class="text-base font-semibold text-[#f9f9f9]">20+ проектов</p>
                                <p>для разных ниш</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-gradient-to-br from-[#ff7a18]/25 via-[#af002d]/15 to-[#319197]/0 blur-3xl opacity-80"></div>
        </div>
    </div>
    <CoopOptions/>
    <div class="flex max-lg:flex-col gap-8 py-8 lg:py-10 border-y border-white/10">
        <div class="w-full lg:w-1/3 flex flex-col gap-4">
            <p class="text-xl md:text-2xl lg:text-3xl max-lg:text-center uppercase">Навыки</p>
            <p class="text-lg text-[#131313]/60 dark:text-[#f9f9f9]/60 max-lg:text-center">
            Коротко о том, в чём я сильнее всего в работе с фронтендом и интерфейсами.
            </p>
        </div>
        <div class="w-full lg:w-2/3 flex flex-col gap-4">
            <div v-for="skill in skills" :key="skill.label" class="flex flex-col gap-1.5">
                <div class="flex items-center justify-between text-sm">
                    <span class="text-[#131313]/70 dark:text-[#f9f9f9]/70">{{ skill.label }}</span>
                    <span class="text-[#131313]/50 dark:text-[#f9f9f9]/50">{{ skill.value }}%</span>
                </div>
                <div class="h-1.5 w-full rounded-full bg-[#efefef] dark:bg-[#191919] overflow-hidden">
                    <div class="h-full rounded-full bg-gradient-to-r from-[#ff7a18] via-[#af002d] to-[#319197]" :style="`width: ${skill.value}%`"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-6">
        <div class="flex flex-col items-center gap-4 text-center">
            <p class="text-xl md:text-2xl lg:text-3xl uppercase">
            Делаю макеты живыми
            </p>
            <p class="text-sm text-[#131313]/60 dark:text-[#f9f9f9]/60 max-w-xl">
                Я беру ваш дизайн — или помогаю собрать простой и понятный вариант — и аккуратно перевожу его в рабочий, адаптивный сайт.
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="flex flex-col gap-3">
            <p class="text-xs uppercase tracking-[0.2em] text-[#131313]/50 dark:text-[#f9f9f9]/50">
                01 · точная верстка по макету
            </p>
            <p class="text-base md:text-lg text-[#131313] dark:text-[#f9f9f9]">
                Аккуратно переношу дизайн в код
            </p>
            <p class="text-sm text-[#131313]/60 dark:text-[#f9f9f9]/60">
                Соблюдаю отступы, сетку, типографику и общее ощущение макета, чтобы итоговый сайт выглядел так, как вы задумали.
            </p>
            </div>

            <div class="flex flex-col gap-3">
            <p class="text-xs uppercase tracking-[0.2em] text-[#131313]/50 dark:text-[#f9f9f9]/50">
                02 · адаптив и скорость
            </p>
            <p class="text-base md:text-lg text-[#131313] dark:text-[#f9f9f9]">
                Всё работает на разных устройствах
            </p>
            <p class="text-sm text-[#131313]/60 dark:text-[#f9f9f9]/60">
                Подстраиваю блоки под мобильные, планшеты и десктоп, слежу за весом изображений и скоростью загрузки.
            </p>
            </div>

            <div class="flex flex-col gap-3">
            <p class="text-xs uppercase tracking-[0.2em] text-[#131313]/50 dark:text-[#f9f9f9]/50">
                03 · лёгкие улучшения
            </p>
            <p class="text-base md:text-lg text-[#131313] dark:text-[#f9f9f9]">
                Добавляю жизнь без перегруза
            </p>
            <p class="text-sm text-[#131313]/60 dark:text-[#f9f9f9]/60">
                Предлагаю простые анимации, состояния наведения и мелкие UX‑правки, которые делают использование сайта приятнее.
            </p>
            </div>
        </div>
    </div> 
    <div class="flex items-center gap-4 rounded-2xl px-4 lg:px-8 py-8 border border-white/10 bg-white/70 dark:bg-white/[0.04] w-fit mx-auto relative">
        <div class="w-px h-full bg-gradient-to-b from-[#ff7a18] via-[#af002d] to-[#319197] rounded-full"></div>
        <div class="flex flex-col gap-3">
            <p class="text-xs uppercase tracking-[0.25em] text-[#131313]/50 dark:text-[#f9f9f9]/50">
            цитата · кредо
            </p>

            <div class="relative flex gap-2">
                <p class="text-3xl leading-none text-[#131313]/15 dark:text-[#f9f9f9]/15">“</p>
                <p class="text-lg lg:text-xl text-[#131313] dark:text-[#f9f9f9] italic">
                    Мы должны оставаться
                    <span class="text-transparent bg-gradient-to-r from-[#ff7a18] via-[#af002d] to-[#319197] bg-clip-text">
                    мыми
                    </span>,
                    а они —
                    <span class="text-transparent bg-gradient-to-r from-[#ff7a18] via-[#af002d] to-[#319197] bg-clip-text">
                    оними
                    </span>.
                </p>
                <p class="text-3xl leading-none text-[#131313]/15 dark:text-[#f9f9f9]/15">“</p>
            </div>

            <p class="text-xs text-[#131313]/60 dark:text-[#f9f9f9]/60">
            — моё небольшое напоминание о том, что нормально быть собой
            </p>
        </div>
    </div>
    <div class="flex flex-col gap-6 items-center py-8 lg:py-10">
        <p class="text-xl md:text-2xl lg:text-3xl uppercase text-center">
            Время делать проекты
        </p>

        <div class="flex flex-col items-center gap-4">
            <div class="flex items-center gap-4 text-3xl md:text-4xl lg:text-5xl">
                <div class="flex items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-black/5 via-black/0 to-black/20 dark:from-white/5 dark:via-white/0 dark:to-white/10 px-5 py-2 min-w-[4.5rem]">
                    {{ hours }}
                </div>
                <span>:</span>
                <div class="flex items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-black/5 via-black/0 to-black/20 dark:from-white/5 dark:via-white/0 dark:to-white/10 px-5 py-2 min-w-[4.5rem]">
                    {{ minutes }}
                </div>
                <span>:</span>
                <div class="flex items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-black/5 via-black/0 to-black/20 dark:from-white/5 dark:via-white/0 dark:to-white/10 px-5 py-2 min-w-[4.5rem]">
                    {{ seconds }}
                </div>
            </div>
            <p class="text-sm md:text-base text-[#131313]/60 dark:text-[#f9f9f9]/60 text-center">
            {{ date.toLocaleDateString("ru" ,{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}
            </p>
        </div>

        <NuxtLink to="/feedback" class="flex items-center self-end gap-4 w-fit rounded-full relative p-2 group">
            <Icon name="material-symbols:arrow-forward-ios-rounded" class="text-lg z-10 dark:text-[#131313] text-[#f9f9f9]"/>
            <span class="uppercase text-sm tracking-widest z-10 transition-colors duration-500 group-hover:dark:text-[#131313] group-hover:text-[#f9f9f9]">Начать проект</span>
            <span class="absolute rounded-full dark:bg-[#f9f9f9] bg-[#131313] h-full w-9 z-0 left-0 top-0 transition-all duration-500 group-hover:w-full"></span>
        </NuxtLink>
    </div>
</template>

<script setup>
const skills = [
  { label: 'HTML', value: 98 },
  { label: 'CSS', value: 95 },
  { label: 'TailwindCSS', value: 85 },
  { label: 'JS, jQuery', value: 80 },
  { label: 'Vue, Nuxt', value: 70 },
  { label: 'Дизайнерское мышление', value: 60 }
]

let date = ref(new Date())
    const hours = computed(() => {return date.value.getHours()})
    const minutes = computed(() => {return date.value.getMinutes()})
    const seconds = computed(() => {return date.value.getSeconds()})    
    setInterval(() => {
        date.value = new Date()
    }, 1000);
</script>