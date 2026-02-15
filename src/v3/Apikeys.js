import { GizmoClient } from "../GizmoClient.js";

export class ApiKeys {
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
         * @param {array} options.expand - <inheritdoc />
         * @param {boolean} options.isDeleted - Is deleted.
         * @param {boolean} options.isDisabled - Is disabled.
         * @param {Object} params - additional query params
         */
  getApiKeys(options = {}, params = {}) {
    const url = `/api/v3.0/apikeys`;
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
    const isDisabled = options.hasOwnProperty("isDisabled")
      ? options["isDisabled"]
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
    if (isDisabled !== undefined) query["IsDisabled"] = isDisabled;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Creates entry.
   * @param {string} data.name - Api key name.
   * @param {integer} data.type - Api key type.
   * @param {string} data.expireTime - Optional api key expiration.
   * @param {Object} params - additional query params
   */
  postApiKeys(data = {}, params = {}) {
    const url = `/api/v3.0/apikeys`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Gets entry by id.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  getApiKeysById(id, options = {}, params = {}) {
    const url = `/api/v3.0/apikeys/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Deletes entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  deleteApiKeysById(id, params = {}) {
    const url = `/api/v3.0/apikeys/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Undeletes entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  putApiKeysByIdUndelete(id, params = {}) {
    const url = `/api/v3.0/apikeys/${id}/undelete`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Enables entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  putApiKeysByIdEnable(id, params = {}) {
    const url = `/api/v3.0/apikeys/${id}/enable`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Disables entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  putApiKeysByIdDisable(id, params = {}) {
    const url = `/api/v3.0/apikeys/${id}/disable`;
    return this.client.request("put", url, {}, params);
  }
}
