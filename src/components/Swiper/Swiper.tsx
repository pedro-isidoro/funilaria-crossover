// import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

// const SwiperButtonNext = () => {
//     const swiper = useSwiper();
//     return <GoTriangleRight id='swiperRightArrow' onClick={() => swiper.slideNext()} />;
// };
// const SwiperButtonPrev = () => {
//     const swiper = useSwiper();
//     return <GoTriangleLeft id='swiperLeftArrow' onClick={() => swiper.slidePrev()} />
// };

interface ImageInfo {
    source: string,
    altImage: string
}
export const ImageSwiper = ({ DataArray }: { DataArray: ImageInfo[] }) => {
    return (
        <section className="section_imageSwiper">
            <Swiper
                modules={[Autoplay, A11y, Navigation, Pagination]}
                loop={true}
                autoplay={{ delay: 1800, disableOnInteraction: false }}
                centeredSlides={true}
                className='ImageSwiper_list'
                spaceBetween={10}
                breakpoints={{
                    0: {
                        slidesPerView: 1, // 1 slide para telas menores que 600px
                    },
                    600: {
                        slidesPerView: 2, // 2 slides para telas entre 600px e 1020px
                    },
                    1020: {
                        slidesPerView: 3, // 3 slides para telas entre 1020px e 1200px
                    }
                }}

            >
                {/* <SwiperButtonPrev /> */}
                {DataArray.length > 1 ? (
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