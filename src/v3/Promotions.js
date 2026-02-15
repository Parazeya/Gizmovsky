import { GizmoClient } from "../GizmoClient.js";

export class Promotions {
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
         * @param {array} options.expand - query
         * @param {Object} params - additional query params
         */
  getPromotions(options = {}, params = {}) {
    const url = `/api/v3.0/promotions`;
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
   * Creates entry.
   * @param {string} data.name - Promotion name.
   * @param {string} data.description - Promotion description.
   * @param {integer} data.type - Promotion type.
   * @param {integer} data.discountId - Discount or discount group id.
   * @param {boolean} data.isDisabled - Indicates that promotion is disabled.
   * @param {object} data.period -
   * @param {array} data.limits - Promotion limits.
   * @param {integer} data.codeType - Promotion code type.
   * @param {string} data.codePrefix - Code prefix.
   * @param {integer} data.codeLength - Code length.
   * @param {integer} data.codeCount - Promo code count.
   * @param {integer} data.codeCharSetType - Code character set.
   * @param {array} data.branches - Branches.
   * @param {Object} params - additional query params
   */
  postPromotions(data = {}, params = {}) {
    const url = `/api/v3.0/promotions`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Gets entry by id.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  getPromotionsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/promotions/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Updates entry.
   * @param {integer} id - Entry id.
   * @param {boolean} data.isDisabled - Is disabled.
   * @param {object} data.period -
   * @param {array} data.limits - Promotion limits.
   * @param {array} data.branches - Branches.
   * @param {Object} params - additional query params
   */
  putPromotionsById(id, data = {}, params = {}) {
    const url = `/api/v3.0/promotions/${id}`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Soft deletes entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  deletePromotionsById(id, params = {}) {
    const url = `/api/v3.0/promotions/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Gets promotion codes.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  getPromotionsByIdCodes(id, options = {}, params = {}) {
    const url = `/api/v3.0/promotions/${id}/codes`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets promotion code.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  getPromotionsCodesById(id, options = {}, params = {}) {
    const url = `/api/v3.0/promotions/codes/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Undeletes entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  putPromotionsByIdUndelete(id, params = {}) {
    const url = `/api/v3.0/promotions/${id}/undelete`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Enables entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  putPromotionsByIdEnable(id, params = {}) {
    const url = `/api/v3.0/promotions/${id}/enable`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Disables entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  putPromotionsByIdDisable(id, params = {}) {
    const url = `/api/v3.0/promotions/${id}/disable`;
    return this.client.request("put", url, {}, params);
  }
}
