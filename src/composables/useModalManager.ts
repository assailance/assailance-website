import { ref } from 'vue'

interface IModalInstance {
  id: symbol
  handleKeyDown: (e: KeyboardEvent) => void
}

export const modalStack = ref<IModalInstance[]>([])

export const useModalManager = () => {
  const modalId = Symbol()

  const registerModal = (handleKeyDown: (e: KeyboardEvent) => void) => {
    modalStack.value.push({ id: modalId, handleKeyDown })
  }

  const unregisterModal = () => {
    const modalIndex = modalStack.value.findIndex(modal => modal.id === modalId)
    modalStack.value.splice(modalIndex, 1)
  }

  return { registerModal, unregisterModal }
}
