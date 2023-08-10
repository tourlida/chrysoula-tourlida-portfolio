import { useCallback, useState } from "react";
import "leaflet-defaulticon-compatibility";
import DirectionsIcon from "@mui/icons-material/Directions";

import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { IconButton } from "@mui/material";

export function ChangeView({ coords }: any) {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}

export default function CustomMap() {
  const [geoData, setGeoData] = useState({ lat: 37.9887, lng: 23.7638 });
  const center = { lat: geoData.lat, lng: geoData.lng };

  const handleGetDirectionOnGoogleMaps = useCallback(() => {
    window.open(
      "https://www.google.com/maps/dir//Sevastoupoleos+114,+Athina+115+26/@37.9922467,23.7653956,17z/data=!4m18!1m8!3m7!1s0x14a198068c5bcdd5:0xc6b094884bda76b8!2sSevastoupoleos+114,+Athina+115+26!3b1!8m2!3d37.9922467!4d23.7679705!16s%2Fg%2F11c29vb852!4m8!1m0!1m5!1m1!1s0x14a198068c5bcdd5:0xc6b094884bda76b8!2m2!1d23.7679705!2d37.9922467!3e3?entry=ttu"
    );
  }, []);

  return (
    <MapContainer center={center} zoom={12} style={{ height: "100%" }}>
      <IconButton
        sx={{
          position: "absolute",
          zIndex: 100000000,
          border: "2px solid #CCCCCC",
          borderRadius: "2px",
          height: 34,
          width: 34,
          background: "#fff",
          color: "black",
          right:10,
          top:10,
          '&:hover':{
            '&.MuiIconButton-root':{
              backgroundColor: '#F4F4F4'
          }
        }
        }}
        onClick={handleGetDirectionOnGoogleMaps}
      >
        <DirectionsIcon />
      </IconButton>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoData.lat && geoData.lng && (
        <Marker position={[geoData.lat, geoData.lng]} />
      )}
      <ChangeView coords={center} />
    </MapContainer>
  );
}
