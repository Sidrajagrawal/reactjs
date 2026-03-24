import styles from './AllRecipies.module.css';
import Card from './Card';

function AllRecipies({ data = [], query }) {

    const filteredData = query
        ? data.filter((item) => {
            const nameMatch = item.name.toLowerCase().includes(query);

            const ingredientMatch = item.ingredients.some((ing) =>
                ing.toLowerCase().includes(query)
            );

            const mealTypeMatch = item.mealType.some((type) =>
                type.toLowerCase().includes(query)
            );

            return nameMatch || ingredientMatch || mealTypeMatch;
        }
        )
        : data;

    return (
        <div className={styles.AllRecipiesMain}>
            <div className={styles.cards}>
                {filteredData.length > 0 ? (
                    filteredData.map((item, idx) => (
                        <Card
                            key={idx}
                            image={item.image}
                            dishName={item.name}
                            rating={item.rating}
                            ingredients={item.ingredients}
                            mealType={item.mealType}
                        />
                    ))
                ) : (
                    <p className={styles.noResult}>No recipes found </p>
                )}
            </div>
        </div>
    );
}

export default AllRecipies;