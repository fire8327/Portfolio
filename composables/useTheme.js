export const useTheme = () => {
  const colorMode = useColorMode()

  const toggleTheme = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }

  return {
    isDark: computed(() => colorMode.value === 'dark'),
    toggleTheme
  }
}