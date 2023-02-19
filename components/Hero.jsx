import css from '../styles/Hero.module.css'
import { UilFacebook, UilInstagram, UilTwitter, UilWhatsapp } from '@iconscout/react-unicons'

export default function Hero() {
    return(
        <div className={css.container}>
           <div className={css.socialBtn}>
                <div className={css.line}></div>
                <div className={css.facebook}>
                    <UilFacebook size={20}/>
                </div>
                <div className={css.instagram}>
                    <UilInstagram size={20}/>
                </div>
                <div className={css.twitter}>
                    <UilTwitter size={20}/>
                </div>
                <div className={css.whatsapp}>
                    <UilWhatsapp size={20}/> 
                </div>
                 
                <div className={css.line}></div>
           </div>

           <div className={css.glass}>
                <h1 className={css.title}>
                    Experience the Beauty of Healthy Skin with  
                    <span> Reigns Skincare</span>
                </h1>
                <p className={css.subtitle}>
                    Unleash the Radiant and Confident You with <span>Reigns Skincare </span>  
                    Range of Premium Skincare Products, Specially Formulated to Nourish, 
                    Protect and Revitalize Your Skin.
                </p>
                <button className={css.headBtn}>
                    Order now
                </button>
           </div>

           <div className={css.scroll}>
                <div className={css.scrollitems}>
                    <div className={css.pic1} size={50}></div>
                    <div className={css.pic2} size={50}></div>
                    <div className={css.pic3} size={50}></div>
                    <div className={css.pic4} size={50}></div>
                    <div className={css.pic5} size={50}></div>
                    <div className={css.pic6} size={50}></div>
                    <div className={css.pic7} size={50}></div>
                    <div className={css.pic8} size={50}></div>
                    <div className={css.pic9} size={50}></div>
                    <div className={css.pic10} size={50}></div>
                </div>
           </div>
        </div>
    )
};
