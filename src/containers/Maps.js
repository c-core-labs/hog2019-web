import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

import Maps from '../components/Maps'
import Slider from '../components/Slider'
import map from '../redux/mapDuck'

function MapsContainer(props) {
  const mapProps = useSelector(state => map.selectors.getMap(state))

  return(
    <Fragment>
    <Maps
    {...mapProps}
    />
      <Slider />
    </Fragment>
  )
}

export default MapsContainer
