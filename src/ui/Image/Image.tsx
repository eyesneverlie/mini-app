import { useState } from 'react';
import placeholderSrc from '../../assets/skeleton-image.png';

interface IImageProps {
  src?: string | null;
  alt?: string;
  className?: string;
}

export const Image = ({
  src = null,
  alt = '',
  className = '',
}: IImageProps) => {
  const [imgSrc, setImgSrc] = useState<string>(placeholderSrc);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handleLoad = (): void => {
    setIsLoaded(true);
    if (src) {
      setImgSrc(src);
    }
  };

  const handleError = (): void => {
    setImgSrc(placeholderSrc);
  };

  return (
    <img
      src={isLoaded ? imgSrc : placeholderSrc}
      onLoad={handleLoad}
      onError={handleError}
      alt={alt}
      className={className}
    />
  );
};
