"use client"

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full p-4">
            <h1 className="text-2xl font-bold mb-4">
                Oops! Something went wrong.
            </h1>
            <p className="text-gray-600 mb-6">
                An unexpected error has occurred. Please try again later.
            </p>
        </div>
    )
}

export default Error
