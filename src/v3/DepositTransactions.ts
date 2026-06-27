import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class DepositTransactions {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getDepositTransactions
   */
  getDepositTransactions(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; dateFrom?: string; dateTo?: string; userId?: any; expand?: string[]; type?: any; operatorId?: any; branchId?: any; paymentMethodId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/deposittransactions`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.type !== undefined) query['Type'] = options.type;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.branchId !== undefined) query['BranchId'] = options.branchId;
    if (options.paymentMethodId !== undefined) query['PaymentMethodId'] = options.paymentMethodId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getDepositTransactionsById
   */
  getDepositTransactionsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; date?: string; balance?: any; operatorId?: any; shiftId?: any; registerId?: any; userId?: any; type?: number; amount?: any; paymentMethodId?: any; isVoided?: boolean; voidDate?: any; isVoid?: boolean; depositPaymentId?: any; branchId?: any }>> {
    const url = `/api/v3/deposittransactions/${id}`;
    return this.client.request('get', url, {}, params);
  }
}
