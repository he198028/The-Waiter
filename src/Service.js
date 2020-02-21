
import axios from 'axios';

export const apiCall = (req) => {
    return axios({
        method: req.method,
        url: req.url,
        data: req.param,
        // params: req.queryParams,
        headers: req.headers,
    }).then((res) =>
        res)
}