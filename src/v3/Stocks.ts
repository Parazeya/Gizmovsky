import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Stocks {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getStocks
   */
  getStocks(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; type?: any; branchId?: any; isDeleted?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/stocks`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.type !== undefined) query['Type'] = options.type;
    if (options.branchId !== undefined) query['BranchId'] = options.branchId;
    if (options.isDeleted !== undefined) query['IsDeleted'] = options.isDeleted;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postStocks
   */
  postStocks(data: { name?: string; type?: any; branchId?: any; isDeleted?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/stocks`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putStocks
   */
  putStocks(data: { id?: any; name?: string; type?: any; branchId?: any; isDeleted?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/stocks`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getStocksById
   */
  getStocksById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; name?: string; type?: any; branchId?: any; isDeleted?: boolean }>> {
    const url = `/api/v3/stocks/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteStocksById
   */
  deleteStocksById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/stocks/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * putStocksByIdUndelete
   */
  putStocksByIdUndelete(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/stocks/${id}/undelete`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putStocksByIdName
   */
  putStocksByIdName(id: string | number, data: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/stocks/${id}/name`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getStocksNameExists
   */
  getStocksNameExists(options: { name?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/stocks/name/exists`;
    const query: Record<string, any> = { ...params };
    if (options.name !== undefined) query['name'] = options.name;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getStocksNameBranchesByBranchIdExists
   */
  getStocksNameBranchesByBranchIdExists(branchId: string | number, options: { name?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/stocks/name/branches/${branchId}/exists`;
    const query: Record<string, any> = { ...params };
    if (options.name !== undefined) query['name'] = options.name;
    return this.client.request('get', url, {}, query);
  }
}
