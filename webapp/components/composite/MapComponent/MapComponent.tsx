import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { MapComponentProps } from './MapComponent.props';
// import styles from './MapComponent.module.css';
import cn from 'classnames';

export const MapComponent = ({ className, ...props }: MapComponentProps): JSX.Element => {
  const coordinates = [55.751574, 37.573856];

  return (
    <div  {...props}>
      <YMaps>
        <Map  defaultState={{ center: coordinates, zoom: 12 }}>
          <Placemark geometry={coordinates} options={{ iconLayout: 'default#image', iconImageHref: '/marker.svg', iconImageSize: [30, 42], iconImageOffset: [-3, -42] }} />
        </Map>
      </YMaps>
    </div>
  );
};
