<template>
  <div class="mt-24 lg:mt-32 flex flex-col gap-8 lg:gap-10">
    <section class="relative overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-white/40 via-white/0 to-white/10 dark:from-white/5 dark:via-white/0 dark:to-white/10 px-4 lg:px-8 py-8">
      <div class="flex flex-col gap-6">
        <p class="uppercase text-xs tracking-[0.25em] text-[#131313]/50 dark:text-[#f9f9f9]/50">контакты</p>
        <div class="flex max-lg:flex-col gap-6 lg:justify-between">
          <p class="text-xl text-[#131313] dark:text-[#f9f9f9] max-w-2xl">
            Если хотите обсудить идею, улучшить текущий сайт или запустить новый проект,
            напишите мне любым удобным способом.
            <span class="text-transparent bg-gradient-to-r from-[#ff7a18] via-[#af002d] to-[#319197] bg-clip-text">
              Отвечаю быстро и по делу.
            </span>
          </p>
          <div class="flex flex-col gap-4">
            <div class="w-fit flex items-center gap-2 rounded-full border border-[#131313]/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-4 py-2 text-xs uppercase text-[#131313]/70 dark:text-[#f9f9f9]/80">
              <div class="h-2 w-2 rounded-full shrink-0 bg-emerald-400 animate-pulse"></div>
              <p>На связи в Telegram</p>
            </div>
            <p class="text-sm text-[#131313]/60 dark:text-[#f9f9f9]/60">
              Обычно отвечаю в течение дня
            </p>
          </div>
        </div>
      </div>
      <div class="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-gradient-to-br from-[#ff7a18]/25 via-[#af002d]/15 to-[#319197]/0 blur-3xl opacity-80"></div>
    </section>

    <section class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <a
        href="https://t.me/fire83274"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-black/5 via-black/0 to-black/20 dark:from-white/5 dark:via-white/0 dark:to-white/10 p-5 flex flex-col gap-3 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0px_0px_13px_-7px] hover:shadow-black dark:hover:shadow-white"
      >
        <div class="flex items-center justify-between">
          <p class="uppercase text-xs tracking-[0.2em] text-[#131313]/50 dark:text-[#f9f9f9]/50">telegram</p>
          <Icon name="logos:telegram" class="text-2xl" />
        </div>
        <p class="text-lg text-[#131313] dark:text-[#f9f9f9]">@fire83274</p>
        <p class="text-sm text-[#131313]/60 dark:text-[#f9f9f9]/60">Быстрые обсуждения и удобная связь.</p>
      </a>

      <div class="rounded-xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-black/5 via-black/0 to-black/20 dark:from-white/5 dark:via-white/0 dark:to-white/10 p-5 flex flex-col gap-3">
        <div class="flex items-center justify-between">
          <p class="uppercase text-xs tracking-[0.2em] text-[#131313]/50 dark:text-[#f9f9f9]/50">формат работы</p>
          <Icon name="material-symbols:schedule-outline-rounded" class="text-2xl text-[#131313]/80 dark:text-[#f9f9f9]/80" />
        </div>
        <p class="text-lg text-[#131313] dark:text-[#f9f9f9]">Remote · Full focus</p>
        <p class="text-sm text-[#131313]/60 dark:text-[#f9f9f9]/60">Связь в мессенджерах, прозрачные этапы, дедлайны без хаоса.</p>
      </div>
    </section>

    <section class="border-y border-black/10 dark:border-white/10 py-8 lg:py-10">
      <div class="flex max-lg:flex-col lg:items-center justify-between gap-6">
        <div class="flex flex-col gap-3">
          <p class="text-xl md:text-2xl lg:text-3xl uppercase">Обсудим проект в Telegram</p>
          <p class="text-[#131313]/60 dark:text-[#f9f9f9]/60 max-w-2xl">
            Напишите коротко про задачу, сроки и референсы. Я отвечу с предложением по этапам работы.
          </p>
        </div>
        <a
          href="https://t.me/fire83274"
          target="_blank"
          rel="noopener noreferrer"
          class="cursor-pointer flex items-center gap-4 w-fit rounded-full relative p-2 group"
        >
          <Icon name="material-symbols:arrow-forward-ios-rounded" class="text-lg z-10 dark:text-[#131313] text-[#f9f9f9]" />
          <span class="uppercase text-sm tracking-widest z-10 transition-colors duration-500 group-hover:dark:text-[#131313] group-hover:text-[#f9f9f9]">
            Написать в Telegram
          </span>
          <span class="absolute rounded-full dark:bg-[#f9f9f9] bg-[#131313] h-full w-9 z-0 left-0 top-0 transition-all duration-500 group-hover:w-full"></span>
        </a>
      </div>
    </section>
  </div>
</template>
