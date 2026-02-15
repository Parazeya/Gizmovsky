import { GizmoClient } from "../GizmoClient.js";

export class Products {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all products.
         * @param {Object} options - options object with possible query parameters
         * @param {integer} options.paginationLimit - Limit records for the response.
  equal 0 => DefaultLimit;
  equal -1 => int.MaxValue;
  less then -1 => DefaultLimit;
  Default limit is 10.
         * @param {string} options.paginationSortBy - Sorting field name (column name) of the data.
         * @param {boolean} options.paginationIsAsc - Sorting direction of the data.
         * @param {boolean} options.paginationIsScroll - Support infinite scrolling.
         * @param {String} options.paginationCursor - Cursor for the request.
         * @param {integer} options.productType - Return products of the specified product type.
         * @param {integer} options.productGroupId - Return products that belongs to the specified product group.
         * @param {string} options.productName - Return products with names that contain the specified string.
         * @param {boolean} options.isDeleted - Return deleted products.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {Object} params - additional query params
         */
  getProducts(options = {}, params = {}) {
    const url = `/api/v3.0/products`;
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
   * @param {integer} data.productType - The type of the product.
   * @param {integer} data.productGroupId - The Id of the product group this product belongs to.
   * @param {string} data.name - The name of the product.
   * @param {string} data.description - The description of the product.
   * @param {number} data.price - The price of the product.
   * @param {number} data.cost - The cost of the product.
   * @param {boolean} data.disallowClientOrder - Disallow order from client.
   * @param {boolean} data.restrictGuestSale - Disallow ability of order for non users.
   * @param {boolean} data.restrictSale - Restricts product sale.
   * @param {integer} data.purchaseOptions - The purchase options of the product.
   * @param {integer} data.points - The amount of points the user earns when purchasing this product.
   * @param {integer} data.pointsPrice - The cost in points of the product.
   * @param {string} data.barcode - The barcode of the product.
   * @param {boolean} data.enableStock - Enable stock.
   * @param {boolean} data.disallowSaleIfOutOfStock - Disallow out of stock sale.
   * @param {boolean} data.stockAlert - Alert out of stock.
   * @param {number} data.stockAlertThreshold - The stock quantity threshold to alert, if the stock alert is enabled.
   * @param {boolean} data.stockTargetDifferentProduct - Enable stock keeping based on different product's stock.
   * @param {integer} data.stockTargetProductId - The Id of the target product, if the product stock targets a different product.
   * @param {number} data.stockProductAmount - The ratio of the stock in relation to the stock of the target product, if the product stock targets a different product.
   * @param {boolean} data.isDeleted - Whether the product is deleted.
   * @param {boolean} data.isService - The product represents a service.
   * @param {integer} data.displayOrder - The display order of the product.
   * @param {object} data.timeProduct -
   * @param {object} data.bundle -
   * @param {boolean} data.isMarkedProduct - The product is marked product.
   * @param {boolean} data.isExcise - The product is excise.
   * @param {Object} params - additional query params
   */
  postProducts(data = {}, params = {}) {
    const url = `/api/v3.0/products`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a product.
   * @param {integer} data.id - The Id of the object.
   * @param {integer} data.productGroupId - The Id of the product group this product belongs to.
   * @param {string} data.name - The name of the product.
   * @param {string} data.description - The description of the product.
   * @param {number} data.price - The price of the product.
   * @param {number} data.cost - The cost of the product.
   * @param {boolean} data.disallowClientOrder - Disallow order from client.
   * @param {boolean} data.restrictGuestSale - Disallow ability of order for non users.
   * @param {boolean} data.restrictSale - Restricts product sale.
   * @param {integer} data.purchaseOptions - The purchase options of the product.
   * @param {integer} data.points - The amount of points the user earns when purchasing this product.
   * @param {integer} data.pointsPrice - The cost in points of the product.
   * @param {string} data.barcode - The barcode of the product.
   * @param {boolean} data.enableStock - Enable stock.
   * @param {boolean} data.disallowSaleIfOutOfStock - Disallow out of stock sale.
   * @param {boolean} data.stockAlert - Alert out of stock.
   * @param {number} data.stockAlertThreshold - The stock quantity threshold to alert, if the stock alert is enabled.
   * @param {boolean} data.stockTargetDifferentProduct - Enable stock keeping based on different product's stock.
   * @param {integer} data.stockTargetProductId - The Id of the target product, if the product stock targets a different product.
   * @param {number} data.stockProductAmount - The ratio of the stock in relation to the stock of the target product, if the product stock targets a different product.
   * @param {boolean} data.isDeleted - Whether the product is deleted.
   * @param {boolean} data.isService - The product represents a service.
   * @param {integer} data.displayOrder - The display order of the product.
   * @param {object} data.timeProduct -
   * @param {object} data.bundle -
   * @param {boolean} data.isMarkedProduct - The product is marked product.
   * @param {boolean} data.isExcise - The product is excise.
   * @param {Object} params - additional query params
   */
  putProducts(data = {}, params = {}) {
    const url = `/api/v3.0/products`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a product by id.
   * @param {integer} id - Product id.
   * @param {Object} options - options object with possible query parameters
   * @param {array} options.expand - Include specified objects in the result.
   * @param {Object} params - additional query params
   */
  getProductsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/products/${id}`;
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
    const url = `/api/v3.0/products/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Undeletes a product.
   * @param {integer} id - Product id.
   * @param {Object} params - additional query params
   */
  putProductsByIdUndelete(id, params = {}) {
    const url = `/api/v3.0/products/${id}/undelete`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Get product purchase availability.
   * @param {integer} id - Product id.
   * @param {Object} params - additional query params
   */
  getProductsByIdPurchaseavailability(id, options = {}, params = {}) {
    const url = `/api/v3.0/products/${id}/purchaseavailability`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Update product purchase availability.
   * @param {integer} id - Product id.
   * @param {boolean} data.dateRange - Whether the product is available only for a specific date range.
   * @param {string} data.startDate - The date from which the product starts to be available.
   * @param {string} data.endDate - The date from which the product stops to be available.
   * @param {boolean} data.timeRange - Whether the product is available only for a specific time range within a day.
   * @param {array} data.daysAvailable - The days on which the product is available.
   * @param {Object} params - additional query params
   */
  putProductsByIdPurchaseavailability(id, data = {}, params = {}) {
    const url = `/api/v3.0/products/${id}/purchaseavailability`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get the images of the specified product.
   * @param {integer} id - Product id.
   * @param {Object} params - additional query params
   */
  getProductsByIdImages(id, options = {}, params = {}) {
    const url = `/api/v3.0/products/${id}/images`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Create a product image.
   * @param {integer} id - Product id.
   * @param {string} data.image - The image data of the product image.
   * @param {Object} params - additional query params
   */
  postProductsByIdImages(id, data = {}, params = {}) {
    const url = `/api/v3.0/products/${id}/images`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a product image.
   * @param {integer} data.id - The Id of the object.
   * @param {integer} data.productId - The Id of the product this image belongs to.
   * @param {string} data.image - The image data of the product image.
   * @param {Object} params - additional query params
   */
  putProductsImages(data = {}, params = {}) {
    const url = `/api/v3.0/products/images`;
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
    const url = `/api/v3.0/products/${id}/images/${productImageId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get the user prices of the specified product.
   * @param {integer} id - Product id.
   * @param {Object} params - additional query params
   */
  getProductsByIdUserprices(id, options = {}, params = {}) {
    const url = `/api/v3.0/products/${id}/userprices`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Create a product user price.
   * @param {integer} id - Product id.
   * @param {integer} data.userGroupId - The Id of the user group this user price is associated with.
   * @param {number} data.price - The price for this user price.
   * @param {integer} data.pointsPrice - The price in points for this user price.
   * @param {integer} data.purchaseOptions - The purchase options for this user price.
   * @param {boolean} data.isEnabled - Whether the user prices is enabled.
   * @param {Object} params - additional query params
   */
  postProductsByIdUserprices(id, data = {}, params = {}) {
    const url = `/api/v3.0/products/${id}/userprices`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a product user price.
   * @param {integer} data.id - The Id of the object.
   * @param {integer} data.productId - The Id of the product this user price is associated with.
   * @param {integer} data.userGroupId - The Id of the user group this user price is associated with.
   * @param {number} data.price - The price for this user price.
   * @param {integer} data.pointsPrice - The price in points for this user price.
   * @param {integer} data.purchaseOptions - The purchase options for this user price.
   * @param {boolean} data.isEnabled - Whether the user prices is enabled.
   * @param {Object} params - additional query params
   */
  putProductsUserprices(data = {}, params = {}) {
    const url = `/api/v3.0/products/userprices`;
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
    const url = `/api/v3.0/products/${id}/userprices/${userPriceId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get disallowed user groups of the specified product.
   * @param {integer} id - path
   * @param {Object} params - additional query params
   */
  getProductsByIdDisallowedusergroups(id, options = {}, params = {}) {
    const url = `/api/v3.0/products/${id}/disallowedusergroups`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Create a disallowed user group.
   * @param {integer} id - Product id.
   * @param {integer} data.userGroupId - The Id of the user group.
   * @param {boolean} data.isDisallowed - Whether this user group is disallowed for this product.
   * @param {Object} params - additional query params
   */
  postProductsByIdDisallowedusergroups(id, data = {}, params = {}) {
    const url = `/api/v3.0/products/${id}/disallowedusergroups`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a disallowed user group.
   * @param {integer} data.id - The Id of the object.
   * @param {integer} data.productId - The Id of the product.
   * @param {integer} data.userGroupId - The Id of the user group.
   * @param {boolean} data.isDisallowed - Whether this user group is disallowed for this product.
   * @param {Object} params - additional query params
   */
  putProductsDisallowedusergroups(data = {}, params = {}) {
    const url = `/api/v3.0/products/disallowedusergroups`;
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
    params = {},
  ) {
    const url = `/api/v3.0/products/${id}/disallowedusergroups/${productDisallowedUserGroupId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get the bundled products of the specified bundle.
   * @param {integer} id - Bundle id.
   * @param {Object} params - additional query params
   */
  getProductsBundleByIdBundledproducts(id, options = {}, params = {}) {
    const url = `/api/v3.0/products/bundle/${id}/bundledproducts`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Create a bundled product.
   * @param {integer} id - Bundle id.
   * @param {integer} data.productId - The Id of the product.
   * @param {number} data.quantity - The quantity of the product within the bundle.
   * @param {number} data.unitPrice - The unit price of the product within the bundle.
   * @param {Object} params - additional query params
   */
  postProductsBundleByIdBundledproducts(id, data = {}, params = {}) {
    const url = `/api/v3.0/products/bundle/${id}/bundledproducts`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a bundled product.
   * @param {integer} data.id - The Id of the object.
   * @param {integer} data.productId - The Id of the product.
   * @param {number} data.quantity - The quantity of the product within the bundle.
   * @param {number} data.unitPrice - The unit price of the product within the bundle.
   * @param {Object} params - additional query params
   */
  putProductsBundleBundledproducts(data = {}, params = {}) {
    const url = `/api/v3.0/products/bundle/bundledproducts`;
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
    params = {},
  ) {
    const url = `/api/v3.0/products/bundle/${id}/bundledproducts/${bundledProductId}`;
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
    params = {},
  ) {
    const url = `/api/v3.0/products/bundle/${id}/bundledproducts/${bundledProductId}/userprices`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Create a bundled product user price.
   * @param {integer} id - Bundle id.
   * @param {integer} bundledProductId - Bundled product id.
   * @param {integer} data.userGroupId - The Id of the user group this user price is associated with.
   * @param {number} data.price - The price for this user price.
   * @param {Object} params - additional query params
   */
  postProductsBundleByIdBundledproductsByBundledProductIdUserprices(
    id,
    bundledProductId,
    data = {},
    params = {},
  ) {
    const url = `/api/v3.0/products/bundle/${id}/bundledproducts/${bundledProductId}/userprices`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a bundled product user price.
   * @param {integer} data.id - The Id of the object.
   * @param {integer} data.bundledProductId - The Id of the bundled product this user price is associated with.
   * @param {integer} data.userGroupId - The Id of the user group this user price is associated with.
   * @param {number} data.price - The price for this user price.
   * @param {Object} params - additional query params
   */
  putProductsBundleBundledproductsUserprices(data = {}, params = {}) {
    const url = `/api/v3.0/products/bundle/bundledproducts/userprices`;
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
    params = {},
  ) {
    const url = `/api/v3.0/products/bundle/${id}/bundledproducts/${bundledProductId}/userprices/${userPriceId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get time product usage availability.
   * @param {integer} id - Time product id.
   * @param {Object} params - additional query params
   */
  getProductsTimeByIdUsageavailability(id, options = {}, params = {}) {
    const url = `/api/v3.0/products/time/${id}/usageavailability`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Update time product usage availability.
   * @param {integer} id - Time product id.
   * @param {boolean} data.dateRange - Whether the product is available only for a specific date range.
   * @param {string} data.startDate - The date from which the product starts to be available.
   * @param {string} data.endDate - The date from which the product stops to be available.
   * @param {boolean} data.timeRange - Whether the product is available only for a specific time range within a day.
   * @param {array} data.daysAvailable - The days on which the product is available.
   * @param {Object} params - additional query params
   */
  putProductsTimeByIdUsageavailability(id, data = {}, params = {}) {
    const url = `/api/v3.0/products/time/${id}/usageavailability`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get disallowed host groups of the specified time product.
   * @param {integer} id - Time product id.
   * @param {Object} params - additional query params
   */
  getProductsTimeByIdDisallowedhostgroups(id, options = {}, params = {}) {
    const url = `/api/v3.0/products/time/${id}/disallowedhostgroups`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Create a disallowed host group.
   * @param {integer} id - Time product id.
   * @param {integer} data.hostGroupId - The Id of the host group.
   * @param {boolean} data.isDisallowed - Whether this host group is disallowed for this time product.
   * @param {Object} params - additional query params
   */
  postProductsTimeByIdDisallowedhostgroups(id, data = {}, params = {}) {
    const url = `/api/v3.0/products/time/${id}/disallowedhostgroups`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a disallowed host group.
   * @param {integer} data.id - The Id of the object.
   * @param {integer} data.timeProductId - The Id of the time product.
   * @param {integer} data.hostGroupId - The Id of the host group.
   * @param {boolean} data.isDisallowed - Whether this host group is disallowed for this time product.
   * @param {Object} params - additional query params
   */
  putProductsTimeDisallowedhostgroups(data = {}, params = {}) {
    const url = `/api/v3.0/products/time/disallowedhostgroups`;
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
    params = {},
  ) {
    const url = `/api/v3.0/products/time/${id}/disallowedhostgroups/${timeProductDisallowedHostGroupId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Gets product user price.
   * @param {integer} userId - User id.
   * @param {integer} productId - Product id.
   * @param {number} quantity - Product quantity.
   * @param {Object} params - additional query params
   */
  getProductsByProductIdUserByUserIdQuantityByQuantityPrice(
    userId,
    productId,
    quantity,
    options = {},
    params = {},
  ) {
    const url = `/api/v3.0/products/${productId}/user/${userId}/quantity/${quantity}/price`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets product price.
   * @param {integer} productId - Product id.
   * @param {number} quantity - Product quantity.
   * @param {Object} params - additional query params
   */
  getProductsByProductIdQuantityByQuantityPrice(
    productId,
    quantity,
    options = {},
    params = {},
  ) {
    const url = `/api/v3.0/products/${productId}/quantity/${quantity}/price`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets product price.
   * @param {integer} productId - Product id.
   * @param {number} quantity - Product quantity.
   * @param {integer} userGroupId - User group id.
   * @param {Object} params - additional query params
   */
  getProductsByProductIdUsergroupByUserGroupIdQuantityByQuantityPrice(
    productId,
    quantity,
    userGroupId,
    options = {},
    params = {},
  ) {
    const url = `/api/v3.0/products/${productId}/usergroup/${userGroupId}/quantity/${quantity}/price`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets branch configuration entries.
   * @param {integer} id - Application executable id.
   * @param {Object} params - additional query params
   */
  getProductsByIdBranches(id, options = {}, params = {}) {
    const url = `/api/v3.0/products/${id}/branches`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Sets branch configuration entries.
   * @param {integer} id - Application executable id.
   * @param {integer} data.branchId - Branch id.
   * @param {boolean} data.isEnabled - Reference state.
   * @param {Object} params - additional query params
   */
  postProductsByIdBranches(id, data = {}, params = {}) {
    const url = `/api/v3.0/products/${id}/branches`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Get hidden host groups of the specified product.
   * @param {integer} id - Product id.
   * @param {Object} params - additional query params
   */
  getProductsByIdHiddenhostgroups(id, options = {}, params = {}) {
    const url = `/api/v3.0/products/${id}/hiddenhostgroups`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Create a hidden host group.
   * @param {integer} id - Product id.
   * @param {integer} data.hostGroupId - The Id of the host group.
   * @param {boolean} data.isHidden - Whether this product is hidden in this host group.
   * @param {Object} params - additional query params
   */
  postProductsByIdHiddenhostgroups(id, data = {}, params = {}) {
    const url = `/api/v3.0/products/${id}/hiddenhostgroups`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a hidden host group.
   * @param {integer} data.id - The Id of the object.
   * @param {integer} data.productId - The Id of the product.
   * @param {integer} data.hostGroupId - The Id of the host group.
   * @param {boolean} data.isHidden - Whether this product is hidden in this host group.
   * @param {Object} params - additional query params
   */
  putProductsHiddenhostgroups(data = {}, params = {}) {
    const url = `/api/v3.0/products/hiddenhostgroups`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Delete a hidden host group.
   * @param {integer} id - Product id.
   * @param {integer} productHiddenHostGroupId - Product hidden host group id.
   * @param {Object} params - additional query params
   */
  deleteProductsByIdHiddenhostgroupsByProductHiddenHostGroupId(
    id,
    productHiddenHostGroupId,
    params = {},
  ) {
    const url = `/api/v3.0/products/${id}/hiddenhostgroups/${productHiddenHostGroupId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Checks if entry exists with specified name.
   * @param {string} name - Entry name.
   * @param {Object} params - additional query params
   */
  getProductsNameByNameExist(name, options = {}, params = {}) {
    const url = `/api/v3.0/products/name/${name}/exist`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {Object} params - additional query params
   */
  getProductsCounters(options = {}, params = {}) {
    const url = `/api/v3.0/products/counters`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Update products display order.
   * @param {array} data.entries - The name of the product group.
   * @param {Object} params - additional query params
   */
  putProductsDisplayorder(data = {}, params = {}) {
    const url = `/api/v3.0/products/displayorder`;
    const body = data;
    return this.client.request("put", url, body, params);
  }
}
