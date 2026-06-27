import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Orders {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Get all orders.
   */
  getOrders(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; dateFrom?: string; dateTo?: string; status?: any; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/orders`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.status !== undefined) query['Status'] = options.status;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Get an order by id.
   */
  getOrdersById(id: string | number, options: { expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; invoice?: any; date?: string; userId?: number; hostId?: number; status?: any; userNote?: string; isDelivered?: boolean; operatorId?: number; shiftId?: number; registerId?: number; subTotal?: number; taxTotal?: number; total?: number; pointsTotal?: number; orderLines?: any[]; preferredPaymentMethodId?: number }>> {
    const url = `/api/v2.0/orders/${id}`;
    const query: Record<string, any> = { ...params };
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Invoice the specified order.
   */
  postOrdersByIdInvoice(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/orders/${id}/invoice`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Complete the specified order.
   */
  putOrdersByIdComplete(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/orders/${id}/complete`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Cancel the specified order.
   */
  putOrdersByIdCancel(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/orders/${id}/cancel`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Get the delivered status of the specified order.
   */
  getOrdersByIdDelivered(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ value?: boolean }>> {
    const url = `/api/v2.0/orders/${id}/delivered`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Set the specified order as delivered.
   */
  putOrdersByIdDelivered(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/orders/${id}/delivered`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * getOrdersByIdOrderlinesByOrderLineIdDelivered
   */
  getOrdersByIdOrderlinesByOrderLineIdDelivered(id: string | number, orderLineId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ quantity?: number; deliveredQuantity?: number; isDelivered?: boolean; deliveredTime?: string }>> {
    const url = `/api/v2.0/orders/${id}/orderlines/${orderLineId}/delivered`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putOrdersByIdOrderlinesByOrderLineIdDelivered
   */
  putOrdersByIdOrderlinesByOrderLineIdDelivered(id: string | number, orderLineId: string | number, data: { deliveredQuantity?: number; isDelivered?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/orders/${id}/orderlines/${orderLineId}/delivered`;
    return this.client.request('put', url, data, params);
  }
}
