import axois from 'axios';


const url ='https://jsonplaceholder.typicode.com/users'

export const getContact =()=> axois.get();
const createContact =()=> axois.post