import { GizmoClient } from "../GizmoClient.js";

export class ShiftCount {
  constructor(client) {
    this.client = client;
  }

  /**
   * Gets shift counts.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {array} options.expand - query
   * @param {integer} options.shiftId - query
   * @param {Object} params - additional query params
   */
  getShiftCount(options = {}, params = {}) {
    const url = `/api/v2.0/shiftcount`;
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
    const shiftId = options.hasOwnProperty("shiftId")
      ? options["shiftId"]
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
    if (shiftId !== undefined) query["ShiftId"] = shiftId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Gets shift count.
   * @param {integer} id - Shift count id.
   * @param {Object} params - additional query params
   */
  getShiftCountById(id, options = {}, params = {}) {
    const url = `/api/v2.0/shiftcount/${id}`;
    return this.client.request("get", url, {}, params);
  }
}
