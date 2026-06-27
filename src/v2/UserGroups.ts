import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class UserGroups {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Get all user groups.
   */
  getUserGroups(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; groupName?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/usergroups`;
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
   * Create a user group.
   */
  postUserGroups(data: { name?: string; description?: string; billingProfileId?: number; requiredUserInfo?: any; overrideApplicationGroup?: boolean; applicationGroupId?: number; overrideSecurityProfile?: boolean; securityProfileId?: number; overrideAgeRating?: boolean; isAgeRatingEnabled?: boolean; enablePersonalStorage?: boolean; hideLogoutButton?: boolean; disallowLoginFromClient?: boolean; guestUse?: boolean; guestUseOnly?: boolean; disallowLoginFromManager?: boolean; isNegativeBalanceAllowed?: boolean; creditLimit?: number; pointsAwardOptions?: any; pointsMoneyRatio?: number; pointsTimeRatio?: number; pointsAward?: number; isDefault?: boolean; disableTimeOffer?: boolean; disableFixedTime?: boolean; disableDeposit?: boolean; isWaitingLinePriorityEnabled?: boolean; waitingLinePriority?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/usergroups`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update a user group.
   */
  putUserGroups(data: { id?: number; name?: string; description?: string; billingProfileId?: number; requiredUserInfo?: any; overrideApplicationGroup?: boolean; applicationGroupId?: number; overrideSecurityProfile?: boolean; securityProfileId?: number; overrideAgeRating?: boolean; isAgeRatingEnabled?: boolean; enablePersonalStorage?: boolean; hideLogoutButton?: boolean; disallowLoginFromClient?: boolean; guestUse?: boolean; guestUseOnly?: boolean; disallowLoginFromManager?: boolean; isNegativeBalanceAllowed?: boolean; creditLimit?: number; pointsAwardOptions?: any; pointsMoneyRatio?: number; pointsTimeRatio?: number; pointsAward?: number; isDefault?: boolean; disableTimeOffer?: boolean; disableFixedTime?: boolean; disableDeposit?: boolean; isWaitingLinePriorityEnabled?: boolean; waitingLinePriority?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/usergroups`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get a user group by id.
   */
  getUserGroupsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; name?: string; description?: string; billingProfileId?: number; requiredUserInfo?: any; overrideApplicationGroup?: boolean; applicationGroupId?: number; overrideSecurityProfile?: boolean; securityProfileId?: number; overrideAgeRating?: boolean; isAgeRatingEnabled?: boolean; enablePersonalStorage?: boolean; hideLogoutButton?: boolean; disallowLoginFromClient?: boolean; guestUse?: boolean; guestUseOnly?: boolean; disallowLoginFromManager?: boolean; isNegativeBalanceAllowed?: boolean; creditLimit?: number; pointsAwardOptions?: any; pointsMoneyRatio?: number; pointsTimeRatio?: number; pointsAward?: number; isDefault?: boolean; disableTimeOffer?: boolean; disableFixedTime?: boolean; disableDeposit?: boolean; isWaitingLinePriorityEnabled?: boolean; waitingLinePriority?: number }>> {
    const url = `/api/v2.0/usergroups/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Delete a user group.
   */
  deleteUserGroupsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/usergroups/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getUserGroupsByIdDisallowedhostgroups
   */
  getUserGroupsByIdDisallowedhostgroups(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; userGroupId?: number; hostGroupId?: number; isDisallowed?: boolean }>>> {
    const url = `/api/v2.0/usergroups/${id}/disallowedhostgroups`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postUserGroupsByIdDisallowedhostgroups
   */
  postUserGroupsByIdDisallowedhostgroups(id: string | number, data: { hostGroupId?: number; isDisallowed?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/usergroups/${id}/disallowedhostgroups`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putUserGroupsDisallowedhostgroups
   */
  putUserGroupsDisallowedhostgroups(data: { id?: number; userGroupId?: number; hostGroupId?: number; isDisallowed?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/usergroups/disallowedhostgroups`;
    return this.client.request('put', url, data, params);
  }

  /**
   * deleteUserGroupsByIdDisallowedhostgroupsByUserGroupDisallowedHostGroupId
   */
  deleteUserGroupsByIdDisallowedhostgroupsByUserGroupDisallowedHostGroupId(id: string | number, userGroupDisallowedHostGroupId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/usergroups/${id}/disallowedhostgroups/${userGroupDisallowedHostGroupId}`;
    return this.client.request('delete', url, {}, params);
  }
}
