import React, {useState} from 'react';
import styles  from "../../styles/about.module.css"
import App from "@/component/layouts/app";
const Index = () => {
    return (
        <App>

            <div className={styles.container}>

                <div className={styles.aboutUs}>
                    <div className={styles.containerText}>
                        <h3>Մեր մասին</h3>
                        <p>Սեր, առատություն և լույս սփռող 52–րդ հրեշտակ Պոելը
                            <br/>
                            խորհրդանշում է մեր բրենդի ամբողջ գաղափարախոսությունը։</p>

                    </div>

                </div>
                <div className={styles.aboutsOwn}>
                    <div className={styles.containerTextOwn}>
                        <p>Պոել ընկերությունը հիմնադրել է Արուսյակ Ստեփանյանը 2016
                            <br/>
                            թվական սեպտեմբերի 3–ին` որպես կոչ մարդկությանը՝ Հաղթիր
                            <br/>
                            ինքդ քեզ։ Միայն այդ ճանապարհով է, որ կարող ես զգալ ու
                            <br/>
                            ստանալ Պոելի ընծայած առատ սերն ու լույսը։</p>
                    </div>
                </div>
                <div className={styles.aboutsTo}>
                    <div className={styles.containerTextTo}>
                        <p>Սրբապատկերներ, սկզբում փայտից, ապա ոսկուց ու արծաթից
                            <br/>
                            պատրաստված զարդեր, հիմա` նաև մոմեր, որոնք կրում են
                            <br/>
                            տիեզարական անսահմանության մեջ մարդու գոյութենական
                            <br/>
                            կարևորության իմաստը։</p>
                    </div>
                </div>

                <div className={styles.containerImagebox}>
                    <div className={styles.containerImage}>
                        <img src="https://poels.geeklab.am/abouts/1705685222_abouts.jpg" alt={"chi bana"}/>
                    </div>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.boxImage}>
                    <img src="https://poels.geeklab.am/abouts/1705667794_abouts1.JPEG" alt="chi bacum"/>
                </div>
                <div className={styles.titles}>
                    <p> Պոելի ստեղծումն Արուսյակ Ստեփանյանի մանկության
                        <br/>
                        երազանքն ու երկնքից կանխակալ հրամայականն էր, որը պետք
                        <br/>
                        է դառնա բարության, սիրո, քրիստոնեական մշակույթի
                        <br/>
                        տարածման միջոց։ Պոելի համար կարևոր է մոռացությունից
                        <br/>
                        փրկել և հասարակությանը նվիրել մեր հայրերից ժառանգած
                        <br/>
                        քրիստոնեական արժեքները, խորհրդապատումները և զարդը
                        <br/>
                        գիտակցված կրելու ավանդությունը։
                    </p>
                </div>
                <div className={styles.titlesOwn}>
                    <p>Որպես բարեխոս՝ Պոելը լայն թևերն է տարածում` Ինքդ քեզ
                        <br/>
                        հաղթելու վերմարդկային առաքելության ճանապարհին։</p>
                </div>
            </div>
        </App>
    );
};

export default Index;