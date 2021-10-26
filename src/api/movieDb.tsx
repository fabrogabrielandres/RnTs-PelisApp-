import React from 'react'
import axios from 'axios';

const movieDb = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        language: 'en-ES',
        api_key: 'e5ba07287829fe84526c037d50b2a2b9'
    }
});


export default movieDb 


