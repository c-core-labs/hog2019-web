import centroid from '@turf/centroid'
import bboxPolygon from '@turf/bbox-polygon'

function getCenter (boundingBox) {
  const polygon = bboxPolygon(boundingBox)
  const centerFeature = centroid(polygon)
  const [longitude, latitude] = centerFeature.geometry.coordinates
  const center = { longitude, latitude }

  return center
}

export default getCenter
