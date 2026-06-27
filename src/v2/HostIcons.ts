import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class HostIcons {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Get all host icons.
   */
  getHostIcons(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/hosticons`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Create a host icon.
   */
  postHostIcons(data: { image?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/hosticons`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update a host icon.
   */
  putHostIcons(data: { id?: number; image?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/hosticons`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get a host icon by id.
   */
  getHostIconsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; image?: string }>> {
    const url = `/api/v2.0/hosticons/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Delete a host icon.
   */
  deleteHostIconsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/hosticons/${id}`;
    return this.client.request('delete', url, {}, params);
  }
}
