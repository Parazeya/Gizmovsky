import { GizmoClient } from "../GizmoClient.js";

export class DiscountGroups {
  constructor(client) {
    this.client = client;
  }

  /**
         * Gets filtered results.
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
         * @param {Object} params - additional query params
         */
  getDiscountGroups(options = {}, params = {}) {
    const url = `/api/v3.0/discountgroups`;
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
   * @param {string} data.name - Name.
   * @param {array} data.discounts - Discounts.
   * @param {Object} params - additional query params
   */
  postDiscountGroups(data = {}, params = {}) {
    const url = `/api/v3.0/discountgroups`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Updates entry.
   * @param {integer} data.id -
   * @param {string} data.name - Name.
   * @param {array} data.discounts - Discounts.
   * @param {Object} params - additional query params
   */
  putDiscountGroups(data = {}, params = {}) {
    const url = `/api/v3.0/discountgroups`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Gets entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  getDiscountGroupsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/discountgroups/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Deletes entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  deleteDiscountGroupsById(id, params = {}) {
    const url = `/api/v3.0/discountgroups/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Checks if entry exists with specified name.
   * @param {string} name - Entry name.
   * @param {Object} params - additional query params
   */
  getDiscountGroupsNameByNameExist(name, options = {}, params = {}) {
    const url = `/api/v3.0/discountgroups/name/${name}/exist`;
    return this.client.request("get", url, {}, params);
  }
}
