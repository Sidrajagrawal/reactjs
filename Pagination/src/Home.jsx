import { useEffect, useState, useMemo } from "react";

function Home() {
    const API = "https://dummyjson.com/users";
    const itemsPerPage = 5;

    const [userData, setUserData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    // Fetch Data
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const res = await fetch(API);
                const data = await res.json();
                setUserData(data.users);
            } catch (err) {
                console.error("Error fetching users:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    // Total pages
    const totalPages = Math.ceil(userData.length / itemsPerPage);

    // Paginated Data (Derived State)
    const paginatedData = useMemo(() => {
        const start = (page - 1) * itemsPerPage;
        return userData.slice(start, start + itemsPerPage);
    }, [userData, page]);

    // Handlers
    const goToPage = (p) => {
        if (p < 1 || p > totalPages) return;
        setPage(p);
    };

    const nextPage = () => goToPage(page + 1);
    const prevPage = () => goToPage(page - 1);

    if (loading) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                User List
            </h2>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-green-500 text-white">
                        <tr>
                            <th className="py-3 px-4 text-left">Id</th>
                            <th className="py-3 px-4 text-left">Username</th>
                            <th className="py-3 px-4 text-left">Full Name</th>
                            <th className="py-3 px-4 text-left">Email</th>
                            <th className="py-3 px-4 text-left">Phone</th>
                        </tr>
                    </thead>

                    <tbody className="text-gray-700">
                        {paginatedData.map((user, index) => (
                            <tr
                                key={user.id}
                                className={`border-b hover:bg-gray-100 transition ${
                                    index % 2 === 0
                                        ? "bg-gray-50"
                                        : "bg-white"
                                }`}
                            >
                                <td className="py-3 px-4">{user.id}</td>
                                <td className="py-3 px-4">
                                    {user.username}
                                </td>
                                <td className="py-3 px-4">
                                    {user.firstName} {user.lastName}
                                </td>
                                <td className="py-3 px-4">{user.email}</td>
                                <td className="py-3 px-4">{user.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="mt-6 flex justify-center items-center gap-2 flex-wrap">
                {/* Prev */}
                <button
                    onClick={prevPage}
                    disabled={page === 1}
                    className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
                >
                    Previous
                </button>

                {/* Page Numbers */}
                {[...Array(totalPages)].map((_, idx) => {
                    const pageNumber = idx + 1;
                    return (
                        <button
                            key={idx}
                            onClick={() => goToPage(pageNumber)}
                            className={`px-3 py-1 rounded ${
                                page === pageNumber
                                    ? "bg-green-500 text-white"
                                    : "bg-gray-200"
                            }`}
                        >
                            {pageNumber}
                        </button>
                    );
                })}

                {/* Next */}
                <button
                    onClick={nextPage}
                    disabled={page === totalPages}
                    className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Home;