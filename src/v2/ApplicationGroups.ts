import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class ApplicationGroups {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Get all application groups.
   */
  getApplicationGroups(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; groupName?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/applicationgroups`;
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
   * Create an application group.
   */
  postApplicationGroups(data: { name?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/applicationgroups`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update an application group.
   */
  putApplicationGroups(data: { id?: number; name?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/applicationgroups`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get an application group by id.
   */
  getApplicationGroupsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; guid?: string; name?: string }>> {
    const url = `/api/v2.0/applicationgroups/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Delete an application group.
   */
  deleteApplicationGroupsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/applicationgroups/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Get the applications of the specified application group.
   */
  getApplicationGroupsByIdApplications(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ applicationGroupId?: number; applicationId?: number }>>> {
    const url = `/api/v2.0/applicationgroups/${id}/applications`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Add an application to the specified application group.
   */
  postApplicationGroupsByIdApplications(id: string | number, data: { applicationId?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/applicationgroups/${id}/applications`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Remove an application from the specified application group.
   */
  deleteApplicationGroupsByIdApplicationsByApplicationId(id: string | number, applicationId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/applicationgroups/${id}/applications/${applicationId}`;
    return this.client.request('delete', url, {}, params);
  }
}
