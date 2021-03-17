import TimeClientInstance from "../Adapter/timeapi";
import React from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

export default class WorldMap extends React.Component {

    map1 = new Map({
                target: null,
                layers: [
                    new TileLayer({
                        source: new XYZ({
                        url: 'http://mt0.google.com/vt/lyrs=m,traffic&hl=en&x={x}&y={y}&z={z}&s=Ga.png'
                    })
                    })
                ],
                view: new View({
    center: [18.41, -33.82],
    zoom: 3
})
});
    componentDidMount() {
        this.map1.setTarget("map");
    }
    render() {
        return (
            <div id="map" className="map"></div>
        )
    }
}
