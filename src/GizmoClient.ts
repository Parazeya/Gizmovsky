import axios, { type AxiosInstance, type Method } from 'axios';

/**
 * Every Gizmo REST response (v1/v2/v3, operator and user APIs alike) is
 * wrapped in this envelope at runtime — `T` is whatever the OpenAPI spec
 * documents as the success schema for that operation.
 */
export interface GizmoResponse<T = any> {
    version: string | null;
    result: T;
    httpStatusCode: number;
    message: string | null;
    isError: boolean;
}

export interface GizmoClientConfig {
    /** Gizmo server IP or hostname. */
    ip: string;
    /** Gizmo server port. */
    port: number | string;
    /** Use https instead of http. Defaults to false. */
    ssl?: boolean;
    /** Operator/user username — ignored if `bearerToken` is set. */
    username?: string;
    /** Operator/user password — ignored if `bearerToken` is set. */
    password?: string;
    /** Pre-obtained bearer token (skips Basic auth). */
    bearerToken?: string;
}

/**
 * Low-level HTTP client shared by every generated v1/v2/v3 category class.
 *
 * `baseURL` is just the server root (`http(s)://ip:port`) — every Gizmo REST
 * path (v1, v2, v3, and the v3 user-facing API) is documented as an absolute
 * path that already starts with `/api`, so the client must NOT add its own
 * `/api` segment on top, or requests double up (`/api/api/...`) and 404.
 */
export class GizmoClient {
    baseURL: string;
    bearerToken?: string;
    auth?: { username: string; password: string };
    axios: AxiosInstance;

    constructor({ ip, port, ssl = false, username, password, bearerToken }: GizmoClientConfig) {
        this.baseURL = `${ssl ? 'https' : 'http'}://${ip}:${port}`;
        this.bearerToken = bearerToken;
        this.auth = bearerToken ? undefined : { username: username ?? '', password: password ?? '' };

        const headers: Record<string, string> = {
            'Content-Type': 'application/json'
        };

        if (bearerToken) {
            headers['Authorization'] = `Bearer ${bearerToken}`;
        }

        this.axios = axios.create({
            baseURL: this.baseURL,
            auth: this.auth,
            headers
        });
    }

    /**
     * Issues a request against the Gizmo API.
     *
     * @param method - HTTP method (e.g. "get", "post").
     * @param url - Absolute path as documented by the Gizmo OpenAPI spec (e.g. "/api/v3/branches/1").
     * @param data - Request body (ignored for GET/HEAD).
     * @param params - Query string parameters.
     * @returns The raw Gizmo response body (`{ version, result, httpStatusCode, message, isError }` for most v3 endpoints).
     */
    async request<T = any>(method: Method | string, url: string, data: Record<string, any> = {}, params: Record<string, any> = {}): Promise<T> {
        const finalUrl = url.startsWith('/') ? url : `/${url}`;
        const res = await this.axios({
            method,
            url: finalUrl,
            data,
            params
        });
        return res.data;
    }
}
