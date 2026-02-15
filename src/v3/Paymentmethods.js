import { GizmoClient } from "../GizmoClient.js";

export class PaymentMethods {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all payment methods.
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
         * @param {string} options.name - Return payment methods with names that contain the specified string.
         * @param {boolean} options.isDeleted - Return deleted payment methods.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {Object} params - additional query params
         */
  getPaymentMethods(options = {}, params = {}) {
    const url = `/api/v3.0/paymentmethods`;
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
   * @param {string} data.name - The name of the payment method.
   * @param {integer} data.displayOrder - The display order of the payment method.
   * @param {boolean} data.isEnabled - Whether the payment method is enabled.
   * @param {boolean} data.availableInManager - Whether the payment method can be used by manager.
   * @param {boolean} data.availableInClient - Whether the payment method can be used by clients.
   * @param {boolean} data.isDeleted - Whether the payment method is deleted.
   * @param {boolean} data.availableInPortal - Whether the payment method can be used by portal.
   * @param {string} data.paymentProvider - The payment provider of the payment method.
   * @param {integer} data.paymentMethodOption - The options of the payment method.
   * @param {Object} params - additional query params
   */
  postPaymentMethods(data = {}, params = {}) {
    const url = `/api/v3.0/paymentmethods`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a payment method.
   * @param {integer} data.id - The Id of the object.
   * @param {string} data.name - The name of the payment method.
   * @param {integer} data.displayOrder - The display order of the payment method.
   * @param {boolean} data.isEnabled - Whether the payment method is enabled.
   * @param {boolean} data.availableInManager - Whether the payment method can be used by manager.
   * @param {boolean} data.availableInClient - Whether the payment method can be used by clients.
   * @param {boolean} data.isDeleted - Whether the payment method is deleted.
   * @param {boolean} data.availableInPortal - Whether the payment method can be used by portal.
   * @param {string} data.paymentProvider - The payment provider of the payment method.
   * @param {integer} data.paymentMethodOption - The options of the payment method.
   * @param {Object} params - additional query params
   */
  putPaymentMethods(data = {}, params = {}) {
    const url = `/api/v3.0/paymentmethods`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a payment method by id.
   * @param {integer} id - Payment method id.
   * @param {Object} params - additional query params
   */
  getPaymentMethodsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/paymentmethods/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete a payment method.
   * @param {integer} id - Payment method id.
   * @param {Object} params - additional query params
   */
  deletePaymentMethodsById(id, params = {}) {
    const url = `/api/v3.0/paymentmethods/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Checks if entry exists with specified name.
   * @param {string} name - Entry name.
   * @param {Object} params - additional query params
   */
  getPaymentMethodsNameByNameExist(name, options = {}, params = {}) {
    const url = `/api/v3.0/paymentmethods/name/${name}/exist`;
    return this.client.request("get", url, {}, params);
  }
}
