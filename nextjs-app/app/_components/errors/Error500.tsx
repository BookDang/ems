const Error500 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-full bg-gray-100/20">
            <h1 className="text-6xl font-bold text-light-orange-ems">500</h1>
            <p className="mt-4 text-2xl text-gray-700">Internal Server Error</p>
            <p className="mt-2 text-gray-600">
                Oops! Something went wrong on our end. Please try again later.
            </p>
        </div>
    )
}

export default Error500
