import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Products {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getProducts
   */
  getProducts(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; productType?: any; productGroupId?: any; productName?: string; isDeleted?: boolean; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/products`;
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
   * postProducts
   */
  postProducts(data: { productType?: number; productGroupId?: any; name?: string; description?: any; price?: any; cost?: any; disallowClientOrder?: boolean; restrictGuestSale?: boolean; restrictSale?: boolean; purchaseOptions?: number; points?: any; pointsPrice?: any; barcode?: any; enableStock?: boolean; disallowSaleIfOutOfStock?: boolean; stockAlert?: boolean; stockAlertThreshold?: any; stockTargetDifferentProduct?: boolean; stockTargetProductId?: any; stockProductAmount?: any; isDeleted?: boolean; isService?: boolean; displayOrder?: any; timeProduct?: any; bundle?: any; isMarkedProduct?: boolean; isExcise?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/products`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putProducts
   */
  putProducts(data: { id?: any; productGroupId?: any; name?: string; description?: any; price?: any; cost?: any; disallowClientOrder?: boolean; restrictGuestSale?: boolean; restrictSale?: boolean; purchaseOptions?: number; points?: any; pointsPrice?: any; barcode?: any; enableStock?: boolean; disallowSaleIfOutOfStock?: boolean; stockAlert?: boolean; stockAlertThreshold?: any; stockTargetDifferentProduct?: boolean; stockTargetProductId?: any; stockProductAmount?: any; isDeleted?: boolean; isService?: boolean; displayOrder?: any; timeProduct?: any; bundle?: any; isMarkedProduct?: boolean; isExcise?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/products`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getProductsById
   */
  getProductsById(id: string | number, options: { expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; productType?: number; guid?: string; productTaxes?: any[]; productImages?: any[]; productPurchaseAvailability?: any; productGroupId?: any; name?: string; description?: any; price?: any; cost?: any; disallowClientOrder?: boolean; restrictGuestSale?: boolean; restrictSale?: boolean; purchaseOptions?: number; points?: any; pointsPrice?: any; barcode?: any; enableStock?: boolean; disallowSaleIfOutOfStock?: boolean; stockAlert?: boolean; stockAlertThreshold?: any; stockTargetDifferentProduct?: boolean; stockTargetProductId?: any; stockProductAmount?: any; isDeleted?: boolean; isService?: boolean; displayOrder?: any; timeProduct?: any; bundle?: any; createdTime?: string; isMarkedProduct?: boolean; isExcise?: boolean; branches?: any[] }>> {
    const url = `/api/v3/products/${id}`;
    const query: Record<string, any> = { ...params };
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * deleteProductsById
   */
  deleteProductsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/products/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * putProductsByIdUndelete
   */
  putProductsByIdUndelete(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/products/${id}/undelete`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * getProductsByIdPurchaseavailability
   */
  getProductsByIdPurchaseavailability(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ dateRange?: boolean; startDate?: any; endDate?: any; timeRange?: boolean; daysAvailable?: any[] }>> {
    const url = `/api/v3/products/${id}/purchaseavailability`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putProductsByIdPurchaseavailability
   */
  putProductsByIdPurchaseavailability(id: string | number, data: { dateRange?: boolean; startDate?: any; endDate?: any; timeRange?: boolean; daysAvailable?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/products/${id}/purchaseavailability`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getProductsByIdImages
   */
  getProductsByIdImages(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: any; productId?: any; image?: string }>>> {
    const url = `/api/v3/products/${id}/images`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postProductsByIdImages
   */
  postProductsByIdImages(id: string | number, data: { image?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/products/${id}/images`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putProductsImages
   */
  putProductsImages(data: { id?: any; productId?: any; image?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/products/images`;
    return this.client.request('put', url, data, params);
  }

  /**
   * deleteProductsByIdImagesByProductImageId
   */
  deleteProductsByIdImagesByProductImageId(id: string | number, productImageId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/products/${id}/images/${productImageId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getProductsByIdUserprices
   */
  getProductsByIdUserprices(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: any; productId?: any; userGroupId?: any; price?: any; pointsPrice?: any; purchaseOptions?: number; isEnabled?: boolean }>>> {
    const url = `/api/v3/products/${id}/userprices`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postProductsByIdUserprices
   */
  postProductsByIdUserprices(id: string | number, data: { userGroupId?: any; price?: any; pointsPrice?: any; purchaseOptions?: number; isEnabled?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/products/${id}/userprices`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putProductsUserprices
   */
  putProductsUserprices(data: { id?: any; productId?: any; userGroupId?: any; price?: any; pointsPrice?: any; purchaseOptions?: number; isEnabled?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/products/userprices`;
    return this.client.request('put', url, data, params);
  }

  /**
   * deleteProductsByIdUserpricesByUserPriceId
   */
  deleteProductsByIdUserpricesByUserPriceId(id: string | number, userPriceId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/products/${id}/userprices/${userPriceId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getProductsByIdDisallowedusergroups
   */
  getProductsByIdDisallowedusergroups(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: any; productId?: any; userGroupId?: any; isDisallowed?: boolean }>>> {
    const url = `/api/v3/products/${id}/disallowedusergroups`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postProductsByIdDisallowedusergroups
   */
  postProductsByIdDisallowedusergroups(id: string | number, data: { userGroupId?: any; isDisallowed?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/products/${id}/disallowedusergroups`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putProductsDisallowedusergroups
   */
  putProductsDisallowedusergroups(data: { id?: any; productId?: any; userGroupId?: any; isDisallowed?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/products/disallowedusergroups`;
    return this.client.request('put', url, data, params);
  }

  /**
   * deleteProductsByIdDisallowedusergroupsByProductDisallowedUserGroupId
   */
  deleteProductsByIdDisallowedusergroupsByProductDisallowedUserGroupId(id: string | number, productDisallowedUserGroupId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/products/${id}/disallowedusergroups/${productDisallowedUserGroupId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getProductsBundleByIdBundledproducts
   */
  getProductsBundleByIdBundledproducts(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: any; productId?: any; quantity?: any; unitPrice?: any }>>> {
    const url = `/api/v3/products/bundle/${id}/bundledproducts`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postProductsBundleByIdBundledproducts
   */
  postProductsBundleByIdBundledproducts(id: string | number, data: { productId?: any; quantity?: any; unitPrice?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/products/bundle/${id}/bundledproducts`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putProductsBundleBundledproducts
   */
  putProductsBundleBundledproducts(data: { id?: any; productId?: any; quantity?: any; unitPrice?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/products/bundle/bundledproducts`;
    return this.client.request('put', url, data, params);
  }

  /**
   * deleteProductsBundleByIdBundledproductsByBundledProductId
   */
  deleteProductsBundleByIdBundledproductsByBundledProductId(id: string | number, bundledProductId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/products/bundle/${id}/bundledproducts/${bundledProductId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getProductsBundleByIdBundledproductsByBundledProductIdUserprices
   */
  getProductsBundleByIdBundledproductsByBundledProductIdUserprices(id: string | number, bundledProductId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: any; bundledProductId?: any; userGroupId?: any; price?: any }>>> {
    const url = `/api/v3/products/bundle/${id}/bundledproducts/${bundledProductId}/userprices`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postProductsBundleByIdBundledproductsByBundledProductIdUserprices
   */
  postProductsBundleByIdBundledproductsByBundledProductIdUserprices(id: string | number, bundledProductId: string | number, data: { userGroupId?: any; price?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/products/bundle/${id}/bundledproducts/${bundledProductId}/userprices`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putProductsBundleBundledproductsUserprices
   */
  putProductsBundleBundledproductsUserprices(data: { id?: any; bundledProductId?: any; userGroupId?: any; price?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/products/bundle/bundledproducts/userprices`;
    return this.client.request('put', url, data, params);
  }

  /**
   * deleteProductsBundleByIdBundledproductsByBundledProductIdUserpricesByUserPriceId
   */
  deleteProductsBundleByIdBundledproductsByBundledProductIdUserpricesByUserPriceId(id: string | number, bundledProductId: string | number, userPriceId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/products/bundle/${id}/bundledproducts/${bundledProductId}/userprices/${userPriceId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getProductsTimeByIdUsageavailability
   */
  getProductsTimeByIdUsageavailability(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ dateRange?: boolean; startDate?: any; endDate?: any; timeRange?: boolean; daysAvailable?: any[] }>> {
    const url = `/api/v3/products/time/${id}/usageavailability`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putProductsTimeByIdUsageavailability
   */
  putProductsTimeByIdUsageavailability(id: string | number, data: { dateRange?: boolean; startDate?: any; endDate?: any; timeRange?: boolean; daysAvailable?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/products/time/${id}/usageavailability`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getProductsTimeByIdDisallowedhostgroups
   */
  getProductsTimeByIdDisallowedhostgroups(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: any; timeProductId?: any; hostGroupId?: any; isDisallowed?: boolean }>>> {
    const url = `/api/v3/products/time/${id}/disallowedhostgroups`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postProductsTimeByIdDisallowedhostgroups
   */
  postProductsTimeByIdDisallowedhostgroups(id: string | number, data: { hostGroupId?: any; isDisallowed?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/products/time/${id}/disallowedhostgroups`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putProductsTimeDisallowedhostgroups
   */
  putProductsTimeDisallowedhostgroups(data: { id?: any; timeProductId?: any; hostGroupId?: any; isDisallowed?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/products/time/disallowedhostgroups`;
    return this.client.request('put', url, data, params);
  }

  /**
   * deleteProductsTimeByIdDisallowedhostgroupsByTimeProductDisallowedHostGroupId
   */
  deleteProductsTimeByIdDisallowedhostgroupsByTimeProductDisallowedHostGroupId(id: string | number, timeProductDisallowedHostGroupId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/products/time/${id}/disallowedhostgroups/${timeProductDisallowedHostGroupId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getProductsByProductIdUsersByUserIdQuantityByQuantityPrice
   */
  getProductsByProductIdUsersByUserIdQuantityByQuantityPrice(userId: string | number, productId: string | number, quantity: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ unitPrice?: any; totalPrice?: any; unitPointsPrice?: any; totalPointsPrice?: any; purchaseOptions?: number }>> {
    const url = `/api/v3/products/${productId}/users/${userId}/quantity/${quantity}/price`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getProductsByProductIdQuantityByQuantityPrice
   */
  getProductsByProductIdQuantityByQuantityPrice(productId: string | number, quantity: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ unitPrice?: any; totalPrice?: any; unitPointsPrice?: any; totalPointsPrice?: any; purchaseOptions?: number }>> {
    const url = `/api/v3/products/${productId}/quantity/${quantity}/price`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getProductsByProductIdUsergroupsByUserGroupIdQuantityByQuantityPrice
   */
  getProductsByProductIdUsergroupsByUserGroupIdQuantityByQuantityPrice(productId: string | number, quantity: string | number, userGroupId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ unitPrice?: any; totalPrice?: any; unitPointsPrice?: any; totalPointsPrice?: any; purchaseOptions?: number }>> {
    const url = `/api/v3/products/${productId}/usergroups/${userGroupId}/quantity/${quantity}/price`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getProductsByIdBranches
   */
  getProductsByIdBranches(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ isEnabled?: any; branchId?: any }>>> {
    const url = `/api/v3/products/${id}/branches`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postProductsByIdBranches
   */
  postProductsByIdBranches(id: string | number, data: { branchId?: any; isEnabled?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/products/${id}/branches`;
    return this.client.request('post', url, data, params);
  }

  /**
   * getProductsByIdHiddenhostgroups
   */
  getProductsByIdHiddenhostgroups(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: any; productId?: any; hostGroupId?: any; isHidden?: boolean }>>> {
    const url = `/api/v3/products/${id}/hiddenhostgroups`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * postProductsByIdHiddenhostgroups
   */
  postProductsByIdHiddenhostgroups(id: string | number, data: { hostGroupId?: any; isHidden?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/products/${id}/hiddenhostgroups`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putProductsHiddenhostgroups
   */
  putProductsHiddenhostgroups(data: { id?: any; productId?: any; hostGroupId?: any; isHidden?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/products/hiddenhostgroups`;
    return this.client.request('put', url, data, params);
  }

  /**
   * deleteProductsByIdHiddenhostgroupsByProductHiddenHostGroupId
   */
  deleteProductsByIdHiddenhostgroupsByProductHiddenHostGroupId(id: string | number, productHiddenHostGroupId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/products/${id}/hiddenhostgroups/${productHiddenHostGroupId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getProductsNameExists
   */
  getProductsNameExists(options: { name?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/products/name/exists`;
    const query: Record<string, any> = { ...params };
    if (options.name !== undefined) query['name'] = options.name;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getProductsCounters
   */
  getProductsCounters(options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ countersPerGroup?: any[]; totalProducts?: any; deletedProducts?: any }>> {
    const url = `/api/v3/products/counters`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putProductsDisplayorder
   */
  putProductsDisplayorder(data: { entries?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/products/displayorder`;
    return this.client.request('put', url, data, params);
  }
}
