import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class UserGroups {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Returns all user groups.
   */
  getUserGroupsApiUsergroups(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; name?: string; description?: string; appGroupId?: number; securityProfileId?: number; billProfileId?: number; requiredUserInfo?: any; overrides?: any; options?: any; creditLimitOptions?: any; isNegativeBalanceAllowed?: boolean; creditLimit?: number; pointsAwardOptions?: any; pointsMoneyRatio?: number; pointsTimeRatio?: number; points?: number; isDefault?: boolean; isAgeRatingEnabled?: boolean; billingOptions?: any; waitingLinePriority?: number; isWaitingLinePriorityEnabled?: boolean }>>> {
    const url = `/api/usergroups`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Adds user group.
   */
  putUserGroupsApiUsergroups(params: Record<string, any> = {}): Promise<GizmoResponse<number>> {
    const url = `/api/usergroups`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Updates user group.
   */
  postUserGroupsApiUsergroups(params: Record<string, any> = {}): Promise<void> {
    const url = `/api/usergroups`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Deletes user group.
   */
  deleteUserGroupsApiUsergroupsByUserGroupId(userGroupId: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/usergroups/${userGroupId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Returns disallowed host groups for specified user group.
   */
  getUserGroupsApiUsergroupsByUserGroupIdDisallowedhost(userGroupId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; name?: string; skinName?: string; options?: any; appGroupId?: number; securityProfileId?: number; defaultGuestGroupId?: number }>>> {
    const url = `/api/usergroups/${userGroupId}/disallowedhost`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns value indicating if host group is disallowed for specifed user group.
   */
  getUserGroupsApiUsergroupsByUserGroupIdDisallowedhostByHostGroupId(userGroupId: string | number, hostGroupId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<boolean>> {
    const url = `/api/usergroups/${userGroupId}/disallowedhost/${hostGroupId}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Allows or disallows a host group for specified user group.
   */
  putUserGroupsApiUsergroupsByUserGroupIdDisallowedhostByHostGroupIdByDisallow(userGroupId: string | number, hostGroupId: string | number, disallow: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/usergroups/${userGroupId}/disallowedhost/${hostGroupId}/${disallow}`;
    return this.client.request('put', url, {}, params);
  }
}
