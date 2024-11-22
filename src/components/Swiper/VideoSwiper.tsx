import 'swiper/swiper-bundle.css';
import { useEffect, useRef, useState } from 'react';

interface VideoInfo {
    source: string;
}

export const VideoSwiper = ({ DataArray }: { DataArray: VideoInfo[] }) => {
    const [loadedVideos, setLoadedVideos] = useState<Record<number, boolean>>({}); // Estado para rastrear quais vídeos foram carregados
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]); // Armazena referências para cada vídeo

    // Função para carregar o vídeo quando ele se tornar visível
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = videoRefs.current.findIndex((video) => video === entry.target);
                if (index !== -1 && !loadedVideos[index]) {
                    console.log(`Vídeo visível no índice ${index}`);
                    setLoadedVideos((prevState) => ({
                        ...prevState,
                        [index]: true, // Marca o vídeo como carregado
                    }));
                }
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            rootMargin: '500px', // Carrega vídeos antes de entrarem na tela
        });

        // Adicionar os vídeos ao observador
        videoRefs.current.forEach((video, index) => {
            if (video) {
                observer.observe(video);
                console.log(`Observando vídeo no índice ${index}`);
            }
        });

        // Limpar o observador ao desmontar o componente
        return () => observer.disconnect();
    }, [DataArray]);

    return (
        <section className="section_videoSwiper">
            <ul className="videoSwiper_list">
                {DataArray.map((data, index) => (
                    <li key={index} className="videoSwiper_item">
                        <div className="videoSwiper_card">
                            <video
                                ref={(el) => (videoRefs.current[index] = el)} // Atribui ref ao vídeo
                                className="video-element"
                                muted
                                preload="auto"
                                controls
                                src={loadedVideos[index] ? data.source : ''} // Define o 'src' apenas quando carregado
                            >
                                Seu navegador não suporta vídeos.
                            </video>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};
