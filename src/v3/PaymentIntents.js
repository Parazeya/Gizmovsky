import { GizmoClient } from "../GizmoClient.js";

export class PaymentIntents {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all Payment intents.
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
         * @param {integer} options.state - Intent state.
         * @param {string} options.dateFrom - Date from.
         * @param {string} options.dateTo - Date to.
         * @param {integer} options.branchId - Branch id.
         * @param {integer} options.createdById - Operator id.
         * @param {integer} options.paymentMethodId - Payment method id.
         * @param {integer} options.userId - User id.
         * @param {Object} params - additional query params
         */
  getPaymentIntents(options = {}, params = {}) {
    const url = `/api/v3.0/paymentintents`;
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
    const state = options.hasOwnProperty("state")
      ? options["state"]
      : undefined;
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const branchId = options.hasOwnProperty("branchId")
      ? options["branchId"]
      : undefined;
    const createdById = options.hasOwnProperty("createdById")
      ? options["createdById"]
      : undefined;
    const paymentMethodId = options.hasOwnProperty("paymentMethodId")
      ? options["paymentMethodId"]
      : undefined;
    const userId = options.hasOwnProperty("userId")
      ? options["userId"]
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
    if (state !== undefined) query["State"] = state;
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (branchId !== undefined) query["BranchId"] = branchId;
    if (createdById !== undefined) query["CreatedById"] = createdById;
    if (paymentMethodId !== undefined)
      query["PaymentMethodId"] = paymentMethodId;
    if (userId !== undefined) query["UserId"] = userId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Get a payment intent by id.
   * @param {integer} id - Id.
   * @param {Object} params - additional query params
   */
  getPaymentIntentsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/paymentintents/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Get a payment intent by guid.
   * @param {string} identifier - Identifier.
   * @param {Object} params - additional query params
   */
  getPaymentIntentsByIdentifier(identifier, options = {}, params = {}) {
    const url = `/api/v3.0/paymentintents/${identifier}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Creates new deposit intent.
   * @param {integer} data.userId - Gets or sets intent user id.
   * @param {number} data.amount - Gets or sets intent amount.
   * @param {integer} data.paymentMethodId - Gets or sets payment method id.
   * @param {Object} params - additional query params
   */
  postPaymentIntentsDeposit(data = {}, params = {}) {
    const url = `/api/v3.0/paymentintents/deposit`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Cancels pending payment intent.
   * @param {string} identifier - Payment intent identifier.
   * @param {Object} params - additional query params
   */
  postPaymentIntentsByIdentifierCancel(identifier, params = {}) {
    const url = `/api/v3.0/paymentintents/${identifier}/cancel`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Waits for payment intent capture.
   * @param {string} identifier - Payment intent guid.
   * @param {Object} params - additional query params
   */
  getPaymentIntentsByIdentifierWait(identifier, options = {}, params = {}) {
    const url = `/api/v3.0/paymentintents/${identifier}/wait`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {string} identifier - path
   * @param {Object} params - additional query params
   */
  getPaymentIntentsByIdentifierOrder(identifier, options = {}, params = {}) {
    const url = `/api/v3.0/paymentintents/${identifier}/order`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {string} identifier - path
   * @param {Object} params - additional query params
   */
  postPaymentIntentsByIdentifierDiscard(identifier, params = {}) {
    const url = `/api/v3.0/paymentintents/${identifier}/discard`;
    return this.client.request("post", url, {}, params);
  }
}
