import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Schedules {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getSchedules
   */
  getSchedules(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; type?: any; isDisabled?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/schedules`;
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
   * getSchedulesById
   */
  getSchedulesById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ type?: number; model?: any }>> {
    const url = `/api/v3/schedules/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteSchedulesById
   */
  deleteSchedulesById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/schedules/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * putSchedulesByIdEnable
   */
  putSchedulesByIdEnable(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/schedules/${id}/enable`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putSchedulesByIdDisable
   */
  putSchedulesByIdDisable(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/schedules/${id}/disable`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putSchedulesByIdName
   */
  putSchedulesByIdName(id: string | number, data: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/schedules/${id}/name`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getSchedulesNameExists
   */
  getSchedulesNameExists(options: { name?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/schedules/name/exists`;
    const query: Record<string, any> = { ...params };
    if (options.name !== undefined) query['name'] = options.name;
    return this.client.request('get', url, {}, query);
  }

  /**
   * putSchedulesByIdDescription
   */
  putSchedulesByIdDescription(id: string | number, data: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/schedules/${id}/description`;
    return this.client.request('put', url, data, params);
  }

  /**
   * postSchedulesReports
   */
  postSchedulesReports(data: { name?: string; description?: any; type?: number; startTime?: string; isDisabled?: boolean; entries?: any[]; recipients?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/schedules/reports`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putSchedulesReportsById
   */
  putSchedulesReportsById(id: string | number, data: { name?: string; description?: any; type?: number; startTime?: string; isDisabled?: boolean; entries?: any[]; recipients?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/schedules/reports/${id}`;
    return this.client.request('put', url, data, params);
  }
}
