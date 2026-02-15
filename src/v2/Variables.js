import { GizmoClient } from "../GizmoClient.js";

export class Variables {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all variables.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getVariables(options = {}, params = {}) {
    const url = `/api/v2.0/variables`;
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
   * Create a variable.
   * @param {string} data.name -
   * @param {string} data.value -
   * @param {boolean} data.availableInServer -
   * @param {boolean} data.availableInClient -
   * @param {boolean} data.availableInManager -
   * @param {Object} params - additional query params
   */
  postVariables(data = {}, params = {}) {
    const url = `/api/v2.0/variables`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a variable.
   * @param {integer} data.id -
   * @param {string} data.name -
   * @param {string} data.value -
   * @param {boolean} data.availableInServer -
   * @param {boolean} data.availableInClient -
   * @param {boolean} data.availableInManager -
   * @param {Object} params - additional query params
   */
  putVariables(data = {}, params = {}) {
    const url = `/api/v2.0/variables`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a variable by id.
   * @param {integer} id - Variable id.
   * @param {Object} params - additional query params
   */
  getVariablesById(id, options = {}, params = {}) {
    const url = `/api/v2.0/variables/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete a variable.
   * @param {integer} id - Variable id.
   * @param {Object} params - additional query params
   */
  deleteVariablesById(id, params = {}) {
    const url = `/api/v2.0/variables/${id}`;
    return this.client.request("delete", url, {}, params);
  }
}
