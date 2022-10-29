import React, { useEffect, useState } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'


function GoTop() {

    const [showGoTop, setShowGoTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) {
                setShowGoTop(true)
            } else {
                setShowGoTop(false)
            }
            // setShowGoTop(window.scrollY >= 200); // if else
        };
        window.addEventListener("scroll", handleScroll);
        // Cleanup funciton
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {showGoTop && (

                <div className='fixed bg-primary-color p-3 right-5 bottom-10 rounded-full text-[30px] text-white font-bold z-[999999] cursor-pointer hover:text-black transition-all'>
                    <a href='#'><AiOutlineArrowUp /></a>
                </div>

            )}
        </>
    )
}

export default GoTop