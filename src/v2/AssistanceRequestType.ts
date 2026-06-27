import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class AssistanceRequestType {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Assistance request types.
   */
  getAssistanceRequestType(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; expand?: string[]; isDeleted?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/assistancerequesttype`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.isDeleted !== undefined) query['IsDeleted'] = options.isDeleted;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Creates assistance request type.
   */
  postAssistanceRequestType(data: { title?: string; displayOrder?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/assistancerequesttype`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Updates assistance request type.
   */
  putAssistanceRequestType(data: { id?: number; displayOrder?: number; title?: string; isDeleted?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/assistancerequesttype`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Gets assistance request type.
   */
  getAssistanceRequestTypeById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; title?: string; displayOrder?: number; isDeleted?: boolean }>> {
    const url = `/api/v2.0/assistancerequesttype/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Soft deletes assistance request type.
   */
  deleteAssistanceRequestTypeById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/assistancerequesttype/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Undeletes assistance request type.
   */
  postAssistanceRequestTypeByIdUndelete(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/assistancerequesttype/${id}/undelete`;
    return this.client.request('post', url, {}, params);
  }
}
