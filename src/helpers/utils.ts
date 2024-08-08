const debounce = <Args extends unknown[]>(
  func: (...args: Args) => unknown,
  wait = 300,
) => {
  let timeoutId: ReturnType<typeof setTimeout>
  return (...args: Args): void => {
    const later = () => {
      clearTimeout(timeoutId)
      func(...args)
    }
    clearTimeout(timeoutId)
    timeoutId = setTimeout(later, wait)
  }
}

export default debounce;
