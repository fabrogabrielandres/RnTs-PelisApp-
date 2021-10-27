import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { MoviePoster } from '../components/MoviePoster';
import { Movie } from '../interfaces/Fetch';

interface Props {
    movies?: Movie[],
    title?: string
}




const HorizontalSlider = ({ movies, title }: Props) => {
    // console.log(peliculasEnCine)
    
    return (
        <View
            style={{
                height: 250
            }}
        >
            <Text
                style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    textAlign: "center"
                }}
            >
                En cine
            </Text>
            <FlatList
                data={movies}
                renderItem={({ item }: any) => <MoviePoster movie={item} height={200} width={140} />}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}

            />
        </View>
    )
}

export default HorizontalSlider
