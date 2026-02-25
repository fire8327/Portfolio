<template>
     <div class="flex flex-col justify-center min-h-screen bg-cover bg-[url(/images/hero/main.webp)] w-full col-span-full bg-center relative bg-fixed">
        <div class="wrapper flex flex-col gap-8 md:gap-12 lg:gap-16 z-[1] text-[#f9f9f9] text-2xl md:text-3xl lg:text-4xl">
            <p>Привет!</p>
            <p class="text-5xl md:text-6xl lg:text-7xl">Я — <span>{{ typedText }}</span></p>
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
        <div class="flex flex-col gap-1">
            <p class="text-xl md:text-2xl lg:text-3xl uppercase">Кейсы</p>
            <p class="text-xs uppercase tracking-[0.025em] text-[#131313]/50 dark:text-[#f9f9f9]/50">Примеры уже готовых работ</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8">
            <Card v-for="site in cases" v-bind="site"/>            
        </div>
        <NuxtLink to="/portfolio" class="flex items-center self-end gap-4 w-fit rounded-full relative p-2 group">
            <Icon name="material-symbols:arrow-forward-ios-rounded" class="text-lg z-10 dark:text-[#131313] text-[#f9f9f9]"/>
            <span class="uppercase text-sm tracking-widest z-10 transition-colors duration-500 group-hover:dark:text-[#131313] group-hover:text-[#f9f9f9]">Посмотреть ещё</span>
            <span class="absolute rounded-full dark:bg-[#f9f9f9] bg-[#131313] h-full w-9 z-0 left-0 top-0 transition-all duration-500 group-hover:w-full"></span>
        </NuxtLink>
    </div>
    <CoopOptions/>
    <div class="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-black/5 via-black/0 to-black/20 dark:from-white/5 dark:via-white/0 dark:to-white/10 px-4 lg:px-8 py-8">
        <div class="flex flex-col gap-6">
            <p class="uppercase text-xs tracking-[0.25em] text-[#131313]/50 dark:text-[#f9f9f9]/50">кастомная веб‑разработка</p>
            <div class="flex max-lg:flex-col gap-6 lg:justify-between">
                <p class="text-xl text-[#131313] dark:text-[#f9f9f9] max-w-2xl">
                    Начните создавать адаптивные сайты вместе со мной и получайте
                    <span class="text-transparent bg-gradient-to-r from-[#ff7a18] via-[#af002d] to-[#319197] bg-clip-text">
                        быстрые и продуктивные решения
                    </span>, которые идеально подходят под ваши задачи.
                </p>
                <div class="flex flex-col gap-4">
                    <div class="w-fit flex items-center gap-2 rounded-full border border-white/10 bg-black/20 dark:bg-white/5 px-4 py-2 text-xs uppercase text-[#f9f9f9]/80">
                        <div class="h-2 w-2 rounded-full shrink-0 bg-emerald-400 animate-pulse"></div>
                        <p>Свободен для новых проектов</p>
                    </div>
                    <div class="text-sm text-[#131313]/60 dark:text-[#f9f9f9]/60">
                        <p class="text-base font-semibold text-[#f9f9f9]">5–7 дней</p>
                        <p>средний срок запуска</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-gradient-to-br from-[#ff7a18]/25 via-[#af002d]/15 to-[#319197]/0 blur-3xl opacity-80"></div>
    </div>
    <NewProject/>
</template>

<script setup>
/* простой эффект набора текста */
const titles = ['Веб-разработчик', 'Пишу код', 'Человек, который ест кофе', 'Оживляю макеты', 'Дружу с JavaScript', 'Делаю адаптивно', 'Гуглю ошибки быстрее других']

const typedText = ref('')
const currentTitleIndex = ref(0)
const currentCharIndex = ref(0)
const isDeleting = ref(false)
let timer = null

const runTyping = () => {
  const currentTitle = titles[currentTitleIndex.value]

  if (!isDeleting.value) {
    // печатаем
    typedText.value = currentTitle.slice(0, currentCharIndex.value + 1)
    currentCharIndex.value++

    if (currentCharIndex.value === currentTitle.length) {
      // пауза в конце слова
      timer = setTimeout(() => {
        isDeleting.value = true
        runTyping()
      }, 1000)
      return
    }
  } else {
    // стираем
    typedText.value = currentTitle.slice(0, currentCharIndex.value - 1)
    currentCharIndex.value--

    if (currentCharIndex.value === 0) {
      isDeleting.value = false
      currentTitleIndex.value = (currentTitleIndex.value + 1) % titles.length
    }
  }

  timer = setTimeout(runTyping, isDeleting.value ? 50 : 90)
}

onMounted(() => {
  runTyping()
})

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})


/* получение данных */
const supabase = useSupabaseClient()
const cases = ref()

const loadCases = async () => {
  const { data, error } = await supabase
  .from('cases')
  .select('*')
  .range(0, 5)
  .order('id', {ascending: true})

  if (data) {
    cases.value = data
    console.log(data)    
  } else {
    console.log(error)    
  }
}

onMounted(loadCases)
</script>