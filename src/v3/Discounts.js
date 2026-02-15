import { GizmoClient } from "../GizmoClient.js";

export class Discounts {
  constructor(client) {
    this.client = client;
  }

  /**
         * Gets filtered entries.
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
         * @param {array} options.expand - <inheritdoc />
         * @param {boolean} options.isDisabled - Is disabled.
         * @param {boolean} options.isDeleted - Is deleted.
         * @param {integer} options.rewardType - Reward type.
         * @param {integer} options.branchId - Branch id.
         * @param {Object} params - additional query params
         */
  getDiscounts(options = {}, params = {}) {
    const url = `/api/v3.0/discounts`;
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
    const isDisabled = options.hasOwnProperty("isDisabled")
      ? options["isDisabled"]
      : undefined;
    const isDeleted = options.hasOwnProperty("isDeleted")
      ? options["isDeleted"]
      : undefined;
    const rewardType = options.hasOwnProperty("rewardType")
      ? options["rewardType"]
      : undefined;
    const branchId = options.hasOwnProperty("branchId")
      ? options["branchId"]
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
    if (isDisabled !== undefined) query["IsDisabled"] = isDisabled;
    if (isDeleted !== undefined) query["IsDeleted"] = isDeleted;
    if (rewardType !== undefined) query["RewardType"] = rewardType;
    if (branchId !== undefined) query["BranchId"] = branchId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Creates entry.
   * @param {string} data.name -
   * @param {string} data.description -
   * @param {integer} data.applyType - Apply type.
   * @param {integer} data.calculationType - Gets or sets calculation type.
   * @param {integer} data.rewardType - Gets or sets discount reward type.
   * @param {integer} data.requirement - Target group requirement.
   * @param {number} data.value - Value.
   * @param {boolean} data.isDisabled - Indicates if the discount is disabled.
   * @param {object} data.period -
   * @param {object} data.product -
   * @param {object} data.timeProduct -
   * @param {object} data.productGroup -
   * @param {object} data.billProfile -
   * @param {object} data.paymentMethod -
   * @param {Object} params - additional query params
   */
  postDiscounts(data = {}, params = {}) {
    const url = `/api/v3.0/discounts`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Updates entry.
   * @param {integer} data.id -
   * @param {string} data.name -
   * @param {string} data.description -
   * @param {integer} data.applyType - Apply type.
   * @param {integer} data.calculationType - Gets or sets calculation type.
   * @param {integer} data.rewardType - Gets or sets discount reward type.
   * @param {integer} data.requirement - Target group requirement.
   * @param {number} data.value - Value.
   * @param {boolean} data.isDisabled - Indicates if the discount is disabled.
   * @param {object} data.period -
   * @param {object} data.product -
   * @param {object} data.timeProduct -
   * @param {object} data.productGroup -
   * @param {object} data.billProfile -
   * @param {object} data.paymentMethod -
   * @param {Object} params - additional query params
   */
  putDiscounts(data = {}, params = {}) {
    const url = `/api/v3.0/discounts`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Gets entry by id.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  getDiscountsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/discounts/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Soft deletes discount.
   * @param {integer} id - Discount id.
   * @param {Object} params - additional query params
   */
  deleteDiscountsById(id, params = {}) {
    const url = `/api/v3.0/discounts/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Sets entry name.
   * @param {integer} id - Entry id.
   * @param {Object} data - request body (see openapi.paths["/api/v3.0/discounts/{id}/name"].put.requestBody)
   * @param {Object} params - additional query params
   */
  putDiscountsByIdName(id, data = {}, params = {}) {
    const url = `/api/v3.0/discounts/${id}/name`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Checks if entry exists with specified name.
   * @param {string} name - Entry name.
   * @param {Object} params - additional query params
   */
  getDiscountsNameByNameExist(name, options = {}, params = {}) {
    const url = `/api/v3.0/discounts/name/${name}/exist`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Sets entry description.
   * @param {integer} id - Entry id.
   * @param {Object} data - request body (see openapi.paths["/api/v3.0/discounts/{id}/description"].put.requestBody)
   * @param {Object} params - additional query params
   */
  putDiscountsByIdDescription(id, data = {}, params = {}) {
    const url = `/api/v3.0/discounts/${id}/description`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Gets branch configuration entries.
   * @param {integer} id - Discount id.
   * @param {Object} params - additional query params
   */
  getDiscountsByIdBranches(id, options = {}, params = {}) {
    const url = `/api/v3.0/discounts/${id}/branches`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Sets branch configuration entries.
   * @param {integer} id - Discount id.
   * @param {integer} data.branchId - Branch id.
   * @param {boolean} data.isEnabled - Reference state.
   * @param {Object} params - additional query params
   */
  postDiscountsByIdBranches(id, data = {}, params = {}) {
    const url = `/api/v3.0/discounts/${id}/branches`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Undeletes discount.
   * @param {integer} id - Discount id.
   * @param {Object} params - additional query params
   */
  putDiscountsByIdUndelete(id, params = {}) {
    const url = `/api/v3.0/discounts/${id}/undelete`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Enables discount.
   * @param {integer} id - Discount id.
   * @param {Object} params - additional query params
   */
  putDiscountsByIdEnable(id, params = {}) {
    const url = `/api/v3.0/discounts/${id}/enable`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Disables discount.
   * @param {integer} id - Discount id.
   * @param {Object} params - additional query params
   */
  putDiscountsByIdDisable(id, params = {}) {
    const url = `/api/v3.0/discounts/${id}/disable`;
    return this.client.request("put", url, {}, params);
  }
}
