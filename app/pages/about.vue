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
</script>