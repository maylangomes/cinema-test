import React from "react";

interface DescriptionMovieProps {
    title: string;
    year: string;
    rating: string;
    genre: string;
    director: string;
}

const DescriptionMovie: React.FC<DescriptionMovieProps> = ({title, year, rating, genre, director}) => {
    return (
        <div className="flex flex-col justify-between p-4 w-full">
        <div className="md:mt-8 mt-4 md:text-left text-center">
            <h2 className="text-xl font-semibold mb-2 text-black-500 uppercase break-words">{title}</h2>
            <div className="flex flex-row justify-center md:justify-normal items-center md:items-start mb-2">
                <p className="text-xs text-black-500 border bg-yellow-200 rounded-md px-1 mr-3 mb-1 md:mb-0">{year}</p>
                <p className="text-xs text-black-500 border bg-yellow-200 rounded-md px-1 mr-3 mb-1 md:mb-0">{rating}</p>
                <p className="text-xs text-black-500 border bg-yellow-200 rounded-md px-1 break-words mb-1 md:mb-0">{genre}</p>
            </div>
        </div>
        <div className="md:text-left text-center">
            <p className="text-black-700 text-xs whitespace-normal md:mb-12 mb-4">
                Directed by : <span className="block md:inline font-extrabold">{director}</span>
            </p>
        </div>
    </div>
    );
};

export default DescriptionMovie;