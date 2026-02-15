import { GizmoClient } from "../GizmoClient.js";

export class DepositPayments {
  constructor(client) {
    this.client = client;
  }

  /**
   *
   * @param {integer} userId - path
   * @param {number} data.amount - Deposit amount.
   * @param {integer} data.paymentMethodId - Payment method id.
   * @param {boolean} data.disableReceiptPrinting - Disable receipt printing.
   * @param {Object} params - additional query params
   */
  postDepositPaymentsUserByUserId(userId, data = {}, params = {}) {
    const url = `/api/v3.0/depositpayments/user/${userId}`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {integer} data.refundMethodId - Refund payment method method.
   * @param {number} data.refundAmount - Refund amount.
   * @param {boolean} data.disableReceiptPrinting - Disable receipt printing.
   * @param {Object} params - additional query params
   */
  putDepositPaymentsByIdVoid(id, data = {}, params = {}) {
    const url = `/api/v3.0/depositpayments/${id}/void`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {Object} params - additional query params
   */
  getDepositPaymentsByIdRefundState(id, options = {}, params = {}) {
    const url = `/api/v3.0/depositpayments/${id}/refund/state`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {Object} params - additional query params
   */
  getDepositPaymentsByIdReceiptWait(id, options = {}, params = {}) {
    const url = `/api/v3.0/depositpayments/${id}/receipt/wait`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {Object} params - additional query params
   */
  getDepositPaymentsByIdRefundReceiptWait(id, options = {}, params = {}) {
    const url = `/api/v3.0/depositpayments/${id}/refund/receipt/wait`;
    return this.client.request("get", url, {}, params);
  }
}
