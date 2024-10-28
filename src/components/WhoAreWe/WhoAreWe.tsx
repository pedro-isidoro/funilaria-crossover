import { Services } from "@/components/AllServices/Services"
import gsap from "gsap"
import { useLayoutEffect } from "react"

export const WhoAreWe = () => {
    useLayoutEffect(()=>{
        gsap.fromTo(".whoAreWe_title", {
            opacity: 0,
            y: -340,
        },{
            opacity:1,
            y: 0,
        })
        .duration(1)
        gsap.fromTo(".WhoAreWe_section_paragraph", {
            opacity: 0,
            y: -340,
        },{
            opacity:1,
            y: 0,
        })
        .duration(1)

        return ()=>{
            gsap.killTweensOf(".whoAreWe_title")
            gsap.killTweensOf(".WhoAreWe_section_paragraph")
        }
    }, [])
    return(
        <section className="WhoAreWe_section">
            <h2 className="whoAreWe_title">Quem Somos</h2>
            <p className="WhoAreWe_section_paragraph">Situada em São Bernardo do Campo – SP, a Crossover Autos, faz parte de uma empresa especializada em Funilaria Express de alta qualidade para automóveis.<br/><br/>Realizamos os melhores serviços de Martelinho de Ouro, Reparos Rápidos de Funilaria e Estética Automotiva, entre outros relacionados com os cuidados com o carro, desde o reparo a estética automotiva extremamente moderna e profissional.<br/><br/>Com mais de 40 anos de experiência entre seus sócios, e um estágio de 2 anos na conceituada oficina Reliable situada em Toronto no Canadá.<br/><br/>Isso nos proporciona uma capacidade de oferecer serviços diferenciados e da melhor qualidade e contando com duas unidades para te oferecer uma maior comodidade.</p>
            <div className="second_WhoAreWe_section">
                <h2>Serviços</h2>
                <Services/>
            </div>
        </section>
    )
}