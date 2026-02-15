import { GizmoClient } from "../GizmoClient.js";

export class AssistanceRequestType {
  constructor(client) {
    this.client = client;
  }

  /**
   * Assistance request types.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {array} options.expand - query
   * @param {boolean} options.isDeleted - query
   * @param {Object} params - additional query params
   */
  getAssistanceRequestType(options = {}, params = {}) {
    const url = `/api/v2.0/assistancerequesttype`;
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
    const isDeleted = options.hasOwnProperty("isDeleted")
      ? options["isDeleted"]
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
    if (isDeleted !== undefined) query["IsDeleted"] = isDeleted;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Creates assistance request type.
   * @param {string} data.title -
   * @param {integer} data.displayOrder -
   * @param {Object} params - additional query params
   */
  postAssistanceRequestType(data = {}, params = {}) {
    const url = `/api/v2.0/assistancerequesttype`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Updates assistance request type.
   * @param {integer} data.id -
   * @param {integer} data.displayOrder -
   * @param {string} data.title -
   * @param {boolean} data.isDeleted -
   * @param {Object} params - additional query params
   */
  putAssistanceRequestType(data = {}, params = {}) {
    const url = `/api/v2.0/assistancerequesttype`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Gets assistance request type.
   * @param {integer} id - Assistance request type id.
   * @param {Object} params - additional query params
   */
  getAssistanceRequestTypeById(id, options = {}, params = {}) {
    const url = `/api/v2.0/assistancerequesttype/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Soft deletes assistance request type.
   * @param {integer} id - Assistance request type id.
   * @param {Object} params - additional query params
   */
  deleteAssistanceRequestTypeById(id, params = {}) {
    const url = `/api/v2.0/assistancerequesttype/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Undeletes assistance request type.
   * @param {integer} id - Assistance request type id.
   * @param {Object} params - additional query params
   */
  postAssistanceRequestTypeByIdUndelete(id, params = {}) {
    const url = `/api/v2.0/assistancerequesttype/${id}/undelete`;
    return this.client.request("post", url, {}, params);
  }
}
