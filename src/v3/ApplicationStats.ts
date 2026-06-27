import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class ApplicationStats {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getApplicationStats
   */
  getApplicationStats(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; appId?: any; appExeId?: any; hostId?: any; userId?: any; branchId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/applicationstats`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.appId !== undefined) query['AppId'] = options.appId;
    if (options.appExeId !== undefined) query['AppExeId'] = options.appExeId;
    if (options.hostId !== undefined) query['HostId'] = options.hostId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.branchId !== undefined) query['BranchId'] = options.branchId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postApplicationStatsAppexeByAppExeId
   */
  postApplicationStatsAppexeByAppExeId(appExeId: string | number, data: { userId?: any; hostId?: any; startTime?: string; span?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/applicationstats/appexe/${appExeId}`;
    return this.client.request('post', url, data, params);
  }
}
