import { apiBaseURL } from './constants';

export async function fetchAllVideos() {
    //console.log(apiBaseURL);
    var apiBaseURL = 'https://mikz.dev/devday';
    const res = await fetch(apiBaseURL);

    console.log(res.status);
    if (res.status !== 200) {
        console.error('API failed to load - Error Code' + res.status);
        return [];
    }

    const data = await res.json();
    return data;
}

export async function fetchVideoById(id) {
    const res = await fetch(apiBaseURL + '/' + id);

    console.log(res.status);
    if (res.status !== 200) {
        console.error('API failed to load - Error Code' + res.status);
        return [];
    }

    const data = await res.json();
    return data;
}
