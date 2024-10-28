import { ImageSwiper } from "@/components/Swiper/Swiper"
import imageArray from '@/json/funilariaExpress.json'
import { Services } from "./Services"
import { GsapServicesFunction } from "@/ts/GsapServicesFunction"

export const ParaChoque = () => {
    GsapServicesFunction({trigger: ".serviceItem_text_section"})
    return(
        <section className="serviceItem_section">
            <div className="paraChoque_background">
                <h2>Para Choque</h2>
            </div>
            <div className="serviceItem_text_section">
                <div className="serviceItem_second_text_section">
                    <p>Recuperação de para choque.​<br/>Somos Especialistas em Trabalho de Recuperação de para-choques no ABC Para recuperação de para choques, dispomos de ferramentas e produtos especiais para solda e colagem de plástico, reparo e funilaria e pintura em para choques</p>
                </div>
            </div>
            <h2>Galeria de Imagens</h2>
            <ImageSwiper DataArray={imageArray} />
            <Services />
        </section>
    )
}