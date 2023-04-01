import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { MapComponentProps } from './MapComponent.props';

export const MapComponent = ({ ...props }: MapComponentProps): JSX.Element => {
  const coordinates = [55.751574, 37.573856];

  return (
    <div  {...props}>
      <YMaps>
        <Map  defaultState={{ center: coordinates, zoom: 12 }}>
          <Placemark geometry={coordinates} options={{ iconLayout: 'default#image', iconImageSize: [30, 42], iconImageOffset: [-3, -42] }} />
        </Map>
      </YMaps>
    </div>
  );
};
