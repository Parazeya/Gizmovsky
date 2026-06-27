import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Log {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Gets log entries.
   */
  getLog(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; expand?: string[]; dateCompareOption?: any; dateFrom?: string; dateTo?: string; messageType?: any; moduleType?: any; messageCompareOption?: any; message?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/log`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.dateCompareOption !== undefined) query['DateCompareOption'] = options.dateCompareOption;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.messageType !== undefined) query['MessageType'] = options.messageType;
    if (options.moduleType !== undefined) query['ModuleType'] = options.moduleType;
    if (options.messageCompareOption !== undefined) query['MessageCompareOption'] = options.messageCompareOption;
    if (options.message !== undefined) query['Message'] = options.message;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Gets log entry by id.
   */
  getLogById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; time?: string; hostNumber?: number; hostname?: string; message?: string; category?: any; moduleType?: any; moduleVersion?: string; messageType?: any }>> {
    const url = `/api/v2.0/log/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Gets log exception.
   */
  getLogByIdException(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ exception?: string }>> {
    const url = `/api/v2.0/log/${id}/exception`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Clears log.
   */
  postLogClear(params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/log/clear`;
    return this.client.request('post', url, {}, params);
  }
}
