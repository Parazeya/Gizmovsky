import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class PaymentIntents {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getPaymentIntents
   */
  getPaymentIntents(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; state?: any; dateFrom?: string; dateTo?: string; branchId?: any; createdById?: any; paymentMethodId?: any; userId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/paymentintents`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.state !== undefined) query['State'] = options.state;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.branchId !== undefined) query['BranchId'] = options.branchId;
    if (options.createdById !== undefined) query['CreatedById'] = options.createdById;
    if (options.paymentMethodId !== undefined) query['PaymentMethodId'] = options.paymentMethodId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getPaymentIntentsById
   */
  getPaymentIntentsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; paymentMethodId?: any; amount?: any; state?: number; transactionId?: any; transactionTime?: any; provider?: string; identifier?: string; branchId?: any; paymentUrl?: any; expiration?: any; expireAt?: any; paymentId?: any; createdById?: any; createdTime?: string; modifiedById?: any; modifiedTime?: any; type?: number; userId?: any }>> {
    const url = `/api/v3/paymentintents/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getPaymentIntentsByIdentifier
   */
  getPaymentIntentsByIdentifier(identifier: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; paymentMethodId?: any; amount?: any; state?: number; transactionId?: any; transactionTime?: any; provider?: string; identifier?: string; branchId?: any; paymentUrl?: any; expiration?: any; expireAt?: any; paymentId?: any; createdById?: any; createdTime?: string; modifiedById?: any; modifiedTime?: any; type?: number; userId?: any }>> {
    const url = `/api/v3/paymentintents/${identifier}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postPaymentIntentsDeposit
   */
  postPaymentIntentsDeposit(data: { userId?: any; amount?: any; paymentMethodId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ paymentIntent?: string; paymentUrl?: string; qrImage?: any; nativeQrImage?: any; provider?: string }>> {
    const url = `/api/v3/paymentintents/deposit`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postPaymentIntentsByIdentifierCancel
   */
  postPaymentIntentsByIdentifierCancel(identifier: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ result?: number; providerResult?: number }>> {
    const url = `/api/v3/paymentintents/${identifier}/cancel`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * getPaymentIntentsByIdentifierWait
   */
  getPaymentIntentsByIdentifierWait(identifier: string | number, options: { waitForCompleted?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<number>> {
    const url = `/api/v3/paymentintents/${identifier}/wait`;
    const query: Record<string, any> = { ...params };
    if (options.waitForCompleted !== undefined) query['waitForCompleted'] = options.waitForCompleted;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getPaymentIntentsByIdentifierOrder
   */
  getPaymentIntentsByIdentifierOrder(identifier: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ orders?: any[]; deposits?: any[]; invoices?: any[] }>> {
    const url = `/api/v3/paymentintents/${identifier}/order`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postPaymentIntentsByIdentifierDiscard
   */
  postPaymentIntentsByIdentifierDiscard(identifier: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/paymentintents/${identifier}/discard`;
    return this.client.request('post', url, {}, params);
  }
}
