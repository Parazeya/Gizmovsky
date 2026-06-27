import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class PaymentMethods {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getPaymentMethods
   */
  getPaymentMethods(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; name?: string; isDeleted?: boolean; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/paymentmethods`;
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
   * postPaymentMethods
   */
  postPaymentMethods(data: { name?: string; displayOrder?: any; isEnabled?: boolean; availableInManager?: boolean; availableInClient?: boolean; isDeleted?: boolean; availableInPortal?: boolean; paymentProvider?: any; paymentMethodOption?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/paymentmethods`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putPaymentMethods
   */
  putPaymentMethods(data: { id?: any; name?: string; displayOrder?: any; isEnabled?: boolean; availableInManager?: boolean; availableInClient?: boolean; isDeleted?: boolean; availableInPortal?: boolean; paymentProvider?: any; paymentMethodOption?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/paymentmethods`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getPaymentMethodsById
   */
  getPaymentMethodsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; name?: string; displayOrder?: any; isEnabled?: boolean; availableInManager?: boolean; availableInClient?: boolean; isDeleted?: boolean; availableInPortal?: boolean; paymentProvider?: any; paymentMethodOption?: number }>> {
    const url = `/api/v3/paymentmethods/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deletePaymentMethodsById
   */
  deletePaymentMethodsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/paymentmethods/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getPaymentMethodsNameExists
   */
  getPaymentMethodsNameExists(options: { name?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/paymentmethods/name/exists`;
    const query: Record<string, any> = { ...params };
    if (options.name !== undefined) query['name'] = options.name;
    return this.client.request('get', url, {}, query);
  }
}
