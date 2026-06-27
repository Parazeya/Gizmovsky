import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class StockCounts {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getStockCounts
   */
  getStockCounts(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; stockId?: any; shiftId?: any; operatorId?: any; hasUnexpected?: boolean; type?: any; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/stockcounts`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.stockId !== undefined) query['StockId'] = options.stockId;
    if (options.shiftId !== undefined) query['ShiftId'] = options.shiftId;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.hasUnexpected !== undefined) query['HasUnexpected'] = options.hasUnexpected;
    if (options.type !== undefined) query['Type'] = options.type;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postStockCounts
   */
  postStockCounts(data: { stockId?: any; note?: any; type?: number; counts?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/stockcounts`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getStockCountsById
   */
  getStockCountsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; stockId?: any; type?: number; note?: any; entriesCount?: any; surplusCount?: any; shortageCount?: any; adjustmentId?: any; inboundId?: any; shiftId?: any; registerId?: any; operatorId?: any; date?: string }>> {
    const url = `/api/v3/stockcounts/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getStockCountsByIdEntries
   */
  getStockCountsByIdEntries(id: string | number, options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/stockcounts/${id}/entries`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }
}
