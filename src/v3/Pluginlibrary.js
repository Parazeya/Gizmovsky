import { GizmoClient } from "../GizmoClient.js";

export class PluginLibrary {
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
         * @param {array} options.expand - <inheritdoc />
         * @param {boolean} options.isEnabled - Is enabled.
         * @param {Object} params - additional query params
         */
  getPluginLibrary(options = {}, params = {}) {
    const url = `/api/v3.0/pluginlibrary`;
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
    const isEnabled = options.hasOwnProperty("isEnabled")
      ? options["isEnabled"]
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
    if (isEnabled !== undefined) query["IsEnabled"] = isEnabled;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Updates entry.
   * @param {integer} data.id -
   * @param {boolean} data.isEnabled -
   * @param {boolean} data.availableInServer -
   * @param {boolean} data.availableInClient -
   * @param {boolean} data.availableInManager -
   * @param {Object} params - additional query params
   */
  putPluginLibrary(data = {}, params = {}) {
    const url = `/api/v3.0/pluginlibrary`;
    const body = data;
    return this.client.request("put", url, body, params);
  }
}
