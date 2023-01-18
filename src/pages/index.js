import Head from "next/head"
import { getAllProducts } from "../lib/products"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addProductsItems } from "../slices/productsSlice";
import { nextBtn, prevBtn, carouselTransHandle } from '../slices/sliderSlice'
import Carousel from '../components/slider/Slider';
import { ArrowLeftCircle, ArrowRightCircle } from "../icons/Icons";
import Products from "../components/products/Products";

export default function Home({ posts1 }) {
  const dispatch = useDispatch();
  const carousel = useSelector(state => state.carousel)
  const carouselItems = [
    'https://i.ebayimg.com/images/g/bzQAAOSwMtJiNO51/s-l1600.webp',
    'https://i.ebayimg.com/images/g/GecAAOSwpLtje8c~/s-l1600.webp',
    'https://i.ebayimg.com/images/g/4m8AAOSwPoJjh40O/s-l1600.webp',
    'https://i.ebayimg.com/images/g/2YkAAOSwiolhumyR/s-l1600.webp',
    'https://i.ebayimg.com/images/g/Eg4AAOSwVWhjoPI4/s-l1600.webp',
    'https://i.ebayimg.com/images/g/5dYAAOSw3ZhjpMeH/s-l1600.webp',
    'https://i.ebayimg.com/images/g/q5sAAOSw8ZNjj77f/s-l1600.webp',
    'https://i.ebayimg.com/images/g/F1sAAOSwkHVjocst/s-l1600.webp',
  ]
  useEffect(() => {
    dispatch(addProductsItems(posts1))
  }, [])
  return (
    <>
      <Head>
        <title>Ebay Clone App</title>
      </Head>
      <main className="text-3xl font-bold underline">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="carousel">
            <div onClick={() => dispatch(prevBtn())} className="carousel__arrow carousel__prev"><ArrowLeftCircle /></div>
            <div
              onTransitionEnd={() => dispatch(carouselTransHandle())}
              style={{ transform: carousel.carouselTransform, transition: carousel.carouselTransition }}
              className="carousel__container">
              <Carousel
                order={-1}
                image='https://i.ebayimg.com/images/g/bzQAAOSwMtJiNO51/s-l1600.webp'
                title='carousel title'
                description='carousel description' />
              <Carousel
                order={0}
                image='https://i.ebayimg.com/images/g/GecAAOSwpLtje8c~/s-l1600.webp'
                title='carousel title'
                description='carousel description' />
              <Carousel
                order={1}
                image='https://i.ebayimg.com/images/g/4m8AAOSwPoJjh40O/s-l1600.webp'
                title='carousel title'
                description='carousel description' />
              <Carousel
                order={2}
                image='https://i.ebayimg.com/images/g/bzQAAOSwMtJiNO51/s-l1600.webp'
                title='carousel title'
                description='carousel description' />
              <Carousel
                order={3}
                image='https://i.ebayimg.com/images/g/GecAAOSwpLtje8c~/s-l1600.webp'
                title='carousel title'
                description='carousel description' />
            </div>
            <div onClick={() => dispatch(nextBtn())} className="carousel__arrow carousel__next"><ArrowRightCircle /></div>
          </div>
        </div>
        <Products category={`women's clothing`} />
        <Products category={`men's clothing`} />
        <Products category={`electronics`} />
        <Products category={`jewelery`} />
      </main>
    </>
  )
}


export async function getStaticProps() {
  const posts2 = await getAllProducts();
  return { props: { posts1: posts2 } }
}