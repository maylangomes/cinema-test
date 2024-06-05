import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import bg from '../../../../public/movie.jpg';
import LogoTitleDesktop from "../molecules/LogoTitleDesktop";
import LogoTitleMobile from "../molecules/LogoTitleMobile";
import ImageMovie from "../atoms/ImageMovie";
import DescriptionMovie from "../atoms/DescriptionMovie";
import ButtonDescription from "../atoms/ButtonDescription";
import MovieDetailsPopin from "../atoms/MovieDetailsPopin";

const DisplayMovie = () => {
    const [movies, setMovies] = useState<any[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/movies");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setMovies(data);
            } catch (error) {
                console.error("Failed to fetch movies:", error);
            }
        };

        fetchData();
    }, []);

    const openModal = (movie: any) => {
        setSelectedMovie(movie);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="h-screen md:flex">
            <LogoTitleDesktop/>
            <LogoTitleMobile/>
            <div style={{
                    backgroundImage: `url(${bg.src})`,
                    width: '100%',
                    height: '100%',
                }} className="relative w-full md:w-2/3 h-full overflow-y-auto">
                <div className="relative z-10 grid grid-cols-1 xl:grid-cols-2 gap-8 mr-3 ml-4 sm:mr-6 sm:ml-16 py-8">
                    {movies.map((movie, index) => (
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            key={index}
                            className="bg-gray-200 opacity-95 rounded-md shadow-xl flex flex-col md:flex-row relative"
                        >
                            <ImageMovie src={movie.poster} alt={movie.title} />
                            <DescriptionMovie title={movie.title} year={movie.year} rating={movie.rating} genre={movie.genre} director={movie.director} />
                            <ButtonDescription onClick={() => openModal(movie)}/>
                        </motion.div>
                    ))}
                </div>
            </div>
            <MovieDetailsPopin isOpen={isModalOpen} movie={selectedMovie} onClose={closeModal} />
        </div>
    );
};

export default DisplayMovie;
