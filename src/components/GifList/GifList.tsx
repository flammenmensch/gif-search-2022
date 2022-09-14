import { GifObject } from '../../domain';

interface Props {
  items: GifObject[];
}

const GifList = (props: Props) => (
  <ul className="gif-list" role="list">
    {props.items.map((item) => (
      <li key={item.id} role="listitem">
        <img src={item.images.fixed_height.url} alt={item.id} />
      </li>
    ))}
  </ul>
);

export default GifList;
