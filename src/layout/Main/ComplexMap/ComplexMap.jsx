import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import './ComplexMap.style.css';

export const ComplexMap = () => {
  return (
    <div className='main__complex-map'>
        <h1 className="main__complex-map__header">Карта жилых комплексов Екатеринбурга</h1>
        <YMaps>
            <Map 
                defaultState={{ center: [55.75, 37.57], zoom: 9 }}
                className='main__complex-map__map'
                modules={["control.ZoomControl", "control.FullscreenControl"]}
            >
                <Placemark 
                    modules={["geoObject.addon.balloon"]}
                    defaultGeometry={[55.75, 37.57]}
                    properties={{
                      balloonContentBody:
                        "This is balloon loaded by the Yandex.Maps API module system",
                    }}
                />
            </Map>
        </YMaps>
    </div>
  )
}