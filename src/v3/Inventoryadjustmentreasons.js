import { GizmoClient } from "../GizmoClient.js";

export class InventoryAdjustmentReasons {
  constructor(client) {
    this.client = client;
  }

  /**
         * Gets filtered entries.
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
         * @param {boolean} options.isDeleted - Is deleted.
         * @param {Object} params - additional query params
         */
  getInventoryAdjustmentReasons(options = {}, params = {}) {
    const url = `/api/v3.0/inventoryadjustmentreasons`;
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
    const isDeleted = options.hasOwnProperty("isDeleted")
      ? options["isDeleted"]
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
    if (isDeleted !== undefined) query["IsDeleted"] = isDeleted;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Creates entry.
   * @param {string} data.name - Name.
   * @param {string} data.description - Description.
   * @param {Object} params - additional query params
   */
  postInventoryAdjustmentReasons(data = {}, params = {}) {
    const url = `/api/v3.0/inventoryadjustmentreasons`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Updates entry.
   * @param {integer} data.id -
   * @param {string} data.name - Name.
   * @param {string} data.description - Description.
   * @param {Object} params - additional query params
   */
  putInventoryAdjustmentReasons(data = {}, params = {}) {
    const url = `/api/v3.0/inventoryadjustmentreasons`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Gets entry by id.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  getInventoryAdjustmentReasonsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/inventoryadjustmentreasons/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Deletes entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  deleteInventoryAdjustmentReasonsById(id, params = {}) {
    const url = `/api/v3.0/inventoryadjustmentreasons/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Undeletes entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  putInventoryAdjustmentReasonsByIdUndelete(id, params = {}) {
    const url = `/api/v3.0/inventoryadjustmentreasons/${id}/undelete`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Checks if entry with specified name exists.
   * @param {string} name - Name.
   * @param {Object} params - additional query params
   */
  getInventoryAdjustmentReasonsNameByNameExists(
    name,
    options = {},
    params = {},
  ) {
    const url = `/api/v3.0/inventoryadjustmentreasons/name/${name}/exists`;
    return this.client.request("get", url, {}, params);
  }
}
