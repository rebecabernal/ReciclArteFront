import React from 'react'
import axios from 'axios'

const API_URL= ' ';
  
export async function getData() {
    try {
        const response = await axios.get(API_URL)
        return response.data
    } catch (error) {
        console.error('Error fetching data: ', error)
    }   
}

export async function postData(data) {
    try {
        const response = await axios.post(API_URL, data, {
            headers: {
                'Content-Type': 'application/json',                   
            }
        });
        return response.data
    } catch (error) {
        console.error('Error posting data: ', error)
    }
}

