import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Recoveries {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getUserRecoveriesProviders
   */
  getUserRecoveriesProviders(options: { matchValue?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ publicId?: string; name?: string; channelGuid?: string; canRedirect?: boolean; canDispatchCode?: boolean; canProvidePhone?: boolean; canProvideEmail?: boolean; hasChannel?: boolean }>>> {
    const url = `/api/user/v3/recoveries/providers`;
    const query: Record<string, any> = { ...params };
    if (options.matchValue !== undefined) query['matchValue'] = options.matchValue;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postUserRecoveriesPasswordStart
   */
  postUserRecoveriesPasswordStart(data: { matchValue?: string; integrationPublicId?: string; deliveryMethod?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ result?: number; token?: any; redirectUrl?: any; codeLength?: any; expiresInSeconds?: any }>> {
    const url = `/api/user/v3/recoveries/password/start`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getRecoveriesProviders
   */
  getRecoveriesProviders(options: { userId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ publicId?: string; name?: string; channelGuid?: string; canRedirect?: boolean; canDispatchCode?: boolean; canProvidePhone?: boolean; canProvideEmail?: boolean; hasChannel?: boolean }>>> {
    const url = `/api/v3/recoveries/providers`;
    const query: Record<string, any> = { ...params };
    if (options.userId !== undefined) query['userId'] = options.userId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postRecoveriesPasswordStart
   */
  postRecoveriesPasswordStart(data: { userId?: any; integrationPublicId?: string; deliveryMethod?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ result?: number; token?: any; redirectUrl?: any; codeLength?: any; expiresInSeconds?: any }>> {
    const url = `/api/v3/recoveries/password/start`;
    return this.client.request('post', url, data, params);
  }
}
