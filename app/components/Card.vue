<template>
    <NuxtLink :to="link" target="_blank" class="group flex flex-col gap-3 md:gap-4">
        <div class="overflow-hidden rounded-xl">
            <img :src="img" alt="" class="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-[1.02]"/>
        </div>
        <div class="flex flex-wrap items-center gap-2">
            <span v-for="tag in tags" class="px-3 py-1.5 text-xs uppercase tracking-wider rounded-full bg-[#131313]/8 dark:bg-[#f9f9f9]/8 text-[#131313]/70 dark:text-[#f9f9f9]/70 border border-[#131313]/10 dark:border-[#f9f9f9]/10">{{ tag }}</span>
        </div>
        <div class="flex items-center justify-between">
            <p class="uppercase text-base md:text-lg text-[#131313] dark:text-[#f9f9f9]">{{ title }}</p>
            <span class="flex h-9 w-9 items-center justify-center rounded-full border border-[#131313]/20 dark:border-[#f9f9f9]/20 text-[#131313]/60 dark:text-[#f9f9f9]/60 transition-all duration-300 group-hover:border-[#131313] dark:group-hover:border-[#f9f9f9] group-hover:text-[#131313] dark:group-hover:text-[#f9f9f9] group-hover:bg-[#131313]/5 dark:group-hover:bg-[#f9f9f9]/5  group-hover:-translate-y-2">
                <Icon name="material-symbols:link" class="text-xl"/>
            </span>
        </div>
    </NuxtLink>
</template>

<script setup>
    defineProps({ title: String, link: String, img: String, tags: Array })
</script>