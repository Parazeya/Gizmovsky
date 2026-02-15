import { GizmoClient } from "../GizmoClient.js";

export class AgeRestrictions {
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
         * @param {integer} options.type - Age restriction type.
         * @param {Object} params - additional query params
         */
  getAgeRestrictions(options = {}, params = {}) {
    const url = `/api/v3.0/agerestrictions`;
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
    const type = options.hasOwnProperty("type") ? options["type"] : undefined;
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
    if (type !== undefined) query["Type"] = type;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Gets entry by id.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  getAgeRestrictionsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/agerestrictions/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Deletes entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  deleteAgeRestrictionsById(id, params = {}) {
    const url = `/api/v3.0/agerestrictions/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Creates entry.
   * @param {integer} data.ageFrom - Age from.
   * @param {integer} data.ageTo - Age to.
   * @param {integer} data.dayMinuteFrom - The time from.
   * @param {integer} data.dayMinuteTo - The time to.
   * @param {Object} params - additional query params
   */
  postAgeRestrictionsLogin(data = {}, params = {}) {
    const url = `/api/v3.0/agerestrictions/login`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Creates entry.
   * @param {integer} data.ageFrom - Age from.
   * @param {integer} data.ageTo - Age to.
   * @param {integer} data.dayMinuteFrom - The time from.
   * @param {integer} data.dayMinuteTo - The time to.
   * @param {integer} data.productId - Product id.
   * @param {Object} params - additional query params
   */
  postAgeRestrictionsProduct(data = {}, params = {}) {
    const url = `/api/v3.0/agerestrictions/product`;
    const body = data;
    return this.client.request("post", url, body, params);
  }
}
