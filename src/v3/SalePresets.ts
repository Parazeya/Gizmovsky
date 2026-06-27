import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class SalePresets {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getSalePresetsTime
   */
  getSalePresetsTime(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/salepresets/time`;
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
   * postSalePresetsTime
   */
  postSalePresetsTime(data: { value?: any; displayOrder?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/salepresets/time`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putSalePresetsTime
   */
  putSalePresetsTime(data: { id?: any; value?: any; displayOrder?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/salepresets/time`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getSalePresetsTimeById
   */
  getSalePresetsTimeById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; value?: any; displayOrder?: any }>> {
    const url = `/api/v3/salepresets/time/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteSalePresetsTimeById
   */
  deleteSalePresetsTimeById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/salepresets/time/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getSalePresetsMoney
   */
  getSalePresetsMoney(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/salepresets/money`;
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
   * postSalePresetsMoney
   */
  postSalePresetsMoney(data: { value?: any; displayOrder?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/salepresets/money`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putSalePresetsMoney
   */
  putSalePresetsMoney(data: { id?: any; value?: any; displayOrder?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/salepresets/money`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getSalePresetsMoneyById
   */
  getSalePresetsMoneyById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; value?: any; displayOrder?: any }>> {
    const url = `/api/v3/salepresets/money/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteSalePresetsMoneyById
   */
  deleteSalePresetsMoneyById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/salepresets/money/${id}`;
    return this.client.request('delete', url, {}, params);
  }
}
