import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class ProductGroups {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getProductGroups
   */
  getProductGroups(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; groupName?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/productgroups`;
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
   * postProductGroups
   */
  postProductGroups(data: { name?: string; displayOrder?: any; sortOption?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/productgroups`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putProductGroups
   */
  putProductGroups(data: { id?: any; name?: string; displayOrder?: any; sortOption?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/productgroups`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getProductGroupsById
   */
  getProductGroupsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; guid?: string; name?: string; displayOrder?: any; sortOption?: number }>> {
    const url = `/api/v3/productgroups/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteProductGroupsById
   */
  deleteProductGroupsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ productGroupDeleteResult?: number }>> {
    const url = `/api/v3/productgroups/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getProductGroupsNameExists
   */
  getProductGroupsNameExists(options: { name?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/productgroups/name/exists`;
    const query: Record<string, any> = { ...params };
    if (options.name !== undefined) query['name'] = options.name;
    return this.client.request('get', url, {}, query);
  }
}
