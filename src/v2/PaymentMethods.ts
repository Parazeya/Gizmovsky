import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class PaymentMethods {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Get all payment methods.
   */
  getPaymentMethods(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; name?: string; isDeleted?: boolean; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/paymentmethods`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.name !== undefined) query['Name'] = options.name;
    if (options.isDeleted !== undefined) query['IsDeleted'] = options.isDeleted;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Create a payment method.
   */
  postPaymentMethods(data: { name?: string; displayOrder?: number; isEnabled?: boolean; availableInManager?: boolean; availableInClient?: boolean; isDeleted?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/paymentmethods`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update a payment method.
   */
  putPaymentMethods(data: { id?: number; name?: string; displayOrder?: number; isEnabled?: boolean; availableInManager?: boolean; availableInClient?: boolean; isDeleted?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/paymentmethods`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get a payment method by id.
   */
  getPaymentMethodsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; name?: string; displayOrder?: number; isEnabled?: boolean; availableInManager?: boolean; availableInClient?: boolean; isDeleted?: boolean }>> {
    const url = `/api/v2.0/paymentmethods/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Delete a payment method.
   */
  deletePaymentMethodsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/paymentmethods/${id}`;
    return this.client.request('delete', url, {}, params);
  }
}
