import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Stock {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Returns all stock transactions.
   */
  getStockApiStock(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; productId?: number; sourceProductId?: number; type?: any; amount?: number; onHand?: number; sourceProductAmount?: number; sourceProductOnHand?: number; isVoided?: boolean; shiftId?: number; registerId?: number }>>> {
    const url = `/api/stock`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns stock level for specified product.
   */
  getStockApiStockByProductId(productId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<number>> {
    const url = `/api/stock/${productId}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Adds specified amount to product stock level
   */
  putStockApiStockByProductIdByAmount(productId: string | number, amount: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; productId?: number; sourceProductId?: number; type?: any; amount?: number; onHand?: number; sourceProductAmount?: number; sourceProductOnHand?: number; isVoided?: boolean; shiftId?: number; registerId?: number }>> {
    const url = `/api/stock/${productId}/${amount}`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Removes specified amount from product stock level.
   */
  deleteStockApiStockByProductIdByAmount(productId: string | number, amount: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; productId?: number; sourceProductId?: number; type?: any; amount?: number; onHand?: number; sourceProductAmount?: number; sourceProductOnHand?: number; isVoided?: boolean; shiftId?: number; registerId?: number }>> {
    const url = `/api/stock/${productId}/${amount}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Set specified amount as product stock level.
   */
  postStockApiStockByProductIdByAmount(productId: string | number, amount: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; productId?: number; sourceProductId?: number; type?: any; amount?: number; onHand?: number; sourceProductAmount?: number; sourceProductOnHand?: number; isVoided?: boolean; shiftId?: number; registerId?: number }>> {
    const url = `/api/stock/${productId}/${amount}`;
    return this.client.request('post', url, {}, params);
  }
}
