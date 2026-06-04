export default function Container({ children, className = '' }) {
  return (
    <div className={`container-hero ${className}`}>
      {children}
    </div>
  )
}