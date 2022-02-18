import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";

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
        }), 'top-left');
    }, []);

    return (
        <div id="mapContainer" className="map">
            <link href="https://api.mapbox.com/mapbox-gl-js/v1.6.1/mapbox-gl.css" rel="stylesheet" />
        </div>
    );
};

export default Map;