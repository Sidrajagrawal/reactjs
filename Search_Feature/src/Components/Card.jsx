import styles from './Card.module.css';

function Card({ image, dishName, rating, ingredients, mealType }) {
    return (
        <div className={styles.cardMain}>
            <div className={styles.Image}>
                <img src={image} alt={dishName} />
            </div>

            <div className={styles.cardContent}>
                <div className={styles.dishName}>{dishName}</div>

                <div className={styles.rating}>⭐ {rating}</div>

                <div className={styles.ingredients}>
                    {ingredients.join(", ")}
                </div>

                <div className={styles.mealType}>
                    {mealType.map((item, idx) => (
                        <span key={idx} className={styles.tag}>
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Card;