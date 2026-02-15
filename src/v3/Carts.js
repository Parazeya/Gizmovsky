import { GizmoClient } from "../GizmoClient.js";

export class Carts {
  constructor(client) {
    this.client = client;
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  postCartsApiUserV30Carts(params = {}) {
    const url = `/api/user/v3.0/carts`;
    return this.client.request("post", url, {}, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {Object} params - additional query params
   */
  deleteCartsApiUserV30CartsById(id, params = {}) {
    const url = `/api/user/v3.0/carts/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {Object} params - additional query params
   */
  postCartsApiUserV30CartsByIdClear(id, params = {}) {
    const url = `/api/user/v3.0/carts/${id}/clear`;
    return this.client.request("post", url, {}, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {number} data.quantity - Quantity.
   * @param {integer} data.productId - Product id.
   * @param {number} data.unitPrice - Custom unit price.
   * @param {integer} data.payType - Pay type.
   * @param {string} data.mark - Product mark.
   * @param {Object} params - additional query params
   */
  postCartsApiUserV30CartsByIdEntries(id, data = {}, params = {}) {
    const url = `/api/user/v3.0/carts/${id}/entries`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {string} data.code -
   * @param {Object} params - additional query params
   */
  putCartsApiUserV30CartsByIdPromotion(id, data = {}, params = {}) {
    const url = `/api/user/v3.0/carts/${id}/promotion`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {Object} params - additional query params
   */
  deleteCartsApiUserV30CartsByIdPromotion(id, params = {}) {
    const url = `/api/user/v3.0/carts/${id}/promotion`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {string} entryId - path
   * @param {Object} params - additional query params
   */
  deleteCartsApiUserV30CartsByIdEntriesByEntryId(id, entryId, params = {}) {
    const url = `/api/user/v3.0/carts/${id}/entries/${entryId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {string} entryId - path
   * @param {number} quantity - path
   * @param {Object} params - additional query params
   */
  putCartsApiUserV30CartsByIdEntriesByEntryIdQuantityByQuantity(
    id,
    entryId,
    quantity,
    params = {},
  ) {
    const url = `/api/user/v3.0/carts/${id}/entries/${entryId}/quantity/${quantity}`;
    return this.client.request("put", url, {}, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {string} entryId - path
   * @param {integer} payType - path
   * @param {Object} params - additional query params
   */
  putCartsApiUserV30CartsByIdEntriesByEntryIdPaymenttypeByPayType(
    id,
    entryId,
    payType,
    params = {},
  ) {
    const url = `/api/user/v3.0/carts/${id}/entries/${entryId}/paymenttype/${payType}`;
    return this.client.request("put", url, {}, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {string} data.note - Optional note.
   * @param {Object} params - additional query params
   */
  postCartsApiUserV30CartsByIdAccept(id, data = {}, params = {}) {
    const url = `/api/user/v3.0/carts/${id}/accept`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {Object} params - additional query params
   */
  getCartsApiUserV30CartsByIdState(id, options = {}, params = {}) {
    const url = `/api/user/v3.0/carts/${id}/state`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {Object} params - additional query params
   */
  getCartsApiUserV30CartsByIdPaymentsState(id, options = {}, params = {}) {
    const url = `/api/user/v3.0/carts/${id}/payments/state`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {Object} params - additional query params
   */
  putCartsApiUserV30CartsByIdNote(id, params = {}) {
    const url = `/api/user/v3.0/carts/${id}/note`;
    return this.client.request("put", url, {}, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {integer} data.paymentMethodId - Payment method id.
   * @param {Object} params - additional query params
   */
  postCartsApiUserV30CartsByIdPaymentmethod(id, data = {}, params = {}) {
    const url = `/api/user/v3.0/carts/${id}/paymentmethod`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {integer} data.expireAfter - Cart expiration time in minutes.
   * @param {boolean} data.disableDiscounts - Disable discounts.
   * @param {integer} data.hostId - Host id.
   * @param {Object} params - additional query params
   */
  postCarts(data = {}, params = {}) {
    const url = `/api/v3.0/carts`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {Object} params - additional query params
   */
  deleteCartsById(id, params = {}) {
    const url = `/api/v3.0/carts/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {Object} params - additional query params
   */
  postCartsByIdClear(id, params = {}) {
    const url = `/api/v3.0/carts/${id}/clear`;
    return this.client.request("post", url, {}, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {integer} userId - path
   * @param {Object} params - additional query params
   */
  putCartsByIdUsersByUserId(id, userId, params = {}) {
    const url = `/api/v3.0/carts/${id}/users/${userId}`;
    return this.client.request("put", url, {}, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {integer} userId - path
   * @param {Object} params - additional query params
   */
  deleteCartsByIdUsersByUserId(id, userId, params = {}) {
    const url = `/api/v3.0/carts/${id}/users/${userId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {integer} userId - path
   * @param {integer} newUserId - path
   * @param {Object} params - additional query params
   */
  putCartsByIdUsersByUserIdSwapByNewUserId(id, userId, newUserId, params = {}) {
    const url = `/api/v3.0/carts/${id}/users/${userId}/swap/${newUserId}`;
    return this.client.request("put", url, {}, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {string} data.code -
   * @param {Object} params - additional query params
   */
  putCartsByIdPromotion(id, data = {}, params = {}) {
    const url = `/api/v3.0/carts/${id}/promotion`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {Object} params - additional query params
   */
  deleteCartsByIdPromotion(id, params = {}) {
    const url = `/api/v3.0/carts/${id}/promotion`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {integer} userId - path
   * @param {number} data.quantity - Quantity.
   * @param {integer} data.productId - Product id.
   * @param {number} data.unitPrice - Custom unit price.
   * @param {integer} data.payType - Pay type.
   * @param {string} data.mark - Product mark.
   * @param {Object} params - additional query params
   */
  postCartsByIdEntriesUsersByUserId(id, userId, data = {}, params = {}) {
    const url = `/api/v3.0/carts/${id}/entries/users/${userId}`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {integer} userId - path
   * @param {number} data.amount - Deposit amount.
   * @param {Object} params - additional query params
   */
  postCartsByIdEntriesUsersByUserIdDeposit(id, userId, data = {}, params = {}) {
    const url = `/api/v3.0/carts/${id}/entries/users/${userId}/deposit`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {string} entryId - path
   * @param {Object} params - additional query params
   */
  deleteCartsByIdEntriesByEntryId(id, entryId, params = {}) {
    const url = `/api/v3.0/carts/${id}/entries/${entryId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {string} entryId - path
   * @param {number} quantity - path
   * @param {Object} params - additional query params
   */
  putCartsByIdEntriesByEntryIdQuantityByQuantity(
    id,
    entryId,
    quantity,
    params = {},
  ) {
    const url = `/api/v3.0/carts/${id}/entries/${entryId}/quantity/${quantity}`;
    return this.client.request("put", url, {}, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {string} entryId - path
   * @param {number} price - path
   * @param {Object} params - additional query params
   */
  putCartsByIdEntriesByEntryIdPriceByPrice(id, entryId, price, params = {}) {
    const url = `/api/v3.0/carts/${id}/entries/${entryId}/price/${price}`;
    return this.client.request("put", url, {}, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {string} entryId - path
   * @param {integer} price - path
   * @param {Object} params - additional query params
   */
  putCartsByIdEntriesByEntryIdPricePointsByPrice(
    id,
    entryId,
    price,
    params = {},
  ) {
    const url = `/api/v3.0/carts/${id}/entries/${entryId}/price/points/${price}`;
    return this.client.request("put", url, {}, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {string} entryId - path
   * @param {integer} payType - path
   * @param {Object} params - additional query params
   */
  putCartsByIdEntriesByEntryIdPaymenttypeByPayType(
    id,
    entryId,
    payType,
    params = {},
  ) {
    const url = `/api/v3.0/carts/${id}/entries/${entryId}/paymenttype/${payType}`;
    return this.client.request("put", url, {}, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {integer} userId - path
   * @param {Object} params - additional query params
   */
  putCartsByIdUsersByUserIdNote(id, userId, params = {}) {
    const url = `/api/v3.0/carts/${id}/users/${userId}/note`;
    return this.client.request("put", url, {}, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {boolean} data.invoice - Indicates that invoice should be created.
   * @param {integer} data.hostId - Order host id.
   * @param {boolean} data.disableReceiptPrinting - Disable receipt printing.
   * @param {boolean} data.autoComplete - Enables auto completion.
   * @param {Object} params - additional query params
   */
  postCartsByIdAccept(id, data = {}, params = {}) {
    const url = `/api/v3.0/carts/${id}/accept`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {integer} data.paymentMethodId - Payment method id.
   * @param {number} data.amount - Payment amount.
   * @param {number} data.receivedAmount - Optional payment received amount.
   * @param {Object} params - additional query params
   */
  postCartsByIdPayments(id, data = {}, params = {}) {
    const url = `/api/v3.0/carts/${id}/payments`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {integer} paymentMethodId - path
   * @param {Object} params - additional query params
   */
  deleteCartsByIdPaymentsByPaymentMethodId(id, paymentMethodId, params = {}) {
    const url = `/api/v3.0/carts/${id}/payments/${paymentMethodId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {Object} params - additional query params
   */
  getCartsByIdState(id, options = {}, params = {}) {
    const url = `/api/v3.0/carts/${id}/state`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {string} id - path
   * @param {Object} params - additional query params
   */
  getCartsByIdPaymentsState(id, options = {}, params = {}) {
    const url = `/api/v3.0/carts/${id}/payments/state`;
    return this.client.request("get", url, {}, params);
  }
}
