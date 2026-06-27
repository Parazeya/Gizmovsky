import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class ShiftCount {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Gets shift counts.
   */
  getShiftCount(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; expand?: string[]; shiftId?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/shiftcount`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.shiftId !== undefined) query['ShiftId'] = options.shiftId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Gets shift count.
   */
  getShiftCountById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; shiftId?: number; paymentMethodId?: number; startCash?: number; sales?: number; deposits?: number; payIns?: number; withdrawals?: number; payOuts?: number; refunds?: number; voids?: number; expected?: number; actual?: number; difference?: number; note?: string }>> {
    const url = `/api/v2.0/shiftcount/${id}`;
    return this.client.request('get', url, {}, params);
  }
}
