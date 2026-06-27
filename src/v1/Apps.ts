import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Apps {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Gets apps.
   */
  getAppsApiApps(options: { max?: number; skip?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; title?: string; description?: string; version?: string; appCategoryId?: number; developerId?: number; publisherId?: number; ageRating?: number; releaseDate?: string; options?: any; ageRatingType?: any; guid?: string; defaultExecutableId?: number }>>> {
    const url = `/api/apps`;
    const query: Record<string, any> = { ...params };
    if (options.max !== undefined) query['max'] = options.max;
    if (options.skip !== undefined) query['skip'] = options.skip;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Gets app by id.
   */
  getAppsApiAppsByAppId(appId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; title?: string; description?: string; version?: string; appCategoryId?: number; developerId?: number; publisherId?: number; ageRating?: number; releaseDate?: string; options?: any; ageRatingType?: any; guid?: string; defaultExecutableId?: number }>> {
    const url = `/api/apps/${appId}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Gets app titles.
   */
  getAppsApiAppsTitles(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; title?: string }>>> {
    const url = `/api/apps/titles`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Gets app image.
   */
  getAppsApiAppsByAppIdImage(appId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<string>> {
    const url = `/api/apps/${appId}/image`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Gets app rating.
   */
  getAppsApiAppsByAppIdRating(appId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ value?: number; date?: string; userId?: number; username?: string }>>> {
    const url = `/api/apps/${appId}/rating`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Gets app average rating.
   */
  getAppsApiAppsByAppIdRatingAverage(appId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<number>> {
    const url = `/api/apps/${appId}/rating/average`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Gets app rates count.
   */
  getAppsApiAppsByAppIdRatingCount(appId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<number>> {
    const url = `/api/apps/${appId}/rating/count`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns apps info.
   */
  getAppsApiAppsInfos(options: { max?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ appId?: number; title?: string; description?: string; rating?: number; ratingsCount?: number; totalExecutions?: number; totalExecutionSeconds?: number; totalExecutionMinutes?: number; totalExecutionHours?: number }>>> {
    const url = `/api/apps/infos`;
    const query: Record<string, any> = { ...params };
    if (options.max !== undefined) query['max'] = options.max;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns app infos orderd by rating.
   */
  getAppsApiAppsInfosTopRating(options: { max?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ appId?: number; title?: string; description?: string; rating?: number; ratingsCount?: number; totalExecutions?: number; totalExecutionSeconds?: number; totalExecutionMinutes?: number; totalExecutionHours?: number }>>> {
    const url = `/api/apps/infos/top/rating`;
    const query: Record<string, any> = { ...params };
    if (options.max !== undefined) query['max'] = options.max;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns app infos orderd by use.
   */
  getAppsApiAppsInfosTopUse(options: { max?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ appId?: number; title?: string; description?: string; rating?: number; ratingsCount?: number; totalExecutions?: number; totalExecutionSeconds?: number; totalExecutionMinutes?: number; totalExecutionHours?: number }>>> {
    const url = `/api/apps/infos/top/use`;
    const query: Record<string, any> = { ...params };
    if (options.max !== undefined) query['max'] = options.max;
    return this.client.request('get', url, {}, query);
  }
}
