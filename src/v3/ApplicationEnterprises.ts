import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class ApplicationEnterprises {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getApplicationEnterprises
   */
  getApplicationEnterprises(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/applicationenterprises`;
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
   * postApplicationEnterprises
   */
  postApplicationEnterprises(data: { name?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/applicationenterprises`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putApplicationEnterprises
   */
  putApplicationEnterprises(data: { id?: any; name?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationenterprises`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getApplicationEnterprisesById
   */
  getApplicationEnterprisesById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; guid?: string; name?: string }>> {
    const url = `/api/v3/applicationenterprises/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteApplicationEnterprisesById
   */
  deleteApplicationEnterprisesById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationenterprises/${id}`;
    return this.client.request('delete', url, {}, params);
  }
}
