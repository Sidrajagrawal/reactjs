function Home({ children }) {
    console.log(children);

    return (
        <>
        {children()}
        </>
    )
}
export default Home;