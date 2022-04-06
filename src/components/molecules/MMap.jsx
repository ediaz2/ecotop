import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function MMap({ position, onSetPosition }) {
  const mapContainer = useRef(null);

  const [newPosition, setNewPosition] = useState({
    lng: -75.1151377973355,
    lat: -11.429155004201874,
  });

  useEffect(() => {
    setNewPosition(position);
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: newPosition,
      zoom: 10,
    });

    const marker = new mapboxgl.Marker({
      draggable: true,
    })
      .setLngLat(newPosition)
      .addTo(map);

    function onDragEnd() {
      const lngLat = marker.getLngLat();
      setNewPosition(lngLat);
      onSetPosition(lngLat);
    }

    marker.on('dragend', onDragEnd);
  }, [position]);

  return (
    <div ref={mapContainer} className="h-full ">
      <div className="absolute z-10 mx-2 my-7 p-2 rounded bottom-4 left-0  text-white bg-primary">
        <div>Longitude: {newPosition.lng}</div>
        <div>Latitude: {newPosition.lat}</div>
      </div>
    </div>
  );
}

export default MMap;
