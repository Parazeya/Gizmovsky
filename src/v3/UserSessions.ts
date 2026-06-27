import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class UserSessions {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getUserSessions
   */
  getUserSessions(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; dateFrom?: string; dateTo?: string; expand?: string[]; userId?: any; hostId?: any; state?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/usersessions`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.hostId !== undefined) query['HostId'] = options.hostId;
    if (options.state !== undefined) query['State'] = options.state;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getUserSessionsById
   */
  getUserSessionsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; userId?: any; hostId?: any; slot?: any; state?: number; span?: any }>> {
    const url = `/api/v3/usersessions/${id}`;
    return this.client.request('get', url, {}, params);
  }
}
