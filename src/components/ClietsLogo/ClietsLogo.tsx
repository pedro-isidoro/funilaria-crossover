interface CarouselItem {
  id: number;
  imageUrl: string;
  altText: string;
}

interface InfiniteCarouselProps {
  items: CarouselItem[];
}

export const ClietsLogo = ({ items }: InfiniteCarouselProps) => {
  return (
    <section className='clientsLogo_section'>
      <h2>Alguns dos Nossos Clientes</h2>
      <ul className="clientsLogo_list">
        {items.map(item => (
          <li key={item.id} className="clientsLogo_list_item">
            <img src={item.imageUrl} alt={item.altText} />
          </li>
        ))}
      </ul>
    </section>
  );
};
