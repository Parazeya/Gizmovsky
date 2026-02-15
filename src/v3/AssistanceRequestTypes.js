import { GizmoClient } from "../GizmoClient.js";

export class AssistanceRequestTypes {
  constructor(client) {
    this.client = client;
  }

  /**
         * Assistance request types.
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
         * @param {boolean} options.isDeleted - Filter soft deleted entries.
         * @param {Object} params - additional query params
         */
  getAssistanceRequestTypes(options = {}, params = {}) {
    const url = `/api/v3.0/assistancerequesttypes`;
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
   * @param {string} data.title - Title.
   * @param {integer} data.displayOrder - Display order.
   * @param {Object} params - additional query params
   */
  postAssistanceRequestTypes(data = {}, params = {}) {
    const url = `/api/v3.0/assistancerequesttypes`;
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
  putAssistanceRequestTypes(data = {}, params = {}) {
    const url = `/api/v3.0/assistancerequesttypes`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Gets assistance request type.
   * @param {integer} id - Assistance request type id.
   * @param {Object} params - additional query params
   */
  getAssistanceRequestTypesById(id, options = {}, params = {}) {
    const url = `/api/v3.0/assistancerequesttypes/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Soft deletes assistance request type.
   * @param {integer} id - Assistance request type id.
   * @param {Object} params - additional query params
   */
  deleteAssistanceRequestTypesById(id, params = {}) {
    const url = `/api/v3.0/assistancerequesttypes/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Undeletes assistance request type.
   * @param {integer} id - Assistance request type id.
   * @param {Object} params - additional query params
   */
  postAssistanceRequestTypesByIdUndelete(id, params = {}) {
    const url = `/api/v3.0/assistancerequesttypes/${id}/undelete`;
    return this.client.request("post", url, {}, params);
  }
}
