import { GizmoClient } from "../GizmoClient.js";

export class Orders {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all orders.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {string} options.dateFrom - query
   * @param {string} options.dateTo - query
   * @param {any} options.status - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getOrders(options = {}, params = {}) {
    const url = `/api/v2.0/orders`;
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
    const status = options.hasOwnProperty("status")
      ? options["status"]
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
    if (status !== undefined) query["Status"] = status;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Get an order by id.
   * @param {integer} id - Order id.
   * @param {Object} options - options object with possible query parameters
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getOrdersById(id, options = {}, params = {}) {
    const url = `/api/v2.0/orders/${id}`;
    const expand = options.hasOwnProperty("expand")
      ? options["expand"]
      : undefined;
    const query = Object.assign({}, params);
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Invoice the specified order.
   * @param {integer} id - Order id.
   * @param {Object} params - additional query params
   */
  postOrdersByIdInvoice(id, params = {}) {
    const url = `/api/v2.0/orders/${id}/invoice`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Complete the specified order.
   * @param {integer} id - Order id.
   * @param {Object} params - additional query params
   */
  putOrdersByIdComplete(id, params = {}) {
    const url = `/api/v2.0/orders/${id}/complete`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Cancel the specified order.
   * @param {integer} id - Order id.
   * @param {Object} params - additional query params
   */
  putOrdersByIdCancel(id, params = {}) {
    const url = `/api/v2.0/orders/${id}/cancel`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Get the delivered status of the specified order.
   * @param {integer} id - Order id.
   * @param {Object} params - additional query params
   */
  getOrdersByIdDelivered(id, options = {}, params = {}) {
    const url = `/api/v2.0/orders/${id}/delivered`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Set the specified order as delivered.
   * @param {integer} id - path
   * @param {Object} params - additional query params
   */
  putOrdersByIdDelivered(id, params = {}) {
    const url = `/api/v2.0/orders/${id}/delivered`;
    return this.client.request("put", url, {}, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {integer} orderLineId - path
   * @param {Object} params - additional query params
   */
  getOrdersByIdOrderlinesByOrderLineIdDelivered(
    id,
    orderLineId,
    options = {},
    params = {}
  ) {
    const url = `/api/v2.0/orders/${id}/orderlines/${orderLineId}/delivered`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {integer} orderLineId - path
   * @param {number} data.deliveredQuantity -
   * @param {boolean} data.isDelivered -
   * @param {Object} params - additional query params
   */
  putOrdersByIdOrderlinesByOrderLineIdDelivered(
    id,
    orderLineId,
    data = {},
    params = {}
  ) {
    const url = `/api/v2.0/orders/${id}/orderlines/${orderLineId}/delivered`;
    const body = data;
    return this.client.request("put", url, body, params);
  }
}
