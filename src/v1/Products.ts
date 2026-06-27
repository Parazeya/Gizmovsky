import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Products {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Returns all products.
   */
  getProductsApiProducts(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; name?: string; description?: string; price?: number; cost?: number; orderOptions?: any; purchaseOptions?: any; points?: number; pointsPrice?: number; barcode?: string; stockOptions?: any; stockAlert?: number; stockProductId?: number; stockProductAmount?: number; isDeleted?: boolean; productGroupId?: number; displayOrder?: number; guid?: string }>>> {
    const url = `/api/products`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns product with specified id.
   */
  getProductsApiProductsByProductId(productId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; name?: string; description?: string; price?: number; cost?: number; orderOptions?: any; purchaseOptions?: any; points?: number; pointsPrice?: number; barcode?: string; stockOptions?: any; stockAlert?: number; stockProductId?: number; stockProductAmount?: number; isDeleted?: boolean; productGroupId?: number; displayOrder?: number; guid?: string }>> {
    const url = `/api/products/${productId}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns time products.
   */
  getProductsApiProductsTime(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; name?: string; description?: string; price?: number; cost?: number; orderOptions?: any; purchaseOptions?: any; points?: number; pointsPrice?: number; barcode?: string; stockOptions?: any; stockAlert?: number; stockProductId?: number; stockProductAmount?: number; isDeleted?: boolean; productGroupId?: number; displayOrder?: number; guid?: string; minutes?: number; weekDayMaxMinutes?: number; weekEndMaxMinutes?: number; appGroupId?: number; expiresAfter?: number; expirationOptions?: any; expireFromOptions?: any; usageOptions?: any; useOrder?: number; expireAfterType?: any; expireAtDayTimeMinute?: number }>>> {
    const url = `/api/products/time`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Return time product with specified id.
   */
  getProductsApiProductsTimeByTimeProductId(timeProductId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; createdById?: number; createdTime?: string; modifiedById?: number; modifiedTime?: string; name?: string; description?: string; price?: number; cost?: number; orderOptions?: any; purchaseOptions?: any; points?: number; pointsPrice?: number; barcode?: string; stockOptions?: any; stockAlert?: number; stockProductId?: number; stockProductAmount?: number; isDeleted?: boolean; productGroupId?: number; displayOrder?: number; guid?: string; minutes?: number; weekDayMaxMinutes?: number; weekEndMaxMinutes?: number; appGroupId?: number; expiresAfter?: number; expirationOptions?: any; expireFromOptions?: any; usageOptions?: any; useOrder?: number; expireAfterType?: any; expireAtDayTimeMinute?: number }>> {
    const url = `/api/products/time/${timeProductId}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns disallowed host groups for specified time product.
   */
  getProductsApiProductsTimeByTimeProductIdDisallowedhostgroups(timeProductId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<number>>> {
    const url = `/api/products/time/${timeProductId}/disallowedhostgroups`;
    return this.client.request('get', url, {}, params);
  }
}
