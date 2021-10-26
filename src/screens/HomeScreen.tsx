import React from 'react'
import { View, ActivityIndicator, Dimensions, Text } from 'react-native';

import Carousel from 'react-native-snap-carousel';

import { MoviePoster } from '../components/MoviePoster';
import { UseMovies } from '../hooks/UseMovies';

const { width } = Dimensions.get("window")

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

        <View
            style={{
                height: 400
            }}
        >
            <Carousel
                data={peliculasEnCine}
                renderItem={({ item }: any) => <MoviePoster movie={item} />}
                sliderWidth={width}
                itemWidth={300}
            />
            
        </View>

    )
}