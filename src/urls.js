import {apiKey} from './constants/constants'

export const originals = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_networks=213`
export const action = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`
export const comedy = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35`
export const horror = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`
export const romance = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10749`
export const documentary = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=99`

export const urlId = `https://api.themoviedb.org/3/movie/617653/videos?api_key=${apiKey}&language=en-US`