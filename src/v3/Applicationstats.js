import { GizmoClient } from "../GizmoClient.js";

export class ApplicationStats {
  constructor(client) {
    this.client = client;
  }

  /**
         * Gets application stats.
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
         * @param {integer} options.appId - Optional application id.
         * @param {integer} options.appExeId - Optional application executable id.
         * @param {integer} options.hostId - Optional host id.
         * @param {integer} options.userId - Optional user id.
         * @param {integer} options.branchId - Optional branch id.
         * @param {Object} params - additional query params
         */
  getApplicationStats(options = {}, params = {}) {
    const url = `/api/v3.0/applicationstats`;
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
    const appId = options.hasOwnProperty("appId")
      ? options["appId"]
      : undefined;
    const appExeId = options.hasOwnProperty("appExeId")
      ? options["appExeId"]
      : undefined;
    const hostId = options.hasOwnProperty("hostId")
      ? options["hostId"]
      : undefined;
    const userId = options.hasOwnProperty("userId")
      ? options["userId"]
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
    if (expand !== undefined) query["Expand"] = expand;
    if (appId !== undefined) query["AppId"] = appId;
    if (appExeId !== undefined) query["AppExeId"] = appExeId;
    if (hostId !== undefined) query["HostId"] = hostId;
    if (userId !== undefined) query["UserId"] = userId;
    if (branchId !== undefined) query["BranchId"] = branchId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Creates application stat.
   * @param {integer} appExeId - Application executable id.
   * @param {integer} data.userId - User id.
   * @param {integer} data.hostId - Host id.
   * @param {string} data.startTime - Start time.
   * @param {number} data.span - Span.
   * @param {Object} params - additional query params
   */
  postApplicationStatsAppexeByAppExeId(appExeId, data = {}, params = {}) {
    const url = `/api/v3.0/applicationstats/appexe/${appExeId}`;
    const body = data;
    return this.client.request("post", url, body, params);
  }
}
