import { GizmoClient } from "../GizmoClient.js";

export class HostGroups {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all host groups.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {string} options.groupName - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getHostGroups(options = {}, params = {}) {
    const url = `/api/v2.0/hostgroups`;
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
    const groupName = options.hasOwnProperty("groupName")
      ? options["groupName"]
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
    if (groupName !== undefined) query["GroupName"] = groupName;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create a host group.
   * @param {string} data.name -
   * @param {string} data.skinName -
   * @param {integer} data.applicationGroupId -
   * @param {integer} data.securityProfileId -
   * @param {integer} data.defaultGuestGroupId -
   * @param {Object} params - additional query params
   */
  postHostGroups(data = {}, params = {}) {
    const url = `/api/v2.0/hostgroups`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a host group.
   * @param {integer} data.id -
   * @param {string} data.name -
   * @param {string} data.skinName -
   * @param {integer} data.applicationGroupId -
   * @param {integer} data.securityProfileId -
   * @param {integer} data.defaultGuestGroupId -
   * @param {Object} params - additional query params
   */
  putHostGroups(data = {}, params = {}) {
    const url = `/api/v2.0/hostgroups`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a host group by id.
   * @param {integer} id - Host group id.
   * @param {Object} params - additional query params
   */
  getHostGroupsById(id, options = {}, params = {}) {
    const url = `/api/v2.0/hostgroups/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete a host group.
   * @param {integer} id - Host group id.
   * @param {Object} params - additional query params
   */
  deleteHostGroupsById(id, params = {}) {
    const url = `/api/v2.0/hostgroups/${id}`;
    return this.client.request("delete", url, {}, params);
  }
}
