import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Logs {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getLogs
   */
  getLogs(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; dateCompareOption?: any; dateFrom?: string; dateTo?: string; messageType?: any; moduleType?: any; messageCompareOption?: any; message?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/logs`;
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
   * getLogsById
   */
  getLogsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; time?: string; hostNumber?: any; hostname?: any; message?: string; category?: number; moduleType?: number; moduleVersion?: any; messageType?: number }>> {
    const url = `/api/v3/logs/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getLogsByIdException
   */
  getLogsByIdException(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ exception?: any }>> {
    const url = `/api/v3/logs/${id}/exception`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postLogsClear
   */
  postLogsClear(params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/logs/clear`;
    return this.client.request('post', url, {}, params);
  }
}
