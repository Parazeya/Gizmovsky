import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class ApplicationTasks {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getApplicationTasks
   */
  getApplicationTasks(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; taskName?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/applicationtasks`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.taskName !== undefined) query['TaskName'] = options.taskName;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postApplicationTasks
   */
  postApplicationTasks(data: { taskType?: number; name?: string; taskJunction?: any; taskNotification?: any; taskProcess?: any; taskScript?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/applicationtasks`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putApplicationTasks
   */
  putApplicationTasks(data: { id?: any; name?: string; taskJunction?: any; taskNotification?: any; taskProcess?: any; taskScript?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationtasks`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getApplicationTasksById
   */
  getApplicationTasksById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; taskType?: number; guid?: string; name?: string; taskJunction?: any; taskNotification?: any; taskProcess?: any; taskScript?: any }>> {
    const url = `/api/v3/applicationtasks/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteApplicationTasksById
   */
  deleteApplicationTasksById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationtasks/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getApplicationTasksByIdUsages
   */
  getApplicationTasksByIdUsages(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ applicationId?: any; executableId?: any }>>> {
    const url = `/api/v3/applicationtasks/${id}/usages`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putApplicationTasksByIdUnassign
   */
  putApplicationTasksByIdUnassign(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationtasks/${id}/unassign`;
    return this.client.request('put', url, {}, params);
  }
}
