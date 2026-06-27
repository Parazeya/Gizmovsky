import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class ProductStocks {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getProductStocks
   */
  getProductStocks(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; productId?: any; productGroupId?: any; productName?: string; branchId?: any; stockId?: any; stockType?: any; level?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/productstocks`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.productId !== undefined) query['ProductId'] = options.productId;
    if (options.productGroupId !== undefined) query['ProductGroupId'] = options.productGroupId;
    if (options.productName !== undefined) query['ProductName'] = options.productName;
    if (options.branchId !== undefined) query['BranchId'] = options.branchId;
    if (options.stockId !== undefined) query['StockId'] = options.stockId;
    if (options.stockType !== undefined) query['StockType'] = options.stockType;
    if (options.level !== undefined) query['Level'] = options.level;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getProductStocksByProductId
   */
  getProductStocksByProductId(productId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; onHand?: any; alertLevelReached?: boolean }>> {
    const url = `/api/v3/productstocks/${productId}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getProductStocksByProductIdStockByStockId
   */
  getProductStocksByProductIdStockByStockId(productId: string | number, stockId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; onHand?: any; alertLevelReached?: boolean }>> {
    const url = `/api/v3/productstocks/${productId}/stock/${stockId}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postProductStocksByProductIdTransaction
   */
  postProductStocksByProductIdTransaction(productId: string | number, data: { type?: number; amount?: any; stockId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/productstocks/${productId}/transaction`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postProductStocksByProductIdStockByStockIdAddByAmount
   */
  postProductStocksByProductIdStockByStockIdAddByAmount(productId: string | number, stockId: string | number, amount: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/productstocks/${productId}/stock/${stockId}/add/${amount}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * postProductStocksByProductIdStockByStockIdSetByAmount
   */
  postProductStocksByProductIdStockByStockIdSetByAmount(productId: string | number, stockId: string | number, amount: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/productstocks/${productId}/stock/${stockId}/set/${amount}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * postProductStocksByProductIdStockByStockIdRemoveByAmount
   */
  postProductStocksByProductIdStockByStockIdRemoveByAmount(productId: string | number, stockId: string | number, amount: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/productstocks/${productId}/stock/${stockId}/remove/${amount}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * postProductStocksByProductIdAddByAmount
   */
  postProductStocksByProductIdAddByAmount(productId: string | number, amount: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/productstocks/${productId}/add/${amount}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * postProductStocksByProductIdSetByAmount
   */
  postProductStocksByProductIdSetByAmount(productId: string | number, amount: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/productstocks/${productId}/set/${amount}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * postProductStocksByProductIdRemoveByAmount
   */
  postProductStocksByProductIdRemoveByAmount(productId: string | number, amount: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/productstocks/${productId}/remove/${amount}`;
    return this.client.request('post', url, {}, params);
  }
}
