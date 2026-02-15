import { GizmoClient } from "../GizmoClient.js";

export class Devices {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all devices.
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
         * @param {integer} options.deviceType - Return devices of the specified device type.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {integer} options.branchId - query
         * @param {Object} params - additional query params
         */
  getDevices(options = {}, params = {}) {
    const url = `/api/v3.0/devices`;
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
    const deviceType = options.hasOwnProperty("deviceType")
      ? options["deviceType"]
      : undefined;
    const expand = options.hasOwnProperty("expand")
      ? options["expand"]
      : undefined;
    const branchId = options.hasOwnProperty("branchId")
      ? options["branchId"]
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
    if (deviceType !== undefined) query["DeviceType"] = deviceType;
    if (expand !== undefined) query["Expand"] = expand;
    if (branchId !== undefined) query["BranchId"] = branchId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create an device.
   * @param {integer} data.deviceType - Gets or sets device type.
   * @param {string} data.name - Gets or sets device name.
   * @param {boolean} data.isEnabled - Gets or sets if device is enabled.
   * @param {object} data.hdmiDevice -
   * @param {integer} data.branchId -
   * @param {Object} params - additional query params
   */
  postDevices(data = {}, params = {}) {
    const url = `/api/v3.0/devices`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Updates an device.
   * @param {integer} data.id -
   * @param {string} data.name - Gets or sets device name.
   * @param {boolean} data.isEnabled - Gets or sets if device is enabled.
   * @param {object} data.hdmiDevice -
   * @param {integer} data.branchId -
   * @param {Object} params - additional query params
   */
  putDevices(data = {}, params = {}) {
    const url = `/api/v3.0/devices`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a device by id.
   * @param {integer} id - Device id.
   * @param {Object} params - additional query params
   */
  getDevicesById(id, options = {}, params = {}) {
    const url = `/api/v3.0/devices/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Deletes specified device.
   * @param {integer} id - Device id.
   * @param {Object} params - additional query params
   */
  deleteDevicesById(id, params = {}) {
    const url = `/api/v3.0/devices/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Enables specified device.
   * @param {integer} id - Device id.
   * @param {Object} params - additional query params
   */
  putDevicesByIdEnable(id, params = {}) {
    const url = `/api/v3.0/devices/${id}/enable`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Disables specified device.
   * @param {integer} id - Device id.
   * @param {Object} params - additional query params
   */
  putDevicesByIdDisable(id, params = {}) {
    const url = `/api/v3.0/devices/${id}/disable`;
    return this.client.request("put", url, {}, params);
  }

  /**
         * Gets devices and host associations.
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
         * @param {integer} options.id - Specifies explicit object id.
         * @param {integer} options.hostId - Specifies host id.
         * @param {integer} options.deviceId - Specifies device id.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {Object} params - additional query params
         */
  getDevicesHosts(options = {}, params = {}) {
    const url = `/api/v3.0/devices/hosts`;
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
    const id = options.hasOwnProperty("id") ? options["id"] : undefined;
    const hostId = options.hasOwnProperty("hostId")
      ? options["hostId"]
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
    if (id !== undefined) query["Id"] = id;
    if (hostId !== undefined) query["HostId"] = hostId;
    if (deviceId !== undefined) query["DeviceId"] = deviceId;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Assigns device specified by deviceId to the host specified by hostId.
   * @param {integer} deviceId - Device id.
   * @param {integer} hostId - Host id.
   * @param {Object} params - additional query params
   */
  postDevicesByDeviceIdHostByHostId(deviceId, hostId, params = {}) {
    const url = `/api/v3.0/devices/${deviceId}/host/${hostId}`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Unassigns device specified by deviceId to the host specified by hostId.
   * @param {integer} deviceId - Device id.
   * @param {integer} hostId - Host id.
   * @param {Object} params - additional query params
   */
  deleteDevicesByDeviceIdHostByHostId(deviceId, hostId, params = {}) {
    const url = `/api/v3.0/devices/${deviceId}/host/${hostId}`;
    return this.client.request("delete", url, {}, params);
  }
}
