import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class ApplicationDeployments {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Get all application deployments.
   */
  getApplicationDeployments(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; deploymentName?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/applicationdeployments`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.deploymentName !== undefined) query['DeploymentName'] = options.deploymentName;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Create an application deployment.
   */
  postApplicationDeployments(data: { name?: string; registryString?: string; source?: string; destination?: string; comparisonMode?: any; deploymentOptions?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/applicationdeployments`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update an application deployment.
   */
  putApplicationDeployments(data: { id?: number; name?: string; registryString?: string; source?: string; destination?: string; comparisonMode?: any; deploymentOptions?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/applicationdeployments`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get an application deployment by id.
   */
  getApplicationDeploymentsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; guid?: string; name?: string; registryString?: string; source?: string; destination?: string; comparisonMode?: any; deploymentOptions?: any }>> {
    const url = `/api/v2.0/applicationdeployments/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Delete an application deployments.
   */
  deleteApplicationDeploymentsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/applicationdeployments/${id}`;
    return this.client.request('delete', url, {}, params);
  }
}
