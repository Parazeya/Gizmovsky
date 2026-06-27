import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Auth {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Requests user access token.
   */
  getUserAuthAccesstoken(options: { username?: string; password?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ token?: string; refreshToken?: string }>> {
    const url = `/api/user/v2.0/auth/accesstoken`;
    const query: Record<string, any> = { ...params };
    if (options.username !== undefined) query['Username'] = options.username;
    if (options.password !== undefined) query['Password'] = options.password;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Refreshes user access token.
   */
  getUserAuthAccesstokenRefresh(options: { token?: string; refreshToken?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ token?: string; refreshToken?: string }>> {
    const url = `/api/user/v2.0/auth/accesstoken/refresh`;
    const query: Record<string, any> = { ...params };
    if (options.token !== undefined) query['Token'] = options.token;
    if (options.refreshToken !== undefined) query['RefreshToken'] = options.refreshToken;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Requests operator access token.
   */
  getAuthAccesstoken(options: { username?: string; password?: string; branchId?: number; registerId?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ token?: string; refreshToken?: string }>> {
    const url = `/api/v2.0/auth/accesstoken`;
    const query: Record<string, any> = { ...params };
    if (options.username !== undefined) query['Username'] = options.username;
    if (options.password !== undefined) query['Password'] = options.password;
    if (options.branchId !== undefined) query['BranchId'] = options.branchId;
    if (options.registerId !== undefined) query['RegisterId'] = options.registerId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Refreshes operator access token.
   */
  getAuthAccesstokenRefresh(options: { token?: string; refreshToken?: string; branchId?: number; registerId?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ token?: string; refreshToken?: string }>> {
    const url = `/api/v2.0/auth/accesstoken/refresh`;
    const query: Record<string, any> = { ...params };
    if (options.token !== undefined) query['Token'] = options.token;
    if (options.refreshToken !== undefined) query['RefreshToken'] = options.refreshToken;
    if (options.branchId !== undefined) query['BranchId'] = options.branchId;
    if (options.registerId !== undefined) query['RegisterId'] = options.registerId;
    return this.client.request('get', url, {}, query);
  }
}
