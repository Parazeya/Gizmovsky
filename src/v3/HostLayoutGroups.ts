import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class HostLayoutGroups {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getHostLayoutGroups
   */
  getHostLayoutGroups(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; layoutGroupName?: string; expand?: string[]; branchId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/hostlayoutgroups`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.layoutGroupName !== undefined) query['LayoutGroupName'] = options.layoutGroupName;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.branchId !== undefined) query['BranchId'] = options.branchId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postHostLayoutGroups
   */
  postHostLayoutGroups(data: { name?: string; displayOrder?: any; branchId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/hostlayoutgroups`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putHostLayoutGroups
   */
  putHostLayoutGroups(data: { id?: any; name?: string; displayOrder?: any; branchId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/hostlayoutgroups`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getHostLayoutGroupsById
   */
  getHostLayoutGroupsById(id: string | number, options: { expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; name?: string; displayOrder?: any; hostLayouts?: any[]; branchId?: any }>> {
    const url = `/api/v3/hostlayoutgroups/${id}`;
    const query: Record<string, any> = { ...params };
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * deleteHostLayoutGroupsById
   */
  deleteHostLayoutGroupsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/hostlayoutgroups/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getHostLayoutGroupsByIdLayouts
   */
  getHostLayoutGroupsByIdLayouts(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: any; hostLayoutGroupId?: any; hostId?: any; x?: any; y?: any; height?: any; width?: any; isHidden?: boolean; row?: any; column?: any }>>> {
    const url = `/api/v3/hostlayoutgroups/${id}/layouts`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getHostLayoutGroupsByIdHostsByHostIdLayout
   */
  getHostLayoutGroupsByIdHostsByHostIdLayout(id: string | number, hostId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; hostLayoutGroupId?: any; hostId?: any; x?: any; y?: any; height?: any; width?: any; isHidden?: boolean; row?: any; column?: any }>> {
    const url = `/api/v3/hostlayoutgroups/${id}/hosts/${hostId}/layout`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postHostLayoutGroupsByIdHostsByHostIdLayout
   */
  postHostLayoutGroupsByIdHostsByHostIdLayout(id: string | number, hostId: string | number, data: { height?: any; width?: any; x?: any; y?: any; row?: any; column?: any; isHidden?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/hostlayoutgroups/${id}/hosts/${hostId}/layout`;
    return this.client.request('post', url, data, params);
  }

  /**
   * deleteHostLayoutGroupsByIdHostsByHostIdLayout
   */
  deleteHostLayoutGroupsByIdHostsByHostIdLayout(id: string | number, hostId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/hostlayoutgroups/${id}/hosts/${hostId}/layout`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * postHostLayoutGroupsByIdHostsByHostIdLayoutGridPosition
   */
  postHostLayoutGroupsByIdHostsByHostIdLayoutGridPosition(id: string | number, hostId: string | number, data: { row?: any; column?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/hostlayoutgroups/${id}/hosts/${hostId}/layout/grid/position`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postHostLayoutGroupsByIdHostsByHostIdLayoutHideByHide
   */
  postHostLayoutGroupsByIdHostsByHostIdLayoutHideByHide(id: string | number, hostId: string | number, hide: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/hostlayoutgroups/${id}/hosts/${hostId}/layout/hide/${hide}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * putHostLayoutGroupsByIdHostsLayoutGridPosition
   */
  putHostLayoutGroupsByIdHostsLayoutGridPosition(id: string | number, data: { hosts?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/hostlayoutgroups/${id}/hosts/layout/grid/position`;
    return this.client.request('put', url, data, params);
  }
}
