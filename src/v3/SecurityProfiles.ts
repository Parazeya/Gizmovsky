import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class SecurityProfiles {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getSecurityProfiles
   */
  getSecurityProfiles(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; name?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/securityprofiles`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.name !== undefined) query['Name'] = options.name;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postSecurityProfiles
   */
  postSecurityProfiles(data: { name?: string; disabledDrives?: any; restrictions?: any[]; policies?: any[]; disableStart?: boolean; disableDesktopSwitching?: boolean; stickyShell?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/securityprofiles`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putSecurityProfiles
   */
  putSecurityProfiles(data: { id?: any; name?: string; disabledDrives?: any; restrictions?: any[]; policies?: any[]; disableStart?: boolean; disableDesktopSwitching?: boolean; stickyShell?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/securityprofiles`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getSecurityProfilesById
   */
  getSecurityProfilesById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; name?: string; disabledDrives?: any; restrictions?: any[]; policies?: any[]; disableStartMenu?: boolean; disableDesktopSwitching?: boolean; stickyShell?: boolean }>> {
    const url = `/api/v3/securityprofiles/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteSecurityProfilesById
   */
  deleteSecurityProfilesById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/securityprofiles/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getSecurityProfilesByIdRestrictions
   */
  getSecurityProfilesByIdRestrictions(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: any; type?: number; value?: string }>>> {
    const url = `/api/v3/securityprofiles/${id}/restrictions`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getSecurityProfilesByIdPolicies
   */
  getSecurityProfilesByIdPolicies(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: any; type?: any }>>> {
    const url = `/api/v3/securityprofiles/${id}/policies`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getSecurityProfilesPoliciesMetadata
   */
  getSecurityProfilesPoliciesMetadata(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ groups?: any[]; policies?: any[] }>> {
    const url = `/api/v3/securityprofiles/policies/metadata`;
    return this.client.request('get', url, {}, params);
  }
}
