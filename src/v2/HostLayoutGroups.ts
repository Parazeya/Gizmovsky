import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class HostLayoutGroups {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Get all host layout groups.
   */
  getHostLayoutGroups(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; layoutGroupName?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/hostlayoutgroups`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.layoutGroupName !== undefined) query['LayoutGroupName'] = options.layoutGroupName;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Create a host layout group.
   */
  postHostLayoutGroups(data: { name?: string; displayOrder?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/hostlayoutgroups`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update a host layout group.
   */
  putHostLayoutGroups(data: { id?: number; name?: string; displayOrder?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/hostlayoutgroups`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get a host layout by id.
   */
  getHostLayoutGroupsById(id: string | number, options: { expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; name?: string; displayOrder?: number; hostLayouts?: any[] }>> {
    const url = `/api/v2.0/hostlayoutgroups/${id}`;
    const query: Record<string, any> = { ...params };
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Delete a host layout group.
   */
  deleteHostLayoutGroupsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/hostlayoutgroups/${id}`;
    return this.client.request('delete', url, {}, params);
  }
}
