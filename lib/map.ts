import { LatLng } from "leaflet"
import { useMap } from "react-leaflet"

export const ChangeMapCenter = ({ position }: { position: LatLng }) => {
  const map = useMap()
  map.panTo(position)

  return null
}

const calcCenter = (values: number[]) =>
  (Math.max(...values) + Math.min(...values)) / 2

export const getCenterPosition = (positions: Position[]): Position => ({
  latitude: calcCenter(positions.map((p) => p.latitude)),
  longitude: calcCenter(positions.map((p) => p.longitude)),
})

export const getCenterLatLng = (positions: Position[]): LatLng =>
  new LatLng(
    calcCenter(positions.map((p) => p.latitude)),
    calcCenter(positions.map((p) => p.longitude))
  )
