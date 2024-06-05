import Image from "next/image";
import React from "react";

interface ImageMovieProps {
    src: string;
    alt: string;
}

const ImageMovie: React.FC<ImageMovieProps> = ({src, alt}) => {
    return (
        <div className="flex-shrink-0 p-4 pt-10 md:pt-4 w-full md:w-36">
            <Image src={src} alt={alt} priority width={200} height={300} className="mx-auto md:mx-0" />
        </div>
    );
};

export default ImageMovie;