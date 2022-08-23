import { GifObject } from '../../domain';

interface Props {
  items: GifObject[];
}

const GifList = (props: Props) => (
  <ul className="gif-list">
    {props.items.map((item) => (
      <li key={item.id}>
        <img src={item.images.fixed_height.url} alt={item.id} />
      </li>
    ))}
  </ul>
);

export default GifList;
