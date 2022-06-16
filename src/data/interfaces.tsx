export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  avatar: string;
  developerEmail: string;
  createdAt: string;
}

export interface Category {
  id: string;
  createdAt: string;
  name: string;
}

export type Action = {
  type: string;
  payload: any;
};
