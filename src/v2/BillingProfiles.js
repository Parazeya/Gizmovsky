import { GizmoClient } from "../GizmoClient.js";

export class BillingProfiles {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all billing profiles.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {string} options.billingProfileName - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getBillingProfiles(options = {}, params = {}) {
    const url = `/api/v2.0/billingprofiles`;
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
    const billingProfileName = options.hasOwnProperty("billingProfileName")
      ? options["billingProfileName"]
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
    if (billingProfileName !== undefined)
      query["BillingProfileName"] = billingProfileName;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create a billing profile.
   * @param {string} data.name -
   * @param {object} data.defaultRate -
   * @param {Object} params - additional query params
   */
  postBillingProfiles(data = {}, params = {}) {
    const url = `/api/v2.0/billingprofiles`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a billing profile.
   * @param {integer} data.id -
   * @param {string} data.name -
   * @param {object} data.defaultRate -
   * @param {Object} params - additional query params
   */
  putBillingProfiles(data = {}, params = {}) {
    const url = `/api/v2.0/billingprofiles`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a billing profile by id.
   * @param {integer} id - Billing profile id.
   * @param {Object} options - options object with possible query parameters
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getBillingProfilesById(id, options = {}, params = {}) {
    const url = `/api/v2.0/billingprofiles/${id}`;
    const expand = options.hasOwnProperty("expand")
      ? options["expand"]
      : undefined;
    const query = Object.assign({}, params);
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Delete a billing profile.
   * @param {integer} id - Billing profile id.
   * @param {Object} params - additional query params
   */
  deleteBillingProfilesById(id, params = {}) {
    const url = `/api/v2.0/billingprofiles/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get the rates of the specified billing profile.
   * @param {integer} id - Billing profile id.
   * @param {Object} params - additional query params
   */
  getBillingProfilesByIdRates(id, options = {}, params = {}) {
    const url = `/api/v2.0/billingprofiles/${id}/rates`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Create a billing profile rate.
   * @param {integer} id - Billing profile id.
   * @param {number} data.startFee -
   * @param {number} data.minimumFee -
   * @param {number} data.rate -
   * @param {integer} data.chargeEvery -
   * @param {integer} data.chargeAfter -
   * @param {boolean} data.isStepBased -
   * @param {array} data.rateSteps -
   * @param {array} data.days -
   * @param {Object} params - additional query params
   */
  postBillingProfilesByIdRates(id, data = {}, params = {}) {
    const url = `/api/v2.0/billingprofiles/${id}/rates`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a billing profile rate.
   * @param {integer} data.id -
   * @param {number} data.startFee -
   * @param {number} data.minimumFee -
   * @param {number} data.rate -
   * @param {integer} data.chargeEvery -
   * @param {integer} data.chargeAfter -
   * @param {boolean} data.isStepBased -
   * @param {array} data.rateSteps -
   * @param {array} data.days -
   * @param {Object} params - additional query params
   */
  putBillingProfilesRates(data = {}, params = {}) {
    const url = `/api/v2.0/billingprofiles/rates`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Delete a billing profile rate.
   * @param {integer} id - Billing profile id.
   * @param {integer} billingProfileRateId - Billing profile rate id.
   * @param {Object} params - additional query params
   */
  deleteBillingProfilesByIdRatesByBillingProfileRateId(
    id,
    billingProfileRateId,
    params = {}
  ) {
    const url = `/api/v2.0/billingprofiles/${id}/rates/${billingProfileRateId}`;
    return this.client.request("delete", url, {}, params);
  }
}
