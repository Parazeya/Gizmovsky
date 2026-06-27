import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Licenses {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Returns reserved license keys information.
   */
  getLicensesApiLicensesKeysReservedInfo(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ application?: string; executable?: string; licenseKeyId?: number; licenseKey?: string; hostId?: number; hostname?: string; userId?: number; username?: string; reservationId?: number }>>> {
    const url = `/api/licenses/keys/reserved/info`;
    return this.client.request('get', url, {}, params);
  }
}
