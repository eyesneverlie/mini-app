import { ICollection } from '../data-access';
import { api } from './axios';

interface IApiCollectionItem extends ICollection {
  [key: string]: unknown;
}

interface IGetCollectionsResponse {
  total: number;
  items: IApiCollectionItem[];
}

const PER_PAGE = 10;

const getParams = (params: { [key: string]: unknown }): { params: { [key: string]: unknown; } } => {
  const queryParams: { [key: string]: unknown } = {};
  
  Object.entries(params).map(([key, value]) => {
    if (value) {
      queryParams[key] = value;
    }
  })
  return { params: queryParams };
}

export const getCollections = async ({ order = 'asc', orderBy = '', page = 0, limit = PER_PAGE }): Promise<{ total: number; items: ICollection[] }> => {
  const response = await api.get<IGetCollectionsResponse>('/collections', getParams({ order, orderBy, page, limit }));

  const items: ICollection[] = response.data.items.map((item) => ({
    id: item.id,
    name: item.name,
    imageUrl: item.imageUrl,
    description: item.description,
    price: item.price,
  }));

  return {
    total: response.data.total,
    items,
  };
};

export const collectionsApi = {
  getCollections,
};