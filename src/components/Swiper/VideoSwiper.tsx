import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

interface VideoInfo {
    source: string;
}

export const VideoSwiper = ({ DataArray }: { DataArray: VideoInfo[] }) => {

    return (
        <section className="section_imageSwiper">
            <Swiper
                modules={[Autoplay, A11y, Navigation, Pagination]}
                loop={true}
                autoplay={false}
                centeredSlides={true}
                className="ImageSwiper_list"
                spaceBetween={10}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    600: {
                        slidesPerView: 2,
                    },
                    1020: {
                        slidesPerView: 3,
                    },
                }}
            >
                {DataArray.length > 1 ? (
                    DataArray.map((data, index) => (
                        <SwiperSlide key={index} className="ImageSwiper_item">
                            <div className="ImageSwiper_card">
                                <div className="video-container">
                                    <video
                                        src={data.source}
                                        className="video-element"
                                        muted
                                        preload="metadata"
                                        controls
                                    >
                                        Seu navegador não suporta vídeos.
                                    </video>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                ) : (
                    <></>
                )}
            </Swiper>
        </section>
    );
};
