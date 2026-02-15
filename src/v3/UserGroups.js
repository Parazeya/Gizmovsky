import { GizmoClient } from "../GizmoClient.js";

export class UserGroups {
  constructor(client) {
    this.client = client;
  }

  /**
         * Get all user groups.
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
         * @param {string} options.groupName - Return groups with names that contain the specified string.
         * @param {array} options.expand - Include specified objects in the result.
         * @param {Object} params - additional query params
         */
  getUserGroups(options = {}, params = {}) {
    const url = `/api/v3.0/usergroups`;
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
    const groupName = options.hasOwnProperty("groupName")
      ? options["groupName"]
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
    if (groupName !== undefined) query["GroupName"] = groupName;
    if (expand !== undefined) query["Expand"] = expand;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Create a user group.
   * @param {string} data.name - The name of the user group.
   * @param {string} data.description - The description of the user group.
   * @param {integer} data.billingProfileId - The Id of the billing profile this user group is associated with.
   * @param {object} data.requiredUserInfo -
   * @param {boolean} data.overrideApplicationGroup - Whether to override the default application group.
   * @param {integer} data.applicationGroupId - The Id of the application profile this user group is associated with.
   * @param {boolean} data.overrideSecurityProfile - Whether to override the default security profile.
   * @param {integer} data.securityProfileId - The Id of the security profile this user group is associated with.
   * @param {boolean} data.overrideAgeRating - Whether to override the default age rating.
   * @param {boolean} data.isAgeRatingEnabled - Whether the age rating is enabled for the user group.
   * @param {boolean} data.enablePersonalStorage - Enable personal storage.
   * @param {boolean} data.hideLogoutButton - Hide logout button.
   * @param {boolean} data.disallowLoginFromClient - Disallow login from client.
   * @param {boolean} data.guestUse - Allow guest use.
   * @param {boolean} data.guestUseOnly - Allow only guest use.
   * @param {boolean} data.disallowLoginFromManager - Disallow login from manager.
   * @param {boolean} data.isNegativeBalanceAllowed - Whether the users of this user group are allowed to have negative balance.
   * @param {number} data.creditLimit - The credit limit of the user group.
   * @param {integer} data.pointsAwardOptions - The points award options of the user group.
   * @param {number} data.pointsMoneyRatio - The points money ratio.
   * @param {integer} data.pointsTimeRatio - The points time ratio.
   * @param {integer} data.pointsAward - The amount of points to award.
   * @param {boolean} data.isDefault - Whether the user group is default for new users.
   * @param {boolean} data.disableTimeOffer - Disable use of time offers.
   * @param {boolean} data.disableFixedTime - Disable use of fixed time purchase.
   * @param {boolean} data.disableDeposit - Disable use of deposits for time.
   * @param {boolean} data.isWaitingLinePriorityEnabled - Whether the waiting line priority is enabled for the user group.
   * @param {integer} data.waitingLinePriority - The waiting line priority of the user group.
   * @param {integer} data.creditLimitOptions - The credit limit options of the user group.
   * @param {integer} data.discountGroupId - Discount group id.
   * @param {Object} params - additional query params
   */
  postUserGroups(data = {}, params = {}) {
    const url = `/api/v3.0/usergroups`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a user group.
   * @param {integer} data.id - The Id of the object.
   * @param {string} data.name - The name of the user group.
   * @param {string} data.description - The description of the user group.
   * @param {integer} data.billingProfileId - The Id of the billing profile this user group is associated with.
   * @param {object} data.requiredUserInfo -
   * @param {boolean} data.overrideApplicationGroup - Whether to override the default application group.
   * @param {integer} data.applicationGroupId - The Id of the application profile this user group is associated with.
   * @param {boolean} data.overrideSecurityProfile - Whether to override the default security profile.
   * @param {integer} data.securityProfileId - The Id of the security profile this user group is associated with.
   * @param {boolean} data.overrideAgeRating - Whether to override the default age rating.
   * @param {boolean} data.isAgeRatingEnabled - Whether the age rating is enabled for the user group.
   * @param {boolean} data.enablePersonalStorage - Enable personal storage.
   * @param {boolean} data.hideLogoutButton - Hide logout button.
   * @param {boolean} data.disallowLoginFromClient - Disallow login from client.
   * @param {boolean} data.guestUse - Allow guest use.
   * @param {boolean} data.guestUseOnly - Allow only guest use.
   * @param {boolean} data.disallowLoginFromManager - Disallow login from manager.
   * @param {boolean} data.isNegativeBalanceAllowed - Whether the users of this user group are allowed to have negative balance.
   * @param {number} data.creditLimit - The credit limit of the user group.
   * @param {integer} data.pointsAwardOptions - The points award options of the user group.
   * @param {number} data.pointsMoneyRatio - The points money ratio.
   * @param {integer} data.pointsTimeRatio - The points time ratio.
   * @param {integer} data.pointsAward - The amount of points to award.
   * @param {boolean} data.isDefault - Whether the user group is default for new users.
   * @param {boolean} data.disableTimeOffer - Disable use of time offers.
   * @param {boolean} data.disableFixedTime - Disable use of fixed time purchase.
   * @param {boolean} data.disableDeposit - Disable use of deposits for time.
   * @param {boolean} data.isWaitingLinePriorityEnabled - Whether the waiting line priority is enabled for the user group.
   * @param {integer} data.waitingLinePriority - The waiting line priority of the user group.
   * @param {integer} data.creditLimitOptions - The credit limit options of the user group.
   * @param {integer} data.discountGroupId - Discount group id.
   * @param {Object} params - additional query params
   */
  putUserGroups(data = {}, params = {}) {
    const url = `/api/v3.0/usergroups`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a user group by id.
   * @param {integer} id - User group id.
   * @param {Object} params - additional query params
   */
  getUserGroupsById(id, options = {}, params = {}) {
    const url = `/api/v3.0/usergroups/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete a user group.
   * @param {integer} id - User group id.
   * @param {Object} params - additional query params
   */
  deleteUserGroupsById(id, params = {}) {
    const url = `/api/v3.0/usergroups/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {Object} params - additional query params
   */
  getUserGroupsByIdDisallowedhostgroups(id, options = {}, params = {}) {
    const url = `/api/v3.0/usergroups/${id}/disallowedhostgroups`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {integer} data.hostGroupId - The Id of the host group.
   * @param {boolean} data.isDisallowed - Whether this host group is disallowed for this user group.
   * @param {Object} params - additional query params
   */
  postUserGroupsByIdDisallowedhostgroups(id, data = {}, params = {}) {
    const url = `/api/v3.0/usergroups/${id}/disallowedhostgroups`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {integer} data.id - The Id of the object.
   * @param {integer} data.userGroupId - The Id of the user group.
   * @param {integer} data.hostGroupId - The Id of the host group.
   * @param {boolean} data.isDisallowed - Whether this host group is disallowed for this user group.
   * @param {Object} params - additional query params
   */
  putUserGroupsDisallowedhostgroups(data = {}, params = {}) {
    const url = `/api/v3.0/usergroups/disallowedhostgroups`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {integer} userGroupDisallowedHostGroupId - path
   * @param {Object} params - additional query params
   */
  deleteUserGroupsByIdDisallowedhostgroupsByUserGroupDisallowedHostGroupId(
    id,
    userGroupDisallowedHostGroupId,
    params = {},
  ) {
    const url = `/api/v3.0/usergroups/${id}/disallowedhostgroups/${userGroupDisallowedHostGroupId}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Set user group as default.
   * @param {integer} id - path
   * @param {Object} params - additional query params
   */
  putUserGroupsByIdSetasdefault(id, params = {}) {
    const url = `/api/v3.0/usergroups/${id}/setasdefault`;
    return this.client.request("put", url, {}, params);
  }
}
