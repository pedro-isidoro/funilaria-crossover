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
                    <h5>Higienização interna do automóvel</h5>
                    <p>Mais do que um luxo, é essencial para o bem-estar e saúde dos ocupantes.​<br/>O carro é um ambiente onde muitas pessoas passam grande parte do seu dia, por isso é comum acumular sujeiras, manchas, pó e mau cheiro em seu interior.<br/>Por isso, a higienização interna deve ser feita, no máximo, a cada seis meses por uma empresa especializada que utilizam produtos e equipamentos homologados pela <span>Agência Nacional de Vigilância Sanitária</span> (Anvisa).</p>
                </div>
            </div>
            <h2>Galeria de Imagens</h2>
            <ImageSwiper DataArray={imageArray} />
            <Services />
        </section>
    )
}