import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

import Maps from '../components/Maps'
import Slider from '../components/Slider'
import Year from '../components/Year'
import LayerSelector from '../components/LayerSelector'
import Hover from '../components/Hover'
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
      <Hover />
    </Fragment>
  )
}

export default MapsContainer
