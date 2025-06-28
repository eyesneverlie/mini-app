import { IProduct, IGetCategoriesResponse, IGetProductsResponse, ICategory } from '../data-access';
import { api } from './axios';

export const getCategories = async (params: {
  parentId: string | null;
  skip?: string;
  limit?: string;
  order?: 'asc' | 'desc';
  orderBy?: string;
}): Promise<{ total: number; items: ICategory[] }> => {
  const response = await api.get<IGetCategoriesResponse>(`/v1/marketplace/categories`, { params });

  return {
    items: response.data.items,
    total: response.data.total,
  }
}

export const getProducts = async (params: {
  categoryId: string | null;
  skip?: string;
  limit?: string;
  order?: 'asc' | 'desc';
  orderBy?: string;
}): Promise<{ total: number; items: IProduct[] }> => {
  const response = await api.get<IGetProductsResponse>('/v1/marketplace/products', { params });

  const items: IProduct[] = response.data.items.map((item) => ({
    id: item.id,
    name: item.name,
    imageUrl: item.imageUrl,
    price: +item.prices[0].amount,
  }));

  return {
    total: response.data.total,
    items,
  };
};

export const marketplaceApi = {
  getCategories,
  getProducts,
  recordsPerPage: 100
};