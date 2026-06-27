import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Tokens {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * postUserTokensConfirm
   */
  postUserTokensConfirm(data: { token?: string; confirmationCode?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<number>> {
    const url = `/api/user/v3/tokens/confirm`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getTokensByTokenByConfirmationCodeByTokenTypeValid
   */
  getTokensByTokenByConfirmationCodeByTokenTypeValid(token: string | number, confirmationCode: string | number, tokenType: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<boolean>> {
    const url = `/api/v3/tokens/${token}/${confirmationCode}/${tokenType}/valid`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postTokensConfirm
   */
  postTokensConfirm(data: { token?: string; confirmationCode?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<number>> {
    const url = `/api/v3/tokens/confirm`;
    return this.client.request('post', url, data, params);
  }
}
