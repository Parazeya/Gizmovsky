import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Attributes {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Gets attributes.
   */
  getAttributesApiAttributes(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; name?: string; friendlyName?: string }>>> {
    const url = `/api/attributes`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Adds attribute.
   */
  putAttributesApiAttributes(params: Record<string, any> = {}): Promise<GizmoResponse<number>> {
    const url = `/api/attributes`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Updates attribute.
   */
  postAttributesApiAttributes(params: Record<string, any> = {}): Promise<void> {
    const url = `/api/attributes`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Deletes attribute.
   */
  deleteAttributesApiAttributesByAttributeId(attributeId: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/attributes/${attributeId}`;
    return this.client.request('delete', url, {}, params);
  }
}
