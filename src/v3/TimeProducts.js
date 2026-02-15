import { GizmoClient } from "../GizmoClient.js";

export class TimeProducts {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all time products.
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
         * @param {array} options.expand - Include specified objects in the result.
         * @param {integer} options.userId - Return time products of the specified user.
         * @param {integer} options.status - Return time products of the specified status.
         * @param {Object} params - additional query params
         */
  getTimeProducts(options = {}, params = {}) {
    const url = `/api/v3.0/timeproducts`;
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
    const userId = options.hasOwnProperty("userId")
      ? options["userId"]
      : undefined;
    const status = options.hasOwnProperty("status")
      ? options["status"]
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
    if (userId !== undefined) query["UserId"] = userId;
    if (status !== undefined) query["Status"] = status;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Deletes time product purchase.
   * @param {integer} id - Id.
   * @param {Object} params - additional query params
   */
  deleteTimeProductsById(id, params = {}) {
    const url = `/api/v3.0/timeproducts/${id}`;
    return this.client.request("delete", url, {}, params);
  }
}
