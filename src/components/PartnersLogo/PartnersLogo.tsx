interface CarouselItem {
  id: number;
  imageUrl: string;
  altText: string;
}

interface InfiniteCarouselProps {
  items: CarouselItem[];
}

export const PartnersLogo = ({ items }: InfiniteCarouselProps) => {
  return (
    <section className='partnersLogo_section'>
      <h2>Nossos Parceiros</h2>
      <ul className="partnersLogo_list">
        {items.map(item => (
          <li key={item.id} className="partnersLogo_list_item">
            <img src={item.imageUrl} alt={item.altText} />
          </li>
        ))}
      </ul>
    </section>
  );
};
