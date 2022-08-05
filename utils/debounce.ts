export const debounceTeste = (fn: any, delay: number) => {
  let timer: any = null;

  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn();
    }, delay);
  }
}