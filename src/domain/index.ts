export interface GifObject {
  id: string;
  slug: string;
  embed_url: string;
  rating: Rating;
  images: {
    fixed_height: {
      url: string;
      width: string;
      height: string;
      size: string;
    };
    fixed_height_still: {
      url: string;
      width: string;
      height: string;
    };
    fixed_width: {
      url: string;
      width: string;
      height: string;
      size: string;
    };
    fixed_width_still: {
      url: string;
      width: string;
      height: string;
    };
    original: {
      url: string;
      width: string;
      height: string;
      size: string;
      frames: string;
    };
    original_still: {
      url: string;
      width: string;
      height: string;
    };
  };
}

export type Rating = 'g' | 'pg' | 'pg-13' | 'r';
