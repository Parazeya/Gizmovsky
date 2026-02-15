import { GizmoClient } from "../GizmoClient.js";

export class HostGroups {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all host groups.
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
         * @param {string} options.groupName - Return host groups with names that contain the specified string.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {integer} options.branchId - query
         * @param {Object} params - additional query params
         */
  getHostGroups(options = {}, params = {}) {
    const url = `/api/v3.0/hostgroups`;
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
    if (groupName !== undefined) query["GroupName"] = groupName;
    if (expand !== undefined) query["Expand"] = expand;
    if (branchId !== undefined) query["BranchId"] = branchId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create a host group.
   * @param {string} data.name - The name of the host group.
   * @param {string} data.skinName - The name of the skin this host group uses by default.
   * @param {integer} data.applicationGroupId - The Id of the application profile this host group is associated with.
   * @param {integer} data.securityProfileId - The Id of the security profile this host group is associated with.
   * @param {integer} data.defaultGuestGroupId - The Id of the guest group this host group uses by default.
   * @param {integer} data.branchId - <inheritdoc />
   * @param {integer} data.billProfileId - <inheritdoc />
   * @param {integer} data.clientOptionsId - Client options id.
   * @param {Object} params - additional query params
   */
  postHostGroups(data = {}, params = {}) {
    const url = `/api/v3.0/hostgroups`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a host group.
   * @param {integer} data.id - The Id of the object.
   * @param {string} data.name - The name of the host group.
   * @param {string} data.skinName - The name of the skin this host group uses by default.
   * @param {integer} data.applicationGroupId - The Id of the application profile this host group is associated with.
   * @param {integer} data.securityProfileId - The Id of the security profile this host group is associated with.
   * @param {integer} data.defaultGuestGroupId - The Id of the guest group this host group uses by default.
   * @param {integer} data.branchId - <inheritdoc />
   * @param {integer} data.billProfileId - <inheritdoc />
   * @param {integer} data.clientOptionsId - Client options id.
   * @param {Object} params - additional query params
   */
  putHostGroups(data = {}, params = {}) {
    const url = `/api/v3.0/hostgroups`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a host group by id.
   * @param {integer} id - Host group id.
   * @param {Object} params - additional query params
   */
  getHostGroupsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/hostgroups/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete a host group.
   * @param {integer} id - Host group id.
   * @param {Object} params - additional query params
   */
  deleteHostGroupsById(id, params = {}) {
    const url = `/api/v3.0/hostgroups/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Assign the specified billing profile to the specified host group.
   * @param {integer} id - Host group id.
   * @param {integer} billingProfileId - The billing profile id to assign to the specified host group.
   * @param {Object} params - additional query params
   */
  putHostGroupsByIdBillingprofileByBillingProfileId(
    id,
    billingProfileId,
    params = {},
  ) {
    const url = `/api/v3.0/hostgroups/${id}/billingprofile/${billingProfileId}`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Remove the billing profile from the specified host group.
   * @param {integer} id - Host group id.
   * @param {Object} params - additional query params
   */
  deleteHostGroupsByIdBillingprofile(id, params = {}) {
    const url = `/api/v3.0/hostgroups/${id}/billingprofile`;
    return this.client.request("delete", url, {}, params);
  }
}
