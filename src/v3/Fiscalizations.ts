import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Fiscalizations {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * postFiscalizations
   */
  postFiscalizations(data: { tasks?: any[]; disableReceiptPrinting?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ results?: any[] }>> {
    const url = `/api/v3/fiscalizations`;
    return this.client.request('post', url, data, params);
  }
}
