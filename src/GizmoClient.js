import axios from 'axios';

export class GizmoClient {
    constructor({ ip, port, ssl = false, username, password, bearerToken } = {}) {
        this.baseURL = `${ssl ? 'https' : 'http'}://${ip}:${port}/api`;
        this.bearerToken = bearerToken;
        this.auth = bearerToken ? undefined : { username, password };

        const headers = {
            'Content-Type': 'application/json',
        };

        if (bearerToken) {
            headers['Authorization'] = `Bearer ${bearerToken}`;
        }

        this.axios = axios.create({
            baseURL: this.baseURL,
            auth: this.auth,
            headers,
        });
    }

    async request(method, url, data = {}, params = {}) {
        const finalUrl = url.startsWith('/') ? url : `/${url}`;
        try {
            const res = await this.axios({
                method,
                url: finalUrl,
                data,
                params,
            });
            return res.data;
        } catch (error) {
            throw error;
        }
    }
}
