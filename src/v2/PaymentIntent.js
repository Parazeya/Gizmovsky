import { GizmoClient } from "../GizmoClient.js";

export class PaymentIntent {
  constructor(client) {
    this.client = client;
  }

  /**
   * Creates new deposit intent.
   * @param {integer} data.userId -
   * @param {number} data.amount -
   * @param {integer} data.paymentMethodId -
   * @param {Object} params - additional query params
   */
  postPaymentIntentDeposit(data = {}, params = {}) {
    const url = `/api/v2.0/paymentintent/deposit`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Get all Payment intents.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {string} options.dateFrom - query
   * @param {string} options.dateTo - query
   * @param {any} options.state - query
   * @param {integer} options.userId - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getPaymentIntent(options = {}, params = {}) {
    const url = `/api/v2.0/paymentintent`;
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
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const state = options.hasOwnProperty("state")
      ? options["state"]
      : undefined;
    const userId = options.hasOwnProperty("userId")
      ? options["userId"]
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
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (state !== undefined) query["State"] = state;
    if (userId !== undefined) query["UserId"] = userId;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Get a payment intent by id.
   * @param {integer} id - Payment intent id.
   * @param {Object} params - additional query params
   */
  getPaymentIntentById(id, options = {}, params = {}) {
    const url = `/api/v2.0/paymentintent/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Get a payment intent by guid.
   * @param {string} guid - Payment intent guid.
   * @param {Object} params - additional query params
   */
  getPaymentIntentByGuid(guid, options = {}, params = {}) {
    const url = `/api/v2.0/paymentintent/${guid}`;
    return this.client.request("get", url, {}, params);
  }
}
