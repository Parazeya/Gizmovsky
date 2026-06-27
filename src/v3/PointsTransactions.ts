import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class PointsTransactions {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getPointsTransactions
   */
  getPointsTransactions(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; dateFrom?: string; dateTo?: string; userId?: any; type?: any; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/pointstransactions`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.type !== undefined) query['Type'] = options.type;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postPointsTransactions
   */
  postPointsTransactions(data: { userId?: any; type?: number; amount?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/pointstransactions`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getPointsTransactionsById
   */
  getPointsTransactionsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; date?: string; balance?: any; operatorId?: any; shiftId?: any; registerId?: any; isVoided?: boolean; userId?: any; type?: number; amount?: any }>> {
    const url = `/api/v3/pointstransactions/${id}`;
    return this.client.request('get', url, {}, params);
  }
}
