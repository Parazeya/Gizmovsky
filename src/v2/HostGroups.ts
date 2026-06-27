import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class HostGroups {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Get all host groups.
   */
  getHostGroups(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; groupName?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/hostgroups`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.groupName !== undefined) query['GroupName'] = options.groupName;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Create a host group.
   */
  postHostGroups(data: { name?: string; skinName?: string; applicationGroupId?: number; securityProfileId?: number; defaultGuestGroupId?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/hostgroups`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update a host group.
   */
  putHostGroups(data: { id?: number; name?: string; skinName?: string; applicationGroupId?: number; securityProfileId?: number; defaultGuestGroupId?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/hostgroups`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get a host group by id.
   */
  getHostGroupsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; name?: string; skinName?: string; applicationGroupId?: number; securityProfileId?: number; defaultGuestGroupId?: number }>> {
    const url = `/api/v2.0/hostgroups/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Delete a host group.
   */
  deleteHostGroupsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/hostgroups/${id}`;
    return this.client.request('delete', url, {}, params);
  }
}
