import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Discounts {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getDiscounts
   */
  getDiscounts(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; isDisabled?: boolean; isDeleted?: boolean; rewardType?: any; branchId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/discounts`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.isDisabled !== undefined) query['IsDisabled'] = options.isDisabled;
    if (options.isDeleted !== undefined) query['IsDeleted'] = options.isDeleted;
    if (options.rewardType !== undefined) query['RewardType'] = options.rewardType;
    if (options.branchId !== undefined) query['BranchId'] = options.branchId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postDiscounts
   */
  postDiscounts(data: { name?: string; description?: any; applyType?: number; calculationType?: number; rewardType?: number; requirement?: number; value?: any; isDisabled?: boolean; period?: any; product?: any; timeProduct?: any; productGroup?: any; billProfile?: any; paymentMethod?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/discounts`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putDiscounts
   */
  putDiscounts(data: { id?: any; name?: string; description?: any; applyType?: number; calculationType?: number; rewardType?: number; requirement?: number; value?: any; isDisabled?: boolean; period?: any; product?: any; timeProduct?: any; productGroup?: any; billProfile?: any; paymentMethod?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/discounts`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getDiscountsById
   */
  getDiscountsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; name?: string; description?: any; applyType?: number; calculationType?: number; rewardType?: number; requirement?: number; value?: any; isDisabled?: boolean; isDeleted?: boolean; period?: any; product?: any; timeProduct?: any; productGroup?: any; billProfile?: any; paymentMethod?: any }>> {
    const url = `/api/v3/discounts/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteDiscountsById
   */
  deleteDiscountsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/discounts/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * putDiscountsByIdName
   */
  putDiscountsByIdName(id: string | number, data: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/discounts/${id}/name`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getDiscountsNameExists
   */
  getDiscountsNameExists(options: { name?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/discounts/name/exists`;
    const query: Record<string, any> = { ...params };
    if (options.name !== undefined) query['name'] = options.name;
    return this.client.request('get', url, {}, query);
  }

  /**
   * putDiscountsByIdDescription
   */
  putDiscountsByIdDescription(id: string | number, data: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/discounts/${id}/description`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getDiscountsByIdBranches
   */
  getDiscountsByIdBranches(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ isEnabled?: any; branchId?: any }>>> {
    const url = `/api/v3/discounts/${id}/branches`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postDiscountsByIdBranches
   */
  postDiscountsByIdBranches(id: string | number, data: { branchId?: any; isEnabled?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/discounts/${id}/branches`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putDiscountsByIdUndelete
   */
  putDiscountsByIdUndelete(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/discounts/${id}/undelete`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putDiscountsByIdEnable
   */
  putDiscountsByIdEnable(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/discounts/${id}/enable`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putDiscountsByIdDisable
   */
  putDiscountsByIdDisable(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/discounts/${id}/disable`;
    return this.client.request('put', url, {}, params);
  }
}
