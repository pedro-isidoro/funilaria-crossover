import { ImageSwiper } from "@/components/Swiper/Swiper"
import imageArray from '@/json/martelinho.json'
import { Services } from "./Services"
import { GsapServicesFunction } from "@/ts/GsapServicesFunction"
import videoArray from '@/json/videos/martelinho.json'
import { VideoSwiper } from "@/components/Swiper/VideoSwiper"

export const MartelinhoDeOuro = () => {
    GsapServicesFunction({trigger: ".serviceItem_text_section"})
    return(
        <section className="serviceItem_section">
            <div className="martelinhoDeOuro_background">
                <h2>Martelinho de Ouro</h2>
            </div>
            <div className="serviceItem_text_section">
                <div className="serviceItem_second_text_section">
                    <h5>Martelinho de ouro ou funilaria?</h5>
                    <p>Martelinho de ouro é conhecido por sua técnica artesanal, fazendo pequenos e médios amassados sem a necessidade de pintura, que  é executado em alguns  minutos dependendo do caso em até duas horas.<br/>Perfeito para o dia de hoje que cada vez mais estamos sem tempo.<br/>Seu carro pronto no mesmo dia.</p>
                </div>
            </div>
            <div className="serviceItem_text_section">
                <div className="serviceItem_second_text_section">
                    <h5>Funilaria</h5>
                    <p>Com o passar dos anos moderno e o avanço tecnológico não se faz funilaria como antes ou pelo menos em muitos casos, poucas oficinas trabalham com alta monta (colisão).<br/>As vistorias e laudo cautelar é Reprovado em caso de troca de peças da estrutura dos carros sem contar que as latas (chapa) São muito finas não permitindo a recuperação no modo funilaria.<br/>As oficinas voltadas para reparos Epress vêm conquistando seu espaço nessa nova era e a CROSSOVER AUTOS Com certeza está super preparada com equipes altamente treinadas para fazer um reparo super de qualidade e rapidez</p>
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