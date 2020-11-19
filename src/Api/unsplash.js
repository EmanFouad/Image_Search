import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 5Qn9Lo7AMYNz-AbFpnndblrl-qKpNHKT7lawUMZ3wIE'
      }
})