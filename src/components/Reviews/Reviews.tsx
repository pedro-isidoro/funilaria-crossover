import { GoTriangleRight, GoTriangleLeft  } from "react-icons/go";
import { IoStarSharp } from "react-icons/io5";
import { Swiper, SwiperSlide, useSwiper  } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return <GoTriangleRight id='rightArrow' onClick={() => swiper.slideNext()} />;
};
const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  return <GoTriangleLeft id='leftArrow' onClick={() => swiper.slidePrev()} />
};
export const Reviews = () => {
    return(
        <section className="section_reviews">
          <Swiper
            modules={[A11y, Navigation, Pagination]} loop slidesPerView={1}className='reviews_list'>
              <SwiperButtonPrev />
                <SwiperSlide className="reviews_list_review">
                  <div className="review_card">
                    <div className="review_card_images">
                      <img src="images/donos/Foto-minha.webp" alt="Client image 1" />
                      <span className="star Icon"><IoStarSharp/></span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, recusandae alias nesciunt ipsa dolor magnam repellendus officia corrupti fugit, odio suscipit aut reprehenderit esse! Culpa nihil sapiente doloribus. Fuga, molestiae?</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="reviews_list_review">
                  <div className="review_card">
                    <div className="review_card_images">
                      <img src="images/donos/Foto-minha.webp" alt="Client image 2" />
                      <span className="star Icon"><IoStarSharp/><IoStarSharp/></span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, recusandae alias nesciunt ipsa dolor magnam repellendus officia corrupti fugit, odio suscipit aut reprehenderit esse! Culpa nihil sapiente doloribus. Fuga, molestiae?</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="reviews_list_review">
                  <div className="review_card">
                    <div className="review_card_images">
                      <img src="images/donos/Foto-minha.webp" alt="Client image 3" />
                      <span className="star Icon"><IoStarSharp/><IoStarSharp/><IoStarSharp/></span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, recusandae alias nesciunt ipsa dolor magnam repellendus officia corrupti fugit, odio suscipit aut reprehenderit esse! Culpa nihil sapiente doloribus. Fuga, molestiae?</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="reviews_list_review">
                  <div className="review_card">
                    <div className="review_card_images">
                      <img src="images/donos/Foto-minha.webp" alt="Client image 4" />
                      <span className="star Icon"><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/></span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, recusandae alias nesciunt ipsa dolor magnam repellendus officia corrupti fugit, odio suscipit aut reprehenderit esse! Culpa nihil sapiente doloribus. Fuga, molestiae?</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="reviews_list_review">
                  <div className="review_card">
                    <div className="review_card_images">
                      <img src="images/donos/Foto-minha.webp" alt="Client image 5" />
                      <span className="star Icon"><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/></span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, recusandae alias nesciunt ipsa dolor magnam repellendus officia corrupti fugit, odio suscipit aut reprehenderit esse! Culpa nihil sapiente doloribus. Fuga, molestiae?</p>
                  </div>
                </SwiperSlide>
                <SwiperButtonNext />
          </Swiper>
        </section>
    )
}