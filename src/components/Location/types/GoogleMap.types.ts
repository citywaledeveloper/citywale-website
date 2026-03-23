// GoogleMap.types.ts
import { Store } from "@/types/ApiResponse";

export type LatLng = {
  lat: number;
  lng: number;
};

export interface GoogleMapProps {
  latLng: LatLng | null;
  onLocationUpdate?: (location: LatLng) => void;
  onBoundsChange?: (bounds: { ne: LatLng; sw: LatLng }) => void;
  onZoomChange?: (zoom: number) => void;
  height?: number;
  stores?: Store[];
}
