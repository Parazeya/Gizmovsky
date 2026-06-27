import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Notifications {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getNotifications
   */
  getNotifications(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; type?: any; isDisabled?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/notifications`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.type !== undefined) query['Type'] = options.type;
    if (options.isDisabled !== undefined) query['IsDisabled'] = options.isDisabled;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getNotificationsById
   */
  getNotificationsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ type?: number; model?: any }>> {
    const url = `/api/v3/notifications/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteNotificationsById
   */
  deleteNotificationsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/notifications/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * postNotificationsTimedRemaining
   */
  postNotificationsTimedRemaining(data: { minute?: any; type?: number; focusType?: number; message?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/notifications/timed/remaining`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putNotificationsTimedRemaining
   */
  putNotificationsTimedRemaining(data: { id?: any; minute?: any; type?: number; focusType?: number; message?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/notifications/timed/remaining`;
    return this.client.request('put', url, data, params);
  }

  /**
   * postNotificationsTimedReservation
   */
  postNotificationsTimedReservation(data: { minute?: any; type?: number; focusType?: number; message?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/notifications/timed/reservation`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putNotificationsTimedReservation
   */
  putNotificationsTimedReservation(data: { id?: any; minute?: any; type?: number; focusType?: number; message?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/notifications/timed/reservation`;
    return this.client.request('put', url, data, params);
  }

  /**
   * putNotificationsByIdEnable
   */
  putNotificationsByIdEnable(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/notifications/${id}/enable`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putNotificationsByIdDisable
   */
  putNotificationsByIdDisable(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/notifications/${id}/disable`;
    return this.client.request('put', url, {}, params);
  }
}
