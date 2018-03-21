// import { Promise } from 'es6-promise';
import axios from 'axios';

export const get = (url) => {
    return (
      axios.get(url)
        .then(response => response.data)
        .catch(err => console.log('Error in request'))
    )
}

export const post = (url, json) => {
    return (
      axios.post(url, json)
        .then(response => {
            console.log(response);
        })
        .catch(err => console.log(err))
    );
  /*return new Promise((resolve, reject) => {
    fetch(url, {
      credentials: 'same-origin',
      method: 'post',
      headers: {
        Accept: ['application/json', 'application/pdf', 'application/msword',
        'multipart/form-data'],
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(json),
    }).then((response) => {
      if (response.ok) {
        response.json().then((responseJson) => resolve(responseJson));
      } else {
        reject(response);
      }
    });
  });*/
}

// export const put = (url, json) => {
//   return new Promise((resolve, reject) => {
//     fetch(url, {
//       credentials: 'same-origin',
//       method: 'put',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(json),
//     }).then((response) => {
//       if (response.ok) {
//         response.json().then((responseJson) => resolve(responseJson));
//       } else {
//         reject(response);
//       }
//     });
//   });
// }
//
// export const delete = (url, json) => {
//   return new Promise((resolve, reject) => {
//     fetch(url, {
//       credentials: 'same-origin',
//       method: 'delete',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(json),
//     }).then((response) => {
//       if (response.ok) {
//         response.json().then((responseJson) => resolve(responseJson));
//       } else {
//         reject(response);
//       }
//     });
//   });
// }
