import { ref, watch } from 'vue'
import { useWindowScroll } from '@vueuse/core'

export const useHeaderScroll = () => {
  const isMenuColor = ref(false)
  const isScrollDown = ref(false)
  const { y } = useWindowScroll()

  watch(y, (newY, oldY) => {
    isScrollDown.value = newY > 100 && newY > oldY
    isMenuColor.value = newY > 100
  })

  return { isMenuColor, isScrollDown }
}