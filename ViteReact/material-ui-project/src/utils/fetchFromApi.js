import axios from 'axios';
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'f9e221fbf4mshe3e580edf130655p115d02jsn32a8141e8926',
// 		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
// 	}
// };

// fetch(`${BASE_URL}search?q=music&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


// export const fetchFromAPI = async (url) => {
//   try {
//     const response = await fetch(`${BASE_URL}/${url}`,options);
//     if (response.ok) {
//       const data = await response.json();
//       return data;
//     }
//     else{
//       throw new Error(response.statusText);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }