<template>
    <div class="flex flex-col gap-2 md:gap-4 lg:gap-6">
        <NuxtLink :to="link" target="_blank">
            <img :src="img" alt="" class="w-full rounded-xl aspect-video object-cover"/>
        </NuxtLink>
        <div class="flex items-center gap-2">
            <p v-for="tag in tags" class="px-4 py-1 rounded-full opacity-60 border border-[#131313] dark:border-[#f9f9f9] shrink-0">{{ tag }}</p>
        </div>
        <div class="flex items-center justify-between">
            <p class="uppercase text-lg">{{ title }}</p>
            <NuxtLink :to="link" target="_blank" class="opacity-60 duration-500 transition-all hover:opacity-100 hover:-translate-y-2 hover:scale-110">
                <Icon name="material-symbols:arrow-outward-rounded" class="text-3xl"/>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
    defineProps({title: String, link: String, img: String, tags: Array})   
</script>