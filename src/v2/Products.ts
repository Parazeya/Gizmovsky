import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Products {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Get all products.
   */
  getProducts(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; productType?: any; productGroupId?: number; productName?: string; isDeleted?: boolean; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/products`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.productType !== undefined) query['ProductType'] = options.productType;
    if (options.productGroupId !== undefined) query['ProductGroupId'] = options.productGroupId;
    if (options.productName !== undefined) query['ProductName'] = options.productName;
    if (options.isDeleted !== undefined) query['IsDeleted'] = options.isDeleted;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Create a product.
   */
  postProducts(data: { productType?: any; productGroupId?: number; name?: string; description?: string; price?: number; cost?: number; disallowClientOrder?: boolean; restrictGuestSale?: boolean; restrictSale?: boolean; purchaseOptions?: any; points?: number; pointsPrice?: number; barcode?: string; enableStock?: boolean; disallowSaleIfOutOfStock?: boolean; stockAlert?: boolean; stockAlertThreshold?: number; stockTargetDifferentProduct?: boolean; stockTargetProductId?: number; stockProductAmount?: number; isDeleted?: boolean; isService?: boolean; displayOrder?: number; timeProduct?: any; bundle?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/products`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update a product.
   */
  putProducts(data: { id?: number; productGroupId?: number; name?: string; description?: string; price?: number; cost?: number; disallowClientOrder?: boolean; restrictGuestSale?: boolean; restrictSale?: boolean; purchaseOptions?: any; points?: number; pointsPrice?: number; barcode?: string; enableStock?: boolean; disallowSaleIfOutOfStock?: boolean; stockAlert?: boolean; stockAlertThreshold?: number; stockTargetDifferentProduct?: boolean; stockTargetProductId?: number; stockProductAmount?: number; isDeleted?: boolean; isService?: boolean; displayOrder?: number; timeProduct?: any; bundle?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/products`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get a product by id.
   */
  getProductsById(id: string | number, options: { expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; productType?: any; guid?: string; productTaxes?: any[]; productImages?: any[]; productPurchaseAvailability?: any; productGroupId?: number; name?: string; description?: string; price?: number; cost?: number; disallowClientOrder?: boolean; restrictGuestSale?: boolean; restrictSale?: boolean; purchaseOptions?: any; points?: number; pointsPrice?: number; barcode?: string; enableStock?: boolean; disallowSaleIfOutOfStock?: boolean; stockAlert?: boolean; stockAlertThreshold?: number; stockTargetDifferentProduct?: boolean; stockTargetProductId?: number; stockProductAmount?: number; isDeleted?: boolean; isService?: boolean; displayOrder?: number; timeProduct?: any; bundle?: any; createdTime?: string }>> {
    const url = `/api/v2.0/products/${id}`;
    const query: Record<string, any> = { ...params };
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Delete a product.
   */
  deleteProductsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/products/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Get product purchase availability.
   */
  getProductsByIdPurchaseavailability(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ dateRange?: boolean; startDate?: string; endDate?: string; timeRange?: boolean; daysAvailable?: any[] }>> {
    const url = `/api/v2.0/products/${id}/purchaseavailability`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Update product purchase availability.
   */
  putProductsByIdPurchaseavailability(id: string | number, data: { dateRange?: boolean; startDate?: string; endDate?: string; timeRange?: boolean; daysAvailable?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/products/${id}/purchaseavailability`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get the images of the specified product.
   */
  getProductsByIdImages(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; productId?: number; image?: string }>>> {
    const url = `/api/v2.0/products/${id}/images`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Create a product image.
   */
  postProductsByIdImages(id: string | number, data: { image?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/products/${id}/images`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update a product image.
   */
  putProductsImages(data: { id?: number; productId?: number; image?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/products/images`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Delete a product image.
   */
  deleteProductsByIdImagesByProductImageId(id: string | number, productImageId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/products/${id}/images/${productImageId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Get the user prices of the specified product.
   */
  getProductsByIdUserprices(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; productId?: number; userGroupId?: number; price?: number; pointsPrice?: number; purchaseOptions?: any; isEnabled?: boolean }>>> {
    const url = `/api/v2.0/products/${id}/userprices`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Create a product user price.
   */
  postProductsByIdUserprices(id: string | number, data: { userGroupId?: number; price?: number; pointsPrice?: number; purchaseOptions?: any; isEnabled?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/products/${id}/userprices`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update a product user price.
   */
  putProductsUserprices(data: { id?: number; productId?: number; userGroupId?: number; price?: number; pointsPrice?: number; purchaseOptions?: any; isEnabled?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/products/userprices`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Delete a product user price.
   */
  deleteProductsByIdUserpricesByUserPriceId(id: string | number, userPriceId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/products/${id}/userprices/${userPriceId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Get disallowed user groups of the specified product.
   */
  getProductsByIdDisallowedusergroups(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; productId?: number; userGroupId?: number; isDisallowed?: boolean }>>> {
    const url = `/api/v2.0/products/${id}/disallowedusergroups`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Create a disallowed user group.
   */
  postProductsByIdDisallowedusergroups(id: string | number, data: { userGroupId?: number; isDisallowed?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/products/${id}/disallowedusergroups`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update a disallowed user group.
   */
  putProductsDisallowedusergroups(data: { id?: number; productId?: number; userGroupId?: number; isDisallowed?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/products/disallowedusergroups`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Delete a disallowed user group.
   */
  deleteProductsByIdDisallowedusergroupsByProductDisallowedUserGroupId(id: string | number, productDisallowedUserGroupId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/products/${id}/disallowedusergroups/${productDisallowedUserGroupId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Get the bundled products of the specified bundle.
   */
  getProductsBundleByIdBundledproducts(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; productId?: number; quantity?: number; unitPrice?: number }>>> {
    const url = `/api/v2.0/products/bundle/${id}/bundledproducts`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Create a bundled product.
   */
  postProductsBundleByIdBundledproducts(id: string | number, data: { productId?: number; quantity?: number; unitPrice?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/products/bundle/${id}/bundledproducts`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update a bundled product.
   */
  putProductsBundleBundledproducts(data: { id?: number; productId?: number; quantity?: number; unitPrice?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/products/bundle/bundledproducts`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Delete a bundled product.
   */
  deleteProductsBundleByIdBundledproductsByBundledProductId(id: string | number, bundledProductId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/products/bundle/${id}/bundledproducts/${bundledProductId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Get the user prices of the specified bundled product.
   */
  getProductsBundleByIdBundledproductsByBundledProductIdUserprices(id: string | number, bundledProductId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; bundledProductId?: number; userGroupId?: number; price?: number }>>> {
    const url = `/api/v2.0/products/bundle/${id}/bundledproducts/${bundledProductId}/userprices`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Create a bundled product user price.
   */
  postProductsBundleByIdBundledproductsByBundledProductIdUserprices(id: string | number, bundledProductId: string | number, data: { userGroupId?: number; price?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/products/bundle/${id}/bundledproducts/${bundledProductId}/userprices`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update a bundled product user price.
   */
  putProductsBundleBundledproductsUserprices(data: { id?: number; bundledProductId?: number; userGroupId?: number; price?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/products/bundle/bundledproducts/userprices`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Delete a bundled product user price.
   */
  deleteProductsBundleByIdBundledproductsByBundledProductIdUserpricesByUserPriceId(id: string | number, bundledProductId: string | number, userPriceId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/products/bundle/${id}/bundledproducts/${bundledProductId}/userprices/${userPriceId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Get time product usage availability.
   */
  getProductsTimeByIdUsageavailability(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ dateRange?: boolean; startDate?: string; endDate?: string; timeRange?: boolean; daysAvailable?: any[] }>> {
    const url = `/api/v2.0/products/time/${id}/usageavailability`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Update time product usage availability.
   */
  putProductsTimeByIdUsageavailability(id: string | number, data: { dateRange?: boolean; startDate?: string; endDate?: string; timeRange?: boolean; daysAvailable?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/products/time/${id}/usageavailability`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get disallowed host groups of the specified time product.
   */
  getProductsTimeByIdDisallowedhostgroups(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; timeProductId?: number; hostGroupId?: number; isDisallowed?: boolean }>>> {
    const url = `/api/v2.0/products/time/${id}/disallowedhostgroups`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Create a disallowed host group.
   */
  postProductsTimeByIdDisallowedhostgroups(id: string | number, data: { hostGroupId?: number; isDisallowed?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/products/time/${id}/disallowedhostgroups`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update a disallowed host group.
   */
  putProductsTimeDisallowedhostgroups(data: { id?: number; timeProductId?: number; hostGroupId?: number; isDisallowed?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/products/time/disallowedhostgroups`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Delete a disallowed host group.
   */
  deleteProductsTimeByIdDisallowedhostgroupsByTimeProductDisallowedHostGroupId(id: string | number, timeProductDisallowedHostGroupId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/products/time/${id}/disallowedhostgroups/${timeProductDisallowedHostGroupId}`;
    return this.client.request('delete', url, {}, params);
  }
}
