import { GizmoClient } from "../GizmoClient.js";

export class UserGroups {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all user groups.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.paginationLimit - query
   * @param {string} options.paginationSortBy - query
   * @param {boolean} options.paginationIsAsc - query
   * @param {boolean} options.paginationIsScroll - query
   * @param {String} options.paginationCursor - query
   * @param {string} options.groupName - query
   * @param {array} options.expand - query
   * @param {Object} params - additional query params
   */
  getUserGroups(options = {}, params = {}) {
    const url = `/api/v2.0/usergroups`;
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
   * @param {string} data.name -
   * @param {string} data.description -
   * @param {integer} data.billingProfileId -
   * @param {object} data.requiredUserInfo -
   * @param {boolean} data.overrideApplicationGroup -
   * @param {integer} data.applicationGroupId -
   * @param {boolean} data.overrideSecurityProfile -
   * @param {integer} data.securityProfileId -
   * @param {boolean} data.overrideAgeRating -
   * @param {boolean} data.isAgeRatingEnabled -
   * @param {boolean} data.enablePersonalStorage -
   * @param {boolean} data.hideLogoutButton -
   * @param {boolean} data.disallowLoginFromClient -
   * @param {boolean} data.guestUse -
   * @param {boolean} data.guestUseOnly -
   * @param {boolean} data.disallowLoginFromManager -
   * @param {boolean} data.isNegativeBalanceAllowed -
   * @param {number} data.creditLimit -
   * @param {object} data.pointsAwardOptions -
   * @param {number} data.pointsMoneyRatio -
   * @param {integer} data.pointsTimeRatio -
   * @param {integer} data.pointsAward -
   * @param {boolean} data.isDefault -
   * @param {boolean} data.disableTimeOffer -
   * @param {boolean} data.disableFixedTime -
   * @param {boolean} data.disableDeposit -
   * @param {boolean} data.isWaitingLinePriorityEnabled -
   * @param {integer} data.waitingLinePriority -
   * @param {Object} params - additional query params
   */
  postUserGroups(data = {}, params = {}) {
    const url = `/api/v2.0/usergroups`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Update a user group.
   * @param {integer} data.id -
   * @param {string} data.name -
   * @param {string} data.description -
   * @param {integer} data.billingProfileId -
   * @param {object} data.requiredUserInfo -
   * @param {boolean} data.overrideApplicationGroup -
   * @param {integer} data.applicationGroupId -
   * @param {boolean} data.overrideSecurityProfile -
   * @param {integer} data.securityProfileId -
   * @param {boolean} data.overrideAgeRating -
   * @param {boolean} data.isAgeRatingEnabled -
   * @param {boolean} data.enablePersonalStorage -
   * @param {boolean} data.hideLogoutButton -
   * @param {boolean} data.disallowLoginFromClient -
   * @param {boolean} data.guestUse -
   * @param {boolean} data.guestUseOnly -
   * @param {boolean} data.disallowLoginFromManager -
   * @param {boolean} data.isNegativeBalanceAllowed -
   * @param {number} data.creditLimit -
   * @param {object} data.pointsAwardOptions -
   * @param {number} data.pointsMoneyRatio -
   * @param {integer} data.pointsTimeRatio -
   * @param {integer} data.pointsAward -
   * @param {boolean} data.isDefault -
   * @param {boolean} data.disableTimeOffer -
   * @param {boolean} data.disableFixedTime -
   * @param {boolean} data.disableDeposit -
   * @param {boolean} data.isWaitingLinePriorityEnabled -
   * @param {integer} data.waitingLinePriority -
   * @param {Object} params - additional query params
   */
  putUserGroups(data = {}, params = {}) {
    const url = `/api/v2.0/usergroups`;
    const body = data;
    return this.client.request("put", url, body, params);
  }

  /**
   * Get a user group by id.
   * @param {integer} id - User group id.
   * @param {Object} params - additional query params
   */
  getUserGroupsById(id, options = {}, params = {}) {
    const url = `/api/v2.0/usergroups/${id}`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Delete a user group.
   * @param {integer} id - User group id.
   * @param {Object} params - additional query params
   */
  deleteUserGroupsById(id, params = {}) {
    const url = `/api/v2.0/usergroups/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {Object} params - additional query params
   */
  getUserGroupsByIdDisallowedhostgroups(id, options = {}, params = {}) {
    const url = `/api/v2.0/usergroups/${id}/disallowedhostgroups`;
    return this.client.request("get", url, {}, params);
  }

  /**
   *
   * @param {integer} id - path
   * @param {integer} data.hostGroupId -
   * @param {boolean} data.isDisallowed -
   * @param {Object} params - additional query params
   */
  postUserGroupsByIdDisallowedhostgroups(id, data = {}, params = {}) {
    const url = `/api/v2.0/usergroups/${id}/disallowedhostgroups`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   *
   * @param {integer} data.id -
   * @param {integer} data.userGroupId -
   * @param {integer} data.hostGroupId -
   * @param {boolean} data.isDisallowed -
   * @param {Object} params - additional query params
   */
  putUserGroupsDisallowedhostgroups(data = {}, params = {}) {
    const url = `/api/v2.0/usergroups/disallowedhostgroups`;
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
    params = {}
  ) {
    const url = `/api/v2.0/usergroups/${id}/disallowedhostgroups/${userGroupDisallowedHostGroupId}`;
    return this.client.request("delete", url, {}, params);
  }
}
