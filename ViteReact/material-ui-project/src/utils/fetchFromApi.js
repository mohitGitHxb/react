import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com/'
const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    q: 'music',
    part: 'snippet,id',
    regionCode: 'US',
    maxResults: '50',
    order: 'date'
  },
  headers: {
    'X-RapidAPI-Key': 'f9e221fbf4mshe3e580edf130655p115d02jsn32a8141e8926',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export const fetchFromAPI = async (url) => {
  try {
    const response =  await axios.get(`${BASE_URL}/${url}`,options);
    if (response.ok) {
      const data = await response.data;
      return data;
    }
    else{
      throw new Error(response.statusText);
    }
 }catch(error) {
    console.log(error);
    return new Array(3);
 }
}

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