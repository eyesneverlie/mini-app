import { Input } from '../Input';
import searchUrl from '../../assets/search.svg';

interface ISearchInputProps {
  className?: string;
  placeholder?: string;
}

export const SearchInput = ({
  className,
  placeholder = 'Search',
}: ISearchInputProps) => {
  return (
    <Input
      iconUrl={searchUrl}
      name='search'
      placeholder={placeholder}
      className={className}
    />
  );
};
