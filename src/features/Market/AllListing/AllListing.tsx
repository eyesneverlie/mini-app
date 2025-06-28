import { useCallback, useState, useEffect } from 'react';
import { marketplaceApi } from '../../../api';
import { Catalog } from '../../../components';
import { IProduct } from '../../../data-access';
import { useToastr } from '../../../hooks';
import { handleApiError } from '../../../utils';
import { MarketFilters } from '../MarketFilters';
import styles from './AllListing.module.scss';

interface IAllListingProps {
  categoryId?: string | null;
  className?: string;
}

export const AllListing = ({ categoryId = null }: IAllListingProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const notify = useToastr();

  const fetchData = useCallback(
    async (categoryIdToLoad: string | null) => {
      if (isLoadingMore || !setHasMore) {
        return;
      }

      setIsLoadingMore(true);

      try {
        const { items: productsList, total } = await marketplaceApi.getProducts(
          {
            categoryId: categoryIdToLoad,
            skip: String(currentPage * marketplaceApi.recordsPerPage),
            limit: String(marketplaceApi.recordsPerPage),
          }
        );

        const totalPages = Math.ceil(total / marketplaceApi.recordsPerPage);

        setProducts((prev) => [...prev, ...productsList]);

        setCurrentPage((prev) => prev + 1);
        console.log('CHECK = ', { currentPage, totalPages });
        if (currentPage >= totalPages - 1) {
          setHasMore(false);
        }
      } catch (error) {
        notify(handleApiError(error));
      }

      setIsLoadingMore(false);
    },
    [currentPage, isLoadingMore, notify]
  );

  useEffect(() => {
    // Reset pagination + product list
    setProducts([]);
    setCurrentPage(0);
    setHasMore(true);

    // Immediately fetch the first page for new category
    fetchData(categoryId);
  }, [categoryId]);

  const onLoadMore = useCallback(() => {
    fetchData(categoryId);
  }, [categoryId, fetchData]);

  return (
    <div className={styles.container}>
      <MarketFilters />
      <Catalog
        className={styles.catalog}
        items={products}
        onLoadMore={onLoadMore}
        hasMore={hasMore}
        isLoadingMore={isLoadingMore}
      />
    </div>
  );
};
