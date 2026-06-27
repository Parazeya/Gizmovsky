import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class UserPermissionSets {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getUserPermissionSets
   */
  getUserPermissionSets(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/userpermissionsets`;
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
   * postUserPermissionSets
   */
  postUserPermissionSets(data: { name?: string; permissions?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/userpermissionsets`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putUserPermissionSets
   */
  putUserPermissionSets(data: { id?: any; name?: string; permissions?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/userpermissionsets`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getUserPermissionSetsById
   */
  getUserPermissionSetsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; name?: string; permissions?: any; operators?: any }>> {
    const url = `/api/v3/userpermissionsets/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteUserPermissionSetsById
   */
  deleteUserPermissionSetsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/userpermissionsets/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * putUserPermissionSetsByIdName
   */
  putUserPermissionSetsByIdName(id: string | number, data: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/userpermissionsets/${id}/name`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getUserPermissionSetsNameExists
   */
  getUserPermissionSetsNameExists(options: { name?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/userpermissionsets/name/exists`;
    const query: Record<string, any> = { ...params };
    if (options.name !== undefined) query['name'] = options.name;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getUserPermissionSetsByIdPermissions
   */
  getUserPermissionSetsByIdPermissions(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ type?: string; value?: string }>>> {
    const url = `/api/v3/userpermissionsets/${id}/permissions`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putUserPermissionSetsByIdPermissions
   */
  putUserPermissionSetsByIdPermissions(id: string | number, data: { type?: string; value?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/userpermissionsets/${id}/permissions`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getUserPermissionSetsPolicies
   */
  getUserPermissionSetsPolicies(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ groups?: any[]; policies?: any[] }>> {
    const url = `/api/v3/userpermissionsets/policies`;
    return this.client.request('get', url, {}, params);
  }
}
