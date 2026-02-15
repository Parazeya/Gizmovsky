import { GizmoClient } from "../GizmoClient.js";

export class ProductOrders {
  constructor(client) {
    this.client = client;
  }

  /**
         * Gets product orders.
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
         * @param {string} options.dateFrom - Return orders where the date greater than or equal to the specified date.
         * @param {string} options.dateTo - Return orders where the date less than or equal to the specified date.
         * @param {integer} options.status - Return orders with the specified order status.
         * @param {integer} options.userId - Return orders of the specified user.
         * @param {integer} options.hostId - Return orders of the specified host.
         * @param {integer} options.invoiceStatus - Return orders of the specified payment status.
         * @param {integer} options.registerId - Register id.
         * @param {integer} options.branchId - Branch id.
         * @param {boolean} options.isDelivered - Order delivery status.
         * @param {integer} options.shiftId - Shift id.
         * @param {integer} options.operatorId - Created by operator id.
         * @param {Object} params - additional query params
         */
  getProductOrders(options = {}, params = {}) {
    const url = `/api/v3.0/productorders`;
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
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const status = options.hasOwnProperty("status")
      ? options["status"]
      : undefined;
    const userId = options.hasOwnProperty("userId")
      ? options["userId"]
      : undefined;
    const hostId = options.hasOwnProperty("hostId")
      ? options["hostId"]
      : undefined;
    const invoiceStatus = options.hasOwnProperty("invoiceStatus")
      ? options["invoiceStatus"]
      : undefined;
    const registerId = options.hasOwnProperty("registerId")
      ? options["registerId"]
      : undefined;
    const branchId = options.hasOwnProperty("branchId")
      ? options["branchId"]
      : undefined;
    const isDelivered = options.hasOwnProperty("isDelivered")
      ? options["isDelivered"]
      : undefined;
    const shiftId = options.hasOwnProperty("shiftId")
      ? options["shiftId"]
      : undefined;
    const operatorId = options.hasOwnProperty("operatorId")
      ? options["operatorId"]
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
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (status !== undefined) query["Status"] = status;
    if (userId !== undefined) query["UserId"] = userId;
    if (hostId !== undefined) query["HostId"] = hostId;
    if (invoiceStatus !== undefined) query["InvoiceStatus"] = invoiceStatus;
    if (registerId !== undefined) query["RegisterId"] = registerId;
    if (branchId !== undefined) query["BranchId"] = branchId;
    if (isDelivered !== undefined) query["IsDelivered"] = isDelivered;
    if (shiftId !== undefined) query["ShiftId"] = shiftId;
    if (operatorId !== undefined) query["OperatorId"] = operatorId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Get an order by id.
   * @param {integer} id - Order id.
   * @param {Object} options - options object with possible query parameters
   * @param {array} options.expand - Include specified objects in the result.
   * @param {Object} params - additional query params
   */
  getProductOrdersById(id, options = {}, params = {}) {
    const url = `/api/v3.0/productorders/${id}`;
    const expand = options.hasOwnProperty("expand")
      ? options["expand"]
      : undefined;
    const query = Object.assign({}, params);
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
         * Gets active product orders.
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
  getProductOrdersActive(options = {}, params = {}) {
    const url = `/api/v3.0/productorders/active`;
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
   * Gets active product order.
   * @param {integer} id - Order id.
   * @param {Object} params - additional query params
   */
  getProductOrdersByIdActive(id, options = {}, params = {}) {
    const url = `/api/v3.0/productorders/${id}/active`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Starts product order processing.
   * @param {integer} id - Order id.
   * @param {Object} params - additional query params
   */
  putProductOrdersByIdProcess(id, params = {}) {
    const url = `/api/v3.0/productorders/${id}/process`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Complete the specified order.
   * @param {integer} id - Order id.
   * @param {Object} params - additional query params
   */
  putProductOrdersByIdComplete(id, params = {}) {
    const url = `/api/v3.0/productorders/${id}/complete`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Cancel the specified order.
   * @param {integer} id - Order id.
   * @param {Object} params - additional query params
   */
  putProductOrdersByIdCancel(id, params = {}) {
    const url = `/api/v3.0/productorders/${id}/cancel`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Get specified order delivery status.
   * @param {integer} id - Order id.
   * @param {Object} params - additional query params
   */
  getProductOrdersByIdDelivered(id, options = {}, params = {}) {
    const url = `/api/v3.0/productorders/${id}/delivered`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delivers specified order.
   * @param {integer} id - Order id.
   * @param {Object} params - additional query params
   */
  putProductOrdersByIdDelivered(id, params = {}) {
    const url = `/api/v3.0/productorders/${id}/delivered`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Gets order line delivery status.
   * @param {integer} orderLineId - Order line id.
   * @param {Object} params - additional query params
   */
  getProductOrdersOrderlinesByOrderLineIdDelivered(
    orderLineId,
    options = {},
    params = {},
  ) {
    const url = `/api/v3.0/productorders/orderlines/${orderLineId}/delivered`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets order lines delivery status.
   * @param {integer} id - Order id.
   * @param {Object} params - additional query params
   */
  getProductOrdersByIdOrderlinesDelivered(id, options = {}, params = {}) {
    const url = `/api/v3.0/productorders/${id}/orderlines/delivered`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Sets order line delivery status.
   * @param {integer} orderLineId - Order line id.
   * @param {number} quantity - Delivered quantity.
   * @param {Object} params - additional query params
   */
  putProductOrdersOrderlinesByOrderLineIdDeliveredByQuantity(
    orderLineId,
    quantity,
    params = {},
  ) {
    const url = `/api/v3.0/productorders/orderlines/${orderLineId}/delivered/${quantity}`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Gets product user price.
   * @param {integer} userId - User id.
   * @param {integer} productId - Product id.
   * @param {number} quantity - Product quantity.
   * @param {Object} params - additional query params
   */
  getProductOrdersProductByProductIdUserByUserIdQuantityByQuantityPrice(
    userId,
    productId,
    quantity,
    options = {},
    params = {},
  ) {
    const url = `/api/v3.0/productorders/product/${productId}/user/${userId}/quantity/${quantity}/price`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets product price.
   * @param {integer} productId - Product id.
   * @param {number} quantity - Product quantity.
   * @param {Object} params - additional query params
   */
  getProductOrdersProductByProductIdQuantityByQuantityPrice(
    productId,
    quantity,
    options = {},
    params = {},
  ) {
    const url = `/api/v3.0/productorders/product/${productId}/quantity/${quantity}/price`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets product price.
   * @param {integer} productId - Product id.
   * @param {number} quantity - Product quantity.
   * @param {integer} userGroupId - User group id.
   * @param {Object} params - additional query params
   */
  getProductOrdersProductByProductIdUsergroupByUserGroupIdQuantityByQuantityPrice(
    productId,
    quantity,
    userGroupId,
    options = {},
    params = {},
  ) {
    const url = `/api/v3.0/productorders/product/${productId}/usergroup/${userGroupId}/quantity/${quantity}/price`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} productOrderLineId - path
   * @param {string} mark - path
   * @param {Object} params - additional query params
   */
  putProductOrdersOrderlinesByProductOrderLineIdMarkByMark(
    productOrderLineId,
    mark,
    params = {},
  ) {
    const url = `/api/v3.0/productorders/orderlines/${productOrderLineId}/mark/${mark}`;
    return this.client.request("put", url, {}, params);
  }

  /**
   *
   * @param {integer} data.productOrderLineId - Product order line id.
   * @param {string} data.mark - Mark.
   * @param {Object} params - additional query params
   */
  putProductOrdersOrderlinesMark(data = {}, params = {}) {
    const url = `/api/v3.0/productorders/orderlines/mark`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   *
   * @param {string} mark - path
   * @param {Object} params - additional query params
   */
  getProductOrdersOrderlinesMarkByMark(mark, options = {}, params = {}) {
    const url = `/api/v3.0/productorders/orderlines/mark/${mark}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets order allowed payment methods.
   * @param {integer} id - Order id.
   * @param {Object} params - additional query params
   */
  getProductOrdersByIdPaymentMethodsAllowed(id, options = {}, params = {}) {
    const url = `/api/v3.0/productorders/${id}/payment/methods/allowed`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Creates order payments.
   * @param {integer} id - Order id/
   * @param {array} data.payments - Payments to create.
   * @param {boolean} data.disableReceiptPrinting - Disables receipt printing.
   * @param {Object} params - additional query params
   */
  postProductOrdersByIdPayments(id, data = {}, params = {}) {
    const url = `/api/v3.0/productorders/${id}/payments`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Gets order payments.
   * @param {integer} id - Order id/
   * @param {Object} params - additional query params
   */
  getProductOrdersByIdPayments(id, options = {}, params = {}) {
    const url = `/api/v3.0/productorders/${id}/payments`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets intent order allowed payment methods.
   * @param {string} identifier - Intent identifier.
   * @param {Object} params - additional query params
   */
  getProductOrdersIntentByIdentifierPaymentMethodsAllowed(
    identifier,
    options = {},
    params = {},
  ) {
    const url = `/api/v3.0/productorders/intent/${identifier}/payment/methods/allowed`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Creates order payments.
   * @param {string} identifier - Order id/
   * @param {array} data.payments - Payments to create.
   * @param {boolean} data.disableReceiptPrinting - Disables receipt printing.
   * @param {Object} params - additional query params
   */
  postProductOrdersIntentByIdentifierPayments(
    identifier,
    data = {},
    params = {},
  ) {
    const url = `/api/v3.0/productorders/intent/${identifier}/payments`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Gets intent order state.
   * @param {string} identifier - Intent identifier.
   * @param {Object} params - additional query params
   */
  getProductOrdersIntentByIdentifierState(
    identifier,
    options = {},
    params = {},
  ) {
    const url = `/api/v3.0/productorders/intent/${identifier}/state`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets order lines.
   * @param {integer} id - Order id/
   * @param {Object} params - additional query params
   */
  getProductOrdersByIdLines(id, options = {}, params = {}) {
    const url = `/api/v3.0/productorders/${id}/lines`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets order note.
   * @param {integer} id - Order id/
   * @param {Object} params - additional query params
   */
  getProductOrdersByIdNote(id, options = {}, params = {}) {
    const url = `/api/v3.0/productorders/${id}/note`;
    return this.client.request("get", url, {}, params);
  }
}
