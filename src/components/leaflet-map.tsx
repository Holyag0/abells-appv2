'use client'

import { useEffect, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

// Helper to fix Leaflet icons in Next.js
const fixLeafletIcon = () => {
  // @ts-ignore
  delete L.Icon.Default.prototype._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  })
}

fixLeafletIcon()

function MapContent({ position }: { position: [number, number] }) {
  const map = useMap()
  
  useEffect(() => {
    if (map) {
      // Pequeno delay para garantir que o container DOM está estável
      const timer = setTimeout(() => {
        map.invalidateSize()
      }, 250)
      return () => clearTimeout(timer)
    }
  }, [map])

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Abell's Gastroburger <br /> O melhor de Flecheiras!
        </Popup>
      </Marker>
    </>
  )
}

export default function LeafletMap() {
  const [mapKey, setMapKey] = useState(0)
  const position: [number, number] = [-3.2235, -39.2725]

  useEffect(() => {
    // Incrementa a key para forçar a recriação do mapa no Fast Refresh do Next.js
    // Isso previne o erro "Map container is being reused by another instance"
    setMapKey((prev) => prev + 1)
  }, [])

  if (mapKey === 0) return (
    <div className="size-full bg-gray-100 dark:bg-gray-900 animate-pulse flex items-center justify-center rounded-4xl">
      <p className="text-gray-400 italic">Inicializando mapa...</p>
    </div>
  )

  return (
    <div className="size-full relative z-0">
      <MapContainer
        key={mapKey}
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
        className="rounded-4xl"
      >
        <MapContent position={position} />
      </MapContainer>
    </div>
  )
}
