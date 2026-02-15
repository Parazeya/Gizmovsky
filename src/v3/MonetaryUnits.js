import { GizmoClient } from "../GizmoClient.js";

export class MonetaryUnits {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all monetary units.
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
         * @param {boolean} options.isDeleted - Return deleted monetary units.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {Object} params - additional query params
         */
  getMonetaryUnits(options = {}, params = {}) {
    const url = `/api/v3.0/monetaryunits`;
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
    const isDeleted = options.hasOwnProperty("isDeleted")
      ? options["isDeleted"]
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
    if (isDeleted !== undefined) query["IsDeleted"] = isDeleted;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create a monetary unit.
   * @param {string} data.name - The name of the monetary unit.
   * @param {number} data.value - The value of the monetary unit.
   * @param {integer} data.displayOrder - The display order of the monetary unit.
   * @param {boolean} data.isDeleted - Whether the monetary unit is deleted.
   * @param {Object} params - additional query params
   */
  postMonetaryUnits(data = {}, params = {}) {
    const url = `/api/v3.0/monetaryunits`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a monetary unit.
   * @param {integer} data.id - The Id of the object.
   * @param {string} data.name - The name of the monetary unit.
   * @param {number} data.value - The value of the monetary unit.
   * @param {integer} data.displayOrder - The display order of the monetary unit.
   * @param {boolean} data.isDeleted - Whether the monetary unit is deleted.
   * @param {Object} params - additional query params
   */
  putMonetaryUnits(data = {}, params = {}) {
    const url = `/api/v3.0/monetaryunits`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a monetary unit by id.
   * @param {integer} id - Monetary unit id.
   * @param {Object} params - additional query params
   */
  getMonetaryUnitsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/monetaryunits/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete a monetary unit.
   * @param {integer} id - Monetary unit id.
   * @param {Object} params - additional query params
   */
  deleteMonetaryUnitsById(id, params = {}) {
    const url = `/api/v3.0/monetaryunits/${id}`;
    return this.client.request("delete", url, {}, params);
  }
}
