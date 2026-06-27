import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class StoreOptions {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Reads options from the store.
   */
  getStoreOptions(options: { optionsType?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ optionsType?: string; groupName?: string; section?: string; values?: any[] }>> {
    const url = `/api/v2.0/storeoptions`;
    const query: Record<string, any> = { ...params };
    if (options.optionsType !== undefined) query['optionsType'] = options.optionsType;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Writes specified options to the store.
   */
  putStoreOptions(data: { optionsType?: string; values?: any } = {}, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/v2.0/storeoptions`;
    return this.client.request('put', url, data, params);
  }
}
