import css from '../styles/Footer.module.css'
import { UilFacebook, UilInstagram, UilTwitter } from '@iconscout/react-unicons'
import Image from 'next/image'
import Logo from '../assets/Logo.png'

export default function Footer() {
    return(
        <div className={css.container}>
           <span>ALL RIGHTS RESERVED</span>
           <div className={css.social}>
              <UilFacebook size={30}/> 
              <UilInstagram size={30}/>
              <UilTwitter size={30}/> 
           </div>
           <div className={css.logo}>
                <Image src={Logo} alt='' width={50} height={50}/>
                <span>Reigns<br/>Skincare</span>
            </div>
        </div>
    )
};
