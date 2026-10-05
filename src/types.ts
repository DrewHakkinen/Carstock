export type CarData = {
  brand: string;
  model: string;
  color: string;
  fuel: string;
  modelYear: number;
  price: number;
  links: {
    self: {
      href: string;
    },
    car: {
      href: string;
    }
  }
}