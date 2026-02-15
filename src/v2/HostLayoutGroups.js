import { GizmoClient } from "../GizmoClient.js";

export class HostLayoutGroups {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all host layout groups.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {string} options.layoutGroupName - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getHostLayoutGroups(options = {}, params = {}) {
    const url = `/api/v2.0/hostlayoutgroups`;
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
    const layoutGroupName = options.hasOwnProperty("layoutGroupName")
      ? options["layoutGroupName"]
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
    if (layoutGroupName !== undefined)
      query["LayoutGroupName"] = layoutGroupName;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create a host layout group.
   * @param {string} data.name -
   * @param {integer} data.displayOrder -
   * @param {Object} params - additional query params
   */
  postHostLayoutGroups(data = {}, params = {}) {
    const url = `/api/v2.0/hostlayoutgroups`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a host layout group.
   * @param {integer} data.id -
   * @param {string} data.name -
   * @param {integer} data.displayOrder -
   * @param {Object} params - additional query params
   */
  putHostLayoutGroups(data = {}, params = {}) {
    const url = `/api/v2.0/hostlayoutgroups`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a host layout by id.
   * @param {integer} id - Host layout id.
   * @param {Object} options - options object with possible query parameters
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getHostLayoutGroupsById(id, options = {}, params = {}) {
    const url = `/api/v2.0/hostlayoutgroups/${id}`;
    const expand = options.hasOwnProperty("expand")
      ? options["expand"]
      : undefined;
    const query = Object.assign({}, params);
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Delete a host layout group.
   * @param {integer} id - Host layout group id.
   * @param {Object} params - additional query params
   */
  deleteHostLayoutGroupsById(id, params = {}) {
    const url = `/api/v2.0/hostlayoutgroups/${id}`;
    return this.client.request("delete", url, {}, params);
  }
}
