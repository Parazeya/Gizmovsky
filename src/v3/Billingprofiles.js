import { GizmoClient } from "../GizmoClient.js";

export class BillingProfiles {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all billing profiles.
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
         * @param {string} options.billingProfileName - Return billing profiles with names that contain the specified string.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {Object} params - additional query params
         */
  getBillingProfiles(options = {}, params = {}) {
    const url = `/api/v3.0/billingprofiles`;
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
   * @param {string} data.name - The name of the billing profile.
   * @param {object} data.defaultRate -
   * @param {Object} params - additional query params
   */
  postBillingProfiles(data = {}, params = {}) {
    const url = `/api/v3.0/billingprofiles`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a billing profile.
   * @param {integer} data.id - The Id of the object.
   * @param {string} data.name - The name of the billing profile.
   * @param {object} data.defaultRate -
   * @param {Object} params - additional query params
   */
  putBillingProfiles(data = {}, params = {}) {
    const url = `/api/v3.0/billingprofiles`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a billing profile by id.
   * @param {integer} id - Billing profile id.
   * @param {Object} options - options object with possible query parameters
   * @param {array} options.expand - Include specified objects in the result.
   * @param {Object} params - additional query params
   */
  getBillingProfilesById(id, options = {}, params = {}) {
    const url = `/api/v3.0/billingprofiles/${id}`;
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
    const url = `/api/v3.0/billingprofiles/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Get the rates of the specified billing profile.
   * @param {integer} id - Billing profile id.
   * @param {Object} params - additional query params
   */
  getBillingProfilesByIdRates(id, options = {}, params = {}) {
    const url = `/api/v3.0/billingprofiles/${id}/rates`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Create a billing profile rate.
   * @param {integer} id - Billing profile id.
   * @param {number} data.startFee - The start fee of the rate.
   * @param {number} data.minimumFee - The minimum fee of the rate.
   * @param {number} data.rate - The hourly rate of the rate.
   * @param {integer} data.chargeEvery - The interval in minutes between the charges.
   * @param {integer} data.chargeAfter - The number of minutes before the first charge.
   * @param {boolean} data.isStepBased - Whether the rate is step based.
   * @param {array} data.rateSteps - The steps of the rate.
   * @param {array} data.days - The days on which the rate is applicable.
   * @param {Object} params - additional query params
   */
  postBillingProfilesByIdRates(id, data = {}, params = {}) {
    const url = `/api/v3.0/billingprofiles/${id}/rates`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a billing profile rate.
   * @param {integer} data.id - The Id of the object.
   * @param {number} data.startFee - The start fee of the rate.
   * @param {number} data.minimumFee - The minimum fee of the rate.
   * @param {number} data.rate - The hourly rate of the rate.
   * @param {integer} data.chargeEvery - The interval in minutes between the charges.
   * @param {integer} data.chargeAfter - The number of minutes before the first charge.
   * @param {boolean} data.isStepBased - Whether the rate is step based.
   * @param {array} data.rateSteps - The steps of the rate.
   * @param {array} data.days - The days on which the rate is applicable.
   * @param {Object} params - additional query params
   */
  putBillingProfilesRates(data = {}, params = {}) {
    const url = `/api/v3.0/billingprofiles/rates`;
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
    params = {},
  ) {
    const url = `/api/v3.0/billingprofiles/${id}/rates/${billingProfileRateId}`;
    return this.client.request("delete", url, {}, params);
  }
}
