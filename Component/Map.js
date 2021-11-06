import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/dist/styles.min.css";

import L from 'leaflet';

const customMsrker = L.icon({
  iconUrl: "https://i.ibb.co/sJrMTdz/favicon-32x32.png"
});

function MapCluster() {
    return (
        <MapContainer
            style={{ height: "90vh" }}
            center={[51.0, 19.0]}
            zoom={4}
            maxZoom={18}
            scrollWheelZoom={false}
        >
            <TileLayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"/>

            <MarkerClusterGroup>
                <Marker position={[49.8397, 24.0297]} icon={customMsrker}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={[52.2297, 21.0122]} icon={customMsrker}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={[51.5074, -0.0901]} icon={customMsrker} />
            </MarkerClusterGroup>
        </MapContainer>
    );
}
export default MapCluster;