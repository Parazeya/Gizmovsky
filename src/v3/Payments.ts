import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Payments {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getPaymentsTransactions
   */
  getPaymentsTransactions(options: { paginationPageNumber?: any; paginationPageSize?: any; paginationSortBy?: string; paginationIsAsc?: boolean; expand?: string[]; dateFrom?: string; dateTo?: string; shiftId?: any; registerId?: any; operatorId?: any; userId?: any; paymentMethodId?: any; paymentDirection?: any; invoiceTransactions?: boolean; depositTransactions?: boolean; registerTransactions?: boolean; branchId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; totalItems?: any; totalPages?: any }>> {
    const url = `/api/v3/payments/transactions`;
    const query: Record<string, any> = { ...params };
    if (options.paginationPageNumber !== undefined) query['Pagination.PageNumber'] = options.paginationPageNumber;
    if (options.paginationPageSize !== undefined) query['Pagination.PageSize'] = options.paginationPageSize;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.shiftId !== undefined) query['ShiftId'] = options.shiftId;
    if (options.registerId !== undefined) query['RegisterId'] = options.registerId;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.paymentMethodId !== undefined) query['PaymentMethodId'] = options.paymentMethodId;
    if (options.paymentDirection !== undefined) query['PaymentDirection'] = options.paymentDirection;
    if (options.invoiceTransactions !== undefined) query['InvoiceTransactions'] = options.invoiceTransactions;
    if (options.depositTransactions !== undefined) query['DepositTransactions'] = options.depositTransactions;
    if (options.registerTransactions !== undefined) query['RegisterTransactions'] = options.registerTransactions;
    if (options.branchId !== undefined) query['BranchId'] = options.branchId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getPaymentsTransactionsStats
   */
  getPaymentsTransactionsStats(options: { dateFrom?: string; dateTo?: string; branchId?: any; shiftId?: any; registerId?: any; operatorId?: any; userId?: any; paymentMethodId?: any; paymentDirection?: any; invoiceTransactions?: boolean; depositTransactions?: boolean; registerTransactions?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ incoming?: any[]; outgoing?: any[]; outstanding?: any }>> {
    const url = `/api/v3/payments/transactions/stats`;
    const query: Record<string, any> = { ...params };
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.branchId !== undefined) query['BranchId'] = options.branchId;
    if (options.shiftId !== undefined) query['ShiftId'] = options.shiftId;
    if (options.registerId !== undefined) query['RegisterId'] = options.registerId;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.paymentMethodId !== undefined) query['PaymentMethodId'] = options.paymentMethodId;
    if (options.paymentDirection !== undefined) query['PaymentDirection'] = options.paymentDirection;
    if (options.invoiceTransactions !== undefined) query['InvoiceTransactions'] = options.invoiceTransactions;
    if (options.depositTransactions !== undefined) query['DepositTransactions'] = options.depositTransactions;
    if (options.registerTransactions !== undefined) query['RegisterTransactions'] = options.registerTransactions;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postPaymentsByIdReverse
   */
  postPaymentsByIdReverse(id: string | number, data: { void?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/payments/${id}/reverse`;
    return this.client.request('post', url, data, params);
  }
}
