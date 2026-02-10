<template>
    <div class="flex flex-col gap-6 lg:gap-8">
        <div class="flex flex-col gap-1">
            <p class="text-xl md:text-2xl lg:text-3xl uppercase">Варианты сотрудничества</p>
            <p class="text-xs uppercase tracking-[0.025em] text-[#131313]/50 dark:text-[#f9f9f9]/50">Здесь вы можете ознакомиться с предоставляемыми услугами</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
            <div class="relative p-4 border border-white/10 bg-gradient-to-br from-black/5 via-black/0 to-black/20 dark:from-white/5 dark:via-white/0 dark:to-white/10 flex flex-col gap-4 text-lg rounded-xl transition-all duration-500 group hover:shadow-[0px_0px_13px_-7px] hover:shadow-black dark:hover:shadow-white">
                <p class="absolute top-6 right-6 opacity-5 text-4xl z-0 text-white">01</p>
                <Icon name="lucide:layers" class="text-3xl opacity-60 transition-all duration-500 group-hover:opacity-100"/>            
                <p class="uppercase text-xs tracking-[0.25em] text-[#131313]/50 dark:text-[#f9f9f9]/50">Вёртска сайтов</p>
                <ul class="list-inside list-disc">
                    <li>Создание сайта по вашему макету</li>
                    <li>Использование TailwindCSS для написания стилей</li>
                    <li>Адаптивность под мобильные устройства</li>
                </ul>
            </div>
            <div class="relative p-4 border border-white/10 bg-gradient-to-br from-black/5 via-black/0 to-black/20 dark:from-white/5 dark:via-white/0 dark:to-white/10 flex flex-col gap-4 text-lg rounded-xl transition-all duration-500 group hover:shadow-[0px_0px_13px_-7px] hover:shadow-black dark:hover:shadow-white">
                <p class="absolute top-6 right-6 opacity-5 text-4xl z-0 text-white">02</p>
                <Icon name="ph:brain-bold" class="text-3xl opacity-60 transition-all duration-500 group-hover:opacity-100"/>            
                <p class="uppercase text-xs tracking-[0.25em] text-[#131313]/50 dark:text-[#f9f9f9]/50">Фронтенд</p>
                <ul class="list-inside list-disc">
                    <li>Создание логики сайта </li>
                    <li>Использование JS, Jquery, Vue, Nuxt</li>
                    <li>Валидность кода</li>
                </ul>
            </div>
            <div class="relative p-4 border border-white/10 bg-gradient-to-br from-black/5 via-black/0 to-black/20 dark:from-white/5 dark:via-white/0 dark:to-white/10 flex flex-col gap-4 text-lg rounded-xl transition-all duration-500 group hover:shadow-[0px_0px_13px_-7px] hover:shadow-black dark:hover:shadow-white">
                <p class="absolute top-6 right-6 opacity-5 text-4xl z-0 text-white">03</p>
                <Icon name="material-symbols:error" class="text-3xl opacity-60 transition-all duration-500 group-hover:opacity-100"/>            
                <p class="uppercase text-xs tracking-[0.25em] text-[#131313]/50 dark:text-[#f9f9f9]/50">Сопровождение сайтов</p>
                <ul class="list-inside list-disc">
                    <li>Обсуждение вопросов по сайту</li>
                    <li>Устранение ошибок</li>
                    <li>Временный хостинг на GitHub/Vercel</li>
                </ul>
            </div>
        </div>  
    </div>
</template>