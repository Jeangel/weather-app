import { atom } from 'recoil'

export const placesState = atom({
  key: 'places',
  default: []
})

export const spinnerState = atom({
  key: 'spinner',
  default: false
})

export const selectedPlaceState = atom({
  key: 'selectedPlace',
  default: {
    location: {},
    time: {},
    current: {
      weather: {},
      time: {}
    },
    daily: []
  }
})