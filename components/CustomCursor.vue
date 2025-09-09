<template>
  <div 
    ref="cursor" 
    class="fixed w-5 h-5 rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out bg-[#131313]/60 dark:bg-[#EDBC5A]"
    :class="cursorClasses"
  ></div>
  <div 
    ref="cursorFollower" 
    class="fixed w-10 h-10 rounded-full pointer-events-none z-[9998] transition-all duration-150 ease-out opacity-30 border-2 border-[#131313]/60 dark:border-[#EDBC5A]"
    :class="followerClasses"
  ></div>
</template>

<script setup>
// Константы
const CURSOR_SIZE = 20
const FOLLOW_SPEED = 0.1
const INTERACTIVE_SELECTORS = 'a, button, [role="button"], .group'

// Refs для DOM элементов
const cursor = ref(null)
const cursorFollower = ref(null)

// Состояния курсора
const isHovering = ref(false)
const isClicking = ref(false)

// Позиции мыши (используем let для производительности)
let mouseX = 0
let mouseY = 0
let followerX = 0
let followerY = 0

// Реактивные классы для курсора
const cursorClasses = computed(() => {
  const hoverClasses = isHovering.value ? 'scale-150 mix-blend-normal' : ''
  const clickClasses = isClicking.value ? 'scale-80' : ''
  
  return `${hoverClasses} ${clickClasses}`.trim()
})

// Реактивные классы для второго курсора
const followerClasses = computed(() => {
  const hoverClasses = isHovering.value ? 'scale-50 opacity-80' : ''
  const clickClasses = isClicking.value ? 'scale-120 opacity-100' : ''
  
  return `${hoverClasses} ${clickClasses}`.trim()
})

const updateCursor = () => {
  if (cursor.value && cursorFollower.value) {
    // Основной курсор следует за мышью точно
    cursor.value.style.left = mouseX + 'px'
    cursor.value.style.top = mouseY + 'px'
    
    // Второй курсор следует с задержкой
    followerX += (mouseX - followerX) * FOLLOW_SPEED
    followerY += (mouseY - followerY) * FOLLOW_SPEED
    
    cursorFollower.value.style.left = followerX + 'px'
    cursorFollower.value.style.top = followerY + 'px'
  }
  
  requestAnimationFrame(updateCursor)
}

const handleMouseMove = (e) => {
  mouseX = e.clientX - CURSOR_SIZE / 2 // Центрируем курсор
  mouseY = e.clientY - CURSOR_SIZE / 2
}

const handleMouseOver = (e) => {
  if (e.target.closest(INTERACTIVE_SELECTORS)) {
    isHovering.value = true
    // Скрываем стандартный курсор для интерактивных элементов
    e.target.style.cursor = 'none'
  }
}

const handleMouseOut = (e) => {
  if (e.target.closest(INTERACTIVE_SELECTORS)) {
    isHovering.value = false
    // Восстанавливаем скрытие курсора
    e.target.style.cursor = 'none'
  }
}

const handleMouseDown = () => {
  isClicking.value = true
}

const handleMouseUp = () => {
  isClicking.value = false
}

onMounted(() => {
  // Скрываем стандартный курсор для всего документа
  document.documentElement.style.cursor = 'none'
  document.body.style.cursor = 'none'
  
  // Добавляем CSS правило для скрытия курсора на интерактивных элементах
  const style = document.createElement('style')
  style.setAttribute('data-custom-cursor', 'true')
  style.textContent = `
    a, button, [role="button"], .group, .group * {
      cursor: none !important;
    }
  `
  document.head.appendChild(style)
  
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseover', handleMouseOver)
  document.addEventListener('mouseout', handleMouseOut)
  document.addEventListener('mousedown', handleMouseDown)
  document.addEventListener('mouseup', handleMouseUp)
  
  updateCursor()
})

onUnmounted(() => {
  // Восстанавливаем стандартный курсор
  document.documentElement.style.cursor = 'auto'
  document.body.style.cursor = 'auto'
  
  // Удаляем добавленный стиль
  const addedStyle = document.querySelector('style[data-custom-cursor]')
  if (addedStyle) {
    addedStyle.remove()
  }
  
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseover', handleMouseOver)
  document.removeEventListener('mouseout', handleMouseOut)
  document.removeEventListener('mousedown', handleMouseDown)
  document.removeEventListener('mouseup', handleMouseUp)
})
</script>
