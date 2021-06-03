export interface ProductImage {
  formats: {
    medium: {
      url: string;
    };
  };
}

export interface Product {
  title: string;
  price: string;
  category: string;
  introduction: string;
  description: string;
  details: string;
  id: string;
  image_url: string;
  image: ProductImage;
  featured: boolean;
  qty: number;
}
