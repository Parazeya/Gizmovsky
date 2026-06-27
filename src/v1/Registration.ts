import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Registration {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Starts registration procedure with mobile phone confirmation.
   */
  postRegistrationApiRegistrationMobilephoneByMobilePhone(mobilePhone: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ result?: any; token?: string; codeLength?: number; mobilePhone?: string; deliveryMethod?: any }>> {
    const url = `/api/registration/mobilephone/${mobilePhone}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Starts registration procedure with email address confirmation.
   */
  postRegistrationApiRegistrationEmailByEmailAddress(emailAddress: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ result?: any; token?: string; codeLength?: number; email?: string }>> {
    const url = `/api/registration/email/${emailAddress}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Completes the registration procedure.
   */
  postRegistrationApiRegistrationComplete(params: Record<string, any> = {}): Promise<GizmoResponse<{ result?: any; createdUserId?: number }>> {
    const url = `/api/registration/complete`;
    return this.client.request('post', url, {}, params);
  }
}
