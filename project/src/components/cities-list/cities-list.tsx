import type { CityName } from '../../types/types';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCity } from '../../store/action';
import City from '../city/city';
import { cities } from '../../const';

const CitiesList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state) => state.city);

  const handleCityClick = (name: CityName) => {
    dispatch(setCity(name));
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <City key={city} name={city} isActive={city === activeCity.name} onClick={handleCityClick} />
      ))}
    </ul>
  );
};

export default CitiesList;
