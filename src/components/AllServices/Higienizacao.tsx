import { ImageSwiper } from "@/components/Swiper/Swiper"
import imageArray from '@/json/funilariaExpress.json'
import { Services } from "./Services"
import { GsapServicesFunction } from "@/ts/GsapServicesFunction"

export const Higienizacao = () => {
    GsapServicesFunction({trigger: ".serviceItem_text_section"})
    return(
        <section className="serviceItem_section">
            <div className="higienizacao_background">
                <h2>Higienizaçao Automotiva</h2>
            </div>
            <div className="serviceItem_text_section">
                <div className="serviceItem_second_text_section">
                    <h5>Higienização técnica ou higienização convencional?</h5>
                    <p>Higienização técnica: é usado maquinários como extratoras, escovas macias rotativas, produtos alto ph desenvolvido por técnicos especializados para proporcionar limpeza nos tecidos couros e plástico de auto nível sem manchar tecido ou plásticos e painel, e sem ressecamento nos tecidos.<br/>O que é mais importante de tudo isso!! A rapidez e alta qualidade para atender aos clientes que cada vez mais São exigente por tempo, e qualidade.</p>
                </div>
            </div>
            <h2>Galeria de Imagens</h2>
            <ImageSwiper DataArray={imageArray} />
            <Services />
        </section>
    )
}