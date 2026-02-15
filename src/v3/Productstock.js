import { GizmoClient } from "../GizmoClient.js";

export class ProductStock {
  constructor(client) {
    this.client = client;
  }

  /**
         * Gets products stock levels.
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
         * @param {array} options.expand - query
         * @param {integer} options.productId - Product id.
         * @param {integer} options.productGroupId - Product group id.
         * @param {string} options.productName - Product name.
         * @param {integer} options.branchId - Branch id.
         * @param {integer} options.stockId - Stock id.
         * @param {integer} options.stockType - Stock type.
         * @param {integer} options.level - Desired stock level.
         * @param {Object} params - additional query params
         */
  getProductStock(options = {}, params = {}) {
    const url = `/api/v3.0/productstock`;
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
    const expand = options.hasOwnProperty("expand")
      ? options["expand"]
      : undefined;
    const productId = options.hasOwnProperty("productId")
      ? options["productId"]
      : undefined;
    const productGroupId = options.hasOwnProperty("productGroupId")
      ? options["productGroupId"]
      : undefined;
    const productName = options.hasOwnProperty("productName")
      ? options["productName"]
      : undefined;
    const branchId = options.hasOwnProperty("branchId")
      ? options["branchId"]
      : undefined;
    const stockId = options.hasOwnProperty("stockId")
      ? options["stockId"]
      : undefined;
    const stockType = options.hasOwnProperty("stockType")
      ? options["stockType"]
      : undefined;
    const level = options.hasOwnProperty("level")
      ? options["level"]
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
    if (expand !== undefined) query["Expand"] = expand;
    if (productId !== undefined) query["ProductId"] = productId;
    if (productGroupId !== undefined) query["ProductGroupId"] = productGroupId;
    if (productName !== undefined) query["ProductName"] = productName;
    if (branchId !== undefined) query["BranchId"] = branchId;
    if (stockId !== undefined) query["StockId"] = stockId;
    if (stockType !== undefined) query["StockType"] = stockType;
    if (level !== undefined) query["Level"] = level;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Gets product stock level based on current stock.
   * @param {integer} productId - Product id.
   * @param {Object} params - additional query params
   */
  getProductStockByProductId(productId, options = {}, params = {}) {
    const url = `/api/v3.0/productstock/${productId}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets product stock level.
   * @param {integer} productId - Product id.
   * @param {integer} stockId - Branch id.
   * @param {Object} params - additional query params
   */
  getProductStockByProductIdStockByStockId(
    productId,
    stockId,
    options = {},
    params = {},
  ) {
    const url = `/api/v3.0/productstock/${productId}/stock/${stockId}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Creates product stock transaction.
   * @param {integer} productId - Product id.
   * @param {integer} data.type - The type of the stock transaction.
   * @param {number} data.amount - The amount of the stock transaction.
   * @param {integer} data.stockId - Stock id.
   * @param {Object} params - additional query params
   */
  postProductStockByProductIdTransaction(productId, data = {}, params = {}) {
    const url = `/api/v3.0/productstock/${productId}/transaction`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Sets product stock level.
   * @param {integer} productId - Product id.
   * @param {integer} stockId - Stock id.
   * @param {number} amount - Stock level amount.
   * @param {Object} params - additional query params
   */
  postProductStockByProductIdStockByStockIdAddByAmount(
    productId,
    stockId,
    amount,
    params = {},
  ) {
    const url = `/api/v3.0/productstock/${productId}/stock/${stockId}/add/${amount}`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Adds specified amount to product stock level.
   * @param {integer} productId - Product id.
   * @param {integer} stockId - Stock id.
   * @param {number} amount - Stock level amount.
   * @param {Object} params - additional query params
   */
  postProductStockByProductIdStockByStockIdSetByAmount(
    productId,
    stockId,
    amount,
    params = {},
  ) {
    const url = `/api/v3.0/productstock/${productId}/stock/${stockId}/set/${amount}`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Removes specified amount from product stock level.
   * @param {integer} productId - Product id.
   * @param {integer} stockId - Stock id.
   * @param {number} amount - Stock level amount.
   * @param {Object} params - additional query params
   */
  postProductStockByProductIdStockByStockIdRemoveByAmount(
    productId,
    stockId,
    amount,
    params = {},
  ) {
    const url = `/api/v3.0/productstock/${productId}/stock/${stockId}/remove/${amount}`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Sets product stock level.
   * @param {integer} productId - Product id.
   * @param {number} amount - Stock level amount.
   * @param {Object} params - additional query params
   */
  postProductStockByProductIdAddByAmount(productId, amount, params = {}) {
    const url = `/api/v3.0/productstock/${productId}/add/${amount}`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Adds specified amount to product stock level.
   * @param {integer} productId - Product id.
   * @param {number} amount - Stock level amount.
   * @param {Object} params - additional query params
   */
  postProductStockByProductIdSetByAmount(productId, amount, params = {}) {
    const url = `/api/v3.0/productstock/${productId}/set/${amount}`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Removes specified amount from product stock level.
   * @param {integer} productId - Product id.
   * @param {number} amount - Stock level amount.
   * @param {Object} params - additional query params
   */
  postProductStockByProductIdRemoveByAmount(productId, amount, params = {}) {
    const url = `/api/v3.0/productstock/${productId}/remove/${amount}`;
    return this.client.request("post", url, {}, params);
  }
}
