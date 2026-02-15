import { GizmoClient } from "../GizmoClient.js";

export class ApplicationGroups {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all application groups.
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
         * @param {string} options.groupName - Return groups with names that contain the specified string.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {Object} params - additional query params
         */
  getApplicationGroups(options = {}, params = {}) {
    const url = `/api/v3.0/applicationgroups`;
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
   * @param {string} data.name - The name of the application group.
   * @param {Object} params - additional query params
   */
  postApplicationGroups(data = {}, params = {}) {
    const url = `/api/v3.0/applicationgroups`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update an application group.
   * @param {integer} data.id - The Id of the object.
   * @param {string} data.name - The name of the application group.
   * @param {Object} params - additional query params
   */
  putApplicationGroups(data = {}, params = {}) {
    const url = `/api/v3.0/applicationgroups`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get an application group by id.
   * @param {integer} id - Application group id.
   * @param {Object} params - additional query params
   */
  getApplicationGroupsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/applicationgroups/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete an application group.
   * @param {integer} id - Application group id.
   * @param {Object} params - additional query params
   */
  deleteApplicationGroupsById(id, params = {}) {
    const url = `/api/v3.0/applicationgroups/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get the applications of the specified application group.
   * @param {integer} id - Application group id.
   * @param {Object} params - additional query params
   */
  getApplicationGroupsByIdApplications(id, options = {}, params = {}) {
    const url = `/api/v3.0/applicationgroups/${id}/applications`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Add an application to the specified application group.
   * @param {integer} id - Application group id.
   * @param {integer} data.applicationId - The Id of the application associated with this application group.
   * @param {Object} params - additional query params
   */
  postApplicationGroupsByIdApplications(id, data = {}, params = {}) {
    const url = `/api/v3.0/applicationgroups/${id}/applications`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Get the application groups of the specified application.
   * @param {integer} id - Application id.
   * @param {Object} params - additional query params
   */
  getApplicationGroupsApplicationById(id, options = {}, params = {}) {
    const url = `/api/v3.0/applicationgroups/application/${id}`;
    return this.client.request("get", url, {}, params);
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
    params = {},
  ) {
    const url = `/api/v3.0/applicationgroups/${id}/applications/${applicationId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   *
   * @param {string} data.name - The name of the application group.
   * @param {array} data.applications - The list of applications within the application group.
   * @param {Object} params - additional query params
   */
  postApplicationGroupsApplicationsCreate(data = {}, params = {}) {
    const url = `/api/v3.0/applicationgroups/applications/create`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {integer} data.applicationGroupId - The Id of the object.
   * @param {string} data.name - The name of the application group.
   * @param {array} data.applications - The list of applications within the application group.
   * @param {Object} params - additional query params
   */
  putApplicationGroupsApplicationsUpdate(data = {}, params = {}) {
    const url = `/api/v3.0/applicationgroups/applications/update`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {array} data.applicationGroups - The list of application groups the application belongs to.
   * @param {Object} params - additional query params
   */
  putApplicationGroupsApplicationByIdUpdate(id, data = {}, params = {}) {
    const url = `/api/v3.0/applicationgroups/application/${id}/update`;
    const body = data;
    return this.client.request("put", url, body, params);
  }
}
