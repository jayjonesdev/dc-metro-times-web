import React from 'react';
import { StarIcon } from '@heroicons/react/outline';
import './dropdown.styles.css';
import { upsertSort } from '../../utils';

interface IList {
  nodeRef: React.MutableRefObject<any>;
  show: boolean;
  items: string[];
  onClick: (item: string) => void;
}

interface IItem {
  item: string;
  favorites: string[];
  onClick: (item: string) => void;
  updateFavorites: (item: string) => void;
}

const Item: React.FC<IItem> = ({
  item,
  favorites,
  onClick,
  updateFavorites,
}) => (
  <li onClick={() => onClick(item)}>
    <span className='flex items-center break-words'>
      <div className='w-1/6'>
        {item !== 'All' && (
          <StarIcon
            className={`favorite ${favorites.includes(item) && 'favorited'}`}
            onClick={(e) => {
              e.stopPropagation();
              updateFavorites(item);
            }}
          />
        )}
      </div>
      <span className='w-5/6'>{item}</span>
    </span>
  </li>
);

const List: React.FC<IList> = ({ nodeRef, show, items, onClick }) => {
  const [favorites, setFavorites] = React.useState<string[]>([]);

  React.useEffect(() => {
    const favorites = localStorage.getItem('favoriteRailStations');
    if (favorites) {
      setFavorites(favorites.split(','));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('favoriteRailStations', favorites.toString());
  }, [favorites]);

  const updateFavorites = (favorite: string) => {
    setFavorites((favs) => upsertSort(favs, favorite));
  };

  return (
    <div
      id='dropdown-list'
      ref={nodeRef}
      style={{ zIndex: 101, visibility: !show ? 'hidden' : 'visible' }}
      className={'dropdown-list'}
    >
      <ul aria-labelledby='dropdown'>
        <div className='favorites-header'>
          <p className='px-3 py-2'>Favorites</p>
        </div>
        {favorites.map((favorite) => (
          <Item
            key={favorite}
            item={favorite}
            favorites={favorites}
            onClick={onClick}
            updateFavorites={updateFavorites}
          />
        ))}
        <p className='stations-header'>Stations</p>
        {items.map(
          (item) =>
            !favorites.includes(item) && (
              <Item
                key={item}
                item={item}
                favorites={favorites}
                onClick={onClick}
                updateFavorites={updateFavorites}
              />
            )
        )}
      </ul>
    </div>
  );
};

export default List;
