import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class DepositPayments {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * putDepositPaymentsByIdVoid
   */
  putDepositPaymentsByIdVoid(id: string | number, data: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ receiptPrintStatus?: number; refundId?: any }>> {
    const url = `/api/v3/depositpayments/${id}/void`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getDepositPaymentsByIdRefundState
   */
  getDepositPaymentsByIdRefundState(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ maxRefundAmount?: any; refundMethods?: any[]; requireOriginalTender?: boolean; allowPartial?: boolean }>> {
    const url = `/api/v3/depositpayments/${id}/refund/state`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getDepositPaymentsByIdReceiptWait
   */
  getDepositPaymentsByIdReceiptWait(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ status?: number; receipts?: any[]; errors?: string[] }>> {
    const url = `/api/v3/depositpayments/${id}/receipt/wait`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getDepositPaymentsByIdRefundReceiptWait
   */
  getDepositPaymentsByIdRefundReceiptWait(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ status?: number; receipts?: any[]; errors?: string[] }>> {
    const url = `/api/v3/depositpayments/${id}/refund/receipt/wait`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putDepositPaymentsUsersByUserIdWithdraw
   */
  putDepositPaymentsUsersByUserIdWithdraw(userId: string | number, data: { amount?: any; refundPaymentMethodId?: any; note?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/depositpayments/users/${userId}/withdraw`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getDepositPaymentsUsersByUserIdWithdrawState
   */
  getDepositPaymentsUsersByUserIdWithdrawState(userId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ allowedPaymentMethods?: any[]; maximumAmount?: any }>> {
    const url = `/api/v3/depositpayments/users/${userId}/withdraw/state`;
    return this.client.request('get', url, {}, params);
  }
}
