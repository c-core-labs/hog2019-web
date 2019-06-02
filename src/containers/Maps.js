import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

import Maps from '../components/Maps'
import Slider from '../components/Slider'
import Year from '../components/Year'
import LayerSelector from '../components/LayerSelector'
import map from '../redux/mapDuck'

function MapsContainer(props) {
  const mapProps = useSelector(state => map.selectors.getMap(state))

  return(
    <Fragment>
    <Maps
    {...mapProps}
    />
      <Slider />
      <Year />
      <LayerSelector />
    </Fragment>
  )
}

export default MapsContainer
