export type DeviceTier = 'low' | 'high'

/** Coarse capability guess used to scale 3D quality before the frame-rate monitor takes over. */
export function getDeviceTier(): DeviceTier {
  const coarse = window.matchMedia('(pointer: coarse)').matches
  const small = window.matchMedia('(max-width: 767px)').matches
  const fewCores = (navigator.hardwareConcurrency ?? 8) <= 4
  return coarse || small || fewCores ? 'low' : 'high'
}
