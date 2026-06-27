import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Companion {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Gets active companion connections.
   */
  getCompanionConnections(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ connectionId?: string; remoteIpAddress?: string; localIpAddress?: string; remotePort?: number; localPort?: number; companionId?: string }>>> {
    const url = `/api/v2.0/companion/connections`;
    return this.client.request('get', url, {}, params);
  }
}
