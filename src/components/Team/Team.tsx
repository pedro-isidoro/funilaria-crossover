import { ImageSwiper } from "@/components/Swiper/Swiper"
import imageArray from '@/json/team.json'
import { GsapFunction } from "@/ts/GsapFunction";

export const TeamFunilariaExpress = () => {
    GsapFunction({triggerFather: ".teamImages_section", trigger: ".ImageSwiper_list", markers: false, start: "top 900px", end: "bottom 800px"}); 
    return(
        <section className="teamImages_section">
            <ImageSwiper DataArray={imageArray} />
        </section>
    )
}