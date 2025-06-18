import { useEffect, useState } from 'react';
import { INft } from '../../data-access';
import { NftCard, NftCardSkeleton } from '../NftCard';
import styles from './Catalog.module.scss';

interface ICatalogProps {
  items: INft[];
}

export const Catalog = ({ items }: ICatalogProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? Array(2).fill(null).map((_, i: number) => <NftCardSkeleton key={`id-${i + 1}`} />) : items.map((card: INft) => (<NftCard key={card.id} {...card} />))}
    </div>
  );
}