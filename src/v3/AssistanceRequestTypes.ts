import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class AssistanceRequestTypes {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getAssistanceRequestTypes
   */
  getAssistanceRequestTypes(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; isDeleted?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/assistancerequesttypes`;
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
   * postAssistanceRequestTypes
   */
  postAssistanceRequestTypes(data: { title?: string; displayOrder?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/assistancerequesttypes`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putAssistanceRequestTypes
   */
  putAssistanceRequestTypes(data: { id?: any; displayOrder?: any; title?: string; isDeleted?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/assistancerequesttypes`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getAssistanceRequestTypesById
   */
  getAssistanceRequestTypesById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; title?: string; displayOrder?: any; isDeleted?: boolean }>> {
    const url = `/api/v3/assistancerequesttypes/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteAssistanceRequestTypesById
   */
  deleteAssistanceRequestTypesById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/assistancerequesttypes/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * postAssistanceRequestTypesByIdUndelete
   */
  postAssistanceRequestTypesByIdUndelete(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/assistancerequesttypes/${id}/undelete`;
    return this.client.request('post', url, {}, params);
  }
}
