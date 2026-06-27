import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class ClientTasks {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getClientTasks
   */
  getClientTasks(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; activation?: any; isEnabled?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/clienttasks`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.activation !== undefined) query['Activation'] = options.activation;
    if (options.isEnabled !== undefined) query['IsEnabled'] = options.isEnabled;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postClientTasks
   */
  postClientTasks(data: { taskId?: any; activation?: number; useOrder?: any; isEnabled?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/clienttasks`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putClientTasks
   */
  putClientTasks(data: { id?: any; taskId?: any; activation?: number; useOrder?: any; isEnabled?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/clienttasks`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getClientTasksById
   */
  getClientTasksById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; taskId?: any; activation?: number; useOrder?: any; isEnabled?: boolean }>> {
    const url = `/api/v3/clienttasks/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteClientTasksById
   */
  deleteClientTasksById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/clienttasks/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * putClientTasksByIdEnable
   */
  putClientTasksByIdEnable(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/clienttasks/${id}/enable`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putClientTasksByIdDisable
   */
  putClientTasksByIdDisable(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/clienttasks/${id}/disable`;
    return this.client.request('put', url, {}, params);
  }
}
