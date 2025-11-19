export interface IProductData {
  // Allows any string key (e.g., "color", "price", "capacity GB") 
  // to have a value of type string, number, or null.
  [key: string]: string | number | null;
}

export interface IPhone {
    id: string;
    name: string;
    data: IProductData | null;
    
}

export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface APIResponseModel {
  categories: Category[];
}

export interface PhoneData {
  year?: number;
  price?: number;
  'CPU model'?: string;
  'Hard disk size'?: string;
}

export interface Phone {
  id?: string;
  name: string;
  data: Required<PhoneData> | null;
  createdAt?: string;
}










