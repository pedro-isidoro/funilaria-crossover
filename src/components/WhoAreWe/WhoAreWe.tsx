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
            <p className="WhoAreWe_section_paragraph">Situada em São Bernardo do Campo – SP, a Crossover Autos faz parte de uma empresa
                especializada em Funilaria Express de alta qualidade para automóveis.<br /><br />Realizamos os melhores serviços de Martelinho de Ouro, Reparos Rápidos de Funilaria e
                Estética Automotiva, entre outros cuidados com o carro, desde reparos até serviços de estética
                automotiva extremamente modernos e profissionais.<br /><br />Com mais de 40 anos de experiência entre seus sócios, incluindo um estágio de 2 anos na
                conceituada oficina Reliable, situada em Toronto, no Canadá, temos a capacidade de oferecer
                serviços diferenciados e da melhor qualidade.<br /><br />Além disso, contamos com duas unidades para oferecer ainda mais comodidade a você.</p>
            <div className="second_WhoAreWe_section">
                <h2>Serviços</h2>
                <Services/>
            </div>
        </section>
    )
}