import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Events {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Gets or creates event channel and returns next read event.
   */
  getEventsChannelByUniqueChannelName(uniqueChannelName: string | number, options: { filter?: number[] } = {}, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/v2.0/events/channel/${uniqueChannelName}`;
    const query: Record<string, any> = { ...params };
    if (options.filter !== undefined) query['filter'] = options.filter;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Releases existing event message channel.
   */
  deleteEventsChannelByUniqueChannelName(uniqueChannelName: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<boolean>> {
    const url = `/api/v2.0/events/channel/${uniqueChannelName}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Gets or creates entity event channel and returns next read event.
   */
  getEventsEntity(options: { connectionId?: string; filter?: string[] } = {}, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/v2.0/events/entity`;
    const query: Record<string, any> = { ...params };
    if (options.connectionId !== undefined) query['connectionId'] = options.connectionId;
    if (options.filter !== undefined) query['filter'] = options.filter;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Releases existing entity message channel.
   */
  deleteEventsEntity(params: Record<string, any> = {}): Promise<GizmoResponse<boolean>> {
    const url = `/api/v2.0/events/entity`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Gets event messages metdata.
   */
  getEventsMetadata(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ groupName?: string; groupId?: number; description?: string; events?: any[] }>>> {
    const url = `/api/v2.0/events/metadata`;
    return this.client.request('get', url, {}, params);
  }
}
