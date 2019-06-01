import React from 'react'
import { useSelector } from 'react-redux'

import Maps from '../components/Maps'
import map from '../redux/mapDuck'

function MapsContainer(props) {
  const mapProps = useSelector(state => map.selectors.getMap(state))

  return(
    <Maps
    {...mapProps}
    />
  )
}

export default MapsContainer
