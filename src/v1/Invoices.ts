import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Invoices {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Returns invoices.
   */
  getInvoicesApiInvoices(options: { userId?: number; status?: any; start?: string; end?: string; isVoided?: boolean; max?: number; skip?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ createdById?: number; createdByUsername?: string; createdTime?: string; modifiedById?: number; modifiedByUsername?: string; modifiedTime?: string; productOrderId?: number; status?: any; subTotal?: number; pointsTotal?: number; taxTotal?: number; total?: number; outstanding?: number; outstandngPoints?: number; shiftId?: number; registerId?: number; isVoided?: boolean }>>> {
    const url = `/api/invoices`;
    const query: Record<string, any> = { ...params };
    if (options.userId !== undefined) query['userId'] = options.userId;
    if (options.status !== undefined) query['status'] = options.status;
    if (options.start !== undefined) query['start'] = options.start;
    if (options.end !== undefined) query['end'] = options.end;
    if (options.isVoided !== undefined) query['isVoided'] = options.isVoided;
    if (options.max !== undefined) query['max'] = options.max;
    if (options.skip !== undefined) query['skip'] = options.skip;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns invoice by id.
   */
  getInvoicesApiInvoicesByInvoiceId(invoiceId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ createdById?: number; createdByUsername?: string; createdTime?: string; modifiedById?: number; modifiedByUsername?: string; modifiedTime?: string; productOrderId?: number; status?: any; subTotal?: number; pointsTotal?: number; taxTotal?: number; total?: number; outstanding?: number; outstandngPoints?: number; shiftId?: number; registerId?: number; isVoided?: boolean }>> {
    const url = `/api/invoices/${invoiceId}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Voids invoice by id without refund.
   */
  deleteInvoicesApiInvoicesVoidByInvoiceId(invoiceId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ createdById?: number; createdByUsername?: string; createdTime?: string; modifiedById?: number; modifiedByUsername?: string; modifiedTime?: string; productOrderId?: number; status?: any; subTotal?: number; pointsTotal?: number; taxTotal?: number; total?: number; outstanding?: number; outstandngPoints?: number; shiftId?: number; registerId?: number; isVoided?: boolean }>> {
    const url = `/api/invoices/void/${invoiceId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Voids invoice by id with specific refund method.
   */
  deleteInvoicesApiInvoicesVoidByInvoiceIdByRefundMethod(invoiceId: string | number, refundMethod: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ createdById?: number; createdByUsername?: string; createdTime?: string; modifiedById?: number; modifiedByUsername?: string; modifiedTime?: string; productOrderId?: number; status?: any; subTotal?: number; pointsTotal?: number; taxTotal?: number; total?: number; outstanding?: number; outstandngPoints?: number; shiftId?: number; registerId?: number; isVoided?: boolean }>> {
    const url = `/api/invoices/void/${invoiceId}/${refundMethod}`;
    return this.client.request('delete', url, {}, params);
  }
}
