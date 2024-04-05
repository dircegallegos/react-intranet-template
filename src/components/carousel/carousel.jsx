import './carousel.css'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api_url from '../../../credentials.js';

function Carousel() {
    const [imageUrls, setImageUrls] = useState([]);
    const [error, setError] = useState(null);

    const getImages = async () => {
        try {
            const resp = await api_url.get('images');
            setImageUrls(resp.data);
        } catch (error) {
            setError(error.message);
        }
    }

    useEffect(() => {
        getImages();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="slideshow">
            <Slide>
                {imageUrls.map((imageUrl, index) => (
                    <div key={index} className="each-slide-effect"
                    style={{'backgroundImage': `url(${'test' + imageUrl})`}}>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default Carousel;

// useEffect(() => {
//     fetch('url', {
//         headers:{
//             accept: 'application/json'
//           }
//     })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Failed to fetch image URLs');
//             }
//             return response.json();
//         })
//         .then(data => setImageUrls(data))
//         .catch(error => setError(error.message));
// }, []);

// const GetData = async () => {
//     const response = await axios.get('some url');
//     console.log(response.data.Autor)
//     return response.data
// }

{/* <div style={{
                            'backgroundImage': `url(${image})`}}>
                        </div> */}




