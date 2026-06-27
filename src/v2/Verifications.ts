import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Verifications {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Starts email verification for calling user.
   */
  postUserVerificationsEmailByEmailAddress(emailAddress: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ result?: any; token?: string; codeLength?: number; email?: string }>> {
    const url = `/api/user/v2.0/verifications/email/${emailAddress}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Completes email verification.
   */
  postUserVerificationsEmailByTokenByConfirmationCodeComplete(token: string | number, confirmationCode: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<0 | 1 | 101 | 102 | 103 | 104 | 105 | 201 | 202 | 301 | 401>> {
    const url = `/api/user/v2.0/verifications/email/${token}/${confirmationCode}/complete`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Starts mobile phone verification for calling user.
   */
  postUserVerificationsMobilephoneByMobilePhoneNumber(mobilePhoneNumber: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ result?: any; token?: string; codeLength?: number; mobilePhone?: string; deliveryMethod?: any }>> {
    const url = `/api/user/v2.0/verifications/mobilephone/${mobilePhoneNumber}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Completes mobile phone verification.
   */
  postUserVerificationsMobilephoneByTokenByConfirmationCodeComplete(token: string | number, confirmationCode: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<0 | 1 | 101 | 102 | 103 | 104 | 105 | 201 | 202 | 301 | 401>> {
    const url = `/api/user/v2.0/verifications/mobilephone/${token}/${confirmationCode}/complete`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Starts email verification.
   */
  postVerificationsEmailByUserIdByEmailAddress(userId: string | number, emailAddress: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ result?: any; token?: string; codeLength?: number; email?: string }>> {
    const url = `/api/v2.0/verifications/email/${userId}/${emailAddress}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Starts email verification for calling user.
   */
  postVerificationsEmailByEmailAddress(emailAddress: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ result?: any; token?: string; codeLength?: number; email?: string }>> {
    const url = `/api/v2.0/verifications/email/${emailAddress}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Completes email verification.
   */
  postVerificationsEmailByTokenByConfirmationCodeComplete(token: string | number, confirmationCode: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<0 | 1 | 101 | 102 | 103 | 104 | 105 | 201 | 202 | 301 | 401>> {
    const url = `/api/v2.0/verifications/email/${token}/${confirmationCode}/complete`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Starts mobile phone verification.
   */
  postVerificationsMobilephoneByUserIdByMobilePhoneNumber(userId: string | number, mobilePhoneNumber: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ result?: any; token?: string; codeLength?: number; mobilePhone?: string; deliveryMethod?: any }>> {
    const url = `/api/v2.0/verifications/mobilephone/${userId}/${mobilePhoneNumber}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Starts mobile phone verification for calling user.
   */
  postVerificationsMobilephoneByMobilePhoneNumber(mobilePhoneNumber: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ result?: any; token?: string; codeLength?: number; mobilePhone?: string; deliveryMethod?: any }>> {
    const url = `/api/v2.0/verifications/mobilephone/${mobilePhoneNumber}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Completes mobile phone verification.
   */
  postVerificationsMobilephoneByTokenByConfirmationCodeComplete(token: string | number, confirmationCode: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<0 | 1 | 101 | 102 | 103 | 104 | 105 | 201 | 202 | 301 | 401>> {
    const url = `/api/v2.0/verifications/mobilephone/${token}/${confirmationCode}/complete`;
    return this.client.request('post', url, {}, params);
  }
}
