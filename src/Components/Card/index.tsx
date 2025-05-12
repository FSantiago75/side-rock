import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function Card({ children, className, style }: CardProps) {
  return (
    <div className={`${styles.card} ${className || ''}`} style={style}>
      {children}
    </div>
  );
}

export default Card; 