import './HomeShimmer.css';

function HomeShimmer() {
    return (
        <div className="container">
            {Array(30).fill("").map((_, index) => (
                <div className="shimmer-card" key={index}>
                    <div className="shimmer shimmer-flag"></div>
                    <div className="shimmer shimmer-title"></div>
                    <div className="shimmer shimmer-text"></div>
                    <div className="shimmer shimmer-text"></div>
                </div>
            ))}
        </div>
    );
}

export default HomeShimmer;