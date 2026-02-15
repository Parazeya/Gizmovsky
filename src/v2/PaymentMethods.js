import { GizmoClient } from "../GizmoClient.js";

export class PaymentMethods {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all payment methods.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {string} options.name - query
   * @param {boolean} options.isDeleted - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getPaymentMethods(options = {}, params = {}) {
    const url = `/api/v2.0/paymentmethods`;
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
    const name = options.hasOwnProperty("name") ? options["name"] : undefined;
    const isDeleted = options.hasOwnProperty("isDeleted")
      ? options["isDeleted"]
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
    if (name !== undefined) query["Name"] = name;
    if (isDeleted !== undefined) query["IsDeleted"] = isDeleted;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create a payment method.
   * @param {string} data.name -
   * @param {integer} data.displayOrder -
   * @param {boolean} data.isEnabled -
   * @param {boolean} data.availableInManager -
   * @param {boolean} data.availableInClient -
   * @param {boolean} data.isDeleted -
   * @param {Object} params - additional query params
   */
  postPaymentMethods(data = {}, params = {}) {
    const url = `/api/v2.0/paymentmethods`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a payment method.
   * @param {integer} data.id -
   * @param {string} data.name -
   * @param {integer} data.displayOrder -
   * @param {boolean} data.isEnabled -
   * @param {boolean} data.availableInManager -
   * @param {boolean} data.availableInClient -
   * @param {boolean} data.isDeleted -
   * @param {Object} params - additional query params
   */
  putPaymentMethods(data = {}, params = {}) {
    const url = `/api/v2.0/paymentmethods`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a payment method by id.
   * @param {integer} id - Payment method id.
   * @param {Object} params - additional query params
   */
  getPaymentMethodsById(id, options = {}, params = {}) {
    const url = `/api/v2.0/paymentmethods/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete a payment method.
   * @param {integer} id - Payment method id.
   * @param {Object} params - additional query params
   */
  deletePaymentMethodsById(id, params = {}) {
    const url = `/api/v2.0/paymentmethods/${id}`;
    return this.client.request("delete", url, {}, params);
  }
}
