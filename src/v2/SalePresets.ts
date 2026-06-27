import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class SalePresets {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Get all time sale presets.
   */
  getSalePresetsTime(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/salepresets/time`;
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
   * Create a time sale preset.
   */
  postSalePresetsTime(data: { value?: number; displayOrder?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/salepresets/time`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update a time sale preset.
   */
  putSalePresetsTime(data: { id?: number; value?: number; displayOrder?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/salepresets/time`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get a time sale preset by id.
   */
  getSalePresetsTimeById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; value?: number; displayOrder?: number }>> {
    const url = `/api/v2.0/salepresets/time/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Delete a time sale preset.
   */
  deleteSalePresetsTimeById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/salepresets/time/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Get all money sale presets.
   */
  getSalePresetsMoney(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/salepresets/money`;
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
   * Create a money sale preset.
   */
  postSalePresetsMoney(data: { value?: number; displayOrder?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/salepresets/money`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update a money sale preset.
   */
  putSalePresetsMoney(data: { id?: number; value?: number; displayOrder?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/salepresets/money`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get a money sale preset by id.
   */
  getSalePresetsMoneyById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; value?: number; displayOrder?: number }>> {
    const url = `/api/v2.0/salepresets/money/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Delete a money sale preset.
   */
  deleteSalePresetsMoneyById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/salepresets/money/${id}`;
    return this.client.request('delete', url, {}, params);
  }
}
