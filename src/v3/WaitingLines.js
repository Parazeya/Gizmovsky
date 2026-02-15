import { GizmoClient } from "../GizmoClient.js";

export class WaitingLines {
  constructor(client) {
    this.client = client;
  }

  /**
         * Gets waiting lines parameters.
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
         * @param {array} options.expand - query
         * @param {Object} params - additional query params
         */
  getWaitingLines(options = {}, params = {}) {
    const url = `/api/v3.0/waitinglines`;
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
   * Gets waiting line parameters.
   * @param {integer} id - Host group id.
   * @param {Object} params - additional query params
   */
  getWaitingLinesHostgroupsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/waitinglines/hostgroups/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Sets waiting line parameters.
   * @param {integer} id - Host group id.
   * @param {boolean} data.enablePriorities - Enables or disables priorities.
   * @param {boolean} data.enableNextInLine - Enables or disables next in line.
   * @param {boolean} data.timeoutRemove - Enables or disables remove on timeout.
   * @param {Object} params - additional query params
   */
  postWaitingLinesHostgroupsById(id, data = {}, params = {}) {
    const url = `/api/v3.0/waitinglines/hostgroups/${id}`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Gets user groups waiting line priorities.
   * @param {Object} params - additional query params
   */
  getWaitingLinesUsergroupsPriorities(options = {}, params = {}) {
    const url = `/api/v3.0/waitinglines/usergroups/priorities`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets user groups waiting line priorities.
   * @param {integer} data.userGroupId - User group id.
   * @param {integer} data.priority - Priority.
   * @param {Object} params - additional query params
   */
  postWaitingLinesUsergroupsPriorities(data = {}, params = {}) {
    const url = `/api/v3.0/waitinglines/usergroups/priorities`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
         * Gets waiting line entries.
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
         * @param {array} options.expand - query
         * @param {integer} options.hostGroupId - Host group id.
         * @param {integer} options.userId - User id.
         * @param {integer} options.state - Entry state.
         * @param {Object} params - additional query params
         */
  getWaitingLinesEntries(options = {}, params = {}) {
    const url = `/api/v3.0/waitinglines/entries`;
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
    const hostGroupId = options.hasOwnProperty("hostGroupId")
      ? options["hostGroupId"]
      : undefined;
    const userId = options.hasOwnProperty("userId")
      ? options["userId"]
      : undefined;
    const state = options.hasOwnProperty("state")
      ? options["state"]
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
    if (hostGroupId !== undefined) query["HostGroupId"] = hostGroupId;
    if (userId !== undefined) query["UserId"] = userId;
    if (state !== undefined) query["State"] = state;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Gets waiting line entry.
   * @param {integer} entryId - Entry id.
   * @param {Object} params - additional query params
   */
  getWaitingLinesEntriesByEntryId(entryId, options = {}, params = {}) {
    const url = `/api/v3.0/waitinglines/entries/${entryId}`;
    return this.client.request("get", url, {}, params);
  }

  /**
         * Gets waiting line entries.
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
         * @param {array} options.expand - query
         * @param {integer} options.hostGroupId - Host group id.
         * @param {Object} params - additional query params
         */
  getWaitingLinesEntriesActive(options = {}, params = {}) {
    const url = `/api/v3.0/waitinglines/entries/active`;
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
    const hostGroupId = options.hasOwnProperty("hostGroupId")
      ? options["hostGroupId"]
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
    if (hostGroupId !== undefined) query["HostGroupId"] = hostGroupId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Gets active waiting line entry.
   * @param {integer} entryId - Entry id.
   * @param {Object} params - additional query params
   */
  getWaitingLinesEntriesByEntryIdActive(entryId, options = {}, params = {}) {
    const url = `/api/v3.0/waitinglines/entries/${entryId}/active`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Moves waiting line entry.
   * @param {integer} entryId - Entry id.
   * @param {integer} data.moveType - Move type.
   * @param {integer} data.position - Custom position.
   * @param {Object} params - additional query params
   */
  postWaitingLinesEntriesByEntryIdMove(entryId, data = {}, params = {}) {
    const url = `/api/v3.0/waitinglines/entries/${entryId}/move`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Adds user to waiting line.
   * @param {integer} userId - User id.
   * @param {integer} hostGroupId - Waiting line host group id.
   * @param {Object} params - additional query params
   */
  postWaitingLinesUsersByUserIdHostgroupsByHostGroupId(
    userId,
    hostGroupId,
    params = {},
  ) {
    const url = `/api/v3.0/waitinglines/users/${userId}/hostgroups/${hostGroupId}`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Removes user from waiting line.
   * @param {integer} userId - User id.
   * @param {integer} hostGroupId - Waiting line host group id.
   * @param {Object} params - additional query params
   */
  deleteWaitingLinesUsersByUserIdHostgroupsByHostGroupId(
    userId,
    hostGroupId,
    params = {},
  ) {
    const url = `/api/v3.0/waitinglines/users/${userId}/hostgroups/${hostGroupId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Adds user to all waiting lines.
   * @param {integer} userId - User id.
   * @param {Object} params - additional query params
   */
  postWaitingLinesUsersByUserId(userId, params = {}) {
    const url = `/api/v3.0/waitinglines/users/${userId}`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Removes user from all waiting lines.
   * @param {integer} userId - User id.
   * @param {Object} params - additional query params
   */
  deleteWaitingLinesUsersByUserId(userId, params = {}) {
    const url = `/api/v3.0/waitinglines/users/${userId}`;
    return this.client.request("delete", url, {}, params);
  }
}
