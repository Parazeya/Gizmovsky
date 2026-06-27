import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class UserSessions {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Returns user sessions.
   */
  getUserSessionsApiUsersessions(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; createdById?: number; createdTime?: string; userId?: number; hostId?: number; state?: any; span?: number; billedSpan?: number; pendTime?: string; pendSpan?: number; endTime?: string; slot?: number; pendSpanTotal?: number; pauseSpan?: number; pauseSpanTotal?: number }>>> {
    const url = `/api/usersessions`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns active user sessions.
   */
  getUserSessionsApiUsersessionsActive(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; createdById?: number; createdTime?: string; userId?: number; hostId?: number; state?: any; span?: number; billedSpan?: number; pendTime?: string; pendSpan?: number; endTime?: string; slot?: number; pendSpanTotal?: number; pauseSpan?: number; pauseSpanTotal?: number }>>> {
    const url = `/api/usersessions/active`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns active user sessions info.
   */
  getUserSessionsApiUsersessionsActiveinfo(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ username?: string; userId?: number; span?: number; lastLogin?: string; lastLogout?: string; hostId?: number; hostName?: string; hostNumber?: number; userGroupName?: string; userGroupId?: number; hostGroupName?: string; hostGroupId?: number; sessionState?: any; slot?: number }>>> {
    const url = `/api/usersessions/activeinfo`;
    return this.client.request('get', url, {}, params);
  }
}
