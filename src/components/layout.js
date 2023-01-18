import Footer from "./footer/Footer"
import Header from "./header/Header"

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    )
}