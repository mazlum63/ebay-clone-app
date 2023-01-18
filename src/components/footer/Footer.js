import style from '../../styles/footer.module.css'
import FooterList from './FooterList'
import Link from 'next/link'
import { ArrowDown, Facebook, Twitter, Flag } from '../../icons/Icons'
import { useState } from 'react'
import Countries from './Countries'

export default function Footer() {
    const footerLinks = [{
        header: 'Buy',
        links: ['Registration',
            'eBay Money Back Guarantee',
            'Bidding & buying help',
            'Stores',
            'eBay for Charity',
            'Charity Shop',
            'Seasonal Sales and events',]
    },

    {
        header: 'Sell',
        links: ['Start selling',
            'How to sell',
            'Business sellers',
            'Affiliates',]
    },

    {
        header: 'Tools & apps',
        links: ['Developers',
            'Security center',
            'Site map',]
    },

    {
        header: 'About eBay',
        links: ['Company info',
            'News',
            'Investors',
            'Careers',
            'Diversity & Inclusion',
            'Global Impact',
            'Government relations',
            'Advertise with us',
            'Policies',
            'Verified Rights Owner (VeRO) Program',
            'eCI Licenses',]
    },


    {
        header: 'Help & Contact',
        links: ['Seller Center',
            'Contact Us',
            'eBay Returns',]
    },

    {
        header: 'Community',
        links: ['Announcements',
            'eBay Community',
            'eBay for Business Podcast',]
    }]
    const footerMobileLinks = [
        'About eBay',
        'Announcements',
        'Community',
        'Security Center',
        'Seller Center',
        'Policies',
        'Affiliates',
        'Help & Contact',
        'Site Map'
    ]

    const [isActive, setIsActive] = useState(false);
    return (
        <footer className={style.footer}>
            <div className={style.footer__top}>
                <div className={style.footer__links}>
                    <div className={style.links}>
                        <FooterList links={footerLinks[0]} />
                    </div>
                    <div className={style.links}>
                        <FooterList links={footerLinks[1]} />
                        <FooterList links={footerLinks[2]} />
                    </div>
                    <div className={style.links}>
                        <ul>
                            <li className={style.footer__header}>Stay connected</li>
                            <li style={{ display: 'flex', alignItems: 'center' }} className={style.footer__link}>
                                <Facebook />
                                <Link href='#'>
                                    <span style={{ marginLeft: 5 }}>Facebook</span>
                                </Link>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center' }} className={style.footer__link}>
                                <Twitter />
                                <Link href='#'>
                                    <span style={{ marginLeft: 5 }}>Twitter</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={style.links}>
                        <FooterList links={footerLinks[3]} />
                    </div>
                    <div className={style.links}>
                        <FooterList links={footerLinks[4]} />
                        <FooterList links={footerLinks[5]} />
                        <div style={{ position: 'relative' }}>
                            <h1 className={style.footer__header}>eBay Sites</h1>
                            <button className={style.sites__btn}
                                onClick={() => { setIsActive(!isActive) }}
                            >
                                <Flag />
                                <span style={{ margin: '0 5px' }}>United States</span>
                                <ArrowDown />
                            </button>
                            {
                                isActive ? (<Countries />) : ''
                            }
                        </div>
                    </div>
                </div>
                <div className={style.footer__links__mobile}>
                    <ul className={style.links__mobile}>
                        {footerMobileLinks.map((items, index) => (
                            <li style={{ margin: '0 20px 10px 0' }} key={index} className={style.footer__link}>
                                <Link href='#'>{items}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={style.footer__bottom}>
                <ul className={style.footer__bottom__links}>
                    <li><p style={{ color: '#000', marginRight: 5 }}>Copyright © 1995-2022 eBay Inc. All Rights Reserved.</p></li>
                    <li className={style.footer__bottom__link}><Link href='#'>Accessibility,</Link> </li>
                    <li className={style.footer__bottom__link}><Link href='#'>User Agreement,</Link> </li>
                    <li className={style.footer__bottom__link}><Link href='#'>Privacy,</Link> </li>
                    <li className={style.footer__bottom__link}><Link href='#'>Payments Terms of Use,</Link> </li>
                    <li className={style.footer__bottom__link}><Link href='#'>Cookies,</Link> </li>
                    <li><p style={{ color: '#000', marginRight: 5 }}>and</p></li>
                    <li className={style.footer__bottom__link}><Link href='#'>Do not sell my personal information,</Link></li>
                    <li className={style.footer__bottom__link}><Link href='#'>AdChoice,</Link></li>
                </ul>
            </div>
        </footer>
    )
}