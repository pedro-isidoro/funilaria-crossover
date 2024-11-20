import 'swiper/swiper-bundle.css';
import { useEffect, useRef, useState } from 'react';

interface VideoInfo {
    source: string;
}

export const VideoSwiper = ({ DataArray }: { DataArray: VideoInfo[] }) => {
    const [loadedVideos, setLoadedVideos] = useState<boolean[]>(new Array(DataArray.length).fill(false));

    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    // Função para carregar o vídeo quando ele se tornar visível
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Carregar o vídeo apenas quando estiver visível
                setLoadedVideos((prevState) => {
                    const newState = [...prevState];
                    newState[index] = true;
                    return newState;
                });
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            rootMargin: '200px', // Carregar o vídeo um pouco antes de entrar na tela
        });

        // Adicionar os vídeos ao observador
        videoRefs.current.forEach((video) => {
            if (video) observer.observe(video);
        });

        // Limpar o observador ao desmontar o componente
        return () => observer.disconnect();
    }, [DataArray]);

    return (
        <section className="section_videoSwiper">
            <ul className="videoSwiper_list">
                {DataArray.length > 1 ? (
                    DataArray.map((data, index) => (
                        <li key={index} className="videoSwiper_item">
                            <div className="videoSwiper_card">
                                <video
                                    ref={(el) => (videoRefs.current[index] = el)}  // Atribuindo ref ao vídeo
                                    className="video-element"
                                    muted
                                    preload="auto"
                                    controls
                                    src={loadedVideos[index] ? data.source : ''} // Só definir o 'src' quando o vídeo for carregado
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
