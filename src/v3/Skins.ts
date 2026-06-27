import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Skins {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getSkins
   */
  getSkins(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ name?: string }>>> {
    const url = `/api/v3/skins`;
    return this.client.request('get', url, {}, params);
  }
}
