import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class ApplicationDeployments {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getApplicationDeployments
   */
  getApplicationDeployments(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; deploymentName?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/applicationdeployments`;
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
   * postApplicationDeployments
   */
  postApplicationDeployments(data: { name?: string; registryString?: any; source?: string; destination?: string; comparisonMode?: number; deploymentOptions?: any; excludeFiles?: any; excludeDirectories?: any; includeFiles?: any; includeDirectories?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/applicationdeployments`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putApplicationDeployments
   */
  putApplicationDeployments(data: { id?: any; name?: string; registryString?: any; source?: string; destination?: string; comparisonMode?: number; deploymentOptions?: any; excludeFiles?: any; excludeDirectories?: any; includeFiles?: any; includeDirectories?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationdeployments`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getApplicationDeploymentsById
   */
  getApplicationDeploymentsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; guid?: string; name?: string; registryString?: any; source?: string; destination?: string; comparisonMode?: number; deploymentOptions?: any; excludeFiles?: any; excludeDirectories?: any; includeFiles?: any; includeDirectories?: any }>> {
    const url = `/api/v3/applicationdeployments/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteApplicationDeploymentsById
   */
  deleteApplicationDeploymentsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationdeployments/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getApplicationDeploymentsByIdUsages
   */
  getApplicationDeploymentsByIdUsages(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ applicationId?: any; executableId?: any }>>> {
    const url = `/api/v3/applicationdeployments/${id}/usages`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putApplicationDeploymentsByIdUnassign
   */
  putApplicationDeploymentsByIdUnassign(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationdeployments/${id}/unassign`;
    return this.client.request('put', url, {}, params);
  }
}
