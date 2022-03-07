import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

const Map = () => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: "mapContainer",
            style: "mapbox://styles/helloworld-ynov/ckzo9rhdg001414qirib3u3lx",
            center: [0, 20],
            zoom: 1.5,
        });

        map.addControl(new mapboxgl.NavigationControl({
            showCompass: false
        }), 'top-right');

        var geocoder = new MapboxGeocoder({ accessToken: mapboxgl.accessToken });
        map.addControl(geocoder, 'top-left');

    }, []);

    return (
        <div id="mapContainer" className="map">
            <link href="https://api.mapbox.com/mapbox-gl-js/v1.6.1/mapbox-gl.css" rel="stylesheet" />
            <link href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.css" rel="stylesheet" />
        </div>
    );
};

export default Map;