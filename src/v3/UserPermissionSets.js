import { GizmoClient } from "../GizmoClient.js";

export class UserPermissionSets {
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
         * @param {Object} params - additional query params
         */
  getUserPermissionSets(options = {}, params = {}) {
    const url = `/api/v3.0/userpermissionsets`;
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
   * Creates entry.
   * @param {string} data.name - Gets or sets the name.
   * @param {array} data.permissions - Gets or sets the permissions.
   * @param {Object} params - additional query params
   */
  postUserPermissionSets(data = {}, params = {}) {
    const url = `/api/v3.0/userpermissionsets`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update entry.
   * @param {integer} data.id -
   * @param {string} data.name - Gets or sets the name.
   * @param {array} data.permissions - Gets or sets the permissions.
   * @param {Object} params - additional query params
   */
  putUserPermissionSets(data = {}, params = {}) {
    const url = `/api/v3.0/userpermissionsets`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Gets entry by id.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  getUserPermissionSetsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/userpermissionsets/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Deletes entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  deleteUserPermissionSetsById(id, params = {}) {
    const url = `/api/v3.0/userpermissionsets/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Sets entry name.
   * @param {integer} id - Entry id.
   * @param {Object} data - request body (see openapi.paths["/api/v3.0/userpermissionsets/{id}/name"].put.requestBody)
   * @param {Object} params - additional query params
   */
  putUserPermissionSetsByIdName(id, data = {}, params = {}) {
    const url = `/api/v3.0/userpermissionsets/${id}/name`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Checks if entry exists with specified name.
   * @param {string} name - Entry name.
   * @param {Object} params - additional query params
   */
  getUserPermissionSetsNameByNameExist(name, options = {}, params = {}) {
    const url = `/api/v3.0/userpermissionsets/name/${name}/exist`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets entry permissions.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  getUserPermissionSetsByIdPermissions(id, options = {}, params = {}) {
    const url = `/api/v3.0/userpermissionsets/${id}/permissions`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets entry permissions.
   * @param {integer} id - Entry id.
   * @param {string} data.type - Gets or sets the permission type.
   * @param {string} data.value - Gets or sets the permission value.
   * @param {Object} params - additional query params
   */
  putUserPermissionSetsByIdPermissions(id, data = {}, params = {}) {
    const url = `/api/v3.0/userpermissionsets/${id}/permissions`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Gets policies metadata.
   * @param {Object} params - additional query params
   */
  getUserPermissionSetsPolicies(options = {}, params = {}) {
    const url = `/api/v3.0/userpermissionsets/policies`;
    return this.client.request("get", url, {}, params);
  }
}
