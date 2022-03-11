import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

const Map = (props) => {

    // Récupération des paramètres de filtre
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

    let mapSearchQuery = urlParams.get('search')
    if(mapSearchQuery) mapSearchQuery = mapSearchQuery.replace('-', ' ');
    let mapUserQuery = urlParams.get('user');


    useEffect(() => {
        let mapCenter = [0, 20];
        let mapBounds;
        let mapZoom = 2;

        if(props && props.steps) {

            let minLon = Math.min(...props.steps.map(item => item.longitude)) - 5.5;
            let minLat = Math.min(...props.steps.map(item => item.latitude)) - 5.5;
            let maxLon = Math.max(...props.steps.map(item => item.longitude)) + 5.5;
            let maxLat = Math.max(...props.steps.map(item => item.latitude)) + 5.5;

            mapBounds = [ [maxLon, minLat], [minLon, maxLat] ];
            mapCenter = [ (minLon + maxLon) / 2, (minLat + maxLat) / 2 ];
            mapZoom= 4;
        }

        const map = new mapboxgl.Map({
            container: "mapContainer",
            style: "mapbox://styles/helloworld-ynov/ckzo9rhdg001414qirib3u3lx",
            center: mapCenter,
            zoom: mapZoom,
        });

        if(mapBounds){
            map.fitBounds(mapBounds);
        }

        map.addControl(new mapboxgl.NavigationControl({
            showCompass: false
        }), 'bottom-right');

        var geocoder = new MapboxGeocoder({ 
            accessToken: mapboxgl.accessToken, 
            markers: false,
            placeholder: 'Recherchez un lieu, un monument, un pays...',
            mapboxgl: mapboxgl
        });
        map.addControl(geocoder, 'top-left');

        if(mapSearchQuery){
            geocoder.query(mapSearchQuery);
            document.getElementById('mapContainer').focus();
        }

        if(mapUserQuery){
            console.log(mapUserQuery);
        }

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
                this._btn.className = "mapboxgl-ctrl-icon " + this._className;
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
            // TODO Ajout des filtres
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

        // Ajout des points
        if(props && props.steps){
            props.steps.forEach( step => {
                // create a HTML element for each feature
                const el = document.createElement('div');
                el.className = 'marker';
                el.color = '#fff';

                el.addEventListener('click', () => { 
                    map.flyTo({
                        center: [step.longitude, step.latitude],
                        zoom: 12
                    });
                }); 

                // make a marker for each feature and add it to the map
                new mapboxgl.Marker(el)
                .setLngLat([step.longitude, step.latitude])
                .setPopup(
                    new mapboxgl.Popup({ offset: 25 }) // add popups
                    .setHTML(
                        `<h3>${step.place}</h3><p>${step.description}</p><a href="/voyage/${step.id}">Découvrir</a>`
                    )
                )
                .addTo(map);
            });
        }
    }, [props, mapSearchQuery, mapUserQuery]);

    return (
        <div id="mapContainer" className="map">
            <link href="https://api.mapbox.com/mapbox-gl-js/v1.6.1/mapbox-gl.css" rel="stylesheet" />
            <link href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.css" rel="stylesheet" />
        </div>
    );
};

export default Map;