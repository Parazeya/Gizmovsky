import { GizmoClient } from "../GizmoClient.js";

export class Hosts {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all hosts.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {string} options.hostName - query
   * @param {boolean} options.isDeleted - query
   * @param {array} options.expand - query
   * @param {any} options.hostType - query
   * @param {Object} params - additional query params
   */
  getHosts(options = {}, params = {}) {
    const url = `/api/v2.0/hosts`;
    const paginationLimit = options.hasOwnProperty("paginationLimit")
      ? options["paginationLimit"]
      : undefined;
    const paginationSortBy = options.hasOwnProperty("paginationSortBy")
      ? options["paginationSortBy"]
      : undefined;
    const paginationIsAsc = options.hasOwnProperty("paginationIsAsc")
      ? options["paginationIsAsc"]
      : undefined;
    const paginationIsScroll = options.hasOwnProperty("paginationIsScroll")
      ? options["paginationIsScroll"]
      : undefined;
    const paginationCursor = options.hasOwnProperty("paginationCursor")
      ? options["paginationCursor"]
      : undefined;
    const hostName = options.hasOwnProperty("hostName")
      ? options["hostName"]
      : undefined;
    const isDeleted = options.hasOwnProperty("isDeleted")
      ? options["isDeleted"]
      : undefined;
    const expand = options.hasOwnProperty("expand")
      ? options["expand"]
      : undefined;
    const hostType = options.hasOwnProperty("hostType")
      ? options["hostType"]
      : undefined;
    const query = Object.assign({}, params);
    if (paginationLimit !== undefined)
      query["Pagination.Limit"] = paginationLimit;
    if (paginationSortBy !== undefined)
      query["Pagination.SortBy"] = paginationSortBy;
    if (paginationIsAsc !== undefined)
      query["Pagination.IsAsc"] = paginationIsAsc;
    if (paginationIsScroll !== undefined)
      query["Pagination.IsScroll"] = paginationIsScroll;
    if (paginationCursor !== undefined)
      query["Pagination.Cursor"] = paginationCursor;
    if (hostName !== undefined) query["HostName"] = hostName;
    if (isDeleted !== undefined) query["IsDeleted"] = isDeleted;
    if (expand !== undefined) query["Expand"] = expand;
    if (hostType !== undefined) query["HostType"] = hostType;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create a host.
   * @param {object} data.hostType -
   * @param {integer} data.hostGroupId -
   * @param {integer} data.number -
   * @param {string} data.name -
   * @param {boolean} data.isOutOfOrder -
   * @param {boolean} data.isLocked -
   * @param {integer} data.iconId -
   * @param {boolean} data.isDeleted -
   * @param {object} data.hostComputer -
   * @param {object} data.hostEndpoint -
   * @param {Object} params - additional query params
   */
  postHosts(data = {}, params = {}) {
    const url = `/api/v2.0/hosts`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a host.
   * @param {integer} data.id -
   * @param {integer} data.hostGroupId -
   * @param {integer} data.number -
   * @param {string} data.name -
   * @param {boolean} data.isOutOfOrder -
   * @param {boolean} data.isLocked -
   * @param {integer} data.iconId -
   * @param {boolean} data.isDeleted -
   * @param {object} data.hostComputer -
   * @param {object} data.hostEndpoint -
   * @param {Object} params - additional query params
   */
  putHosts(data = {}, params = {}) {
    const url = `/api/v2.0/hosts`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a host by id.
   * @param {integer} id - Host id.
   * @param {Object} params - additional query params
   */
  getHostsById(id, options = {}, params = {}) {
    const url = `/api/v2.0/hosts/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete a host.
   * @param {integer} id - Host id.
   * @param {Object} params - additional query params
   */
  deleteHostsById(id, params = {}) {
    const url = `/api/v2.0/hosts/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {Object} params - additional query params
   */
  getHostsByIdHostdevices(id, options = {}, params = {}) {
    const url = `/api/v2.0/hosts/${id}/hostdevices`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {integer} data.id -
   * @param {integer} data.hostId -
   * @param {integer} data.deviceId -
   * @param {Object} params - additional query params
   */
  postHostsByIdHostdevices(id, data = {}, params = {}) {
    const url = `/api/v2.0/hosts/${id}/hostdevices`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {integer} hostDeviceId - path
   * @param {Object} params - additional query params
   */
  deleteHostsByIdHostdevicesByHostDeviceId(id, hostDeviceId, params = {}) {
    const url = `/api/v2.0/hosts/${id}/hostdevices/${hostDeviceId}`;
    return this.client.request("delete", url, {}, params);
  }
}
