import style from "../../styles/header.module.css"
import { Search } from "../../icons/Icons"
import Link from "next/link"

export default function Form() {
    return (
        <form className={style.form} action="#">
            <div className={style.header__input__container}>
                <label className={style.form__label} htmlFor="headerSearch">Enter for searching products</label>
                <Search className={style.brand__hide} />
                <input className={style.form__input} id="headerSearch" placeholder="Search for anything" type="text" />

                <select className={style.form__select} aria-label="Select a category for search" size="1">
                    <option value="0">All Categories</option>
                    <option value="20081">Antiques</option>
                    <option value="550">Art</option>
                    <option value="2984">Baby</option>
                    <option value="267">Books</option>
                    <option value="12576">Business &amp; Industrial</option>
                    <option value="625">Cameras &amp; Photo</option>
                    <option value="15032">Cell Phones &amp; Accessories</option>
                    <option value="11450">Clothing, Shoes &amp; Accessories</option>
                    <option value="11116">Coins &amp; Paper Money</option>
                    <option value="1">Collectibles</option>
                    <option value="58058">Computers/Tablets &amp; Networking</option>
                    <option value="293">Consumer Electronics</option>
                    <option value="14339">Crafts</option>
                    <option value="237">Dolls &amp; Bears</option>
                    <option value="11232">DVDs &amp; Movies</option>
                    <option value="6000">eBay Motors</option>
                    <option value="45100">Entertainment Memorabilia</option>
                    <option value="172008">Gift Cards &amp; Coupons</option>
                    <option value="26395">Health &amp; Beauty</option>
                    <option value="11700">Home &amp; Garden</option>
                    <option value="281">Jewelry &amp; Watches</option>
                    <option value="11233">Music</option>
                    <option value="619">Musical Instruments &amp; Gear</option>
                    <option value="1281">Pet Supplies</option>
                    <option value="870">Pottery &amp; Glass</option>
                    <option value="10542">Real Estate</option>
                    <option value="316">Specialty Services</option>
                    <option value="888">Sporting Goods</option>
                    <option value="64482">Sports Mem, Cards &amp; Fan Shop</option>
                    <option value="260">Stamps</option>
                    <option value="1305">Tickets &amp; Experiences</option>
                    <option value="220">Toys &amp; Hobbies</option>
                    <option value="3252">Travel</option>
                    <option value="1249">Video Games &amp; Consoles</option>
                    <option value="99">Everything Else</option>
                </select>
            </div>
            <button type="button" className={style.form__search__btn}>Search</button>
            <a className={style.advanced__search} href='#'>Advanced</a>
        </form>
    )
}


