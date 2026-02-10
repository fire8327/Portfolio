<template>
    <div class="col-span-full w-full py-8 md:py-10 lg:py-12 bg-[#efefef] dark:bg-[#191919] flex flex-col items-center text-center gap-6 md:gap-8 lg:gap-10">
        <p class="text-xl md:text-2xl lg:text-3xl uppercase max-w-xl">Давайте создадим <br> <span class="italic font-light">нечто крутое</span> вместе</p>
        <NuxtLink to="/feedback" class="flex items-center gap-4 w-fit rounded-full relative p-2 group">
            <Icon name="material-symbols:arrow-forward-ios-rounded" class="text-lg z-10 dark:text-[#131313] text-[#f9f9f9]"/>
            <span class="uppercase text-sm tracking-widest z-10 transition-colors duration-500 group-hover:dark:text-[#131313] group-hover:text-[#f9f9f9]">Начать проект</span>
            <span class="absolute rounded-full dark:bg-[#f9f9f9] bg-[#131313] h-full w-9 z-0 left-0 top-0 transition-all duration-500 group-hover:w-full"></span>
        </NuxtLink>
    </div>
</template>