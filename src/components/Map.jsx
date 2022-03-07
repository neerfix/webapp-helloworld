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
        }), 'bottom-right');

        var geocoder = new MapboxGeocoder({ accessToken: mapboxgl.accessToken });
        map.addControl(geocoder, 'top-left');

        class MapboxGLButtonControl {
            constructor({
              className = "",
              title = "",
              eventHandler = null
            }) {
              this._className = className;
              this._title = title;
              this._eventHandler = eventHandler;
            }

            onAdd(map) {
                this._btn = document.createElement("button");
                this._btn.className = "mapboxgl-ctrl-icon" + " " + this._className;
                this._btn.type = "button";
                this._btn.title = this._title;
                this._btn.onclick = this._eventHandler;
            
                this._container = document.createElement("div");
                this._container.className = "mapboxgl-ctrl-group mapboxgl-ctrl";
                this._container.appendChild(this._btn);
            
                return this._container;
            }
            
            onRemove() {
            this._container.parentNode.removeChild(this._container);
            this._map = undefined;
            }
        }

        /* Instantiate new controls with custom event handlers */
        const filterMapBtn = new MapboxGLButtonControl({
            className: "filter-map-control",
            title: "Filtrer",
            eventHandler: filterMapEvent
        });

        function filterMapEvent(event) {
            console.log("Filtrage de la map");
        }

        map.addControl(filterMapBtn, 'top-right');

        class PitchToggle {
            constructor({ bearing = -20, pitch = 70, minpitchzoom = null }) {
                this._bearing = bearing;
                this._pitch = pitch;
                this._minpitchzoom = minpitchzoom;
            }

            onAdd(map) {
                this._map = map;
                let _this = this;

                this._btn = document.createElement("button");
                this._btn.className = "mapboxgl-ctrl-icon mapboxgl-ctrl-pitchtoggle-3d";
                this._btn.type = "button";
                this._btn["aria-label"] = "Activer la vue 3D";
                this._btn.onclick = function () {
                    if (map.getPitch() === 0) {
                        let options = { pitch: _this._pitch, bearing: _this._bearing };
                        if (_this._minpitchzoom && map.getZoom() > _this._minpitchzoom) {
                            options.zoom = _this._minpitchzoom;
                        }
                        map.easeTo(options);
                        _this._btn.className =
                            "mapboxgl-ctrl-icon mapboxgl-ctrl-pitchtoggle-2d";
                    } else {
                        map.easeTo({ pitch: 0, bearing: 0 });
                        _this._btn.className =
                            "mapboxgl-ctrl-icon mapboxgl-ctrl-pitchtoggle-3d";
                    }
                };

                this._container = document.createElement("div");
                this._container.className = "mapboxgl-ctrl-group mapboxgl-ctrl";
                this._container.appendChild(this._btn);

                return this._container;
            }

            onRemove() {
                this._container.parentNode.removeChild(this._container);
                this._map = undefined;
            }
        }
        
        map.addControl(new PitchToggle({ minpitchzoom: 4 }), "bottom-left");
  

    }, []);

    return (
        <div id="mapContainer" className="map">
            <link href="https://api.mapbox.com/mapbox-gl-js/v1.6.1/mapbox-gl.css" rel="stylesheet" />
            <link href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.css" rel="stylesheet" />
        </div>
    );
};

export default Map;