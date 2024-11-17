import 'swiper/swiper-bundle.css';

interface VideoInfo {
    source: string;
}

export const VideoSwiper = ({ DataArray }: { DataArray: VideoInfo[] }) => {

    return (
        <section className="section_videoSwiper">
            <ul className="videoSwiper_list">
                {DataArray.length > 1 ? (
                    DataArray.map((data, index) => (
                        <li key={index} className="videoSwiper_item">
                            <div className="videoSwiper_card">
                                <video
                                    src={data.source}
                                    className="video-element"
                                    muted
                                    preload="metadata"
                                    controls
                                >
                                    Seu navegador não suporta vídeos.
                                </video>
                            </div>
                        </li>
                    ))
                ) : (
                    <></>
                )}
            </ul>
        </section>
    );
};
