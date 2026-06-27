import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class ApplicationPersonalFiles {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Get all application personal files.
   */
  getApplicationPersonalFiles(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; personalFileName?: string; personalFileCaption?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/applicationpersonalfiles`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.personalFileName !== undefined) query['PersonalFileName'] = options.personalFileName;
    if (options.personalFileCaption !== undefined) query['PersonalFileCaption'] = options.personalFileCaption;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Create an application personal file.
   */
  postApplicationPersonalFiles(data: { type?: any; name?: string; caption?: string; description?: string; accessible?: boolean; source?: string; activation?: any; maxQuota?: number; compressionLevel?: number; cleanUp?: boolean; store?: boolean; directoryOptions?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/applicationpersonalfiles`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update an application personal file.
   */
  putApplicationPersonalFiles(data: { id?: number; type?: any; name?: string; caption?: string; description?: string; accessible?: boolean; source?: string; activation?: any; maxQuota?: number; compressionLevel?: number; cleanUp?: boolean; store?: boolean; directoryOptions?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/applicationpersonalfiles`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get an application personal file by id.
   */
  getApplicationPersonalFilesById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; guid?: string; type?: any; name?: string; caption?: string; description?: string; accessible?: boolean; source?: string; activation?: any; maxQuota?: number; compressionLevel?: number; cleanUp?: boolean; store?: boolean; directoryOptions?: any }>> {
    const url = `/api/v2.0/applicationpersonalfiles/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Delete an application personal file.
   */
  deleteApplicationPersonalFilesById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/applicationpersonalfiles/${id}`;
    return this.client.request('delete', url, {}, params);
  }
}
