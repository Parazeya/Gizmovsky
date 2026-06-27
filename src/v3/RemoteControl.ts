import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class RemoteControl {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getRemoteControlHostsByHostIdSession
   */
  getRemoteControlHostsByHostIdSession(hostId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: string; accessKey?: string; desktopUrl?: string; viewerUrl?: any }>> {
    const url = `/api/v3/remotecontrol/hosts/${hostId}/session`;
    return this.client.request('get', url, {}, params);
  }
}
