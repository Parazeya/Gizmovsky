import { GizmoClient } from "../GizmoClient.js";

export class Products {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all products.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {any} options.productType - query
   * @param {integer} options.productGroupId - query
   * @param {string} options.productName - query
   * @param {boolean} options.isDeleted - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getProducts(options = {}, params = {}) {
    const url = `/api/v2.0/products`;
    const paginationLimit = options.hasOwnProperty("paginationLimit")
      ? options["paginationLimit"]
      : undefined;
    const paginationSortBy = options.hasOwnProperty("paginationSortBy")
      ? options["paginationSortBy"]
      : undefined;
    const paginationIsAsc = options.hasOwnProperty("paginationIsAsc")
      ? options["paginationIsAsc"]
      : undefined;
    const paginationIsScroll = options.hasOwnProperty("paginationIsScroll")
      ? options["paginationIsScroll"]
      : undefined;
    const paginationCursor = options.hasOwnProperty("paginationCursor")
      ? options["paginationCursor"]
      : undefined;
    const productType = options.hasOwnProperty("productType")
      ? options["productType"]
      : undefined;
    const productGroupId = options.hasOwnProperty("productGroupId")
      ? options["productGroupId"]
      : undefined;
    const productName = options.hasOwnProperty("productName")
      ? options["productName"]
      : undefined;
    const isDeleted = options.hasOwnProperty("isDeleted")
      ? options["isDeleted"]
      : undefined;
    const expand = options.hasOwnProperty("expand")
      ? options["expand"]
      : undefined;
    const query = Object.assign({}, params);
    if (paginationLimit !== undefined)
      query["Pagination.Limit"] = paginationLimit;
    if (paginationSortBy !== undefined)
      query["Pagination.SortBy"] = paginationSortBy;
    if (paginationIsAsc !== undefined)
      query["Pagination.IsAsc"] = paginationIsAsc;
    if (paginationIsScroll !== undefined)
      query["Pagination.IsScroll"] = paginationIsScroll;
    if (paginationCursor !== undefined)
      query["Pagination.Cursor"] = paginationCursor;
    if (productType !== undefined) query["ProductType"] = productType;
    if (productGroupId !== undefined) query["ProductGroupId"] = productGroupId;
    if (productName !== undefined) query["ProductName"] = productName;
    if (isDeleted !== undefined) query["IsDeleted"] = isDeleted;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create a product.
   * @param {object} data.productType -
   * @param {integer} data.productGroupId -
   * @param {string} data.name -
   * @param {string} data.description -
   * @param {number} data.price -
   * @param {number} data.cost -
   * @param {boolean} data.disallowClientOrder -
   * @param {boolean} data.restrictGuestSale -
   * @param {boolean} data.restrictSale -
   * @param {object} data.purchaseOptions -
   * @param {integer} data.points -
   * @param {integer} data.pointsPrice -
   * @param {string} data.barcode -
   * @param {boolean} data.enableStock -
   * @param {boolean} data.disallowSaleIfOutOfStock -
   * @param {boolean} data.stockAlert -
   * @param {number} data.stockAlertThreshold -
   * @param {boolean} data.stockTargetDifferentProduct -
   * @param {integer} data.stockTargetProductId -
   * @param {number} data.stockProductAmount -
   * @param {boolean} data.isDeleted -
   * @param {boolean} data.isService -
   * @param {integer} data.displayOrder -
   * @param {object} data.timeProduct -
   * @param {object} data.bundle -
   * @param {Object} params - additional query params
   */
  postProducts(data = {}, params = {}) {
    const url = `/api/v2.0/products`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a product.
   * @param {integer} data.id -
   * @param {integer} data.productGroupId -
   * @param {string} data.name -
   * @param {string} data.description -
   * @param {number} data.price -
   * @param {number} data.cost -
   * @param {boolean} data.disallowClientOrder -
   * @param {boolean} data.restrictGuestSale -
   * @param {boolean} data.restrictSale -
   * @param {object} data.purchaseOptions -
   * @param {integer} data.points -
   * @param {integer} data.pointsPrice -
   * @param {string} data.barcode -
   * @param {boolean} data.enableStock -
   * @param {boolean} data.disallowSaleIfOutOfStock -
   * @param {boolean} data.stockAlert -
   * @param {number} data.stockAlertThreshold -
   * @param {boolean} data.stockTargetDifferentProduct -
   * @param {integer} data.stockTargetProductId -
   * @param {number} data.stockProductAmount -
   * @param {boolean} data.isDeleted -
   * @param {boolean} data.isService -
   * @param {integer} data.displayOrder -
   * @param {object} data.timeProduct -
   * @param {object} data.bundle -
   * @param {Object} params - additional query params
   */
  putProducts(data = {}, params = {}) {
    const url = `/api/v2.0/products`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a product by id.
   * @param {integer} id - Product id.
   * @param {Object} options - options object with possible query parameters
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getProductsById(id, options = {}, params = {}) {
    const url = `/api/v2.0/products/${id}`;
    const expand = options.hasOwnProperty("expand")
      ? options["expand"]
      : undefined;
    const query = Object.assign({}, params);
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Delete a product.
   * @param {integer} id - Product id.
   * @param {Object} params - additional query params
   */
  deleteProductsById(id, params = {}) {
    const url = `/api/v2.0/products/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get product purchase availability.
   * @param {integer} id - Product id.
   * @param {Object} params - additional query params
   */
  getProductsByIdPurchaseavailability(id, options = {}, params = {}) {
    const url = `/api/v2.0/products/${id}/purchaseavailability`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Update product purchase availability.
   * @param {integer} id - Product id.
   * @param {boolean} data.dateRange -
   * @param {string} data.startDate -
   * @param {string} data.endDate -
   * @param {boolean} data.timeRange -
   * @param {array} data.daysAvailable -
   * @param {Object} params - additional query params
   */
  putProductsByIdPurchaseavailability(id, data = {}, params = {}) {
    const url = `/api/v2.0/products/${id}/purchaseavailability`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get the images of the specified product.
   * @param {integer} id - Product id.
   * @param {Object} params - additional query params
   */
  getProductsByIdImages(id, options = {}, params = {}) {
    const url = `/api/v2.0/products/${id}/images`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Create a product image.
   * @param {integer} id - Product id.
   * @param {string} data.image -
   * @param {Object} params - additional query params
   */
  postProductsByIdImages(id, data = {}, params = {}) {
    const url = `/api/v2.0/products/${id}/images`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a product image.
   * @param {integer} data.id -
   * @param {integer} data.productId -
   * @param {string} data.image -
   * @param {Object} params - additional query params
   */
  putProductsImages(data = {}, params = {}) {
    const url = `/api/v2.0/products/images`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Delete a product image.
   * @param {integer} id - Product id.
   * @param {integer} productImageId - Product image id.
   * @param {Object} params - additional query params
   */
  deleteProductsByIdImagesByProductImageId(id, productImageId, params = {}) {
    const url = `/api/v2.0/products/${id}/images/${productImageId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get the user prices of the specified product.
   * @param {integer} id - Product id.
   * @param {Object} params - additional query params
   */
  getProductsByIdUserprices(id, options = {}, params = {}) {
    const url = `/api/v2.0/products/${id}/userprices`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Create a product user price.
   * @param {integer} id - Product id.
   * @param {integer} data.userGroupId -
   * @param {number} data.price -
   * @param {integer} data.pointsPrice -
   * @param {object} data.purchaseOptions -
   * @param {boolean} data.isEnabled -
   * @param {Object} params - additional query params
   */
  postProductsByIdUserprices(id, data = {}, params = {}) {
    const url = `/api/v2.0/products/${id}/userprices`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a product user price.
   * @param {integer} data.id -
   * @param {integer} data.productId -
   * @param {integer} data.userGroupId -
   * @param {number} data.price -
   * @param {integer} data.pointsPrice -
   * @param {object} data.purchaseOptions -
   * @param {boolean} data.isEnabled -
   * @param {Object} params - additional query params
   */
  putProductsUserprices(data = {}, params = {}) {
    const url = `/api/v2.0/products/userprices`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Delete a product user price.
   * @param {integer} id - Product id.
   * @param {integer} userPriceId - Product user price id.
   * @param {Object} params - additional query params
   */
  deleteProductsByIdUserpricesByUserPriceId(id, userPriceId, params = {}) {
    const url = `/api/v2.0/products/${id}/userprices/${userPriceId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get disallowed user groups of the specified product.
   * @param {integer} id - path
   * @param {Object} params - additional query params
   */
  getProductsByIdDisallowedusergroups(id, options = {}, params = {}) {
    const url = `/api/v2.0/products/${id}/disallowedusergroups`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Create a disallowed user group.
   * @param {integer} id - Product id.
   * @param {integer} data.userGroupId -
   * @param {boolean} data.isDisallowed -
   * @param {Object} params - additional query params
   */
  postProductsByIdDisallowedusergroups(id, data = {}, params = {}) {
    const url = `/api/v2.0/products/${id}/disallowedusergroups`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a disallowed user group.
   * @param {integer} data.id -
   * @param {integer} data.productId -
   * @param {integer} data.userGroupId -
   * @param {boolean} data.isDisallowed -
   * @param {Object} params - additional query params
   */
  putProductsDisallowedusergroups(data = {}, params = {}) {
    const url = `/api/v2.0/products/disallowedusergroups`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Delete a disallowed user group.
   * @param {integer} id - Product id.
   * @param {integer} productDisallowedUserGroupId - path
   * @param {Object} params - additional query params
   */
  deleteProductsByIdDisallowedusergroupsByProductDisallowedUserGroupId(
    id,
    productDisallowedUserGroupId,
    params = {}
  ) {
    const url = `/api/v2.0/products/${id}/disallowedusergroups/${productDisallowedUserGroupId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get the bundled products of the specified bundle.
   * @param {integer} id - Bundle id.
   * @param {Object} params - additional query params
   */
  getProductsBundleByIdBundledproducts(id, options = {}, params = {}) {
    const url = `/api/v2.0/products/bundle/${id}/bundledproducts`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Create a bundled product.
   * @param {integer} id - Bundle id.
   * @param {integer} data.productId -
   * @param {number} data.quantity -
   * @param {number} data.unitPrice -
   * @param {Object} params - additional query params
   */
  postProductsBundleByIdBundledproducts(id, data = {}, params = {}) {
    const url = `/api/v2.0/products/bundle/${id}/bundledproducts`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a bundled product.
   * @param {integer} data.id -
   * @param {integer} data.productId -
   * @param {number} data.quantity -
   * @param {number} data.unitPrice -
   * @param {Object} params - additional query params
   */
  putProductsBundleBundledproducts(data = {}, params = {}) {
    const url = `/api/v2.0/products/bundle/bundledproducts`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Delete a bundled product.
   * @param {integer} id - Bundle id.
   * @param {integer} bundledProductId - Bundled product id.
   * @param {Object} params - additional query params
   */
  deleteProductsBundleByIdBundledproductsByBundledProductId(
    id,
    bundledProductId,
    params = {}
  ) {
    const url = `/api/v2.0/products/bundle/${id}/bundledproducts/${bundledProductId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get the user prices of the specified bundled product.
   * @param {integer} id - Bundle id.
   * @param {integer} bundledProductId - Bundled product id.
   * @param {Object} params - additional query params
   */
  getProductsBundleByIdBundledproductsByBundledProductIdUserprices(
    id,
    bundledProductId,
    options = {},
    params = {}
  ) {
    const url = `/api/v2.0/products/bundle/${id}/bundledproducts/${bundledProductId}/userprices`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Create a bundled product user price.
   * @param {integer} id - Bundle id.
   * @param {integer} bundledProductId - Bundled product id.
   * @param {integer} data.userGroupId -
   * @param {number} data.price -
   * @param {Object} params - additional query params
   */
  postProductsBundleByIdBundledproductsByBundledProductIdUserprices(
    id,
    bundledProductId,
    data = {},
    params = {}
  ) {
    const url = `/api/v2.0/products/bundle/${id}/bundledproducts/${bundledProductId}/userprices`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a bundled product user price.
   * @param {integer} data.id -
   * @param {integer} data.bundledProductId -
   * @param {integer} data.userGroupId -
   * @param {number} data.price -
   * @param {Object} params - additional query params
   */
  putProductsBundleBundledproductsUserprices(data = {}, params = {}) {
    const url = `/api/v2.0/products/bundle/bundledproducts/userprices`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Delete a bundled product user price.
   * @param {integer} id - path
   * @param {integer} bundledProductId - path
   * @param {integer} userPriceId - path
   * @param {Object} params - additional query params
   */
  deleteProductsBundleByIdBundledproductsByBundledProductIdUserpricesByUserPriceId(
    id,
    bundledProductId,
    userPriceId,
    params = {}
  ) {
    const url = `/api/v2.0/products/bundle/${id}/bundledproducts/${bundledProductId}/userprices/${userPriceId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get time product usage availability.
   * @param {integer} id - Time product id.
   * @param {Object} params - additional query params
   */
  getProductsTimeByIdUsageavailability(id, options = {}, params = {}) {
    const url = `/api/v2.0/products/time/${id}/usageavailability`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Update time product usage availability.
   * @param {integer} id - Time product id.
   * @param {boolean} data.dateRange -
   * @param {string} data.startDate -
   * @param {string} data.endDate -
   * @param {boolean} data.timeRange -
   * @param {array} data.daysAvailable -
   * @param {Object} params - additional query params
   */
  putProductsTimeByIdUsageavailability(id, data = {}, params = {}) {
    const url = `/api/v2.0/products/time/${id}/usageavailability`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get disallowed host groups of the specified time product.
   * @param {integer} id - Time product id.
   * @param {Object} params - additional query params
   */
  getProductsTimeByIdDisallowedhostgroups(id, options = {}, params = {}) {
    const url = `/api/v2.0/products/time/${id}/disallowedhostgroups`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Create a disallowed host group.
   * @param {integer} id - Time product id.
   * @param {integer} data.hostGroupId -
   * @param {boolean} data.isDisallowed -
   * @param {Object} params - additional query params
   */
  postProductsTimeByIdDisallowedhostgroups(id, data = {}, params = {}) {
    const url = `/api/v2.0/products/time/${id}/disallowedhostgroups`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a disallowed host group.
   * @param {integer} data.id -
   * @param {integer} data.timeProductId -
   * @param {integer} data.hostGroupId -
   * @param {boolean} data.isDisallowed -
   * @param {Object} params - additional query params
   */
  putProductsTimeDisallowedhostgroups(data = {}, params = {}) {
    const url = `/api/v2.0/products/time/disallowedhostgroups`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Delete a disallowed host group.
   * @param {integer} id - Time product id.
   * @param {integer} timeProductDisallowedHostGroupId - Time product disallowed host group id.
   * @param {Object} params - additional query params
   */
  deleteProductsTimeByIdDisallowedhostgroupsByTimeProductDisallowedHostGroupId(
    id,
    timeProductDisallowedHostGroupId,
    params = {}
  ) {
    const url = `/api/v2.0/products/time/${id}/disallowedhostgroups/${timeProductDisallowedHostGroupId}`;
    return this.client.request("delete", url, {}, params);
  }
}
