import React, {useState} from 'react';
import  styles from "../../styles/layouts.module.css"
import Image from "next/image";
import Link from "next/link";
// import { ShoppingOutlined, HeartOutlined , SearchOutlined} from '@ant-design/icons';



const App = ({children}) => {
    const [menu,setMenu] = useState([
        {id:1,name:'Տղամարդու'},
        {id:2,name: 'Կանացի'},
        {id:3,name:'Մանկական'}
    ]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <header>
                <div className={styles.container}>
                    <div className={styles.containerUl}>
                        <ul>
                            {menu.map((element) => (
                                <li>{element.name}</li>
                            ))}
                        </ul>
                        <div className={styles.containerLogo}>
                            <a href="/">
                            <div className={styles.logo}>
                                <Image width={400} height={400} src="/logo.png" alt='chi bacum'/>
                            </div>
                            </a>
                        </div>
                    </div>
                    <div className={styles.containerEnd}>
                        <ul>
                            {/*<li><SearchOutlined/></li>*/}
                            {/*<li><ShoppingOutlined /></li>*/}
                            {/*<li><HeartOutlined /></li>*/}
                            <span className={styles.spans}>
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="search" width="1em"
                                     height="1em" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M910.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                                </svg>
                            </span>
                            <li>
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="shopping" width="1em"
                                     height="1em" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z"></path>
                                </svg>
                            </li>
                            <li>
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="heart" width="1em"
                                     height="1em" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
                                </svg>
                            </li>
                            <span className={styles.span}>AMD</span>
                            <div className={styles.containerEndimg}>
                                <img onClick={toggleDropdown} src="./english.webp" alt='chi bacum'/>
                                {isDropdownOpen && (
                                    <img src="./ru.png" alt='chi bana'/>
                                )}

                            </div>
                            <span>EN</span>

                        </ul>
                    </div>
                </div>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <div className={styles.box}>

                <div className={styles.boxImage}>
                        <Image width={400} height={400} src='/logo.png' alt='chi bacum'/>
                    </div>
                    <div className={styles.boxSpan}>

                        <div className={styles.facebook}>
                        <span>
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="instagram" width="1em"
                                     height="1em" fill="currentColor" aria-hidden="true"><path
                                    d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path>
                                </svg>
                            </span>
                            <span><svg
                                viewBox="64 64 896 896" focusable="false" data-icon="facebook" width="1em" height="1em"
                                fill="currentColor" aria-hidden="true"><path
                                d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z"></path></svg>
                            </span>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <span>Կատեգորիաներ</span>
                        <div className={styles.footerCategories}>
                            <div className={styles.footerUl}>
                                <ul>
                                    <li>Տղամարդու</li>
                                    <li>Կանացիիիի</li>
                                    <li>Մանկական</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.pages}>
                        <span>Էջեր</span>
                        <div className={styles.faq}>
                            <div className={styles.footerulOur}>
                                <ul>
                                    <Link href={`/about`} className={styles.mainDecoration}>
                                        <li>Մեր մասին</li>
                                    </Link>
                                    <Link href={`/contact`} className={styles.contactDecoration}>
                                        <li>Կապ մեզ հետ</li>
                                    </Link>
                                    <li>FAQ</li>
                                    <li>Բլոգ</li>
                                    <li>Privacy and Policy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contact}>
                        <span>Կոնտակտներ</span>
                        <div className={styles.mails}>
                            <div className={styles.footerulStrit}>
                                <ul>
                                    <li><a href="mailto:mail-poel.am2020@gmail.com">mail-poel.am2020@gmail.com</a></li>
                                    <li><a href="tel:+37498534425">+37498534425</a></li>
                                    <li><a target="_blank" rel="noopener noreferrer"
                                           href="https://maps.google.com?q=%D4%B5%D6%80%D6%87%D5%A1%D5%B6%2C%20%D5%93%D5%A1%D6%80%D5%BA%D5%A5%D6%81%D5%B8%D6%82%2017%2C%20KIVERA%20%D5%AD%D5%A1%D5%B6%D5%B8%D6%82%D5%A9%20%D5%BD%D6%80%D5%A1%D5%B0">Երևան,
                                        Փարպեցու 17, KIVERA խանութ սրահ</a></li>
                                    <li><a target="_blank" rel="noopener noreferrer"
                                           href="https://maps.google.com?q=%D4%B5%D6%80%D6%87%D5%A1%D5%B6%2C%20%D4%B1%D6%80%D5%A1%D5%B4%D5%AB%2064%2C%20The%20Muse%20%D5%AD%D5%A1%D5%B6%D5%B8%D6%82%D5%A9%20%D5%BD%D6%80%D5%A1%D5%B0">Երևան,
                                        Արամի 64, The Muse խանութ սրահ</a></li>
                                    <li><a target="_blank" rel="noopener noreferrer"
                                           href="https://maps.google.com?q=%D5%84%D5%B8%D5%BD%D5%AF%D5%BE%D5%A1%2C%20%D5%8D%D5%A5%D5%AC%D5%A5%D5%A6%D5%B6%D5%B5%D5%B8%D5%BE%D5%BD%D5%AF%D5%A1%D5%B5%D5%A1%204">Մոսկվա,
                                        Սելեզնյովսկայա 4</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={styles.border}>
                    <div className={styles.borderBottom}>
                        <span>© 2024 HiveSpace</span>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default App;