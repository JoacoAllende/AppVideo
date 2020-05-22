import axios from 'axios';

const KEY = 'AIzaSyAxCCfs6pWpn-37k2O-uJ7apqPl_vlYwwU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});