import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class ShiftCounts {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getShiftCounts
   */
  getShiftCounts(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; shiftId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/shiftcounts`;
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
   * getShiftCountsById
   */
  getShiftCountsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; shiftId?: any; paymentMethodId?: any; startCash?: any; sales?: any; deposits?: any; payIns?: any; withdrawals?: any; payOuts?: any; refunds?: any; voids?: any; expected?: any; actual?: any; difference?: any; note?: any }>> {
    const url = `/api/v3/shiftcounts/${id}`;
    return this.client.request('get', url, {}, params);
  }
}
