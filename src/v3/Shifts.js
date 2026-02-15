import { GizmoClient } from "../GizmoClient.js";

export class Shifts {
  constructor(client) {
    this.client = client;
  }

  /**
         * Returns shifts.
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
         * @param {array} options.expand - <inheritdoc />
         * @param {boolean} options.isActive - Active shift.
         * @param {integer} options.operatorId - Operator id.
         * @param {integer} options.registerId - Register id.
         * @param {integer} options.branchId - query
         * @param {Object} params - additional query params
         */
  getShifts(options = {}, params = {}) {
    const url = `/api/v3.0/shifts`;
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
    if (expand !== undefined) query["Expand"] = expand;
    if (isActive !== undefined) query["IsActive"] = isActive;
    if (operatorId !== undefined) query["OperatorId"] = operatorId;
    if (registerId !== undefined) query["RegisterId"] = registerId;
    if (branchId !== undefined) query["BranchId"] = branchId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Returns shifts.
   * @param {integer} id - Shift id
   * @param {Object} params - additional query params
   */
  getShiftsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/shifts/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Ends shift.
   * @param {integer} id - Shift id.
   * @param {array} data.counts - <inheritdoc />
   * @param {Object} params - additional query params
   */
  putShiftsByIdEnd(id, data = {}, params = {}) {
    const url = `/api/v3.0/shifts/${id}/end`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Locks shift.
   * @param {integer} id - Shift id.
   * @param {Object} params - additional query params
   */
  putShiftsByIdLock(id, params = {}) {
    const url = `/api/v3.0/shifts/${id}/lock`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Unlocks shift.
   * @param {integer} id - Shift id.
   * @param {Object} params - additional query params
   */
  putShiftsByIdUnlock(id, params = {}) {
    const url = `/api/v3.0/shifts/${id}/unlock`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Returns shift expected values.
   * @param {integer} id - Shift id.
   * @param {Object} params - additional query params
   */
  getShiftsByIdExpected(id, options = {}, params = {}) {
    const url = `/api/v3.0/shifts/${id}/expected`;
    return this.client.request("get", url, {}, params);
  }
}
