import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class InvoicePayments {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Get all invoice payments.
   */
  getInvoicePayments(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; dateFrom?: string; dateTo?: string; invoiceId?: number; userId?: number; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/invoicepayments`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.invoiceId !== undefined) query['InvoiceId'] = options.invoiceId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Create an invoice payment.
   */
  postInvoicePayments(data: { invoiceId?: number; paymentMethodId?: number; amount?: number; amountReceived?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/invoicepayments`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Get an invoice payment by id.
   */
  getInvoicePaymentsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; date?: string; invoiceId?: number; operatorId?: number; shiftId?: number; registerId?: number; paymentMethodId?: number; amount?: number; amountReceived?: number }>> {
    const url = `/api/v2.0/invoicepayments/${id}`;
    return this.client.request('get', url, {}, params);
  }
}
