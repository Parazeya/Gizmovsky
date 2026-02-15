import { GizmoClient } from "../GizmoClient.js";

export class News {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all news.
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
         * @param {string} options.startDate - Return news where the start date is greater than or equal to the specified date or is null.
         * @param {string} options.endDate - Return news where the end date is less than or equal to the specified date or is null.
         * @param {Object} params - additional query params
         */
  getNews(options = {}, params = {}) {
    const url = `/api/v3.0/news`;
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
    const startDate = options.hasOwnProperty("startDate")
      ? options["startDate"]
      : undefined;
    const endDate = options.hasOwnProperty("endDate")
      ? options["endDate"]
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
    if (startDate !== undefined) query["StartDate"] = startDate;
    if (endDate !== undefined) query["EndDate"] = endDate;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create news.
   * @param {string} data.title -
   * @param {string} data.data -
   * @param {string} data.startDate -
   * @param {string} data.endDate -
   * @param {string} data.url -
   * @param {string} data.mediaUrl -
   * @param {string} data.thumbnailUrl -
   * @param {boolean} data.isCustomTemplate -
   * @param {Object} params - additional query params
   */
  postNews(data = {}, params = {}) {
    const url = `/api/v3.0/news`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update news.
   * @param {integer} data.id -
   * @param {string} data.title -
   * @param {string} data.data -
   * @param {string} data.startDate -
   * @param {string} data.endDate -
   * @param {string} data.url -
   * @param {string} data.mediaUrl -
   * @param {string} data.thumbnailUrl -
   * @param {boolean} data.isCustomTemplate -
   * @param {Object} params - additional query params
   */
  putNews(data = {}, params = {}) {
    const url = `/api/v3.0/news`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get news by id.
   * @param {integer} id - News id.
   * @param {Object} params - additional query params
   */
  getNewsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/news/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete news.
   * @param {integer} id - Id.
   * @param {Object} params - additional query params
   */
  deleteNewsById(id, params = {}) {
    const url = `/api/v3.0/news/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Gets branch configuration entries.
   * @param {integer} id - News id.
   * @param {Object} params - additional query params
   */
  getNewsByIdBranches(id, options = {}, params = {}) {
    const url = `/api/v3.0/news/${id}/branches`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Sets branch configuration entries.
   * @param {integer} id - News id.
   * @param {integer} data.branchId - Branch id.
   * @param {boolean} data.isEnabled - Reference state.
   * @param {Object} params - additional query params
   */
  postNewsByIdBranches(id, data = {}, params = {}) {
    const url = `/api/v3.0/news/${id}/branches`;
    const body = data;
    return this.client.request("post", url, body, params);
  }
}
