'use client';
import React, { useState, useEffect } from 'react';

const carouselData = [
    {
        id: 'erp-consulting',
        icon: "images/Erp.png",
        title: "ERP Consulting Services",
        description: "AlgorithmX's team of expert ERP consultants carefully analyze your business environment and understand your strategic business needs and goals. With our ERP consulting services, we work on creating and implementing necessary strategies to deploy ERP software."
    },
    {
        id: 'custom-erp',
        icon: "images/Erp.png",
        title: "Custom ERP Solutions",
        description: "We offer custom ERP software development services for businesses of all sizes and industries. By building robust and flexible systems, we provide essential data analytics that can be accessed through mobile phones, web or any other in-house platforms."
    },
    {
        id: 'erp-implementation',
        icon: "images/Erp.png",
        title: "ERP Implementation Services",
        description: "Our team at AlgorithmX offers exceptional ERP implementation services where we manage the deployment process for your personalized servers, networks, and data management programs from beginning to end, guaranteeing your data remains intact as it is essential to properly implement the high-quality ERP business solutions to deliver their potential."
    },
    {
        id: 'erp-development',
        icon: "images/Erp.png",
        title: "ERP Application Development",
        description: "Being the top ERP development company in USA, expert ERP developers leverage the most advanced programming languages and industry technologies when they build customized cloud ERP solutions that meet your specific business needs for all platforms."
    },
    {
        id: 'managed-erp',
        icon: "images/Erp.png",
        title: "Managed ERP Services",
        description: "Free up resources and time for focusing on core operations by using our ERP managed services. Our talented ERP software consultants offer management, monitoring, assistance, for your ERP system, thereby addressing, resolving and averting any issues effectively."
    },
    {
        id: 'staff-augmentation',
        icon: "images/Erp.png",
        title: "Staff Augmentation",
        description: "If you're not sure about outsourcing your custom enterprise software development and lean more towards building your in-house team, our premier ERP development company provides outstanding ERP staff augmentation services that allow you to hire talented and experienced professionals who are critical to the success of your project."
    }
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const totalItems = carouselData.length;

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? totalItems - 1 : prevIndex - 1
        );
    };

    const getVisibleItems = () => {
        if (isMobile) {
            return [{ ...carouselData[currentIndex], index: currentIndex }];
        }
        const items = [];
        const totalVisible = 5;
        const start = currentIndex - 2;
        for (let i = 0; i < totalVisible; i++) {
            let index = (start + i + totalItems) % totalItems;
            items.push({ ...carouselData[index], index });
        }
        return items;
    };

    const getItemStyle = (position) => {
        if (isMobile) return 'opacity-100 scale-100 z-20';
        const isCenter = position === 0;
        const isAdjacent = Math.abs(position) === 1;
        const isOuter = Math.abs(position) === 2;

        return `${isCenter ? 'z-20 opacity-100 scale-100' : ''} 
                ${isAdjacent ? 'z-10 opacity-80 scale-90' : ''} 
                ${isOuter ? 'z-0 opacity-30 scale-70' : ''}`;
    };

    const visibleItems = getVisibleItems();

    return (
        <div className="w-full mx-auto px-4 py-8 bg-black relative">
            <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-12">
                Custom ERP Services
            </h1>
            <div className="relative flex items-center justify-center w-full h-[500px] md:h-[700px] overflow-hidden">
                {visibleItems.map((item, index) => {
                    const position = isMobile ? 0 : index - 2;

                    return (
                        <div
                            key={item.id}
                            className={`absolute transition-all duration-500 ease-in-out ${getItemStyle(position)}`}
                            style={{
                                transform: isMobile ? 'translateX(0)' : `translateX(${position * 400}px)`,
                                width: isMobile ? "90%" : "350px",
                                height: isMobile ? "auto" : "700px"
                            }}
                        >
                            <div className="bg-black bg-opacity-50 p-6 border border-white shadow-[0_0_10px_rgba(218,240,245,1)] w-full h-full">
                                <div className="flex flex-col items-center space-y-4">
                                    <img
                                        src={item.icon}
                                        alt={item.title}
                                        className="w-12 h-12 object-contain mt-6"
                                    />
                                    <h3 className="text-xl md:text-2xl font-semibold text-white text-center mt-6">
                                        {item.title.split(" ").map((word, idx) => (
                                            <span key={`${item.id}-word-${idx}`} className="block">{word}</span>
                                        ))}
                                    </h3>
                                    <p className="text-gray-300 text-center text-sm md:text-lg md:p-4 md:mb-2">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center mt-8">
                <div className="inline-flex items-center gap-4 bg-black bg-opacity-50 px-4 py-2 rounded-full border border-gray-700">
                    <button
                        onClick={prevSlide}
                        className="p-1 hover:bg-gray-700 rounded-full transition-colors"
                        aria-label="Previous slide"
                    >
                        <img
                            src="/api/placeholder/24/24"
                            alt="Previous"
                            className="w-6 h-6 transform rotate-180"
                        />
                    </button>
                    <div className="flex space-x-2">
                        {carouselData.map((item, idx) => (
                            <button
                                key={item.id}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    idx === currentIndex ? 'bg-white w-4' : 'bg-gray-600'
                                }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={nextSlide}
                        className="p-1 hover:bg-gray-700 rounded-full transition-colors"
                        aria-label="Next slide"
                    >
                        <img
                            src="/api/placeholder/24/24"
                            alt="Next"
                            className="w-6 h-6"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;