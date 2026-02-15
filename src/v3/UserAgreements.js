import { GizmoClient } from "../GizmoClient.js";

export class UserAgreements {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all user agreements.
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
         * @param {boolean} options.isEnabled - Return enabled user agreements.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {Object} params - additional query params
         */
  getUserAgreements(options = {}, params = {}) {
    const url = `/api/v3.0/useragreements`;
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
    const isEnabled = options.hasOwnProperty("isEnabled")
      ? options["isEnabled"]
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
    if (isEnabled !== undefined) query["IsEnabled"] = isEnabled;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create a user agreement.
   * @param {string} data.name - The name of the user agreement.
   * @param {string} data.agreement - The user agreement text.
   * @param {integer} data.displayOrder - The display order of the user agreement.
   * @param {boolean} data.isEnabled - Whether the user agreement is enabled.
   * @param {boolean} data.isRejectable - Whether the user agreement is rejectable.
   * @param {boolean} data.ignoreState - Whether the user agreement should ignore state.
   * @param {Object} params - additional query params
   */
  postUserAgreements(data = {}, params = {}) {
    const url = `/api/v3.0/useragreements`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a user agreement.
   * @param {integer} data.id - The Id of the object.
   * @param {string} data.name - The name of the user agreement.
   * @param {string} data.agreement - The user agreement text.
   * @param {integer} data.displayOrder - The display order of the user agreement.
   * @param {boolean} data.isEnabled - Whether the user agreement is enabled.
   * @param {boolean} data.isRejectable - Whether the user agreement is rejectable.
   * @param {boolean} data.ignoreState - Whether the user agreement should ignore state.
   * @param {Object} params - additional query params
   */
  putUserAgreements(data = {}, params = {}) {
    const url = `/api/v3.0/useragreements`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a user agreement by id.
   * @param {integer} id - User agreement id.
   * @param {Object} params - additional query params
   */
  getUserAgreementsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/useragreements/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete a user agreement.
   * @param {integer} id - User agreement id.
   * @param {Object} params - additional query params
   */
  deleteUserAgreementsById(id, params = {}) {
    const url = `/api/v3.0/useragreements/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Reset the user states of a user agreement.
   * @param {integer} id - User agreement id.
   * @param {Object} params - additional query params
   */
  deleteUserAgreementsByIdResetstates(id, params = {}) {
    const url = `/api/v3.0/useragreements/${id}/resetstates`;
    return this.client.request("delete", url, {}, params);
  }
}
