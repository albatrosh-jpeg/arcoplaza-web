export default function AnimatedReveal({
  children,
  delay = 0,
  y = 12,
  duration = 0.38
}) {

  return (

    <div
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transform: `translateY(${0 * y}px)`
      }}
    >

      {children}

    </div>

  )

}
