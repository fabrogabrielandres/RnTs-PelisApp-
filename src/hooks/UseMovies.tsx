import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import movieDb from '../api/movieDb'
import { Movie, MovieDBNowPlaying } from '../interfaces/Fetch'


interface ReturnUsemovie{
    peliculasEnCine:Movie[],
    isLoading:boolean
}


export const UseMovies = ():ReturnUsemovie => {

    const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([])
    const [isLoading, setisloading] = useState(true)

    const getMovies = async () => {
        try {
            const responce= await movieDb.get<MovieDBNowPlaying>("/now_playing")
            setPeliculasEnCine(responce.data.results)
            setisloading(false)
        } catch (error) {
            // console.log(error)
        }
    }

    useEffect(() => {
        getMovies()
    }, [])

    
    return (
        {
            peliculasEnCine,
            isLoading
        }

    )
}
