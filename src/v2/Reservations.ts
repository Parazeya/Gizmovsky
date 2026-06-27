import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Reservations {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Get all reservations.
   */
  getReservations(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; dateFrom?: string; dateTo?: string; status?: any; userId?: number; contactPhone?: string; contactEmail?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/reservations`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.status !== undefined) query['Status'] = options.status;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.contactPhone !== undefined) query['ContactPhone'] = options.contactPhone;
    if (options.contactEmail !== undefined) query['ContactEmail'] = options.contactEmail;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Create a reservation.
   */
  postReservations(data: { userId?: number; date?: string; duration?: number; contactPhone?: string; contactEmail?: string; note?: string; pin?: string; status?: any; hosts?: any[]; users?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/reservations`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update a reservation.
   */
  putReservations(data: { id?: number; userId?: number; date?: string; duration?: number; contactPhone?: string; contactEmail?: string; note?: string; pin?: string; status?: any; hosts?: any[]; users?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/reservations`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get a reservation by id.
   */
  getReservationsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; userId?: number; date?: string; duration?: number; contactPhone?: string; contactEmail?: string; note?: string; pin?: string; status?: any; hosts?: any[]; users?: any[] }>> {
    const url = `/api/v2.0/reservations/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Delete a reservation.
   */
  deleteReservationsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/reservations/${id}`;
    return this.client.request('delete', url, {}, params);
  }
}
