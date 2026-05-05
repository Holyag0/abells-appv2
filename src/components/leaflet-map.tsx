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
  // useMap hook only works inside MapContainer
  const map = useMap()
  const [ready, setReady] = useState(false)
  
  useEffect(() => {
    if (map) {
      // Pequeno delay para garantir que o container DOM está estável
      const timer = setTimeout(() => {
        map.invalidateSize()
        setReady(true)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [map])

  if (!ready) return null

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
  const [isMounted, setIsMounted] = useState(false)
  const position: [number, number] = [-3.2235, -39.2725]

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return (
    <div className="size-full bg-gray-100 dark:bg-gray-900 animate-pulse flex items-center justify-center">
      <p className="text-gray-400 italic">Inicializando mapa...</p>
    </div>
  )

  return (
    <div className="size-full">
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <MapContent position={position} />
      </MapContainer>
    </div>
  )
}
