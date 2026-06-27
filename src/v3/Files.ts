import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Files {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * deleteFilesById
   */
  deleteFilesById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/files/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * deleteFilesByIdHard
   */
  deleteFilesByIdHard(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/files/${id}/hard`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getFilesDeletedSize
   */
  getFilesDeletedSize(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/files/deleted/size`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getFilesDeletedCount
   */
  getFilesDeletedCount(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/files/deleted/count`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteFiles
   */
  deleteFiles(params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/files`;
    return this.client.request('delete', url, {}, params);
  }
}
