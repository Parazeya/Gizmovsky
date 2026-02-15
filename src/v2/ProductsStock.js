import { GizmoClient } from "../GizmoClient.js";

export class ProductsStock {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all products stock.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getProductsStock(options = {}, params = {}) {
    const url = `/api/v2.0/productsstock`;
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
   * Update product stock.
   * @param {integer} data.productId -
   * @param {object} data.type -
   * @param {number} data.amount -
   * @param {Object} params - additional query params
   */
  putProductsStock(data = {}, params = {}) {
    const url = `/api/v2.0/productsstock`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get product stock.
   * @param {integer} id - Product id.
   * @param {Object} params - additional query params
   */
  getProductsStockById(id, options = {}, params = {}) {
    const url = `/api/v2.0/productsstock/${id}`;
    return this.client.request("get", url, {}, params);
  }
}
