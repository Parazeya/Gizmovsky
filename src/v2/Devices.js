import { GizmoClient } from "../GizmoClient.js";

export class Devices {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all devices.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {any} options.deviceType - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getDevices(options = {}, params = {}) {
    const url = `/api/v2.0/devices`;
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
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create an device.
   * @param {object} data.deviceType -
   * @param {string} data.name -
   * @param {boolean} data.isEnabled -
   * @param {object} data.hdmiDevice -
   * @param {Object} params - additional query params
   */
  postDevices(data = {}, params = {}) {
    const url = `/api/v2.0/devices`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Updates an device.
   * @param {integer} data.id -
   * @param {string} data.name -
   * @param {boolean} data.isEnabled -
   * @param {object} data.hdmiDevice -
   * @param {Object} params - additional query params
   */
  putDevices(data = {}, params = {}) {
    const url = `/api/v2.0/devices`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Deletes specified device.
   * @param {Object} params - additional query params
   */
  deleteDevices(params = {}) {
    const url = `/api/v2.0/devices`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Enables specified device.
   * @param {integer} id - Device id.
   * @param {Object} params - additional query params
   */
  putDevicesByIdEnable(id, params = {}) {
    const url = `/api/v2.0/devices/${id}/enable`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Disables specified device.
   * @param {integer} id - Device id.
   * @param {Object} params - additional query params
   */
  putDevicesByIdDisable(id, params = {}) {
    const url = `/api/v2.0/devices/${id}/disable`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Gets devices and host associations.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {integer} options.id - query
   * @param {integer} options.hostId - query
   * @param {integer} options.deviceId - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getDevicesHosts(options = {}, params = {}) {
    const url = `/api/v2.0/devices/hosts`;
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
    const url = `/api/v2.0/devices/${deviceId}/host/${hostId}`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Unassigns device specified by deviceId to the host specified by hostId.
   * @param {integer} deviceId - Device id.
   * @param {integer} hostId - Host id.
   * @param {Object} params - additional query params
   */
  deleteDevicesByDeviceIdHostByHostId(deviceId, hostId, params = {}) {
    const url = `/api/v2.0/devices/${deviceId}/host/${hostId}`;
    return this.client.request("delete", url, {}, params);
  }
}
