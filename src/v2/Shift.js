import { GizmoClient } from "../GizmoClient.js";

export class Shift {
  constructor(client) {
    this.client = client;
  }

  /**
   * Returns shifts.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {array} options.expand - query
   * @param {boolean} options.isActive - query
   * @param {integer} options.operatorId - query
   * @param {integer} options.registerId - query
   * @param {Object} params - additional query params
   */
  getShift(options = {}, params = {}) {
    const url = `/api/v2.0/shift`;
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
    const expand = options.hasOwnProperty("expand")
      ? options["expand"]
      : undefined;
    const isActive = options.hasOwnProperty("isActive")
      ? options["isActive"]
      : undefined;
    const operatorId = options.hasOwnProperty("operatorId")
      ? options["operatorId"]
      : undefined;
    const registerId = options.hasOwnProperty("registerId")
      ? options["registerId"]
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
    if (expand !== undefined) query["Expand"] = expand;
    if (isActive !== undefined) query["IsActive"] = isActive;
    if (operatorId !== undefined) query["OperatorId"] = operatorId;
    if (registerId !== undefined) query["RegisterId"] = registerId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Returns shifts.
   * @param {integer} id - Shift id
   * @param {Object} params - additional query params
   */
  getShiftById(id, options = {}, params = {}) {
    const url = `/api/v2.0/shift/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Ends shift.
   * @param {integer} id - Shift id.
   * @param {array} data.counts -
   * @param {Object} params - additional query params
   */
  putShiftByIdEnd(id, data = {}, params = {}) {
    const url = `/api/v2.0/shift/${id}/end`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Locks shift.
   * @param {integer} id - Shift id.
   * @param {Object} params - additional query params
   */
  putShiftByIdLock(id, params = {}) {
    const url = `/api/v2.0/shift/${id}/lock`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Unlocks shift.
   * @param {integer} id - Shift id.
   * @param {Object} params - additional query params
   */
  putShiftByIdUnlock(id, params = {}) {
    const url = `/api/v2.0/shift/${id}/unlock`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Returns shift expected values.
   * @param {integer} id - Shift id.
   * @param {Object} params - additional query params
   */
  getShiftByIdExpected(id, options = {}, params = {}) {
    const url = `/api/v2.0/shift/${id}/expected`;
    return this.client.request("get", url, {}, params);
  }
}
