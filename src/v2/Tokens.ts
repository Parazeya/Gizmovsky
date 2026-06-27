import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Tokens {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getTokensByTokenByConfirmationCodeByTokenTypeValid
   */
  getTokensByTokenByConfirmationCodeByTokenTypeValid(token: string | number, confirmationCode: string | number, tokenType: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<boolean>> {
    const url = `/api/v2.0/tokens/${token}/${confirmationCode}/${tokenType}/valid`;
    return this.client.request('get', url, {}, params);
  }
}
