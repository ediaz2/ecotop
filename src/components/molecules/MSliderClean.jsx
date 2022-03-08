import '@splidejs/splide/dist/css/splide.min.css';
import './slider.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export const MSliderClean = ({ items }) => (
  <Splide
    className="border-4 border-base rounded-lg"
    options={{
      type: 'loop',
      arrows: false,
    }}>
    {items.map((item) => (
      <SplideSlide className="rounded-lg" key={item.title}>
        <img src={item.image} alt={item.title} className="rounded-lg" />
      </SplideSlide>
    ))}
  </Splide>
);
