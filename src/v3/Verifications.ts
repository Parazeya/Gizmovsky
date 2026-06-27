import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Verifications {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getUserVerificationsProviders
   */
  getUserVerificationsProviders(options: { purpose?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ publicId?: string; name?: string; channelGuid?: string; canRedirect?: boolean; canDispatchCode?: boolean; canProvidePhone?: boolean; canProvideEmail?: boolean; hasChannel?: boolean }>>> {
    const url = `/api/user/v3/verifications/providers`;
    const query: Record<string, any> = { ...params };
    if (options.purpose !== undefined) query['purpose'] = options.purpose;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postUserVerificationsPhoneStart
   */
  postUserVerificationsPhoneStart(data: { phoneNumber?: any; integrationPublicId?: string; deliveryMethod?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ result?: number; token?: any; redirectUrl?: any; codeLength?: any; expiresInSeconds?: any }>> {
    const url = `/api/user/v3/verifications/phone/start`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postUserVerificationsEmailStart
   */
  postUserVerificationsEmailStart(data: { email?: any; integrationPublicId?: string; deliveryMethod?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ result?: number; token?: any; redirectUrl?: any; codeLength?: any; expiresInSeconds?: any }>> {
    const url = `/api/user/v3/verifications/email/start`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getVerificationsProviders
   */
  getVerificationsProviders(options: { purpose?: any; userId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ publicId?: string; name?: string; channelGuid?: string; canRedirect?: boolean; canDispatchCode?: boolean; canProvidePhone?: boolean; canProvideEmail?: boolean; hasChannel?: boolean }>>> {
    const url = `/api/v3/verifications/providers`;
    const query: Record<string, any> = { ...params };
    if (options.purpose !== undefined) query['purpose'] = options.purpose;
    if (options.userId !== undefined) query['userId'] = options.userId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postVerificationsPhoneStart
   */
  postVerificationsPhoneStart(data: { userId?: any; phoneNumber?: any; integrationPublicId?: string; deliveryMethod?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ result?: number; token?: any; redirectUrl?: any; codeLength?: any; expiresInSeconds?: any }>> {
    const url = `/api/v3/verifications/phone/start`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postVerificationsEmailStart
   */
  postVerificationsEmailStart(data: { userId?: any; email?: any; integrationPublicId?: string; deliveryMethod?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ result?: number; token?: any; redirectUrl?: any; codeLength?: any; expiresInSeconds?: any }>> {
    const url = `/api/v3/verifications/email/start`;
    return this.client.request('post', url, data, params);
  }
}
