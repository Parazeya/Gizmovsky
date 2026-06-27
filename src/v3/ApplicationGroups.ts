import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class ApplicationGroups {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getApplicationGroups
   */
  getApplicationGroups(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; groupName?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/applicationgroups`;
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
   * postApplicationGroups
   */
  postApplicationGroups(data: { name?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/applicationgroups`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putApplicationGroups
   */
  putApplicationGroups(data: { id?: any; name?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationgroups`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getApplicationGroupsById
   */
  getApplicationGroupsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; guid?: string; name?: string }>> {
    const url = `/api/v3/applicationgroups/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteApplicationGroupsById
   */
  deleteApplicationGroupsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationgroups/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getApplicationGroupsByIdApplications
   */
  getApplicationGroupsByIdApplications(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ applicationGroupId?: any; applicationId?: any }>>> {
    const url = `/api/v3/applicationgroups/${id}/applications`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postApplicationGroupsByIdApplications
   */
  postApplicationGroupsByIdApplications(id: string | number, data: { applicationId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/applicationgroups/${id}/applications`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getApplicationGroupsApplicationsById
   */
  getApplicationGroupsApplicationsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ applicationGroupId?: any; applicationId?: any }>>> {
    const url = `/api/v3/applicationgroups/applications/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteApplicationGroupsByIdApplicationsByApplicationId
   */
  deleteApplicationGroupsByIdApplicationsByApplicationId(id: string | number, applicationId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationgroups/${id}/applications/${applicationId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * postApplicationGroupsApplicationsCreate
   */
  postApplicationGroupsApplicationsCreate(data: { name?: string; applications?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/applicationgroups/applications/create`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putApplicationGroupsApplicationsUpdate
   */
  putApplicationGroupsApplicationsUpdate(data: { applicationGroupId?: any; name?: string; applications?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationgroups/applications/update`;
    return this.client.request('put', url, data, params);
  }

  /**
   * putApplicationGroupsApplicationsByIdUpdate
   */
  putApplicationGroupsApplicationsByIdUpdate(id: string | number, data: { applicationGroups?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationgroups/applications/${id}/update`;
    return this.client.request('put', url, data, params);
  }
}
