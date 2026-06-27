import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Invoices {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getInvoices
   */
  getInvoices(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; dateFrom?: string; dateTo?: string; isVoided?: boolean; userId?: any; expand?: string[]; status?: any; productOrderId?: any; operatorId?: any; branchId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/invoices`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.isVoided !== undefined) query['IsVoided'] = options.isVoided;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.status !== undefined) query['Status'] = options.status;
    if (options.productOrderId !== undefined) query['ProductOrderId'] = options.productOrderId;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.branchId !== undefined) query['BranchId'] = options.branchId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getInvoicesById
   */
  getInvoicesById(id: string | number, options: { expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; date?: string; orderId?: any; userId?: any; status?: number; subTotal?: any; taxTotal?: any; total?: any; outstanding?: any; pointsTotal?: any; outstandingPoints?: any; operatorId?: any; shiftId?: any; registerId?: any; isVoided?: boolean; invoiceLines?: any[]; invoicePayments?: any[]; invoiceRefunds?: any[]; branchId?: any; hostId?: any }>> {
    const url = `/api/v3/invoices/${id}`;
    const query: Record<string, any> = { ...params };
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * putInvoicesByIdVoid
   */
  putInvoicesByIdVoid(id: string | number, data: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ receiptPrintStatus?: number }>> {
    const url = `/api/v3/invoices/${id}/void`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getInvoicesLinesByInvoiceLineIdQuantity
   */
  getInvoicesLinesByInvoiceLineIdQuantity(invoiceLineId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/invoices/lines/${invoiceLineId}/quantity`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postInvoicesUsersByUserIdUsagesessionActiveInvoice
   */
  postInvoicesUsersByUserIdUsagesessionActiveInvoice(userId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ invoiceId?: any }>> {
    const url = `/api/v3/invoices/users/${userId}/usagesession/active/invoice`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * postInvoicesBalanceClose
   */
  postInvoicesBalanceClose(data: { payments?: any[]; invoices?: any[]; disableReceiptPrinting?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ payments?: any[]; expectedPayment?: any; invoices?: any[] }>> {
    const url = `/api/v3/invoices/balance/close`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postInvoicesBalanceClosePaymentsState
   */
  postInvoicesBalanceClosePaymentsState(data: { invoices?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ allowedPaymentMethods?: any[]; multiMethodAllowed?: boolean; minimumPayment?: any }>> {
    const url = `/api/v3/invoices/balance/close/payments/state`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postInvoicesByIdPayments
   */
  postInvoicesByIdPayments(id: string | number, data: { payments?: any[]; disableReceiptPrinting?: boolean; autoComplete?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ payments?: any[]; expectedPayment?: any; receiptPrintStatus?: number }>> {
    const url = `/api/v3/invoices/${id}/payments`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getInvoicesByIdPayments
   */
  getInvoicesByIdPayments(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<any>>> {
    const url = `/api/v3/invoices/${id}/payments`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getInvoicesByIdRefundState
   */
  getInvoicesByIdRefundState(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ maxRefundAmount?: any; refundMethods?: any[]; requireOriginalTender?: boolean; allowPartial?: boolean }>> {
    const url = `/api/v3/invoices/${id}/refund/state`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getInvoicesByIdSaleReceiptWait
   */
  getInvoicesByIdSaleReceiptWait(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ status?: number; receipts?: any[]; errors?: string[] }>> {
    const url = `/api/v3/invoices/${id}/sale/receipt/wait`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getInvoicesByIdRefundReceiptWait
   */
  getInvoicesByIdRefundReceiptWait(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ status?: number; receipts?: any[]; errors?: string[] }>> {
    const url = `/api/v3/invoices/${id}/refund/receipt/wait`;
    return this.client.request('get', url, {}, params);
  }
}
