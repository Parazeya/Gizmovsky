import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Inventories {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getInventories
   */
  getInventories(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; type?: any; stockId?: any; dateFrom?: string; dateTo?: string; operatorId?: any; isCompleted?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/inventories`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.type !== undefined) query['Type'] = options.type;
    if (options.stockId !== undefined) query['StockId'] = options.stockId;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.isCompleted !== undefined) query['IsCompleted'] = options.isCompleted;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getInventoriesById
   */
  getInventoriesById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ type?: number; model?: any }>> {
    const url = `/api/v3/inventories/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getInventoriesByIdEntries
   */
  getInventoriesByIdEntries(id: string | number, options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/inventories/${id}/entries`;
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
   * postInventoriesInbound
   */
  postInventoriesInbound(data: { stockId?: any; note?: any; inventoryTransferId?: any; documents?: any[]; entries?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/inventories/inbound`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postInventoriesAdjustment
   */
  postInventoriesAdjustment(data: { stockId?: any; note?: any; documents?: any[]; adjustmentType?: number; entries?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/inventories/adjustment`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postInventoriesTransfer
   */
  postInventoriesTransfer(data: { stockId?: any; transferStockId?: any; note?: any; documents?: any[]; entries?: any[]; autoInbound?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/inventories/transfer`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postInventoriesTransferByIdInbound
   */
  postInventoriesTransferByIdInbound(id: string | number, data: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/inventories/transfer/${id}/inbound`;
    return this.client.request('post', url, data, params);
  }
}
