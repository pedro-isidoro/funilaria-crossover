import { GoTriangleRight, GoTriangleLeft  } from "react-icons/go";
import { Swiper, SwiperSlide, useSwiper  } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
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
        </section>
    )
}