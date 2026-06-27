import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Carts {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * postUserCarts
   */
  postUserCarts(params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: string }>> {
    const url = `/api/user/v3/carts`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * deleteUserCartsById
   */
  deleteUserCartsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/user/v3/carts/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * postUserCartsByIdClear
   */
  postUserCartsByIdClear(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/user/v3/carts/${id}/clear`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * postUserCartsByIdEntries
   */
  postUserCartsByIdEntries(id: string | number, data: { quantity?: any; productId?: any; unitPrice?: any; payType?: number; mark?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: string }>> {
    const url = `/api/user/v3/carts/${id}/entries`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putUserCartsByIdPromotion
   */
  putUserCartsByIdPromotion(id: string | number, data: { code?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: string; promotionId?: any }>> {
    const url = `/api/user/v3/carts/${id}/promotion`;
    return this.client.request('put', url, data, params);
  }

  /**
   * deleteUserCartsByIdPromotion
   */
  deleteUserCartsByIdPromotion(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/user/v3/carts/${id}/promotion`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * deleteUserCartsByIdEntriesByEntryId
   */
  deleteUserCartsByIdEntriesByEntryId(id: string | number, entryId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/user/v3/carts/${id}/entries/${entryId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * putUserCartsByIdEntriesByEntryIdQuantityByQuantity
   */
  putUserCartsByIdEntriesByEntryIdQuantityByQuantity(id: string | number, entryId: string | number, quantity: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/user/v3/carts/${id}/entries/${entryId}/quantity/${quantity}`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putUserCartsByIdEntriesByEntryIdPaymenttypeByPayType
   */
  putUserCartsByIdEntriesByEntryIdPaymenttypeByPayType(id: string | number, entryId: string | number, payType: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/user/v3/carts/${id}/entries/${entryId}/paymenttype/${payType}`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * postUserCartsByIdAccept
   */
  postUserCartsByIdAccept(id: string | number, data: { note?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ orders?: any[]; payments?: any[]; expectedPayment?: any; depositPayments?: any[] }>> {
    const url = `/api/user/v3/carts/${id}/accept`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getUserCartsByIdState
   */
  getUserCartsByIdState(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ carts?: any[]; pointsTotal?: any; subTotal?: any; taxTotal?: any; discount?: any; total?: any; pointsAward?: any; feeTotal?: any; promotionState?: any }>> {
    const url = `/api/user/v3/carts/${id}/state`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getUserCartsByIdPaymentsState
   */
  getUserCartsByIdPaymentsState(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ allowedPaymentMethods?: any[]; multiMethodAllowed?: boolean; payments?: any[]; minimumPayment?: any; change?: any }>> {
    const url = `/api/user/v3/carts/${id}/payments/state`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putUserCartsByIdNote
   */
  putUserCartsByIdNote(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/user/v3/carts/${id}/note`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * postUserCartsByIdPaymentmethod
   */
  postUserCartsByIdPaymentmethod(id: string | number, data: { paymentMethodId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/user/v3/carts/${id}/paymentmethod`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postCarts
   */
  postCarts(data: { expireAfter?: any; disableDiscounts?: boolean; hostId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: string }>> {
    const url = `/api/v3/carts`;
    return this.client.request('post', url, data, params);
  }

  /**
   * deleteCartsById
   */
  deleteCartsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/carts/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * postCartsByIdClear
   */
  postCartsByIdClear(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/carts/${id}/clear`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * putCartsByIdUsersByUserId
   */
  putCartsByIdUsersByUserId(id: string | number, userId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/carts/${id}/users/${userId}`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * deleteCartsByIdUsersByUserId
   */
  deleteCartsByIdUsersByUserId(id: string | number, userId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/carts/${id}/users/${userId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * putCartsByIdUsersByUserIdSwapByNewUserId
   */
  putCartsByIdUsersByUserIdSwapByNewUserId(id: string | number, userId: string | number, newUserId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/carts/${id}/users/${userId}/swap/${newUserId}`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putCartsByIdPromotion
   */
  putCartsByIdPromotion(id: string | number, data: { code?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: string; promotionId?: any }>> {
    const url = `/api/v3/carts/${id}/promotion`;
    return this.client.request('put', url, data, params);
  }

  /**
   * deleteCartsByIdPromotion
   */
  deleteCartsByIdPromotion(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/carts/${id}/promotion`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * postCartsByIdEntriesUsersByUserId
   */
  postCartsByIdEntriesUsersByUserId(id: string | number, userId: string | number, data: { quantity?: any; productId?: any; unitPrice?: any; payType?: number; mark?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: string }>> {
    const url = `/api/v3/carts/${id}/entries/users/${userId}`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postCartsByIdEntriesUsersByUserIdDeposit
   */
  postCartsByIdEntriesUsersByUserIdDeposit(id: string | number, userId: string | number, data: { amount?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: string }>> {
    const url = `/api/v3/carts/${id}/entries/users/${userId}/deposit`;
    return this.client.request('post', url, data, params);
  }

  /**
   * deleteCartsByIdEntriesByEntryId
   */
  deleteCartsByIdEntriesByEntryId(id: string | number, entryId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/carts/${id}/entries/${entryId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * putCartsByIdEntriesByEntryIdQuantityByQuantity
   */
  putCartsByIdEntriesByEntryIdQuantityByQuantity(id: string | number, entryId: string | number, quantity: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/carts/${id}/entries/${entryId}/quantity/${quantity}`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putCartsByIdEntriesByEntryIdPriceByPrice
   */
  putCartsByIdEntriesByEntryIdPriceByPrice(id: string | number, entryId: string | number, price: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/carts/${id}/entries/${entryId}/price/${price}`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putCartsByIdEntriesByEntryIdPricePointsByPrice
   */
  putCartsByIdEntriesByEntryIdPricePointsByPrice(id: string | number, entryId: string | number, price: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/carts/${id}/entries/${entryId}/price/points/${price}`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putCartsByIdEntriesByEntryIdPaymenttypeByPayType
   */
  putCartsByIdEntriesByEntryIdPaymenttypeByPayType(id: string | number, entryId: string | number, payType: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/carts/${id}/entries/${entryId}/paymenttype/${payType}`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putCartsByIdUsersByUserIdNote
   */
  putCartsByIdUsersByUserIdNote(id: string | number, userId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/carts/${id}/users/${userId}/note`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * postCartsByIdAccept
   */
  postCartsByIdAccept(id: string | number, data: { invoice?: boolean; hostId?: any; disableReceiptPrinting?: boolean; autoComplete?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ orders?: any[]; payments?: any[]; expectedPayment?: any; depositPayments?: any[] }>> {
    const url = `/api/v3/carts/${id}/accept`;
    return this.client.request('post', url, data, params);
  }

  /**
   * postCartsByIdPayments
   */
  postCartsByIdPayments(id: string | number, data: { paymentMethodId?: any; amount?: any; receivedAmount?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/carts/${id}/payments`;
    return this.client.request('post', url, data, params);
  }

  /**
   * deleteCartsByIdPaymentsByPaymentMethodId
   */
  deleteCartsByIdPaymentsByPaymentMethodId(id: string | number, paymentMethodId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/carts/${id}/payments/${paymentMethodId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getCartsByIdState
   */
  getCartsByIdState(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ carts?: any[]; pointsTotal?: any; subTotal?: any; taxTotal?: any; discount?: any; total?: any; pointsAward?: any; feeTotal?: any; promotionState?: any }>> {
    const url = `/api/v3/carts/${id}/state`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getCartsByIdPaymentsState
   */
  getCartsByIdPaymentsState(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ allowedPaymentMethods?: any[]; multiMethodAllowed?: boolean; payments?: any[]; minimumPayment?: any; change?: any }>> {
    const url = `/api/v3/carts/${id}/payments/state`;
    return this.client.request('get', url, {}, params);
  }
}
