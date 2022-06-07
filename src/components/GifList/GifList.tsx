import { GifObject } from '../../domain';

interface Props {
  items: GifObject[];
}

const GifList = (props: Props) => (
  <>
    {props.items.map((item) => (
      <img src={item.images.fixed_width.url} alt="gif" key={item.id} />
    ))}
  </>
);

export default GifList;
