import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Operators {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getOperators
   */
  getOperators(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; username?: string; isDisabled?: boolean; isDeleted?: boolean; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/operators`;
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
   * postOperators
   */
  postOperators(data: { password?: any; username?: string; email?: any; firstName?: any; lastName?: any; birthDate?: any; address?: any; city?: any; country?: any; postCode?: any; phone?: any; mobilePhone?: any; sex?: number; isDeleted?: boolean; isDisabled?: boolean; smartCardUid?: any; identification?: any; shiftOptions?: number; permissionSetId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/operators`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putOperators
   */
  putOperators(data: { id?: any; password?: any; username?: string; email?: any; firstName?: any; lastName?: any; birthDate?: any; address?: any; city?: any; country?: any; postCode?: any; phone?: any; mobilePhone?: any; sex?: number; isDeleted?: boolean; isDisabled?: boolean; smartCardUid?: any; identification?: any; shiftOptions?: number; permissionSetId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/operators`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getOperatorsById
   */
  getOperatorsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; guid?: string; username?: string; email?: any; firstName?: any; lastName?: any; birthDate?: any; address?: any; city?: any; country?: any; postCode?: any; phone?: any; mobilePhone?: any; sex?: number; isDeleted?: boolean; isDisabled?: boolean; smartCardUid?: any; identification?: any; shiftOptions?: number; permissionSetId?: any }>> {
    const url = `/api/v3/operators/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteOperatorsById
   */
  deleteOperatorsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/operators/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getOperatorsCurrent
   */
  getOperatorsCurrent(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; guid?: string; username?: string; email?: any; firstName?: any; lastName?: any; birthDate?: any; address?: any; city?: any; country?: any; postCode?: any; phone?: any; mobilePhone?: any; sex?: number; isDeleted?: boolean; isDisabled?: boolean; smartCardUid?: any; identification?: any; shiftOptions?: number; permissionSetId?: any }>> {
    const url = `/api/v3/operators/current`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOperatorsCurrentShiftsOptions
   */
  getOperatorsCurrentShiftsOptions(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ options?: number }>> {
    const url = `/api/v3/operators/current/shifts/options`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOperatorsCurrentBranches
   */
  getOperatorsCurrentBranches(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/operators/current/branches`;
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
   * getOperatorsByOperatorIdBranches
   */
  getOperatorsByOperatorIdBranches(operatorId: string | number, options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/operators/${operatorId}/branches`;
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
   * getOperatorsCurrentBranchesCurrent
   */
  getOperatorsCurrentBranchesCurrent(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; name?: string; businessName?: any; country?: any; city?: any; address?: any; phone?: any; email?: any; postalCode?: any; region?: any; webSite?: any; info?: any; timeZone?: any; hasBusinessSchedule?: boolean; businessStartWeekDay?: any; businessEndWeekDay?: any; businessDayStart?: any; businessDayEnd?: any; isFiscalizationEnabled?: any; businessVATID?: any; taxSystem?: any; goodsTaxSystem?: any; servicesTaxSystem?: any; depositTaxSystem?: any; goodsVATRate?: any; servicesVATRate?: any; depositVATRate?: any; timeBasedServiceVATRate?: any; treatDepositsAsService?: any; depositServiceDescription?: any; companionId?: any; guid?: string; isDisabled?: boolean; disableTime?: any; isDeleted?: boolean }>> {
    const url = `/api/v3/operators/current/branches/current`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getOperatorsCurrentBranchesByBranchIdRegisters
   */
  getOperatorsCurrentBranchesByBranchIdRegisters(branchId: string | number, options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/operators/current/branches/${branchId}/registers`;
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
   * getOperatorsCurrentRegisters
   */
  getOperatorsCurrentRegisters(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/operators/current/registers`;
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
   * getOperatorsCurrentRegistersCurrent
   */
  getOperatorsCurrentRegistersCurrent(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; number?: any; name?: string; startCash?: any; idleTimeout?: any; paymentTerminalNumber?: any; fiscalReceiptPrinterNumber?: any; stockId?: any; isDeleted?: boolean; companionId?: any; branchId?: any; qrDisplayNumber?: any; isDefault?: boolean; isGlobalDefault?: boolean }>> {
    const url = `/api/v3/operators/current/registers/current`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOperatorsCurrentShiftsStart
   */
  postOperatorsCurrentShiftsStart(data: { registerId?: any; startCash?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/operators/current/shifts/start`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postOperatorsByOperatorIdShiftsStart
   */
  postOperatorsByOperatorIdShiftsStart(operatorId: string | number, data: { registerId?: any; startCash?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/operators/${operatorId}/shifts/start`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putOperatorsCurrentShiftsActiveLock
   */
  putOperatorsCurrentShiftsActiveLock(params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/operators/current/shifts/active/lock`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putOperatorsCurrentShiftsActiveUnlock
   */
  putOperatorsCurrentShiftsActiveUnlock(params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/operators/current/shifts/active/unlock`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * getOperatorsCurrentShiftsActive
   */
  getOperatorsCurrentShiftsActive(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; registerId?: any; branchId?: any }>> {
    const url = `/api/v3/operators/current/shifts/active`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOperatorsCurrentShiftsActiveEnd
   */
  postOperatorsCurrentShiftsActiveEnd(data: { counts?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/operators/current/shifts/active/end`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getOperatorsCurrentShiftsActiveExpected
   */
  getOperatorsCurrentShiftsActiveExpected(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ exepected?: any[]; expectedTotal?: any }>> {
    const url = `/api/v3/operators/current/shifts/active/expected`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postOperatorsCurrentPassword
   */
  postOperatorsCurrentPassword(data: { password?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/operators/current/password`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postOperatorsByOperatorIdBranchesByBranchId
   */
  postOperatorsByOperatorIdBranchesByBranchId(operatorId: string | number, branchId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/operators/${operatorId}/branches/${branchId}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * deleteOperatorsByOperatorIdBranchesByBranchId
   */
  deleteOperatorsByOperatorIdBranchesByBranchId(operatorId: string | number, branchId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/operators/${operatorId}/branches/${branchId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * putOperatorsByOperatorIdBranchesByBranchIdDefaultByIsDefault
   */
  putOperatorsByOperatorIdBranchesByBranchIdDefaultByIsDefault(operatorId: string | number, branchId: string | number, isDefault: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/operators/${operatorId}/branches/${branchId}/default/${isDefault}`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * getOperatorsByOperatorIdBranchesDefault
   */
  getOperatorsByOperatorIdBranchesDefault(operatorId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/operators/${operatorId}/branches/default`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putOperatorsByOperatorIdPermissionsetsByPermissionSetId
   */
  putOperatorsByOperatorIdPermissionsetsByPermissionSetId(operatorId: string | number, permissionSetId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/operators/${operatorId}/permissionsets/${permissionSetId}`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * getOperatorsByOperatorIdPermissions
   */
  getOperatorsByOperatorIdPermissions(operatorId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ type?: string; value?: string }>>> {
    const url = `/api/v3/operators/${operatorId}/permissions`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putOperatorsByIdEnable
   */
  putOperatorsByIdEnable(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/operators/${id}/enable`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putOperatorsByIdDisable
   */
  putOperatorsByIdDisable(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/operators/${id}/disable`;
    return this.client.request('put', url, {}, params);
  }
}
