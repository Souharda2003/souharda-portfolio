function FloatingCard({
  card,
  mouseX,
  mouseY
}) {
  const moveX = mouseX * card.speed;
  const moveY = mouseY * card.speed;
  return(
    <div
      className="floating-card-wrapper"
      style={{
        top: card.top,
        bottom: card.bottom,
        left: card.left,
        right: card.right,
        transform: `translate3d(${moveX}px, ${moveY}px, 0)`
      }}
    >
      <div
        className="floating-card"
        style={{
          animationDelay: card.delay
        }}
      >
        <div className="floating-icon">
          {card.icon}
        </div>
        <div>
          <h4>{card.title}</h4>
          <span>{card.subtitle}</span>
        </div>
      </div>
    </div>
  );
}
export default FloatingCard;