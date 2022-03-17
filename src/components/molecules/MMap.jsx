import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZWRpYXoyIiwiYSI6ImNrdTRzeGpoMTR1aHMydnBtOGVlZTR5d2gifQ.89O138TslkQDDRZtUMOz2Q';
// mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

function MMap(props) {
  const mapContainer = useRef(null);

  const [lng, setLng] = useState(props.longitude);
  const [lat, setLat] = useState(props.latitude);
  const [zoom, setZoom] = useState(5);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });

    const marker = new mapboxgl.Marker({
      draggable: true,
    })
      .setLngLat([lng, lat])
      .addTo(map);

    function onDragEnd() {
      const lngLat = marker.getLngLat();
      setLng(lngLat.lng);
      setLat(lngLat.lat);
    }

    marker.on('dragend', onDragEnd);
  }, []);

  return (
    <div ref={mapContainer} className="h-full ">
      <div className="absolute z-10 mx-2 my-7 p-2 rounded bottom-4 left-0  text-white bg-primary">
        <div>Longitude: {lng}</div>
        <div>Latitude: {lat}</div>
      </div>
    </div>
  );
}

export default MMap;
