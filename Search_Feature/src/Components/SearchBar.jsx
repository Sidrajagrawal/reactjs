function SearchBar({ setQuery }) {
    return (
        <div>
            <input type="text" placeholder="Search by Dish/Tag" onChange={(e) => setQuery(e.target.value)} />
        </div>
    )
}
export default SearchBar;