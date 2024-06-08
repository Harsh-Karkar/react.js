import React from 'react'

const Home = () => {
    const logout = () => {
        localStorage.removeItem('signUp')
        window.location.reload()
    }

    const deleteAccount = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Home page</h1>
            <p className="text-lg mb-6">Welcome {localStorage.getItem('name')}</p>
            <div className="flex space-x-4">
                <button
                    onClick={logout}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                    Logout
                </button>
                <button
                    onClick={deleteAccount}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Home
