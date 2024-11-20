import 'swiper/swiper-bundle.css';
import { useEffect, useState } from 'react';

interface VideoInfo {
    source: string;
}

export const VideoSwiper = ({ DataArray }: { DataArray: VideoInfo[] }) => {
    const [loadedVideos, setLoadedVideos] = useState<boolean[]>(new Array(DataArray.length).fill(false));

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
        const videoElements = document.querySelectorAll('.video-element');
        videoElements.forEach((video) => observer.observe(video));

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
                                    className="video-element"
                                    muted
                                    preload="auto"
                                    controls
                                    // Só definir o 'src' quando o vídeo for carregado
                                    src={loadedVideos[index] ? data.source : ''}
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
