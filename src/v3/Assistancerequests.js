import { GizmoClient } from "../GizmoClient.js";

export class AssistanceRequests {
  constructor(client) {
    this.client = client;
  }

  /**
   * Gets if any assistance requests are pending for current user.
   * @param {Object} params - additional query params
   */
  getAssistanceRequestsApiUserV30AssistancerequestsPendingAny(
    options = {},
    params = {},
  ) {
    const url = `/api/user/v3.0/assistancerequests/pending/any`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Creates assistance request for current user.
   * @param {integer} data.assistanceRequestTypeId - Assistance request type id.
   * @param {string} data.note - Note.
   * @param {Object} params - additional query params
   */
  postAssistanceRequestsApiUserV30Assistancerequests(data = {}, params = {}) {
    const url = `/api/user/v3.0/assistancerequests`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Cancels pending assistance request for current user.
   * @param {Object} params - additional query params
   */
  deleteAssistanceRequestsApiUserV30Assistancerequests(params = {}) {
    const url = `/api/user/v3.0/assistancerequests`;
    return this.client.request("delete", url, {}, params);
  }

  /**
         * Gets assistance requests.
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
         * @param {integer} options.userId - User id.
         * @param {integer} options.status - Status.
         * @param {Object} params - additional query params
         */
  getAssistanceRequests(options = {}, params = {}) {
    const url = `/api/v3.0/assistancerequests`;
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
    const userId = options.hasOwnProperty("userId")
      ? options["userId"]
      : undefined;
    const status = options.hasOwnProperty("status")
      ? options["status"]
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
    if (userId !== undefined) query["UserId"] = userId;
    if (status !== undefined) query["Status"] = status;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create assistance request.
   * @param {integer} data.assistanceRequestTypeId - Request type id.
   * @param {integer} data.userId - User id.
   * @param {integer} data.hostId - Host id.
   * @param {string} data.note - Note.
   * @param {Object} params - additional query params
   */
  postAssistanceRequests(data = {}, params = {}) {
    const url = `/api/v3.0/assistancerequests`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Gets assistance request.
   * @param {integer} id - Assistance request id.
   * @param {Object} params - additional query params
   */
  getAssistanceRequestsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/assistancerequests/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Rejects assistance request.
   * @param {integer} id - Request id.
   * @param {Object} params - additional query params
   */
  putAssistanceRequestsByIdReject(id, params = {}) {
    const url = `/api/v3.0/assistancerequests/${id}/reject`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Accepts assistance request.
   * @param {integer} id - Request id.
   * @param {Object} params - additional query params
   */
  putAssistanceRequestsByIdAccept(id, params = {}) {
    const url = `/api/v3.0/assistancerequests/${id}/accept`;
    return this.client.request("put", url, {}, params);
  }
}
