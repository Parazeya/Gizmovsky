import { GizmoClient } from "../GizmoClient.js";

export class ApplicationGroups {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all application groups.
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
  getApplicationGroups(options = {}, params = {}) {
    const url = `/api/v2.0/applicationgroups`;
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
   * Create an application group.
   * @param {string} data.name -
   * @param {Object} params - additional query params
   */
  postApplicationGroups(data = {}, params = {}) {
    const url = `/api/v2.0/applicationgroups`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an application group.
   * @param {integer} data.id -
   * @param {string} data.name -
   * @param {Object} params - additional query params
   */
  putApplicationGroups(data = {}, params = {}) {
    const url = `/api/v2.0/applicationgroups`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get an application group by id.
   * @param {integer} id - Application group id.
   * @param {Object} params - additional query params
   */
  getApplicationGroupsById(id, options = {}, params = {}) {
    const url = `/api/v2.0/applicationgroups/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete an application group.
   * @param {integer} id - Application group id.
   * @param {Object} params - additional query params
   */
  deleteApplicationGroupsById(id, params = {}) {
    const url = `/api/v2.0/applicationgroups/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get the applications of the specified application group.
   * @param {integer} id - Application group id.
   * @param {Object} params - additional query params
   */
  getApplicationGroupsByIdApplications(id, options = {}, params = {}) {
    const url = `/api/v2.0/applicationgroups/${id}/applications`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Add an application to the specified application group.
   * @param {integer} id - Application group id.
   * @param {integer} data.applicationId -
   * @param {Object} params - additional query params
   */
  postApplicationGroupsByIdApplications(id, data = {}, params = {}) {
    const url = `/api/v2.0/applicationgroups/${id}/applications`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Remove an application from the specified application group.
   * @param {integer} id - Application group id.
   * @param {integer} applicationId - Application id.
   * @param {Object} params - additional query params
   */
  deleteApplicationGroupsByIdApplicationsByApplicationId(
    id,
    applicationId,
    params = {}
  ) {
    const url = `/api/v2.0/applicationgroups/${id}/applications/${applicationId}`;
    return this.client.request("delete", url, {}, params);
  }
}
