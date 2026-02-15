import { GizmoClient } from "../GizmoClient.js";

export class Events {
  constructor(client) {
    this.client = client;
  }

  /**
   * Gets or creates event channel and returns next read event.
   * @param {string} uniqueChannelName - Unique channel name.
   * @param {Object} options - options object with possible query parameters
   * @param {array} options.filter - Optional event id filter.
   * @param {Object} params - additional query params
   */
  getEventsChannelByUniqueChannelName(
    uniqueChannelName,
    options = {},
    params = {}
  ) {
    const url = `/api/v2.0/events/channel/${uniqueChannelName}`;
    const filter = options.hasOwnProperty("filter")
      ? options["filter"]
      : undefined;
    const query = Object.assign({}, params);
    if (filter !== undefined) query["filter"] = filter;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Releases existing event message channel.
   * @param {string} uniqueChannelName - Unique channel name.
   * @param {Object} params - additional query params
   */
  deleteEventsChannelByUniqueChannelName(uniqueChannelName, params = {}) {
    const url = `/api/v2.0/events/channel/${uniqueChannelName}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Gets or creates entity event channel and returns next read event.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.connectionId - Unique connection id.
   * @param {array} options.filter - List of filtered entity types.
   * @param {Object} params - additional query params
   */
  getEventsEntity(options = {}, params = {}) {
    const url = `/api/v2.0/events/entity`;
    const connectionId = options.hasOwnProperty("connectionId")
      ? options["connectionId"]
      : undefined;
    const filter = options.hasOwnProperty("filter")
      ? options["filter"]
      : undefined;
    const query = Object.assign({}, params);
    if (connectionId !== undefined) query["connectionId"] = connectionId;
    if (filter !== undefined) query["filter"] = filter;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Releases existing entity message channel.
   * @param {Object} params - additional query params
   */
  deleteEventsEntity(params = {}) {
    const url = `/api/v2.0/events/entity`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Gets event messages metdata.
   * @param {Object} params - additional query params
   */
  getEventsMetadata(options = {}, params = {}) {
    const url = `/api/v2.0/events/metadata`;
    return this.client.request("get", url, {}, params);
  }
}
