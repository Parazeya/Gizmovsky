import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class PaymentIntent {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Creates new deposit intent.
   */
  postPaymentIntentDeposit(data: { userId?: number; amount?: number; paymentMethodId?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ paymentIntent?: string; paymentUrl?: string; qrImage?: string; nativeQrImage?: string; provider?: string }>> {
    const url = `/api/v2.0/paymentintent/deposit`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Get all Payment intents.
   */
  getPaymentIntent(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; dateFrom?: string; dateTo?: string; state?: any; userId?: number; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/paymentintent`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.state !== undefined) query['State'] = options.state;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Get a payment intent by id.
   */
  getPaymentIntentById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; guid?: string; date?: string; userId?: number; paymentMethodId?: number; amount?: number; state?: any; transactionId?: string; transactionTime?: string; provider?: string }>> {
    const url = `/api/v2.0/paymentintent/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Get a payment intent by guid.
   */
  getPaymentIntentByGuid(guid: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; guid?: string; date?: string; userId?: number; paymentMethodId?: number; amount?: number; state?: any; transactionId?: string; transactionTime?: string; provider?: string }>> {
    const url = `/api/v2.0/paymentintent/${guid}`;
    return this.client.request('get', url, {}, params);
  }
}
