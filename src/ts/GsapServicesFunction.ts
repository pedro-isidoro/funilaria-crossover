import gsap from "gsap"
import { useLayoutEffect } from "react"

interface Props {
    trigger: string;
}
export function GsapServicesFunction(props: Props) {
    useLayoutEffect(()=>{
        gsap.fromTo(props.trigger, {
            opacity: 0,
            y: -340,
        },{
            opacity:1,
            y: 0,
        })
        .duration(1.5)

        return ()=>{
            gsap.killTweensOf(props.trigger)
        }
    }, [])
}