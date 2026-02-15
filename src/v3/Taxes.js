import { GizmoClient } from "../GizmoClient.js";

export class Taxes {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all taxes.
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
         * @param {Object} params - additional query params
         */
  getTaxes(options = {}, params = {}) {
    const url = `/api/v3.0/taxes`;
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
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create a tax.
   * @param {string} data.name - The name of the tax.
   * @param {number} data.value - The value of the tax.
   * @param {integer} data.useOrder - The use order of the tax.
   * @param {Object} params - additional query params
   */
  postTaxes(data = {}, params = {}) {
    const url = `/api/v3.0/taxes`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a tax.
   * @param {integer} data.id - The Id of the object.
   * @param {string} data.name - The name of the tax.
   * @param {number} data.value - The value of the tax.
   * @param {integer} data.useOrder - The use order of the tax.
   * @param {Object} params - additional query params
   */
  putTaxes(data = {}, params = {}) {
    const url = `/api/v3.0/taxes`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a tax by id.
   * @param {integer} id - Tax id.
   * @param {Object} params - additional query params
   */
  getTaxesById(id, options = {}, params = {}) {
    const url = `/api/v3.0/taxes/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete a tax.
   * @param {integer} id - Tax id.
   * @param {Object} params - additional query params
   */
  deleteTaxesById(id, params = {}) {
    const url = `/api/v3.0/taxes/${id}`;
    return this.client.request("delete", url, {}, params);
  }
}
