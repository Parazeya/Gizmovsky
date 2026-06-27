import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Export {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Export application images and produces a zip file.
   */
  getExportApiExportAppImage(options: { format?: string } = {}, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/export/app/image`;
    const query: Record<string, any> = { ...params };
    if (options.format !== undefined) query['format'] = options.format;
    return this.client.request('get', url, {}, query);
  }
}
