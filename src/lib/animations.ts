
export function handleSpotlightMouseMove(event: React.MouseEvent<HTMLElement>) {
  const element = event.currentTarget;
  const rect = element.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  
  element.style.setProperty('--x', `${x}px`);
  element.style.setProperty('--y', `${y}px`);
}

export function setupParallaxMouseMove(element: HTMLElement, strength: number = 0.05) {
  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;
    
    const offsetX = ((clientX - middleX) / middleX) * strength;
    const offsetY = ((clientY - middleY) / middleY) * strength;
    
    element.style.transform = `translate(${offsetX * 50}px, ${offsetY * 50}px)`;
  };
  
  window.addEventListener('mousemove', handleMouseMove);
  
  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
}

export function observeElementInView(
  element: HTMLElement, 
  callback: (inView: boolean) => void, 
  threshold: number = 0.1
) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      callback(entry.isIntersecting);
    },
    {
      threshold,
    }
  );
  
  observer.observe(element);
  
  return () => {
    observer.disconnect();
  };
}
