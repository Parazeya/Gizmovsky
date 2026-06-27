import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class WaitingLines {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getWaitingLines
   */
  getWaitingLines(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/waitinglines`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getWaitingLinesHostgroupsById
   */
  getWaitingLinesHostgroupsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ hostGroupId?: any; timeoutRemoveEnabled?: boolean; prioritiesEnabled?: boolean; nextInLineEnabled?: boolean }>> {
    const url = `/api/v3/waitinglines/hostgroups/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postWaitingLinesHostgroupsById
   */
  postWaitingLinesHostgroupsById(id: string | number, data: { enablePriorities?: boolean; enableNextInLine?: boolean; timeoutRemove?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/waitinglines/hostgroups/${id}`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getWaitingLinesUsergroupsPriorities
   */
  getWaitingLinesUsergroupsPriorities(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ userGroupId?: any; priority?: any }>>> {
    const url = `/api/v3/waitinglines/usergroups/priorities`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postWaitingLinesUsergroupsPriorities
   */
  postWaitingLinesUsergroupsPriorities(data: { userGroupId?: any; priority?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/waitinglines/usergroups/priorities`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getWaitingLinesEntries
   */
  getWaitingLinesEntries(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; hostGroupId?: any; userId?: any; state?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/waitinglines/entries`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.hostGroupId !== undefined) query['HostGroupId'] = options.hostGroupId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.state !== undefined) query['State'] = options.state;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getWaitingLinesEntriesByEntryId
   */
  getWaitingLinesEntriesByEntryId(entryId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; hostGroupId?: any; userId?: any; position?: any; isManualPosition?: boolean; timeInLine?: any; readyTime?: any; isReadyTimedOut?: boolean; isActive?: boolean; isProcessed?: boolean; isCancelled?: boolean }>> {
    const url = `/api/v3/waitinglines/entries/${entryId}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getWaitingLinesEntriesActive
   */
  getWaitingLinesEntriesActive(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; hostGroupId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/waitinglines/entries/active`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.hostGroupId !== undefined) query['HostGroupId'] = options.hostGroupId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getWaitingLinesEntriesByEntryIdActive
   */
  getWaitingLinesEntriesByEntryIdActive(entryId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; hostGroupId?: any; userId?: any; userGroupId?: any; position?: any; isManualPosition?: boolean; timeInLine?: any; readyTime?: any; isReadyTimedOut?: boolean; estimatedHostId?: any; estimatedWaitTime?: any }>> {
    const url = `/api/v3/waitinglines/entries/${entryId}/active`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postWaitingLinesEntriesByEntryIdMove
   */
  postWaitingLinesEntriesByEntryIdMove(entryId: string | number, data: { moveType?: number; position?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/waitinglines/entries/${entryId}/move`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postWaitingLinesUsersByUserIdHostgroupsByHostGroupId
   */
  postWaitingLinesUsersByUserIdHostgroupsByHostGroupId(userId: string | number, hostGroupId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/waitinglines/users/${userId}/hostgroups/${hostGroupId}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * deleteWaitingLinesUsersByUserIdHostgroupsByHostGroupId
   */
  deleteWaitingLinesUsersByUserIdHostgroupsByHostGroupId(userId: string | number, hostGroupId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/waitinglines/users/${userId}/hostgroups/${hostGroupId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * postWaitingLinesUsersByUserId
   */
  postWaitingLinesUsersByUserId(userId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/waitinglines/users/${userId}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * deleteWaitingLinesUsersByUserId
   */
  deleteWaitingLinesUsersByUserId(userId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/waitinglines/users/${userId}`;
    return this.client.request('delete', url, {}, params);
  }
}
