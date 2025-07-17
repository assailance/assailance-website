export const goToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId) as HTMLElement
  window.scrollTo({
    top: section.offsetTop || 0,
    behavior: 'smooth'
  })
}
