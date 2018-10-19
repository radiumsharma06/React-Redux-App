import axios from 'axios';

export const get = (url, params) => {
    return (
      axios.get(url, params)
        .then(response => response.data)
        .catch(err => console.log('Error in request'))
    )
};

export const post = (url, json) => {
    return (
      axios.post(url, json)
        .then(response => response.data)
        .catch(err => console.log(err))
    );
}
