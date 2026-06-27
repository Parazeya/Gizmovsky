import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Tasks {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getTasks
   */
  getTasks(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; type?: any; isDeleted?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/tasks`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.type !== undefined) query['Type'] = options.type;
    if (options.isDeleted !== undefined) query['IsDeleted'] = options.isDeleted;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getTasksById
   */
  getTasksById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ type?: number; model?: any }>> {
    const url = `/api/v3/tasks/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteTasksById
   */
  deleteTasksById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/tasks/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getTasksNameExists
   */
  getTasksNameExists(options: { name?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/tasks/name/exists`;
    const query: Record<string, any> = { ...params };
    if (options.name !== undefined) query['name'] = options.name;
    return this.client.request('get', url, {}, query);
  }

  /**
   * putTasksByIdByNameName
   */
  putTasksByIdByNameName(id: string | number, name: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/tasks/${id}/${name}/name`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * postTasksProcess
   */
  postTasksProcess(data: { name?: string; fileName?: string; workingDirectory?: any; arguments?: any; wait?: boolean; hide?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/tasks/process`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putTasksByIdProcess
   */
  putTasksByIdProcess(id: string | number, data: { name?: string; fileName?: string; workingDirectory?: any; arguments?: any; wait?: boolean; hide?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/tasks/${id}/process`;
    return this.client.request('put', url, data, params);
  }

  /**
   * postTasksScript
   */
  postTasksScript(data: { name?: string; type?: number; script?: string; wait?: boolean; hide?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/tasks/script`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putTasksByIdScript
   */
  putTasksByIdScript(id: string | number, data: { name?: string; type?: number; script?: string; wait?: boolean; hide?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/tasks/${id}/script`;
    return this.client.request('put', url, data, params);
  }

  /**
   * postTasksJunction
   */
  postTasksJunction(data: { name?: string; sourceDirectory?: string; destinationDirectory?: any; deleteDestination?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/tasks/junction`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putTasksByIdJunction
   */
  putTasksByIdJunction(id: string | number, data: { name?: string; sourceDirectory?: string; destinationDirectory?: any; deleteDestination?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/tasks/${id}/junction`;
    return this.client.request('put', url, data, params);
  }

  /**
   * postTasksNotification
   */
  postTasksNotification(data: { name?: string; title?: string; message?: string; wait?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/tasks/notification`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putTasksByIdNotification
   */
  putTasksByIdNotification(id: string | number, data: { name?: string; title?: string; message?: string; wait?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/tasks/${id}/notification`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getTasksCounters
   */
  getTasksCounters(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; type?: any; isDeleted?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/tasks/counters`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.type !== undefined) query['Type'] = options.type;
    if (options.isDeleted !== undefined) query['IsDeleted'] = options.isDeleted;
    return this.client.request('get', url, {}, query);
  }
}
