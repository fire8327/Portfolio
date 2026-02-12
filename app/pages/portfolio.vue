<template>
    <div class="flex flex-col gap-6 py-8 lg:py-10 border-y border-black/10 dark:border-white/10 mt-24 lg:mt-32">
        <div>
            <p class="text-xl md:text-2xl lg:text-3xl uppercase">План выполнения работ</p>
            <p class="text-lg text-[#131313]/60 dark:text-[#f9f9f9]/60">
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
</script>