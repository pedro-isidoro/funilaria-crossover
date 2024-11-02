import { GoTriangleRight, GoTriangleLeft  } from "react-icons/go";
import { Swiper, SwiperSlide, useSwiper  } from 'swiper/react';
import { A11y, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return <GoTriangleRight id='swiperRightArrow' onClick={() => swiper.slideNext()} />;
};
const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  return <GoTriangleLeft id='swiperLeftArrow' onClick={() => swiper.slidePrev()} />
};

interface ImageInfo {
  source: string,
  altImage: string
}
export const ImageSwiper = ({DataArray}: {DataArray: ImageInfo[]}) => {
    return(
        <section className="section_imageSwiper">
            <Swiper
            modules={[A11y, Navigation, Pagination]} loop slidesPerView={1}className='ImageSwiper_list'>
                <SwiperButtonPrev />
                {DataArray.length > 1 ?(
                    DataArray.map((data, index) => (
                    <SwiperSlide key={index} className="ImageSwiper_item">
                    <div className="ImageSwiper_card">
                        <img src={data.source} alt={data.source} />
                    </div>
                    </SwiperSlide>
                    ))
                ) : (
                    <></>
                )}
                <SwiperButtonNext />
            </Swiper>
            <Swiper
            modules={[Autoplay, A11y, Navigation, Pagination]} spaceBetween={10} loop={true} slidesPerView={'auto'} autoplay={{ delay: 2500, disableOnInteraction: false }} breakpoints={{ 600: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} centeredSlides={true} className='ImageSwiper_list desktop_list'>
                {/* <SwiperButtonPrev /> */}
                {DataArray.length > 1 ?(
                    DataArray.map((data, index) => (
                    <SwiperSlide key={index} className="ImageSwiper_item">
                    <div className="ImageSwiper_card">
                        <img src={data.source} alt={data.source} />
                    </div>
                    </SwiperSlide>
                    ))
                ) : (
                    <></>
                )}
                {/* <SwiperButtonNext /> */}
            </Swiper>
        </section>
    )
}