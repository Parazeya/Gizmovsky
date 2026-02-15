import { GizmoClient } from "../GizmoClient.js";

export class SalePresets {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all time sale presets.
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
  getSalePresetsTime(options = {}, params = {}) {
    const url = `/api/v3.0/salepresets/time`;
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
   * Create a time sale preset.
   * @param {integer} data.value - The value of the time sale preset.
   * @param {integer} data.displayOrder - The display order of the time sale preset.
   * @param {Object} params - additional query params
   */
  postSalePresetsTime(data = {}, params = {}) {
    const url = `/api/v3.0/salepresets/time`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a time sale preset.
   * @param {integer} data.id - The Id of the object.
   * @param {integer} data.value - The value of the time sale preset.
   * @param {integer} data.displayOrder - The display order of the time sale preset.
   * @param {Object} params - additional query params
   */
  putSalePresetsTime(data = {}, params = {}) {
    const url = `/api/v3.0/salepresets/time`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a time sale preset by id.
   * @param {integer} id - Time sale preset id.
   * @param {Object} params - additional query params
   */
  getSalePresetsTimeById(id, options = {}, params = {}) {
    const url = `/api/v3.0/salepresets/time/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete a time sale preset.
   * @param {integer} id - Time sale preset id.
   * @param {Object} params - additional query params
   */
  deleteSalePresetsTimeById(id, params = {}) {
    const url = `/api/v3.0/salepresets/time/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
         * Get all money sale presets.
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
  getSalePresetsMoney(options = {}, params = {}) {
    const url = `/api/v3.0/salepresets/money`;
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
   * Create a money sale preset.
   * @param {number} data.value - The value of the money sale preset.
   * @param {integer} data.displayOrder - The display order of the money sale preset.
   * @param {Object} params - additional query params
   */
  postSalePresetsMoney(data = {}, params = {}) {
    const url = `/api/v3.0/salepresets/money`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a money sale preset.
   * @param {integer} data.id - The Id of the object.
   * @param {number} data.value - The value of the money sale preset.
   * @param {integer} data.displayOrder - The display order of the money sale preset.
   * @param {Object} params - additional query params
   */
  putSalePresetsMoney(data = {}, params = {}) {
    const url = `/api/v3.0/salepresets/money`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a money sale preset by id.
   * @param {integer} id - Money sale preset id.
   * @param {Object} params - additional query params
   */
  getSalePresetsMoneyById(id, options = {}, params = {}) {
    const url = `/api/v3.0/salepresets/money/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete a money sale preset.
   * @param {integer} id - Money sale preset id.
   * @param {Object} params - additional query params
   */
  deleteSalePresetsMoneyById(id, params = {}) {
    const url = `/api/v3.0/salepresets/money/${id}`;
    return this.client.request("delete", url, {}, params);
  }
}
