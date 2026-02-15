import { GizmoClient } from "../GizmoClient.js";

export class Branches {
  constructor(client) {
    this.client = client;
  }

  /**
         * Gets branches.
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
         * @param {string} options.name - Name filter.
         * @param {boolean} options.isDeleted - Is deleted filter.
         * @param {Object} params - additional query params
         */
  getBranches(options = {}, params = {}) {
    const url = `/api/v3.0/branches`;
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
    const name = options.hasOwnProperty("name") ? options["name"] : undefined;
    const isDeleted = options.hasOwnProperty("isDeleted")
      ? options["isDeleted"]
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
    if (name !== undefined) query["Name"] = name;
    if (isDeleted !== undefined) query["IsDeleted"] = isDeleted;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Creates branch.
   * @param {string} data.name - <inheritdoc />
   * @param {string} data.businessName -
   * @param {string} data.country -
   * @param {string} data.city -
   * @param {string} data.address -
   * @param {string} data.phone -
   * @param {string} data.email -
   * @param {string} data.postalCode -
   * @param {string} data.region -
   * @param {string} data.webSite -
   * @param {string} data.info -
   * @param {string} data.timeZone -
   * @param {boolean} data.hasBusinessSchedule -
   * @param {integer} data.businessStartWeekDay -
   * @param {integer} data.businessEndWeekDay -
   * @param {string} data.businessDayStart -
   * @param {string} data.businessDayEnd -
   * @param {boolean} data.isFiscalizationEnabled -
   * @param {string} data.businessVATID -
   * @param {integer} data.taxSystem -
   * @param {integer} data.goodsTaxSystem -
   * @param {integer} data.servicesTaxSystem -
   * @param {integer} data.depositTaxSystem -
   * @param {integer} data.goodsVATRate -
   * @param {integer} data.servicesVATRate -
   * @param {integer} data.depositVATRate -
   * @param {number} data.timeBasedServiceVATRate -
   * @param {boolean} data.treatDepositsAsService -
   * @param {string} data.depositServiceDescription -
   * @param {integer} data.companionId -
   * @param {boolean} data.isDeleted -
   * @param {Object} params - additional query params
   */
  postBranches(data = {}, params = {}) {
    const url = `/api/v3.0/branches`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Updates branch.
   * @param {integer} data.id -
   * @param {string} data.name -
   * @param {string} data.businessName -
   * @param {string} data.country -
   * @param {string} data.city -
   * @param {string} data.address -
   * @param {string} data.phone -
   * @param {string} data.email -
   * @param {string} data.postalCode -
   * @param {string} data.region -
   * @param {string} data.webSite -
   * @param {string} data.info -
   * @param {string} data.timeZone -
   * @param {boolean} data.hasBusinessSchedule -
   * @param {integer} data.businessStartWeekDay -
   * @param {integer} data.businessEndWeekDay -
   * @param {string} data.businessDayStart -
   * @param {string} data.businessDayEnd -
   * @param {boolean} data.isFiscalizationEnabled -
   * @param {string} data.businessVATID -
   * @param {integer} data.taxSystem -
   * @param {integer} data.goodsTaxSystem -
   * @param {integer} data.servicesTaxSystem -
   * @param {integer} data.depositTaxSystem -
   * @param {integer} data.goodsVATRate -
   * @param {integer} data.servicesVATRate -
   * @param {integer} data.depositVATRate -
   * @param {number} data.timeBasedServiceVATRate -
   * @param {boolean} data.treatDepositsAsService -
   * @param {string} data.depositServiceDescription -
   * @param {integer} data.companionId -
   * @param {boolean} data.isDeleted -
   * @param {Object} params - additional query params
   */
  putBranches(data = {}, params = {}) {
    const url = `/api/v3.0/branches`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Gets branch.
   * @param {integer} id - Branch id.
   * @param {Object} params - additional query params
   */
  getBranchesById(id, options = {}, params = {}) {
    const url = `/api/v3.0/branches/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Deletes branch.
   * @param {integer} id - Branch id.
   * @param {Object} params - additional query params
   */
  deleteBranchesById(id, params = {}) {
    const url = `/api/v3.0/branches/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Deletes branch.
   * @param {integer} id - Branch id.
   * @param {Object} params - additional query params
   */
  putBranchesByIdUndelete(id, params = {}) {
    const url = `/api/v3.0/branches/${id}/undelete`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Checks if entry exists with specified name.
   * @param {string} name - Entry name.
   * @param {Object} params - additional query params
   */
  getBranchesNameByNameExist(name, options = {}, params = {}) {
    const url = `/api/v3.0/branches/name/${name}/exist`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets branch time zone.
   * @param {integer} branchId - Branch id.
   * @param {Object} params - additional query params
   */
  getBranchesByBranchIdTimezone(branchId, options = {}, params = {}) {
    const url = `/api/v3.0/branches/${branchId}/timezone`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Enables entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  putBranchesByIdEnable(id, params = {}) {
    const url = `/api/v3.0/branches/${id}/enable`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Disables entry.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  putBranchesByIdDisable(id, params = {}) {
    const url = `/api/v3.0/branches/${id}/disable`;
    return this.client.request("put", url, {}, params);
  }

  /**
   * Gets entry counters.
   * @param {integer} id - Entry id.
   * @param {Object} params - additional query params
   */
  getBranchesByIdCounters(id, options = {}, params = {}) {
    const url = `/api/v3.0/branches/${id}/counters`;
    return this.client.request("get", url, {}, params);
  }
}
