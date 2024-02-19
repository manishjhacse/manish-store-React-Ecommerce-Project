import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProductCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images?.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images?.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="w-full border max-w-[1080px] flex relative">
            <div className="h-[500px] w-[500px] flex">
                {images?.map((image, index) => (
                    <img key={index} src={image} className={`w-full ${index !== currentIndex ? "hidden" : ""} object-fit`} />
                ))}
            </div>
            <button className="absolute top-0 bottom-0 left-0 flex items-center text-gray-500 px-2" onClick={handlePrev}>
                <FaArrowLeft />
            </button>
            <button className="absolute top-0 bottom-0 right-0 flex items-center  text-gray-500 px-2" onClick={handleNext}>
                <FaArrowRight />
            </button>
        </div>
    );
};

export default ProductCarousel;
