import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Operators {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Get all operators.
   */
  getOperators(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; username?: string; isDisabled?: boolean; isDeleted?: boolean; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/operators`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.username !== undefined) query['Username'] = options.username;
    if (options.isDisabled !== undefined) query['IsDisabled'] = options.isDisabled;
    if (options.isDeleted !== undefined) query['IsDeleted'] = options.isDeleted;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Create an operator.
   */
  postOperators(data: { password?: string; username?: string; email?: string; firstName?: string; lastName?: string; birthDate?: string; address?: string; city?: string; country?: string; postCode?: string; phone?: string; mobilePhone?: string; sex?: any; isDeleted?: boolean; isDisabled?: boolean; smartCardUid?: string; identification?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/operators`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update an operator.
   */
  putOperators(data: { id?: number; password?: string; username?: string; email?: string; firstName?: string; lastName?: string; birthDate?: string; address?: string; city?: string; country?: string; postCode?: string; phone?: string; mobilePhone?: string; sex?: any; isDeleted?: boolean; isDisabled?: boolean; smartCardUid?: string; identification?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/operators`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get an operator by id.
   */
  getOperatorsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; guid?: string; username?: string; email?: string; firstName?: string; lastName?: string; birthDate?: string; address?: string; city?: string; country?: string; postCode?: string; phone?: string; mobilePhone?: string; sex?: any; isDeleted?: boolean; isDisabled?: boolean; smartCardUid?: string; identification?: string }>> {
    const url = `/api/v2.0/operators/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Delete an operator.
   */
  deleteOperatorsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/operators/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Get current operator.
   */
  getOperatorsCurrent(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; guid?: string; username?: string; email?: string; firstName?: string; lastName?: string; birthDate?: string; address?: string; city?: string; country?: string; postCode?: string; phone?: string; mobilePhone?: string; sex?: any; isDeleted?: boolean; isDisabled?: boolean; smartCardUid?: string; identification?: string }>> {
    const url = `/api/v2.0/operators/current`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Gets current operator shift options.
   */
  getOperatorsCurrentShiftOptions(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ options?: any }>> {
    const url = `/api/v2.0/operators/current/shift/options`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Starts shift for current operator.
   */
  postOperatorsCurrentShiftStart(data: { registerId?: number; startCash?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/operators/current/shift/start`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Starts shift.
   */
  postOperatorsByOperatorIdShiftStart(operatorId: string | number, data: { registerId?: number; startCash?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/operators/${operatorId}/shift/start`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Locks active shift for current operator.
   */
  putOperatorsCurrentShiftActiveLock(params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/operators/current/shift/active/lock`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Unlocks active shift for current operator.
   */
  putOperatorsCurrentShiftActiveUnlock(params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/operators/current/shift/active/unlock`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Returns active shift information for current operator.
   */
  getOperatorsCurrentShiftActive(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; registerId?: number }>> {
    const url = `/api/v2.0/operators/current/shift/active`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Ends active shift for current operator.
   */
  postOperatorsCurrentShiftActiveEnd(data: { counts?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/operators/current/shift/active/end`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Returns active shift expected payments information.
   */
  getOperatorsCurrentShiftActiveExpected(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ exepected?: any[]; expectedTotal?: number }>> {
    const url = `/api/v2.0/operators/current/shift/active/expected`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Sets or updates current operator password.
   */
  postOperatorsCurrentPassword(data: { password?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/operators/current/password`;
    return this.client.request('post', url, data, params);
  }
}
