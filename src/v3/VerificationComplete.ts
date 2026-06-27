import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class VerificationComplete {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * postVerificationCompleteVerification
   */
  postVerificationCompleteVerification(data: { token?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<number>> {
    const url = `/api/v3/verificationcomplete/verification`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postVerificationCompleteRecovery
   */
  postVerificationCompleteRecovery(data: { token?: string; newPassword?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<number>> {
    const url = `/api/v3/verificationcomplete/recovery`;
    return this.client.request('post', url, data, params);
  }
}
