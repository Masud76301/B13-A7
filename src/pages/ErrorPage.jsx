import React from 'react';
import { Link } from 'react-router';


const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
            <div className="text-center space-y-6">

                {/* Big 404 */}
                <h1 className="text-9xl font-extrabold text-primary tracking-widest">
                    404
                </h1>

                {/* Subtitle */}
                <p className="text-2xl md:text-3xl font-semibold text-gray-600">
                    Oops! Page not found
                </p>

                {/* Description */}
                <p className="text-gray-500 max-w-md mx-auto">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>

                {/* Buttons */}
                <div className="flex justify-center gap-4 mt-6">
                    <Link to="/" className="btn btn-primary px-6">
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="btn btn-outline px-6"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;