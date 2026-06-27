import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Variables {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getVariables
   */
  getVariables(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/variables`;
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
   * postVariables
   */
  postVariables(data: { name?: string; value?: string; availableInServer?: boolean; availableInClient?: boolean; availableInManager?: boolean; useOrder?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/variables`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putVariables
   */
  putVariables(data: { id?: any; name?: string; value?: string; availableInServer?: boolean; availableInClient?: boolean; availableInManager?: boolean; useOrder?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/variables`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getVariablesById
   */
  getVariablesById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; name?: string; value?: string; availableInServer?: boolean; availableInClient?: boolean; availableInManager?: boolean; useOrder?: any }>> {
    const url = `/api/v3/variables/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteVariablesById
   */
  deleteVariablesById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/variables/${id}`;
    return this.client.request('delete', url, {}, params);
  }
}
