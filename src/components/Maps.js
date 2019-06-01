import React from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import { accessToken } from '../config'

const Map = ReactMapboxGl({
  accessToken,
  hash: true
})

function Maps(props) {
  console.log({ props })
  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "100vh",
        width: "100vw",       
      }}
      onMove={(event, map) => console.log(event, map)}
      center={props.center}
      zoom={props.zoom}
    >
    <Layer
      type="symbol"
      id="marker"
      layout={{ "icon-image": "marker-15" }}>
      <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
    </Layer>
</Map>
  )
}

export default Maps
