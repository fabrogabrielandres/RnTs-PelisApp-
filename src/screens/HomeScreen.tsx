import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Button, Image, Text, View, ActivityIndicator } from 'react-native';
import { UseMovies } from '../hooks/UseMovies';
import { MoviePoster } from '../components/MoviePoster';

export const HomeScreen = () => {

    const { peliculasEnCine, isLoading } = UseMovies()

    if (false) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: "center"
                }}
            >
                <ActivityIndicator
                    color="red"
                    size={50}
                />

            </View>

        )
    }

    return (

        <View>
            {
                peliculasEnCine.map((peli, idx) => {

                    return (
                        <MoviePoster movie={peli} key={idx} />
                    )
                })
            }
        </View>

    )
}