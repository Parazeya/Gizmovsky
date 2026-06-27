import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class UserGroups {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getUserGroups
   */
  getUserGroups(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; groupName?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/usergroups`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.groupName !== undefined) query['GroupName'] = options.groupName;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postUserGroups
   */
  postUserGroups(data: { name?: string; description?: any; billingProfileId?: any; requiredUserInfo?: any; overrideApplicationGroup?: boolean; applicationGroupId?: any; overrideSecurityProfile?: boolean; securityProfileId?: any; overrideAgeRating?: boolean; isAgeRatingEnabled?: boolean; enablePersonalStorage?: boolean; hideLogoutButton?: boolean; disallowLoginFromClient?: boolean; guestUse?: boolean; guestUseOnly?: boolean; disallowLoginFromManager?: boolean; isNegativeBalanceAllowed?: boolean; creditLimit?: any; pointsAwardOptions?: number; pointsMoneyRatio?: any; pointsTimeRatio?: any; pointsAward?: any; isDefault?: boolean; disableTimeOffer?: boolean; disableFixedTime?: boolean; disableDeposit?: boolean; isWaitingLinePriorityEnabled?: boolean; waitingLinePriority?: any; creditLimitOptions?: number; discountGroupId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/usergroups`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putUserGroups
   */
  putUserGroups(data: { id?: any; name?: string; description?: any; billingProfileId?: any; requiredUserInfo?: any; overrideApplicationGroup?: boolean; applicationGroupId?: any; overrideSecurityProfile?: boolean; securityProfileId?: any; overrideAgeRating?: boolean; isAgeRatingEnabled?: boolean; enablePersonalStorage?: boolean; hideLogoutButton?: boolean; disallowLoginFromClient?: boolean; guestUse?: boolean; guestUseOnly?: boolean; disallowLoginFromManager?: boolean; isNegativeBalanceAllowed?: boolean; creditLimit?: any; pointsAwardOptions?: number; pointsMoneyRatio?: any; pointsTimeRatio?: any; pointsAward?: any; isDefault?: boolean; disableTimeOffer?: boolean; disableFixedTime?: boolean; disableDeposit?: boolean; isWaitingLinePriorityEnabled?: boolean; waitingLinePriority?: any; creditLimitOptions?: number; discountGroupId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/usergroups`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getUserGroupsById
   */
  getUserGroupsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; name?: string; description?: any; billingProfileId?: any; requiredUserInfo?: any; overrideApplicationGroup?: boolean; applicationGroupId?: any; overrideSecurityProfile?: boolean; securityProfileId?: any; overrideAgeRating?: boolean; isAgeRatingEnabled?: boolean; enablePersonalStorage?: boolean; hideLogoutButton?: boolean; disallowLoginFromClient?: boolean; guestUse?: boolean; guestUseOnly?: boolean; disallowLoginFromManager?: boolean; isNegativeBalanceAllowed?: boolean; creditLimit?: any; pointsAwardOptions?: number; pointsMoneyRatio?: any; pointsTimeRatio?: any; pointsAward?: any; isDefault?: boolean; disableTimeOffer?: boolean; disableFixedTime?: boolean; disableDeposit?: boolean; isWaitingLinePriorityEnabled?: boolean; waitingLinePriority?: any; creditLimitOptions?: number; discountGroupId?: any }>> {
    const url = `/api/v3/usergroups/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteUserGroupsById
   */
  deleteUserGroupsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ userGroupDeleteResult?: number }>> {
    const url = `/api/v3/usergroups/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getUserGroupsByIdDisallowedhostgroups
   */
  getUserGroupsByIdDisallowedhostgroups(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: any; userGroupId?: any; hostGroupId?: any; isDisallowed?: boolean }>>> {
    const url = `/api/v3/usergroups/${id}/disallowedhostgroups`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postUserGroupsByIdDisallowedhostgroups
   */
  postUserGroupsByIdDisallowedhostgroups(id: string | number, data: { hostGroupId?: any; isDisallowed?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/usergroups/${id}/disallowedhostgroups`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putUserGroupsDisallowedhostgroups
   */
  putUserGroupsDisallowedhostgroups(data: { id?: any; userGroupId?: any; hostGroupId?: any; isDisallowed?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/usergroups/disallowedhostgroups`;
    return this.client.request('put', url, data, params);
  }

  /**
   * deleteUserGroupsByIdDisallowedhostgroupsByUserGroupDisallowedHostGroupId
   */
  deleteUserGroupsByIdDisallowedhostgroupsByUserGroupDisallowedHostGroupId(id: string | number, userGroupDisallowedHostGroupId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/usergroups/${id}/disallowedhostgroups/${userGroupDisallowedHostGroupId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * putUserGroupsByIdSetasdefault
   */
  putUserGroupsByIdSetasdefault(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/usergroups/${id}/setasdefault`;
    return this.client.request('put', url, {}, params);
  }
}
