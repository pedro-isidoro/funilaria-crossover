import { IoStarSharp } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { GsapFunction } from "@/ts/GsapFunction";

export const Reviews2 = () => {
    GsapFunction({triggerFather: ".section_reviews", trigger: ".reviews_list", markers: false, start: "top 800px", end: "bottom 700px"}); 
    return(
        <section className="section_reviews">
          <Swiper
            modules={[Autoplay, A11y, Navigation, Pagination]} spaceBetween={10} loop={true} autoplay={{ delay: 3000, disableOnInteraction: false }} slidesPerView={'auto'} breakpoints={{ 600: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} centeredSlides={true}className='reviews_list desktopReviewsList'>
                <SwiperSlide className="reviews_list_review">
                  <div className="review_card">
                    <div className="review_card_images">
                      <span className="star Icon"><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/></span>
                      <RxAvatar className="avatar"/>
                    </div>
                    <p>Já fiz uma vez um trabalho nome carro onix , quando fui retirar me surpreendeu o excelente serviço e realmente cobram valor justo.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="reviews_list_review">
                  <div className="review_card">
                    <div className="review_card_images">
                      <span className="star Icon"><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/></span>
                      <RxAvatar className="avatar"/>
                    </div>
                    <p>Trabalho impecável<br/>Sempre trago meus carros aqui.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="reviews_list_review">
                  <div className="review_card">
                    <div className="review_card_images">
                      <span className="star Icon"><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/></span>
                      <RxAvatar className="avatar"/>
                    </div>
                    <p>Ótimo serviço!<br/>Trabalho rápido e bem feito com um preço ok.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="reviews_list_review">
                  <div className="review_card">
                    <div className="review_card_images">
                      <span className="star Icon"><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/></span>
                      <RxAvatar className="avatar"/>
                    </div>
                    <p>Serviço de excelência, super recomendo! Capricharam demais no reparo e no carro como um todo. Fica a indicação.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="reviews_list_review">
                  <div className="review_card">
                    <div className="review_card_images">
                      <span className="star Icon"><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/></span>
                      <RxAvatar className="avatar"/>
                    </div>
                    <p>Fui muito bem recepcionada pelo Zeca e pelo Vitor, orçamento feito na hora, e já deixei meu veículo para os reparos, que foram concluídos em apenas 2 dias! Serviço de excelência, top! Preço justo... recomendo 100% ...</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="reviews_list_review">
                  <div className="review_card">
                    <div className="review_card_images">
                      <span className="star Icon"><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/></span>
                      <RxAvatar className="avatar"/>
                    </div>
                    <p>Primeiramente agradeço a atenção e cordialidade no atendimento feito pelo Zeca e o Lucas. Meu carro saiu do Original como se fosse novíssimo, vocês prestam um excelente trabalho, com qualidade e muito capricho. Parabéns,  super indico vocês a qualquer amigo.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="reviews_list_review">
                  <div className="review_card">
                    <div className="review_card_images">
                      <span className="star Icon"><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/></span>
                      <RxAvatar className="avatar"/>
                    </div>
                    <p>Nota vai para o atendimento que me foi dispensado quando estive fazendo um orçamento no carro para um serviço de funilaria após um acidente.<br/>Uma árvore caiu em cima do carro..<br/>Prontamente fui atendido diga se de passagem .muito bem. Deixei o carro para realizar o serviço depois de combinado o valor. E o prazo de entrega.Estou no aguardo.<br/>Parabéns</p>
                  </div>
                </SwiperSlide>
          </Swiper>
        </section>
    )
}