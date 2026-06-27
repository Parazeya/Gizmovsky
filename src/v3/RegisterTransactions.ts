import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class RegisterTransactions {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getRegisterTransactions
   */
  getRegisterTransactions(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; dateFrom?: string; dateTo?: string; expand?: string[]; type?: any; shiftId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/registertransactions`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.type !== undefined) query['Type'] = options.type;
    if (options.shiftId !== undefined) query['ShiftId'] = options.shiftId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postRegisterTransactions
   */
  postRegisterTransactions(data: { type?: number; amount?: any; note?: any; disableReceiptPrinting?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/registertransactions`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getRegisterTransactionsById
   */
  getRegisterTransactionsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; date?: string; operatorId?: any; shiftId?: any; registerId?: any; type?: number; amount?: any; note?: any }>> {
    const url = `/api/v3/registertransactions/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getRegisterTransactionsByIdReceiptWait
   */
  getRegisterTransactionsByIdReceiptWait(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ status?: number; receipts?: any[]; errors?: string[] }>> {
    const url = `/api/v3/registertransactions/${id}/receipt/wait`;
    return this.client.request('get', url, {}, params);
  }
}
