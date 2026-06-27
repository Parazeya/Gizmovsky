import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class ProductOrders {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getProductOrders
   */
  getProductOrders(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; dateFrom?: string; dateTo?: string; status?: any; userId?: any; hostId?: any; invoiceStatus?: any; registerId?: any; branchId?: any; isDelivered?: boolean; shiftId?: any; operatorId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/productorders`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.status !== undefined) query['Status'] = options.status;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.hostId !== undefined) query['HostId'] = options.hostId;
    if (options.invoiceStatus !== undefined) query['InvoiceStatus'] = options.invoiceStatus;
    if (options.registerId !== undefined) query['RegisterId'] = options.registerId;
    if (options.branchId !== undefined) query['BranchId'] = options.branchId;
    if (options.isDelivered !== undefined) query['IsDelivered'] = options.isDelivered;
    if (options.shiftId !== undefined) query['ShiftId'] = options.shiftId;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getProductOrdersById
   */
  getProductOrdersById(id: string | number, options: { expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; shiftId?: any; registerId?: any; branchId?: any; hostId?: any; userId?: any; createdById?: any; subTotal?: any; taxTotal?: any; total?: any; outstanding?: any; voidStatus?: number; paymentStatus?: number; deliveryStatus?: number; refundStatus?: number; status?: number; date?: string; paymentExpected?: boolean; preferredPaymentMethodId?: any; source?: number; hasNote?: boolean; discount?: any; pointsTotal?: any }>> {
    const url = `/api/v3/productorders/${id}`;
    const query: Record<string, any> = { ...params };
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getProductOrdersActive
   */
  getProductOrdersActive(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/productorders/active`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getProductOrdersByIdActive
   */
  getProductOrdersByIdActive(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ orderId?: any; invoiceId?: any; userId?: any; hostId?: any; total?: any; createdTime?: string; status?: number; paymentStatus?: number; isDelivered?: boolean }>> {
    const url = `/api/v3/productorders/${id}/active`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putProductOrdersByIdProcess
   */
  putProductOrdersByIdProcess(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/productorders/${id}/process`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putProductOrdersByIdComplete
   */
  putProductOrdersByIdComplete(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/productorders/${id}/complete`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putProductOrdersByIdCancel
   */
  putProductOrdersByIdCancel(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/productorders/${id}/cancel`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * getProductOrdersByIdDelivered
   */
  getProductOrdersByIdDelivered(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ isDelivered?: boolean; deliveredTime?: any }>> {
    const url = `/api/v3/productorders/${id}/delivered`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putProductOrdersByIdDelivered
   */
  putProductOrdersByIdDelivered(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/productorders/${id}/delivered`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * getProductOrdersOrderlinesByOrderLineIdDelivered
   */
  getProductOrdersOrderlinesByOrderLineIdDelivered(orderLineId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ quantity?: any; deliveredQuantity?: any; isDelivered?: boolean; deliveredTime?: any }>> {
    const url = `/api/v3/productorders/orderlines/${orderLineId}/delivered`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getProductOrdersByIdOrderlinesDelivered
   */
  getProductOrdersByIdOrderlinesDelivered(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ quantity?: any; deliveredQuantity?: any; isDelivered?: boolean; deliveredTime?: any }>>> {
    const url = `/api/v3/productorders/${id}/orderlines/delivered`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putProductOrdersOrderlinesByOrderLineIdDeliveredByQuantity
   */
  putProductOrdersOrderlinesByOrderLineIdDeliveredByQuantity(orderLineId: string | number, quantity: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/productorders/orderlines/${orderLineId}/delivered/${quantity}`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * getProductOrdersProductsByProductIdUsersByUserIdQuantityByQuantityPrice
   */
  getProductOrdersProductsByProductIdUsersByUserIdQuantityByQuantityPrice(userId: string | number, productId: string | number, quantity: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ unitPrice?: any; totalPrice?: any; unitPointsPrice?: any; totalPointsPrice?: any; purchaseOptions?: number }>> {
    const url = `/api/v3/productorders/products/${productId}/users/${userId}/quantity/${quantity}/price`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getProductOrdersProductsByProductIdQuantityByQuantityPrice
   */
  getProductOrdersProductsByProductIdQuantityByQuantityPrice(productId: string | number, quantity: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ unitPrice?: any; totalPrice?: any; unitPointsPrice?: any; totalPointsPrice?: any; purchaseOptions?: number }>> {
    const url = `/api/v3/productorders/products/${productId}/quantity/${quantity}/price`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getProductOrdersProductsByProductIdUsergroupsByUserGroupIdQuantityByQuantityPrice
   */
  getProductOrdersProductsByProductIdUsergroupsByUserGroupIdQuantityByQuantityPrice(productId: string | number, quantity: string | number, userGroupId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ unitPrice?: any; totalPrice?: any; unitPointsPrice?: any; totalPointsPrice?: any; purchaseOptions?: number }>> {
    const url = `/api/v3/productorders/products/${productId}/usergroups/${userGroupId}/quantity/${quantity}/price`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putProductOrdersOrderlinesMark
   */
  putProductOrdersOrderlinesMark(data: { productOrderLineId?: any; mark?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/productorders/orderlines/mark`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getProductOrdersOrderlinesBymark
   */
  getProductOrdersOrderlinesBymark(options: { mark?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<any>> {
    const url = `/api/v3/productorders/orderlines/by-mark`;
    const query: Record<string, any> = { ...params };
    if (options.mark !== undefined) query['mark'] = options.mark;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getProductOrdersByIdPaymentsMethodsAllowed
   */
  getProductOrdersByIdPaymentsMethodsAllowed(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ allowedPaymentMethods?: any[]; multiMethodAllowed?: boolean; minimumPayment?: any }>> {
    const url = `/api/v3/productorders/${id}/payments/methods/allowed`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postProductOrdersByIdPayments
   */
  postProductOrdersByIdPayments(id: string | number, data: { payments?: any[]; disableReceiptPrinting?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ payments?: any[]; invoices?: any[]; expectedPayment?: any }>> {
    const url = `/api/v3/productorders/${id}/payments`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getProductOrdersByIdPayments
   */
  getProductOrdersByIdPayments(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<any>>> {
    const url = `/api/v3/productorders/${id}/payments`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getProductOrdersIntentsByIdentifierPaymentsMethodsAllowed
   */
  getProductOrdersIntentsByIdentifierPaymentsMethodsAllowed(identifier: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ allowedPaymentMethods?: any[]; multiMethodAllowed?: boolean; minimumPayment?: any }>> {
    const url = `/api/v3/productorders/intents/${identifier}/payments/methods/allowed`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postProductOrdersIntentsByIdentifierPayments
   */
  postProductOrdersIntentsByIdentifierPayments(identifier: string | number, data: { payments?: any[]; disableReceiptPrinting?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ payments?: any[]; invoices?: any[]; depositPayments?: any[]; expectedPayment?: any }>> {
    const url = `/api/v3/productorders/intents/${identifier}/payments`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getProductOrdersIntentsByIdentifierState
   */
  getProductOrdersIntentsByIdentifierState(identifier: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ subTotal?: any; taxTotal?: any; feeTotal?: any; discountTotal?: any; pointsTotal?: any; total?: any; outstanding?: any; outstandingPoints?: any; users?: any[]; intentState?: number; intentAmount?: any; disableReceiptPrinting?: boolean }>> {
    const url = `/api/v3/productorders/intents/${identifier}/state`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getProductOrdersByIdLines
   */
  getProductOrdersByIdLines(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<any>>> {
    const url = `/api/v3/productorders/${id}/lines`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getProductOrdersByIdNote
   */
  getProductOrdersByIdNote(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<string>> {
    const url = `/api/v3/productorders/${id}/note`;
    return this.client.request('get', url, {}, params);
  }
}
