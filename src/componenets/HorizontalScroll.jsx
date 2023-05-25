import { useState, useEffect } from 'react';
import { data } from '../assets/MockData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'

const HorizontalScroll = () => {

    const slider = document.getElementById('slider');
    const slideLeft = () => {
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        var slider = document.getElementById('slider');
        const position = slider.pageXOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        var slider = document.getElementById('slider');
        slider.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            slider.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='slider-container'>
            <div id="slider" className='slider'>
                {
                    data.map((item) => (
                        <div className="img-box" key={item.id}>
                            <img className='image' src={item.img} alt="" />
                            <div className="middle">
                                <div className="text">
                                    <h2>{item.caption}</h2>
                                    <p>{item.para}</p>
                                    <div className="search">
                                        <AiOutlineSearch size={30} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

                <div className="more" style={{ height: '100%', width: '200px', background: '#4D4D4D', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                    <h2 style={{ transform: 'rotate(90deg)' }}>MORE</h2>
                </div>
            </div>

            <div className="navigation">
                <div className="scroll-down-wrap">
                    <div className="scroll-downs">
                        <div className="mousey">
                            <div className="scroller"></div>
                        </div>
                    </div>
                    <span>Scroll right or  left</span>
                </div>
                <div className="icon-container">
                    <MdChevronLeft className='icons' onClick={slideLeft} size={20} />
                    <MdChevronRight className='icons' onClick={slideRight} size={20} />
                </div>
            </div>
        </div>
    )
}

export default HorizontalScroll