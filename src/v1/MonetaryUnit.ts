import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class MonetaryUnit {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Returns monetary units.
   */
  getMonetaryUnitApiMonetaryunit(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; name?: string; value?: number; displayOrder?: number; isDeleted?: boolean }>>> {
    const url = `/api/monetaryunit`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Adds monetary unit.
   */
  putMonetaryUnitApiMonetaryunit(params: Record<string, any> = {}): Promise<GizmoResponse<number>> {
    const url = `/api/monetaryunit`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Updates monetary unit.
   */
  postMonetaryUnitApiMonetaryunit(params: Record<string, any> = {}): Promise<void> {
    const url = `/api/monetaryunit`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Deletes monetary unit.
   */
  deleteMonetaryUnitApiMonetaryunitByMonetaryUnitId(monetaryUnitId: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/monetaryunit/${monetaryUnitId}`;
    return this.client.request('delete', url, {}, params);
  }
}
