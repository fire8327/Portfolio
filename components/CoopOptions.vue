<template>
    <div class="flex flex-col items-center gap-6 lg:gap-8">
        <p class="text-2xl md:text-3xl lg:text-4xl uppercase text-center">Варианты сотрудничества</p>
        <p class="text-sm uppercase text-[#131313]/60 dark:text-[#f9f9f9]/60 text-center">
            Здесь вы можете ознакомиться с предоставляемыми услугами.
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
            <div class="relative p-4 border border-[#131313]/60 dark:border-[#f9f9f9]/60 flex flex-col gap-4 text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 cursor-pointer group">
                <p class="absolute top-6 right-6 text-4xl z-0 text-[#EDBC5A]">01</p>
                <Icon name="lucide:layers" class="text-3xl opacity-60 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-12 group-hover:text-[#EDBC5A] transition-all duration-300"/>            
                <p>Вёртска сайтов</p>
                <ul class="list-inside list-disc">
                    <li>Быстрая и качественная вёрстка по вашему дизайну</li>
                    <li>Современные стили с TailwindCSS</li>
                    <li>Прекрасно смотрится на любом устройстве</li>
                </ul>
            </div>
            <div class="relative p-4 border border-[#131313]/60 dark:border-[#f9f9f9]/60 flex flex-col gap-4 text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 cursor-pointer group">
                <p class="absolute top-6 right-6 text-4xl z-0 text-[#EDBC5A]">02</p>
                <Icon name="ph:brain-bold" class="text-3xl opacity-60 group-hover:opacity-100 group-hover:scale-125 group-hover:animate-pulse group-hover:text-[#EDBC5A] transition-all duration-300"/>            
                <p>Фронтенд</p>
                <ul class="list-inside list-disc">
                    <li>Реализую интерактивные элементы и анимации</li>
                    <li>Использую современные фреймворки (Vue, Nuxt)</li>
                    <li>Чистый и поддерживаемый код</li>
                </ul>
            </div>
            <div class="relative p-4 border border-[#131313]/60 dark:border-[#f9f9f9]/60 flex flex-col gap-4 text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 cursor-pointer group">
                <p class="absolute top-6 right-6 text-4xl z-0 text-[#EDBC5A]">03</p>
                <Icon name="material-symbols:error" class="text-3xl opacity-60 group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1 group-hover:text-[#EDBC5A] transition-all duration-300"/>            
                <p>Сопровождение сайтов</p>
                <ul class="list-inside list-disc">
                    <li>Обсуждение вопросов по сайту</li>
                    <li>Устранение ошибок</li>
                    <li>Временный хостинг на GitHub</li>
                </ul>
            </div>
        </div>  
    </div>
</template>