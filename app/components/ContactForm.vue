<template>
  <slot name="trigger" :open-modal="openModal">
    <button type="button" class="cursor-pointer flex items-center gap-4 w-fit rounded-full relative p-2 group" @click="openModal">
      <Icon name="material-symbols:arrow-forward-ios-rounded" class="text-lg z-10 dark:text-[#131313] text-[#f9f9f9]" />
      <span class="uppercase text-sm tracking-widest z-10 transition-colors duration-500 group-hover:dark:text-[#131313] group-hover:text-[#f9f9f9]">
        Открыть форму
      </span>
      <span class="absolute rounded-full dark:bg-[#f9f9f9] bg-[#131313] h-full w-9 z-0 left-0 top-0 transition-all duration-500 group-hover:w-full"></span>
    </button>
  </slot>

  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 px-4 py-6 md:py-10 flex items-center justify-center"
    >
      <div @click.self="closeModal" class="absolute inset-0 bg-[#131313]/60 backdrop-blur-sm"></div>
      <div class="relative w-full max-w-2xl rounded-2xl border border-black/10 dark:border-white/10 bg-[#f9f9f9] dark:bg-[#131313] p-4 md:p-6 flex flex-col gap-5">
        <div class="flex items-start justify-between gap-3">
          <div class="flex flex-col gap-2">
            <p class="text-xl md:text-2xl uppercase text-[#131313] dark:text-[#f9f9f9]">Оставьте заявку</p>
            <p class="text-[#131313]/60 dark:text-[#f9f9f9]/60">
              Расскажите коротко о проекте, и я вернусь с ответом в Telegram.
            </p>
          </div>
          <button
            type="button"
            aria-label="Закрыть форму"
            class="shrink-0 h-9 w-9 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center transition-all duration-300 hover:opacity-80"
            @click="closeModal"
          >
            <Icon name="material-symbols:close-rounded" class="text-xl text-[#131313] dark:text-[#f9f9f9]" />
          </button>
        </div>

        <form class="flex flex-col gap-3 text-[#131313] dark:text-[#f9f9f9]">
          <input
            type="text"
            placeholder="Ваше имя"
            class="rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] px-4 py-3 outline-none transition-all duration-300 focus:border-[#af002d]/60 dark:focus:border-[#af002d]/60"
          >
          <input
            type="text"
            placeholder="Telegram"
            class="rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] px-4 py-3 outline-none transition-all duration-300 focus:border-[#af002d]/60 dark:focus:border-[#af002d]/60"
          >
          <textarea
            rows="5"
            placeholder="Коротко опишите задачу"
            class="rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] px-4 py-3 outline-none resize-none transition-all duration-300 focus:border-[#af002d]/60 dark:focus:border-[#af002d]/60"
          ></textarea>

          <!-- поменять -->
          <button @click="closeModal" type="button" class="cursor-pointer flex items-center self-start gap-4 w-fit rounded-full relative p-2 group">
            <Icon name="material-symbols:arrow-forward-ios-rounded" class="text-lg z-10 dark:text-[#131313] text-[#f9f9f9]" />
            <span class="uppercase text-sm tracking-widest z-10 transition-colors duration-500 text-[#131313] dark:text-[#f9f9f9] group-hover:dark:text-[#131313] group-hover:text-[#f9f9f9]">
              Отправить заявку
            </span>
            <span class="absolute rounded-full dark:bg-[#f9f9f9] bg-[#131313] h-full w-9 z-0 left-0 top-0 transition-all duration-500 group-hover:w-full"></span>
          </button>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const isOpen = ref(false)

function openModal() {
  isOpen.value = true
}

function closeModal() {
  isOpen.value = false
}

function onKeydown(event) {
  if (event.key === 'Escape' && isOpen.value) {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>
