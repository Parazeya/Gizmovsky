import { GizmoClient } from "../GizmoClient.js";

export class AssistanceRequest {
  constructor(client) {
    this.client = client;
  }

  /**
   * Gets if any assistance requests are pending for current user.
   * @param {Object} params - additional query params
   */
  getAssistanceRequestApiUserV20AssistancerequestPendingAny(
    options = {},
    params = {}
  ) {
    const url = `/api/user/v2.0/assistancerequest/pending/any`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Creates assistance request for current user.
   * @param {integer} data.assistanceRequestTypeId -
   * @param {string} data.note -
   * @param {Object} params - additional query params
   */
  postAssistanceRequestApiUserV20Assistancerequest(data = {}, params = {}) {
    const url = `/api/user/v2.0/assistancerequest`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Cancels pending assistance request for current user.
   * @param {Object} params - additional query params
   */
  deleteAssistanceRequestApiUserV20Assistancerequest(params = {}) {
    const url = `/api/user/v2.0/assistancerequest`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Gets assistance requests.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {array} options.expand - query
   * @param {integer} options.userId - query
   * @param {any} options.status - query
   * @param {Object} params - additional query params
   */
  getAssistanceRequest(options = {}, params = {}) {
    const url = `/api/v2.0/assistancerequest`;
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
   * @param {integer} data.assistanceRequestTypeId -
   * @param {integer} data.userId -
   * @param {integer} data.hostId -
   * @param {string} data.note -
   * @param {Object} params - additional query params
   */
  postAssistanceRequest(data = {}, params = {}) {
    const url = `/api/v2.0/assistancerequest`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Gets assistance request.
   * @param {integer} id - Assistance request id.
   * @param {Object} params - additional query params
   */
  getAssistanceRequestById(id, options = {}, params = {}) {
    const url = `/api/v2.0/assistancerequest/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Rejects assistance request.
   * @param {integer} id - Request id.
   * @param {Object} params - additional query params
   */
  putAssistanceRequestByIdReject(id, params = {}) {
    const url = `/api/v2.0/assistancerequest/${id}/reject`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Accepts assistance request.
   * @param {integer} id - Request id.
   * @param {Object} params - additional query params
   */
  putAssistanceRequestByIdAccept(id, params = {}) {
    const url = `/api/v2.0/assistancerequest/${id}/accept`;
    return this.client.request("put", url, {}, params);
  }
}
