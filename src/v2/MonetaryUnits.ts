import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class MonetaryUnits {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Get all monetary units.
   */
  getMonetaryUnits(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; isDeleted?: boolean; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/monetaryunits`;
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
   * Create a monetary unit.
   */
  postMonetaryUnits(data: { name?: string; value?: number; displayOrder?: number; isDeleted?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/monetaryunits`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update a monetary unit.
   */
  putMonetaryUnits(data: { id?: number; name?: string; value?: number; displayOrder?: number; isDeleted?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/monetaryunits`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get a monetary unit by id.
   */
  getMonetaryUnitsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; name?: string; value?: number; displayOrder?: number; isDeleted?: boolean }>> {
    const url = `/api/v2.0/monetaryunits/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Delete a monetary unit.
   */
  deleteMonetaryUnitsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/monetaryunits/${id}`;
    return this.client.request('delete', url, {}, params);
  }
}
