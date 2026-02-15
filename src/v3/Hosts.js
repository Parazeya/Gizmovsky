import { GizmoClient } from "../GizmoClient.js";

export class Hosts {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all hosts.
         * @param {Object} options - options object with possible query parameters
         * @param {integer} options.paginationLimit - Limit records for the response.
  equal 0 => DefaultLimit;
  equal -1 => int.MaxValue;
  less then -1 => DefaultLimit;
  Default limit is 10.
         * @param {string} options.paginationSortBy - Sorting field name (column name) of the data.
         * @param {boolean} options.paginationIsAsc - Sorting direction of the data.
         * @param {boolean} options.paginationIsScroll - Support infinite scrolling.
         * @param {String} options.paginationCursor - Cursor for the request.
         * @param {string} options.hostName - Return hosts with names that contain the specified string.
         * @param {boolean} options.isDeleted - Return deleted hosts.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {integer} options.hostType - Include specific host type.
         * @param {integer} options.branchId - query
         * @param {string} options.searchValue - Return hosts using all active search fields.
         * @param {Object} params - additional query params
         */
  getHosts(options = {}, params = {}) {
    const url = `/api/v3.0/hosts`;
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
    const branchId = options.hasOwnProperty("branchId")
      ? options["branchId"]
      : undefined;
    const searchValue = options.hasOwnProperty("searchValue")
      ? options["searchValue"]
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
    if (branchId !== undefined) query["BranchId"] = branchId;
    if (searchValue !== undefined) query["SearchValue"] = searchValue;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create a host.
   * @param {integer} data.hostType - The type of the host.
   * @param {integer} data.hostGroupId - The Id of the host group this host belongs to.
   * @param {integer} data.number - The number of the host.
   * @param {string} data.name - The name of the host.
   * @param {boolean} data.isOutOfOrder - Host is out of order.
   * @param {boolean} data.isLocked - Host is locked.
   * @param {integer} data.iconId - The Id of the host icon this host is associated with.
   * @param {boolean} data.isDeleted - Whether the host is deleted.
   * @param {object} data.hostComputer -
   * @param {object} data.hostEndpoint -
   * @param {Object} params - additional query params
   */
  postHosts(data = {}, params = {}) {
    const url = `/api/v3.0/hosts`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a host.
   * @param {integer} data.id - The Id of the object.
   * @param {integer} data.hostGroupId - The Id of the host group this host belongs to.
   * @param {integer} data.number - The number of the host.
   * @param {string} data.name - The name of the host.
   * @param {boolean} data.isOutOfOrder - Host is out of order.
   * @param {boolean} data.isLocked - Host is locked.
   * @param {integer} data.iconId - The Id of the host icon this host is associated with.
   * @param {boolean} data.isDeleted - Whether the host is deleted.
   * @param {object} data.hostComputer -
   * @param {object} data.hostEndpoint -
   * @param {Object} params - additional query params
   */
  putHosts(data = {}, params = {}) {
    const url = `/api/v3.0/hosts`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a host by id.
   * @param {integer} id - Host id.
   * @param {Object} params - additional query params
   */
  getHostsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/hosts/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete a host.
   * @param {integer} id - Host id.
   * @param {Object} params - additional query params
   */
  deleteHostsById(id, params = {}) {
    const url = `/api/v3.0/hosts/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Undeletes a host.
   * @param {integer} id - Host id.
   * @param {Object} params - additional query params
   */
  putHostsById(id, params = {}) {
    const url = `/api/v3.0/hosts/${id}`;
    return this.client.request("put", url, {}, params);
  }

  /**
         * Gets host devices assignments.
         * @param {integer} id - Host id.
         * @param {Object} options - options object with possible query parameters
         * @param {integer} options.paginationLimit - Limit records for the response.
  equal 0 => DefaultLimit;
  equal -1 => int.MaxValue;
  less then -1 => DefaultLimit;
  Default limit is 10.
         * @param {string} options.paginationSortBy - Sorting field name (column name) of the data.
         * @param {boolean} options.paginationIsAsc - Sorting direction of the data.
         * @param {boolean} options.paginationIsScroll - Support infinite scrolling.
         * @param {String} options.paginationCursor - Cursor for the request.
         * @param {integer} options.deviceId - Specifies explicit device id.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {Object} params - additional query params
         */
  getHostsByIdDevicesAssignments(id, options = {}, params = {}) {
    const url = `/api/v3.0/hosts/${id}/devices/assignments`;
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
    const deviceId = options.hasOwnProperty("deviceId")
      ? options["deviceId"]
      : undefined;
    const expand = options.hasOwnProperty("expand")
      ? options["expand"]
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
    if (deviceId !== undefined) query["DeviceId"] = deviceId;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
         * Gets host devices.
         * @param {integer} id - Host id.
         * @param {Object} options - options object with possible query parameters
         * @param {integer} options.paginationLimit - Limit records for the response.
  equal 0 => DefaultLimit;
  equal -1 => int.MaxValue;
  less then -1 => DefaultLimit;
  Default limit is 10.
         * @param {string} options.paginationSortBy - Sorting field name (column name) of the data.
         * @param {boolean} options.paginationIsAsc - Sorting direction of the data.
         * @param {boolean} options.paginationIsScroll - Support infinite scrolling.
         * @param {String} options.paginationCursor - Cursor for the request.
         * @param {integer} options.deviceId - Specifies explicit device id.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {Object} params - additional query params
         */
  getHostsByIdDevices(id, options = {}, params = {}) {
    const url = `/api/v3.0/hosts/${id}/devices`;
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
    const deviceId = options.hasOwnProperty("deviceId")
      ? options["deviceId"]
      : undefined;
    const expand = options.hasOwnProperty("expand")
      ? options["expand"]
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
    if (deviceId !== undefined) query["DeviceId"] = deviceId;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Adds an device to host.
   * @param {integer} id - Host id.
   * @param {integer} deviceId - Device id.
   * @param {Object} params - additional query params
   */
  postHostsByIdDevicesByDeviceId(id, deviceId, params = {}) {
    const url = `/api/v3.0/hosts/${id}/devices/${deviceId}`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Removes device from host.
   * @param {integer} id - Host id.
   * @param {integer} deviceId - Device id.
   * @param {Object} params - additional query params
   */
  deleteHostsByIdDevicesByDeviceId(id, deviceId, params = {}) {
    const url = `/api/v3.0/hosts/${id}/devices/${deviceId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Sets lock state.
   * @param {integer} id - Host id.
   * @param {boolean} value - State.
   * @param {Object} params - additional query params
   */
  postHostsByIdLockByValue(id, value, params = {}) {
    const url = `/api/v3.0/hosts/${id}/lock/${value}`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Sets out of order state.
   * @param {integer} id - Host id.
   * @param {boolean} value - State.
   * @param {Object} params - additional query params
   */
  postHostsByIdOutoforderByValue(id, value, params = {}) {
    const url = `/api/v3.0/hosts/${id}/outoforder/${value}`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Turns on host.
   * @param {integer} id - Host id.
   * @param {Object} params - additional query params
   */
  postHostsByIdOn(id, params = {}) {
    const url = `/api/v3.0/hosts/${id}/on`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Turns off host.
   * @param {integer} id - Host id.
   * @param {Object} params - additional query params
   */
  postHostsByIdOff(id, params = {}) {
    const url = `/api/v3.0/hosts/${id}/off`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Get host layout groups.
   * @param {integer} id - Host id.
   * @param {Object} params - additional query params
   */
  getHostsByIdLayoutgroups(id, options = {}, params = {}) {
    const url = `/api/v3.0/hosts/${id}/layoutgroups`;
    return this.client.request("get", url, {}, params);
  }
}
