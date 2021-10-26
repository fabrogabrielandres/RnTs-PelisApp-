import React from 'react'

import { Image, StyleSheet, Text, View } from 'react-native'
import { Movie } from '../interfaces/Fetch';


interface Props {
    movie: Movie,
    width?:number,
    height?:number
}


export const MoviePoster = ({ movie, height=420 , width=300 }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

    return (
        <View
            style={{
                width,
                height,
                marginHorizontal:8
            }}
        >
            <View
                style={styles.imageContainer}
            >
                <Image
                    source={{ uri, }}
                    style={styles.image}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 10,
    },
    imageContainer: {
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,

    }
})



