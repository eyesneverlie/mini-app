import { Input } from '../Input';
import searchUrl from '../../assets/search.svg';

interface ISearchInputProps {
  className?: string;
}

export const SearchInput = ({ className }: ISearchInputProps) => {
  return (
    <Input
      iconUrl={searchUrl}
      name='search'
      placeholder='Search'
      className={className}
    />
  );
};
