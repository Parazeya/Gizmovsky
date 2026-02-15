import { GizmoClient } from "../GizmoClient.js";

export class ApplicationEnterprises {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all application enterprises.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getApplicationEnterprises(options = {}, params = {}) {
    const url = `/api/v2.0/applicationenterprises`;
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
   * Create an application enterprise.
   * @param {string} data.name -
   * @param {Object} params - additional query params
   */
  postApplicationEnterprises(data = {}, params = {}) {
    const url = `/api/v2.0/applicationenterprises`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an application enterprise.
   * @param {integer} data.id -
   * @param {string} data.name -
   * @param {Object} params - additional query params
   */
  putApplicationEnterprises(data = {}, params = {}) {
    const url = `/api/v2.0/applicationenterprises`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get an application enterprise by id.
   * @param {integer} id - Application enterprise id.
   * @param {Object} params - additional query params
   */
  getApplicationEnterprisesById(id, options = {}, params = {}) {
    const url = `/api/v2.0/applicationenterprises/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete an application enterprise.
   * @param {integer} id - Application enterprise id.
   * @param {Object} params - additional query params
   */
  deleteApplicationEnterprisesById(id, params = {}) {
    const url = `/api/v2.0/applicationenterprises/${id}`;
    return this.client.request("delete", url, {}, params);
  }
}
