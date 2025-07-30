import { ref } from 'vue'

const THEME_ATTR = 'data-theme'
const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
} as const

type Theme = (typeof THEMES)[keyof typeof THEMES]

const container = document.getElementById('app') as HTMLElement
const transition = document.getElementById('theme-transition-clip') as HTMLElement

function getTheme(): Theme {
  return localStorage.theme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.DARK : THEMES.LIGHT)
}

function animateThemeChange(newTheme: Theme, onComplete: () => void) {
  container.classList.add('no-theme-transition')
  transition.setAttribute(THEME_ATTR, newTheme)

  const scrollY = window.scrollY
  const clone = container.cloneNode(true) as HTMLElement
  clone.style.position = 'fixed'
  clone.style.top = '0'
  clone.style.left = '0'
  clone.style.width = '100%'
  clone.style.height = `${container.scrollHeight}px`
  clone.style.pointerEvents = 'none'
  clone.style.overflow = 'hidden'
  clone.style.transform = `translateY(-${scrollY}px)`
  clone.removeAttribute(THEME_ATTR)

  transition.appendChild(clone)
  transition.classList.add('theme-animation')

  const syncScroll = () => (clone.style.transform = `translateY(-${window.scrollY}px)`)
  window.addEventListener('scroll', syncScroll, { passive: true })
  setTimeout(() => {
    window.removeEventListener('scroll', syncScroll)
    transition.classList.remove('theme-animation')
    transition.removeChild(clone)
    onComplete()
    requestAnimationFrame(() => {
      container.classList.remove('no-theme-transition')
    })
  }, 600)
}

export function useTheme() {
  const isThemeChanging = ref<boolean>(false)

  const applyTheme = (theme: Theme) => {
    container.setAttribute(THEME_ATTR, theme)
  }

  const toggleTheme = () => {
    if (isThemeChanging.value) return
    isThemeChanging.value = true

    const currentTheme = getTheme()
    const newTheme: Theme = currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT

    animateThemeChange(newTheme, () => {
      localStorage.theme = newTheme
      applyTheme(newTheme)
      setTimeout(() => {
        isThemeChanging.value = false
      }, 100)
    })
  }

  const initTheme = () => {
    const theme = getTheme()
    applyTheme(theme)
  }

  return {
    applyTheme,
    toggleTheme,
    initTheme
  }
}
