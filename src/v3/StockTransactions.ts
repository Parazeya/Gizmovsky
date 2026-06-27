import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class StockTransactions {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getStockTransactions
   */
  getStockTransactions(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; dateFrom?: string; dateTo?: string; expand?: string[]; stockId?: any; type?: any; productId?: any; operatorId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/stocktransactions`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.stockId !== undefined) query['StockId'] = options.stockId;
    if (options.type !== undefined) query['Type'] = options.type;
    if (options.productId !== undefined) query['ProductId'] = options.productId;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postStockTransactions
   */
  postStockTransactions(data: { productId?: any; type?: number; amount?: any; stockId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/stocktransactions`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getStockTransactionsById
   */
  getStockTransactionsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; date?: string; productId?: any; type?: number; amount?: any; onHand?: any; operatorId?: any; shiftId?: any; registerId?: any; stockId?: any }>> {
    const url = `/api/v3/stocktransactions/${id}`;
    return this.client.request('get', url, {}, params);
  }
}
