import css from '../../styles/Header.module.css'
import Image from 'next/image'
import Logo from '../../assets/Logo.png'
import { UilShoppingBag } from '@iconscout/react-unicons'

export default function Header() {
    return(
        <div className={css.header}>
            {/* logo */}
            <div className={css.logo}>
                <Image src={Logo} alt='' width={50} height={50}/>
                <span>Reigns<br/>Skincare</span>
            </div>

            {/* menu */}
            <ul className={css.menu}>
                <li>Home</li>
                <li>Menu</li>
                <li>Contact</li>
            </ul>

            {/* cart side */}
            <div className={css.rightside}>
                <div className={css.cart}>
                    <UilShoppingBag size={30} color='#2E2E2E'/>
                    <div className={css.badge}>1</div>
                </div>
            </div>
        </div>
    )
};
