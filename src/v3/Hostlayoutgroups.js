import { GizmoClient } from "../GizmoClient.js";

export class HostLayoutGroups {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all host layout groups.
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
         * @param {string} options.layoutGroupName - Return layout groups with names that contain the specified string.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {integer} options.branchId - query
         * @param {Object} params - additional query params
         */
  getHostLayoutGroups(options = {}, params = {}) {
    const url = `/api/v3.0/hostlayoutgroups`;
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
    const branchId = options.hasOwnProperty("branchId")
      ? options["branchId"]
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
    if (branchId !== undefined) query["BranchId"] = branchId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create a host layout group.
   * @param {string} data.name -
   * @param {integer} data.displayOrder -
   * @param {integer} data.branchId -
   * @param {Object} params - additional query params
   */
  postHostLayoutGroups(data = {}, params = {}) {
    const url = `/api/v3.0/hostlayoutgroups`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a host layout group.
   * @param {integer} data.id -
   * @param {string} data.name -
   * @param {integer} data.displayOrder -
   * @param {integer} data.branchId -
   * @param {Object} params - additional query params
   */
  putHostLayoutGroups(data = {}, params = {}) {
    const url = `/api/v3.0/hostlayoutgroups`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a host layout group by id.
   * @param {integer} id - Host layout group id.
   * @param {Object} options - options object with possible query parameters
   * @param {array} options.expand - Include specified objects in the result.
   * @param {Object} params - additional query params
   */
  getHostLayoutGroupsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/hostlayoutgroups/${id}`;
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
    const url = `/api/v3.0/hostlayoutgroups/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Gets layouts in layout group.
   * @param {integer} id - Host layout group id.
   * @param {Object} params - additional query params
   */
  getHostLayoutGroupsByIdLayouts(id, options = {}, params = {}) {
    const url = `/api/v3.0/hostlayoutgroups/${id}/layouts`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets host layout in layout group.
   * @param {integer} id - Host layout group id.
   * @param {integer} hostId - Host id.
   * @param {Object} params - additional query params
   */
  getHostLayoutGroupsByIdHostByHostIdLayout(
    id,
    hostId,
    options = {},
    params = {},
  ) {
    const url = `/api/v3.0/hostlayoutgroups/${id}/host/${hostId}/layout`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Sets host layout parameters in layout group.
   * @param {integer} id - Host layout group id.
   * @param {integer} hostId - Host id.
   * @param {integer} data.height -
   * @param {integer} data.width -
   * @param {integer} data.x -
   * @param {integer} data.y -
   * @param {integer} data.row - Host grid layout row.
   * @param {integer} data.column - Host grid layout column.
   * @param {boolean} data.isHidden -
   * @param {Object} params - additional query params
   */
  postHostLayoutGroupsByIdHostByHostIdLayout(
    id,
    hostId,
    data = {},
    params = {},
  ) {
    const url = `/api/v3.0/hostlayoutgroups/${id}/host/${hostId}/layout`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Deletes host layout form layout group.
   * @param {integer} id - Host layout group id.
   * @param {integer} hostId - Host id.
   * @param {Object} params - additional query params
   */
  deleteHostLayoutGroupsByIdHostByHostIdLayout(id, hostId, params = {}) {
    const url = `/api/v3.0/hostlayoutgroups/${id}/host/${hostId}/layout`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Sets host layout grid position in layout group.
   * @param {integer} id - Host layout group id.
   * @param {integer} hostId - Host id.
   * @param {integer} data.row - Host grid layout row.
   * @param {integer} data.column - Host grid layout column.
   * @param {Object} params - additional query params
   */
  postHostLayoutGroupsByIdHostByHostIdLayoutGridPosition(
    id,
    hostId,
    data = {},
    params = {},
  ) {
    const url = `/api/v3.0/hostlayoutgroups/${id}/host/${hostId}/layout/grid/position`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Hides host in layout group.
   * @param {integer} id - Host layout group id.
   * @param {integer} hostId - Host id.
   * @param {boolean} hide - Hide option.
   * @param {Object} params - additional query params
   */
  postHostLayoutGroupsByIdHostByHostIdLayoutHideByHide(
    id,
    hostId,
    hide,
    params = {},
  ) {
    const url = `/api/v3.0/hostlayoutgroups/${id}/host/${hostId}/layout/hide/${hide}`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Sets hosts layout grid position in layout group.
   * @param {integer} id - Host layout group id.
   * @param {array} data.hosts -
   * @param {Object} params - additional query params
   */
  putHostLayoutGroupsByIdHostLayoutGridPosition(id, data = {}, params = {}) {
    const url = `/api/v3.0/hostlayoutgroups/${id}/host/layout/grid/position`;
    const body = data;
    return this.client.request("put", url, body, params);
  }
}
