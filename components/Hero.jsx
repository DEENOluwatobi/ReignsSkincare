import css from '../styles/Hero.module.css'

export default function Hero() {
    return(
        <div className={css.container}>
           <div className={css.glass}>
                <h1 className={css.title}>
                    Experience the Beauty of Healthy Skin with<br/> 
                    <span>Reigns Skincare</span>
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
        </div>
    )
};
