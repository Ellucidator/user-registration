import { Link } from 'react-router-dom'
import './style.css'
import Carousel from 'react-bootstrap/Carousel'
export default function Home() {

    return (
        <div className='home'>
            <Carousel data-bs-theme="dark" fade className='carousel'>
                <Carousel.Item>
                    <Link to="/registry">
                        <img src="../../../public/carousel01.png" alt="" />
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to="/registry">
                        <img src="../../../public/carousel02.png" alt="" />
                    </Link>
                    <Carousel.Caption>
                        <h3>Teste</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to="/registry">
                        <img src="../../../public/carousel03.png" alt="" />
                    </Link>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}