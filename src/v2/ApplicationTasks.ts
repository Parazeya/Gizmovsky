import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class ApplicationTasks {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Get all application executable tasks.
   */
  getApplicationTasks(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; taskName?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/applicationtasks`;
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
   * Create an application executable task.
   */
  postApplicationTasks(data: { taskType?: any; name?: string; taskJunction?: any; taskNotification?: any; taskProcess?: any; taskScript?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/applicationtasks`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update an application executable task.
   */
  putApplicationTasks(data: { id?: number; name?: string; taskJunction?: any; taskNotification?: any; taskProcess?: any; taskScript?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/applicationtasks`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get an application executable task by id.
   */
  getApplicationTasksById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; taskType?: any; guid?: string; name?: string; taskJunction?: any; taskNotification?: any; taskProcess?: any; taskScript?: any }>> {
    const url = `/api/v2.0/applicationtasks/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Delete an application executable tasks.
   */
  deleteApplicationTasksById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/applicationtasks/${id}`;
    return this.client.request('delete', url, {}, params);
  }
}
