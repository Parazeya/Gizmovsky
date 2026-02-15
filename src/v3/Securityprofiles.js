import { GizmoClient } from "../GizmoClient.js";

export class SecurityProfiles {
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
         * @param {string} options.name - Return security profiles with names that contain the specified string.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {Object} params - additional query params
         */
  getSecurityProfiles(options = {}, params = {}) {
    const url = `/api/v3.0/securityprofiles`;
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
    const name = options.hasOwnProperty("name") ? options["name"] : undefined;
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
    if (name !== undefined) query["Name"] = name;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Creates entry.
   * @param {string} data.name - Name.
   * @param {integer} data.disabledDrives - Disabled drives.
   * @param {array} data.restrictions - Restrictions.
   * @param {array} data.policies - Policies.
   * @param {boolean} data.disableStart - Disable start.
   * @param {boolean} data.disableDesktopSwitching - Disable desktop switching.
   * @param {boolean} data.stickyShell - Sticky shell.
   * @param {Object} params - additional query params
   */
  postSecurityProfiles(data = {}, params = {}) {
    const url = `/api/v3.0/securityprofiles`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Updates entry.
   * @param {integer} data.id -
   * @param {string} data.name - Name.
   * @param {integer} data.disabledDrives - Disabled drives.
   * @param {array} data.restrictions - Restrictions.
   * @param {array} data.policies - Policies.
   * @param {boolean} data.disableStart - Disable start.
   * @param {boolean} data.disableDesktopSwitching - Disable desktop switching.
   * @param {boolean} data.stickyShell - Sticky shell.
   * @param {Object} params - additional query params
   */
  putSecurityProfiles(data = {}, params = {}) {
    const url = `/api/v3.0/securityprofiles`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Gets entry by id.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  getSecurityProfilesById(id, options = {}, params = {}) {
    const url = `/api/v3.0/securityprofiles/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Deletes entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  deleteSecurityProfilesById(id, params = {}) {
    const url = `/api/v3.0/securityprofiles/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Gets security profile restrictions.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  getSecurityProfilesByIdRestrictions(id, options = {}, params = {}) {
    const url = `/api/v3.0/securityprofiles/${id}/restrictions`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets security profile policies.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  getSecurityProfilesByIdPolicies(id, options = {}, params = {}) {
    const url = `/api/v3.0/securityprofiles/${id}/policies`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets supported group policies metadata.
   * @param {Object} params - additional query params
   */
  getSecurityProfilesPoliciesMetadata(options = {}, params = {}) {
    const url = `/api/v3.0/securityprofiles/policies/metadata`;
    return this.client.request("get", url, {}, params);
  }
}
