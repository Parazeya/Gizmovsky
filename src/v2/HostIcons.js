import { GizmoClient } from "../GizmoClient.js";

export class HostIcons {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all host icons.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getHostIcons(options = {}, params = {}) {
    const url = `/api/v2.0/hosticons`;
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
   * Create a host icon.
   * @param {string} data.image -
   * @param {Object} params - additional query params
   */
  postHostIcons(data = {}, params = {}) {
    const url = `/api/v2.0/hosticons`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a host icon.
   * @param {integer} data.id -
   * @param {string} data.image -
   * @param {Object} params - additional query params
   */
  putHostIcons(data = {}, params = {}) {
    const url = `/api/v2.0/hosticons`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a host icon by id.
   * @param {integer} id - HostIcon id.
   * @param {Object} params - additional query params
   */
  getHostIconsById(id, options = {}, params = {}) {
    const url = `/api/v2.0/hosticons/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete a host icon.
   * @param {integer} id - Host icon id.
   * @param {Object} params - additional query params
   */
  deleteHostIconsById(id, params = {}) {
    const url = `/api/v2.0/hosticons/${id}`;
    return this.client.request("delete", url, {}, params);
  }
}
