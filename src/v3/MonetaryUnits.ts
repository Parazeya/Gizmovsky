import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class MonetaryUnits {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getMonetaryUnits
   */
  getMonetaryUnits(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; isDeleted?: boolean; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/monetaryunits`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.isDeleted !== undefined) query['IsDeleted'] = options.isDeleted;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postMonetaryUnits
   */
  postMonetaryUnits(data: { name?: string; value?: any; displayOrder?: any; isDeleted?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/monetaryunits`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putMonetaryUnits
   */
  putMonetaryUnits(data: { id?: any; name?: string; value?: any; displayOrder?: any; isDeleted?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/monetaryunits`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getMonetaryUnitsById
   */
  getMonetaryUnitsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; name?: string; value?: any; displayOrder?: any; isDeleted?: boolean }>> {
    const url = `/api/v3/monetaryunits/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteMonetaryUnitsById
   */
  deleteMonetaryUnitsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/monetaryunits/${id}`;
    return this.client.request('delete', url, {}, params);
  }
}
