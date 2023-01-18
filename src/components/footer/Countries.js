import style from '../../styles/footer.module.css'
import { Flag } from '../../icons/Icons'
import Link from 'next/link'

export default function Countries() {
    const countries = [
        'Argentina',
        'Australia',
        'Austria',
        'Belarus',
        'Belgium',
        'Bolivia',
        'Brazil',
        'Canada',
        'Chile',
        'China',
        'Colombia',
        'Costa Rica',
        'Dominican Republic',
        'Ecuador',
        'El Salvador',
        'France',
        'Germany',
        'Guatemala',
        'Honduras',
        'Hong Kong',
        'India',
        'Ireland',
        'Israel',
        'Italy',
        'Japan',
        'Kazakhstan',
        'Korea',
        'Malaysia',
        'Mexico',
        'Netherlands',
        'Nicaragua',
        'Panama',
        'Paraguay',
        'Peru',
        'Philippines',
        'Poland',
        'Portugal',
        'Puerto Rico',
        'Russia',
        'Singapore',
        'Spain',
        'Switzerland',
        'Taiwan',
        'Turkey',
        'United Kingdom',
        'Uruguay',
        'Venezuela',
    ]
    return (
        <div className={style.footer__countries}>
            <ul>
                {countries.map((country, index) => (
                    <li key={index}>
                        <Flag />
                        <Link href='#'>{country}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
