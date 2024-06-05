import React from "react";

interface Movie {
    title: string;
    cast: string[];
    plot: string;
}

interface Props {
    isOpen: boolean;
    movie: Movie | null;
    onClose: () => void;
}

const MovieDetailsPopin: React.FC<Props> = ({ isOpen, movie, onClose }) => {
    if (!isOpen || !movie) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-8 max-w-md">
                <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
                <p className="text-gray-700 mb-4">{movie.plot}</p>
                <p className="text-gray-600">Cast : {movie.cast.join(", ")}</p>                    
                <button className="mt-4 bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default MovieDetailsPopin;
