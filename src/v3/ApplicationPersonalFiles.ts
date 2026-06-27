import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class ApplicationPersonalFiles {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getApplicationPersonalFiles
   */
  getApplicationPersonalFiles(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; personalFileName?: string; personalFileCaption?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/applicationpersonalfiles`;
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
   * postApplicationPersonalFiles
   */
  postApplicationPersonalFiles(data: { type?: number; name?: string; caption?: any; description?: any; accessible?: boolean; source?: string; activation?: number; maxQuota?: any; compressionLevel?: any; cleanUp?: boolean; store?: boolean; directoryOptions?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/applicationpersonalfiles`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putApplicationPersonalFiles
   */
  putApplicationPersonalFiles(data: { id?: any; type?: number; name?: string; caption?: any; description?: any; accessible?: boolean; source?: string; activation?: number; maxQuota?: any; compressionLevel?: any; cleanUp?: boolean; store?: boolean; directoryOptions?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationpersonalfiles`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getApplicationPersonalFilesById
   */
  getApplicationPersonalFilesById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; guid?: string; type?: number; name?: string; caption?: any; description?: any; accessible?: boolean; source?: string; activation?: number; maxQuota?: any; compressionLevel?: any; cleanUp?: boolean; store?: boolean; directoryOptions?: any }>> {
    const url = `/api/v3/applicationpersonalfiles/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteApplicationPersonalFilesById
   */
  deleteApplicationPersonalFilesById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationpersonalfiles/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getApplicationPersonalFilesByIdUsages
   */
  getApplicationPersonalFilesByIdUsages(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ applicationId?: any; executableId?: any }>>> {
    const url = `/api/v3/applicationpersonalfiles/${id}/usages`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putApplicationPersonalFilesByIdUnassign
   */
  putApplicationPersonalFilesByIdUnassign(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationpersonalfiles/${id}/unassign`;
    return this.client.request('put', url, {}, params);
  }
}
