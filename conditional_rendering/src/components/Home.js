import { useState } from "react";
import AppleBasket from "./AppleBasket";
import Button from "./Button";
import './Home.css'

function Home() {
    const totalCnt = 10;
    const [leftCnt, setLeftCnt] = useState(0);
    const [rightCnt, setRightCnt] = useState(totalCnt - leftCnt);
    const leftArrow = 'https://cdn-icons-png.flaticon.com/512/109/109618.png';
    const RightArrow = 'https://cdn-icons-png.flaticon.com/512/3031/3031716.png'

    const handleLeftClick = () => {
        if (rightCnt > 0) {
            setLeftCnt((prev) => prev + 1);
            setRightCnt((prev) => prev - 1);
        }
    }
    const handleRightClick = () => {
        if (leftCnt > 0) {
            setLeftCnt((prev) => prev - 1);
            setRightCnt((prev) => prev + 1);
        }
    }

    return (
        <div className="main">
            <div className="AppleBasket-1">
                <AppleBasket AppleCnt={leftCnt} BasketName={'Basket 1'}></AppleBasket>
            </div>
            <div className="btn">
                <Button imgSrc={leftArrow} clickhandler={handleLeftClick}></Button>
                <Button imgSrc={RightArrow} clickhandler={handleRightClick}></Button>
            </div>
            <div className="AppleBasket-1">
                <AppleBasket AppleCnt={rightCnt} BasketName={'Basket 2'}></AppleBasket>
            </div>
        </div>
    )
}
export default Home;