import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Invoices {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Get all invoices.
   */
  getInvoices(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; dateFrom?: string; dateTo?: string; isVoided?: boolean; userId?: number; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/invoices`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.isVoided !== undefined) query['IsVoided'] = options.isVoided;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Get an invoice by id.
   */
  getInvoicesById(id: string | number, options: { expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; date?: string; orderId?: number; userId?: number; status?: any; subTotal?: number; taxTotal?: number; total?: number; outstanding?: number; pointsTotal?: number; outstandingPoints?: number; operatorId?: number; shiftId?: number; registerId?: number; isVoided?: boolean; invoiceLines?: any[]; invoicePayments?: any[]; invoiceRefunds?: any[] }>> {
    const url = `/api/v2.0/invoices/${id}`;
    const query: Record<string, any> = { ...params };
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Void the specified invoice.
   */
  putInvoicesByIdVoid(id: string | number, data: { refundMethodId?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/invoices/${id}/void`;
    return this.client.request('put', url, data, params);
  }
}
