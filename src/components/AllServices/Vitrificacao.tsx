import { ImageSwiper } from "@/components/Swiper/Swiper"
import imageArray from '@/json/vitrificacao.json'
import { Services } from "./Services"
import { GsapServicesFunction } from "@/ts/GsapServicesFunction"
import { VideoSwiper } from "@/components/Swiper/VideoSwiper"
import videoArray from '@/json/videos/vitrificacao.json'

export const Vitrificacao = () => {
    GsapServicesFunction({trigger: ".serviceItem_text_section"})
    return(
        <section className="serviceItem_section">
            <div className="vitrificacao_background">
                <h2>Vitrificação</h2>
            </div>
            <div className="serviceItem_text_section">
                <div className="serviceItem_second_text_section">
                    <h5>Grafeno</h5>
                    <p>O grafeno, material quimicamente não reativo e inerte, é processado de forma específica para permitir uma combinação de materiais que o habilitem como revestimento de longa duração.<br/>O óxido de grafeno reduzido (rGO) é obtido após a oxidação química do grafeno e ligação com moléculas de oxigênio. Moléculas inorgânicas formadas por nanopartículas de silício e titânio são anexadas, resultando em um uso menor de solventes e baixo nível de compostos orgânicos voláteis.</p>
                </div>
            </div>
            <div className="serviceItem_text_section">
                <div className="serviceItem_second_text_section">
                    <h5>Revestimento - Cerâmico vs Grafeno</h5>
                    <p>O grafeno, material quimicamente não reativo e inerte, é processado de forma específica para permitir uma combinação de materiais que o habilitem como revestimento de longa duração.<br/>O grafeno, sendo carbono, é uma matéria orgânica que, ao ser combinada com materiais inorgânicos, forma um revestimento híbrido de alta performance, diferenciando-se dos revestimentos cerâmicos que são baseados em nanopartículas de dióxido de silício e/ou titânio.<br/>Também tendo um durabilidade de até 3 anos sobre a pintura do veículo.<br/>Perfeito para quem cuida e quer sempre Ver o carro Brilhando e Protegido.</p>
                </div>
            </div>
            <h2>Galeria de Imagens</h2>
            <ImageSwiper DataArray={imageArray} />
            <h2>Galeria de Vídeos</h2>
            <VideoSwiper DataArray={videoArray} />
            <Services />
        </section>
    )
}