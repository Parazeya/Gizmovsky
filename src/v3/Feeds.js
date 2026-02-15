import { GizmoClient } from "../GizmoClient.js";

export class Feeds {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all feeds.
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
         * @param {array} options.expand - Include specified objects in the result.
         * @param {Object} params - additional query params
         */
  getFeeds(options = {}, params = {}) {
    const url = `/api/v3.0/feeds`;
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
   * Create feed.
   * @param {string} data.title -
   * @param {integer} data.maximum -
   * @param {string} data.url -
   * @param {Object} params - additional query params
   */
  postFeeds(data = {}, params = {}) {
    const url = `/api/v3.0/feeds`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update feed.
   * @param {integer} data.id -
   * @param {string} data.title -
   * @param {integer} data.maximum -
   * @param {string} data.url -
   * @param {Object} params - additional query params
   */
  putFeeds(data = {}, params = {}) {
    const url = `/api/v3.0/feeds`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get feed by id.
   * @param {integer} id - Feed id.
   * @param {Object} params - additional query params
   */
  getFeedsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/feeds/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete feed.
   * @param {integer} id - Id.
   * @param {Object} params - additional query params
   */
  deleteFeedsById(id, params = {}) {
    const url = `/api/v3.0/feeds/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Gets branch configuration entries.
   * @param {integer} id - Feed id.
   * @param {Object} params - additional query params
   */
  getFeedsByIdBranches(id, options = {}, params = {}) {
    const url = `/api/v3.0/feeds/${id}/branches`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Sets branch configuration entries.
   * @param {integer} id - Feed id.
   * @param {integer} data.branchId - Branch id.
   * @param {boolean} data.isEnabled - Reference state.
   * @param {Object} params - additional query params
   */
  postFeedsByIdBranches(id, data = {}, params = {}) {
    const url = `/api/v3.0/feeds/${id}/branches`;
    const body = data;
    return this.client.request("post", url, body, params);
  }
}
