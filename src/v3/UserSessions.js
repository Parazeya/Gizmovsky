import { GizmoClient } from "../GizmoClient.js";

export class UserSessions {
  constructor(client) {
    this.client = client;
  }

  /**
         * Gets user sessions.
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
         * @param {string} options.dateFrom - query
         * @param {string} options.dateTo - query
         * @param {array} options.expand - query
         * @param {integer} options.userId - Specific user id filter.
         * @param {integer} options.hostId - Specific host id filter.
         * @param {integer} options.state - Specific session state.
         * @param {Object} params - additional query params
         */
  getUserSessions(options = {}, params = {}) {
    const url = `/api/v3.0/usersessions`;
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
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const expand = options.hasOwnProperty("expand")
      ? options["expand"]
      : undefined;
    const userId = options.hasOwnProperty("userId")
      ? options["userId"]
      : undefined;
    const hostId = options.hasOwnProperty("hostId")
      ? options["hostId"]
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
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (expand !== undefined) query["Expand"] = expand;
    if (userId !== undefined) query["UserId"] = userId;
    if (hostId !== undefined) query["HostId"] = hostId;
    if (state !== undefined) query["State"] = state;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Gets user sessions.
   * @param {integer} id - User session id.
   * @param {Object} params - additional query params
   */
  getUserSessionsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/usersessions/${id}`;
    return this.client.request("get", url, {}, params);
  }
}
