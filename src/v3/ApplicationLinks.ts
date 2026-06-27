import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class ApplicationLinks {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getApplicationLinks
   */
  getApplicationLinks(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; applicationId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/applicationlinks`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.applicationId !== undefined) query['ApplicationId'] = options.applicationId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postApplicationLinks
   */
  postApplicationLinks(data: { applicationId?: any; caption?: any; description?: any; url?: any; displayOrder?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/applicationlinks`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putApplicationLinks
   */
  putApplicationLinks(data: { id?: any; applicationId?: any; caption?: any; description?: any; url?: any; displayOrder?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationlinks`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getApplicationLinksById
   */
  getApplicationLinksById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; applicationId?: any; caption?: any; description?: any; url?: any; displayOrder?: any }>> {
    const url = `/api/v3/applicationlinks/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteApplicationLinksById
   */
  deleteApplicationLinksById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationlinks/${id}`;
    return this.client.request('delete', url, {}, params);
  }
}
