import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class System {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getSystemTimezones
   */
  getSystemTimezones(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: string; displayName?: string }>>> {
    const url = `/api/v3/system/timezones`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getSystemTimezonesLocal
   */
  getSystemTimezonesLocal(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: string; displayName?: string }>> {
    const url = `/api/v3/system/timezones/local`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getSystemVersion
   */
  getSystemVersion(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<string>> {
    const url = `/api/v3/system/version`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getSystemInstance
   */
  getSystemInstance(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ version?: string; platform?: number; hosting?: number }>> {
    const url = `/api/v3/system/instance`;
    return this.client.request('get', url, {}, params);
  }
}
