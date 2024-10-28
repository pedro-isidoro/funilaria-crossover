import { ImageSwiper } from "@/components/Swiper/Swiper"
import imageArray from '@/json/funilariaExpress.json'
import { Services } from "./Services"
import { GsapServicesFunction } from "@/ts/GsapServicesFunction"

export const MartelinhoDeOuro = () => {
    GsapServicesFunction({trigger: ".serviceItem_text_section"})
    return(
        <section className="serviceItem_section">
            <div className="martelinhoDeOuro_background">
                <h2>Martelinho de Ouro</h2>
            </div>
            <div className="serviceItem_text_section">
                <div className="serviceItem_second_text_section">
                    <h5>Um trabalho impecável de restauração de peças.</h5>
                    <p>Todo mundo com certeza já ouviu falar do serviço de Martelinho de Ouro, que é uma técnica muito detalhista, para desamassar o carro (peça) artesanalmente, e acredite, sem a necessidade de ferramentas especiais e nem de  serviço de pintura, mantendo a peça 100% original.​<br/>Você economiza muito em mão de obra e principalmente no tempo de recuperação do seu veículo, sendo que muitos problemas conseguem ser resolvidos no mesmo dia.<br/>Este é um serviço muito mais rápido que a funilaria convencional que obriga a pessoa a deixar o veículo por muitos dias no trabalho de pintura.<br/>Martelinho de Ouro é perfeito para quem tem o tempo contado.<br/>Venha fazer o seu orçamento <span>express</span> aqui na Crossover Autos.</p>
                </div>
            </div>
            <h2>Galeria de Imagens</h2>
            <ImageSwiper DataArray={imageArray} />
            <Services />
        </section>
    )
}