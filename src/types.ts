export type HatStyle = {
  name: string;
};

export type Fabrics = {
  name: string;
};

export type HatItemCardProps = {
  name: string;
  image: string;
  price: number;
  onAddToCart: Function;
};

export type CartItem = {
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export type ProductCard = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export type CustomHat = {
  hatStyle: HatStyle;
  primaryFabric: Fabrics;
  secondaryFabric: Fabrics;
  description: string;
};
