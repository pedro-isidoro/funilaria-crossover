import { ImageSwiper } from "@/components/Swiper/Swiper"
import imageArray from '@/json/funilariaExpress.json'
import { Services } from "./Services"

export const HigienizacaoComOzonio = () => {
    return(
        <section className="serviceItem_section">
            <div className="higienizacaoComOzonio_background">
                <h2>Higienização Com Ozônio</h2>
            </div>
            <div className="serviceItem_text_section">
                <div className="serviceItem_second_text_section">
                    <p>Fazemos a Sanitização do seu carro com Ozônio.​<br/>Uma máquina própria libera ozônio no carro, acabando com odores, vírus e bactérias de forma efetiva  e eficiente, garantindo a limpeza dos cantos mais difíceis de alcançar como o console dos carros,  botões de comandos, painel interno, partes internas de couros entre outros.</p>
                </div>
            </div>
            <h2>Galeria de Imagens</h2>
            <ImageSwiper DataArray={imageArray} />
            <Services />
        </section>
    )
}