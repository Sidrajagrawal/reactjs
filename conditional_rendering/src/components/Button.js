function Button({ imgSrc, clickhandler }) {
    return (
        <button onClick={clickhandler}>
            <img src={imgSrc} width={'40px'}></img>
        </button>

    )
}
export default Button;