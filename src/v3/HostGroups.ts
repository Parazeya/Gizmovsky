import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class HostGroups {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getHostGroups
   */
  getHostGroups(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; groupName?: string; expand?: string[]; branchId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/hostgroups`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.groupName !== undefined) query['GroupName'] = options.groupName;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.branchId !== undefined) query['BranchId'] = options.branchId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postHostGroups
   */
  postHostGroups(data: { name?: string; skinName?: any; applicationGroupId?: any; securityProfileId?: any; defaultGuestGroupId?: any; branchId?: any; billProfileId?: any; clientOptionsId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/hostgroups`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putHostGroups
   */
  putHostGroups(data: { id?: any; name?: string; skinName?: any; applicationGroupId?: any; securityProfileId?: any; defaultGuestGroupId?: any; branchId?: any; billProfileId?: any; clientOptionsId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/hostgroups`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getHostGroupsById
   */
  getHostGroupsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; name?: string; skinName?: any; applicationGroupId?: any; securityProfileId?: any; defaultGuestGroupId?: any; branchId?: any; billProfileId?: any; clientOptionsId?: any }>> {
    const url = `/api/v3/hostgroups/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteHostGroupsById
   */
  deleteHostGroupsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ hostGroupDeleteResult?: number }>> {
    const url = `/api/v3/hostgroups/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * putHostGroupsByIdBillingprofilesByBillingProfileId
   */
  putHostGroupsByIdBillingprofilesByBillingProfileId(id: string | number, billingProfileId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/hostgroups/${id}/billingprofiles/${billingProfileId}`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * deleteHostGroupsByIdBillingprofiles
   */
  deleteHostGroupsByIdBillingprofiles(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/hostgroups/${id}/billingprofiles`;
    return this.client.request('delete', url, {}, params);
  }
}
