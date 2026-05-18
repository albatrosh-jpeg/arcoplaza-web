import AnimatedReveal from './AnimatedReveal'

export default function StaggerGrid({
  items,
  renderItem,
  className = '',
  stagger = 0.08
}) {

  return (

    <div className={className}>

      {items.map((item, index) => (

        <AnimatedReveal
          key={item.title || item.number || index}
          delay={index * stagger}
        >

          {renderItem(item, index)}

        </AnimatedReveal>

      ))}

    </div>

  )

}