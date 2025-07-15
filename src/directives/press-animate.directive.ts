import type { Directive } from 'vue'

export const pressAnimate: Directive = {
  mounted(el) {
    if (!el.classList.contains('no-press')) {
      const addPress = () => el.classList.add('pressed')
      const removePress = () => el.classList.remove('pressed')

      // mouse events
      el.addEventListener('mousedown', addPress)
      el.addEventListener('mouseup', removePress)
      el.addEventListener('mouseleave', removePress)

      // touch events
      el.addEventListener('touchstart', addPress)
      el.addEventListener('touchend', removePress)
      el.addEventListener('touchcancel', removePress)
    }
  },

  unmounted(el) {
    el.classList.remove('pressed')
  }
}
