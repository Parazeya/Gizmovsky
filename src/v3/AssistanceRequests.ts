import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class AssistanceRequests {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getUserAssistanceRequestsPendingAny
   */
  getUserAssistanceRequestsPendingAny(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<boolean>> {
    const url = `/api/user/v3/assistancerequests/pending/any`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postUserAssistanceRequests
   */
  postUserAssistanceRequests(data: { assistanceRequestTypeId?: any; note?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/user/v3/assistancerequests`;
    return this.client.request('post', url, data, params);
  }

  /**
   * deleteUserAssistanceRequests
   */
  deleteUserAssistanceRequests(params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/user/v3/assistancerequests`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getAssistanceRequests
   */
  getAssistanceRequests(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; userId?: any; status?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/assistancerequests`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.status !== undefined) query['Status'] = options.status;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postAssistanceRequests
   */
  postAssistanceRequests(data: { assistanceRequestTypeId?: any; userId?: any; hostId?: any; note?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/assistancerequests`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getAssistanceRequestsById
   */
  getAssistanceRequestsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; assistanceRequestTypeId?: any; userId?: any; hostId?: any; status?: number; note?: any; createdTime?: string }>> {
    const url = `/api/v3/assistancerequests/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putAssistanceRequestsByIdReject
   */
  putAssistanceRequestsByIdReject(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/assistancerequests/${id}/reject`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putAssistanceRequestsByIdAccept
   */
  putAssistanceRequestsByIdAccept(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/assistancerequests/${id}/accept`;
    return this.client.request('put', url, {}, params);
  }
}
