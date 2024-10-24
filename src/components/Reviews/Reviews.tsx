import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide, useSwiper  } from 'swiper/react';
import { A11y } from 'swiper/modules';
import '@/styles/pagination.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return <FaCircleArrowRight id='rightArrow' onClick={() => swiper.slideNext()} />;
};
const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  return <FaCircleArrowLeft id='leftArrow' onClick={() => swiper.slidePrev()} />
};
export const Reviews = () => {
    return(
        <section className="section_reviews">
          <Swiper
            modules={[ A11y]} loop slidesPerView={1}className='reviews_list'>
              <SwiperButtonPrev />
              <SwiperSlide className="reviews_list_review">
                <img src="images/donos/Foto-minha.jpg" alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis reiciendis veniam rem pariatur doloribus. Expedita veritatis soluta eius quod quam laborum perspiciatis voluptates, beatae nulla in debitis doloribus nemo numquam!</p>
              </SwiperSlide>
              <SwiperSlide className="reviews_list_review">
                <img src="images/donos/Foto-minha.jpg" alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis reiciendis veniam rem pariatur doloribus. Expedita veritatis soluta eius quod quam laborum perspiciatis voluptates, beatae nulla in debitis doloribus nemo numquam!</p>
              </SwiperSlide>
             <SwiperButtonNext />
          </Swiper>
        </section>
    )
}