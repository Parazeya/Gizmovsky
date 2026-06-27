import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class PublicOptions {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getPublicOptionsGeneral
   */
  getPublicOptionsGeneral(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ defaultCulture?: any }>> {
    const url = `/api/v3/publicoptions/general`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getPublicOptionsGeneralPack
   */
  getPublicOptionsGeneralPack(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: any; values?: any[] }>> {
    const url = `/api/v3/publicoptions/general/pack`;
    return this.client.request('get', url, {}, params);
  }
}
