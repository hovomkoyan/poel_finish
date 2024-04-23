import React, {useState} from 'react';
import styles from "../../styles/banner.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Banner = () => {
        const settings = {
            dots: false, // Whether to show dots navigation
            arrows: true, // Whether to show arrows navigation
            infinite: true, // Whether to enable infinite loop sliding
            speed: 500, // Transition speed in milliseconds
            slidesToShow: 5, // Number of slides to show at once
            slidesToScroll: 1, // Number of slides to scroll at once
            autoplay: true, // Whether to enable autoplay
            autoplaySpeed: 3000, // Autoplay speed in milliseconds
            pauseOnHover: true, // Whether to pause autoplay on hover
            responsive: [ // Responsive settings for different screen sizes
                {
                    breakpoint: 1024, // Breakpoint for screen size
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        };
        const [menu,setMenu] = useState([
        {
            id:1,image:'https://www.poel.am/_next/image?url=https%3A%2F%2Fpoels.geeklab.am%2Fuploads%2F1707305035_avatar.jpg&w=640&q=75',
            title:'<< Գեղարդախաչ >>',
            price:'36000 AMD'
        },
        {
            id:2,
            image:'https://www.poel.am/_next/image?url=https%3A%2F%2Fpoels.geeklab.am%2Fuploads%2F1707314305_avatar.jpg&w=640&q=75',
            title:'<< Աղավնի >>',
            price:'18000 AMD'
        },
        {
            id:3,
            image:'https://www.poel.am/_next/image?url=https%3A%2F%2Fpoels.geeklab.am%2Fuploads%2F1707315259_avatar.jpg&w=640&q=75',
            title:'<< Կուլոն Հիսուս Քրիստոսի պ...',
            price:'18800 AMD'
        },
        {
            id:4,
            image:'https://www.poel.am/_next/image?url=https%3A%2F%2Fpoels.geeklab.am%2Fuploads%2F1707339748_avatar.jpg&w=640&q=75',
            title:'<< Սուրբ Պողոս և Պետրոսի սր...',
            price:'46500 AMD'
        },

        {
            id:5,
            image:'https://www.poel.am/_next/image?url=https%3A%2F%2Fpoels.geeklab.am%2Fuploads%2F1707344941_avatar.jpg&w=640&q=75',
            title:'<< Հայր մերով սրվակե կուլոն...',
            price:'98000 AMD'
        },
        {
            id:6,
            image:'https://www.poel.am/_next/image?url=https%3A%2F%2Fpoels.geeklab.am%2Fuploads%2F1705791213_avatar.jpg&w=640&q=75',
            title:'<< Հայր մերով, Գրիգոր Լուսա...',
            price:'72000 AMD'
        },
        {
            id:7,
            image:'https://www.poel.am/_next/image?url=https%3A%2F%2Fpoels.geeklab.am%2Fuploads%2F1705963980_avatar.jpg&w=640&q=75',
            title:'<< Բանալի >>',
            price:'39000 AMD'
        },
        {
            id:8,
            image:'https://www.poel.am/_next/image?url=https%3A%2F%2Fpoels.geeklab.am%2Fuploads%2F1705791910_avatar.jpg&w=640&q=75',
            title:'<< Գեղարդ Քարով >',
            price:'29000 AMD'
        },
        {
            id:9,
            image:'https://www.poel.am/_next/image?url=https%3A%2F%2Fpoels.geeklab.am%2Fuploads%2F1707074287_avatar.jpg&w=640&q=75',
            title:'<< Գեղարդ Քարով >>',
            price:'29000 AMD'
        },
        {
            id:10,
            image:'https://www.poel.am/_next/image?url=https%3A%2F%2Fpoels.geeklab.am%2Fuploads%2F1707074648_avatar.jpg&w=640&q=75',
            title:'<< Ծաղկած Գեղարդ >>',
            price:'27500 AMD'
        },
        {
            id:11,
            image:'https://poels.geeklab.am/uploads/1707076461_avatar.jpg',
            title:'<< Ծաղկած Գեղարդ >>',
            price:'27500 AMD'
        },
        {
            id:12,
            image: 'https://www.poel.am/_next/image?url=https%3A%2F%2Fpoels.geeklab.am%2Fuploads%2F1707081846_avatar.jpg&w=640&q=75',
            title: '<< Երկկողմանի Գեղարդ >>',
            price:'33000 AMD',
        }

    ]);
    return (
        <>
            <div className={styles.banner}>
                <h2>Լավագույն Առաջարկներ</h2>
                <Slider {...settings}>
                    {menu.map((element)=>(
                        <div key={element.id} className={styles.bannerSlide}>
                            <Image width={400} height={400} src={element.image} alt='chi bana'/>
                            <p>{element.title}</p>
                            <p>{element.price}</p>
                            <div className={styles.boxSpan}>
                                <span className={styles.spans}>  <svg viewBox="64 64 896 896" focusable="false" data-icon="shopping" width="1em"
                                             height="1em" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z"></path>
                                </svg></span>
                                <span className={styles.span}><svg viewBox="64 64 896 896" focusable="false" data-icon="heart" width="1em"
                                           height="1em" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
                                </svg></span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default Banner;