import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Registrations {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getRegistrationsProviders
   */
  getRegistrationsProviders(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ publicId?: string; name?: string; channelGuid?: string; canRedirect?: boolean; canDispatchCode?: boolean; canProvidePhone?: boolean; canProvideEmail?: boolean; hasChannel?: boolean }>>> {
    const url = `/api/v3/registrations/providers`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postRegistrationsStart
   */
  postRegistrationsStart(data: { phoneNumber?: any; email?: any; integrationPublicId?: string; deliveryMethod?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ result?: number; token?: any; redirectUrl?: any; codeLength?: any; expiresInSeconds?: any }>> {
    const url = `/api/v3/registrations/start`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postRegistrationsComplete
   */
  postRegistrationsComplete(data: { token?: string; profile?: any; password?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<number>> {
    const url = `/api/v3/registrations/complete`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postRegistrationsDirect
   */
  postRegistrationsDirect(data: { profile?: any; password?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<number>> {
    const url = `/api/v3/registrations/direct`;
    return this.client.request('post', url, data, params);
  }
}
