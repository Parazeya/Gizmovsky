import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Recovery {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Initiates password recovery by mobile phone.
   */
  postRecoveryPasswordByUsernamePhone(username: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ result?: any; token?: string; codeLength?: number; mobilePhone?: string; deliveryMethod?: any }>> {
    const url = `/api/v2.0/recovery/password/${username}/phone`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Initiates password recovery by email.
   */
  postRecoveryPasswordByUsernameEmail(username: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ result?: any; token?: string; codeLength?: number; email?: string }>> {
    const url = `/api/v2.0/recovery/password/${username}/email`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Completes password recovery.
   */
  postRecoveryPasswordByTokenByConfirmationCodeComplete(token: string | number, confirmationCode: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<0 | 1 | 101 | 102 | 103 | 104 | 105 | 106>> {
    const url = `/api/v2.0/recovery/password/${token}/${confirmationCode}/complete`;
    return this.client.request('post', url, {}, params);
  }
}
