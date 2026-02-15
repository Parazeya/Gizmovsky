import { GizmoClient } from "../GizmoClient.js";

export class UserGuests {
  constructor(client) {
    this.client = client;
  }

  /**
   * Gets virtual guest users.
   * @param {Object} options - options object with possible query parameters
   * @param {integer} options.limit - Results limit.
   * @param {integer} options.branchId - Branch id to filter by.
   * @param {string} options.searchValue - Search value.
   * @param {Object} params - additional query params
   */
  getUserGuestsVirtual(options = {}, params = {}) {
    const url = `/api/v3.0/userguests/virtual`;
    const limit = options.hasOwnProperty("limit")
      ? options["limit"]
      : undefined;
    const branchId = options.hasOwnProperty("branchId")
      ? options["branchId"]
      : undefined;
    const searchValue = options.hasOwnProperty("searchValue")
      ? options["searchValue"]
      : undefined;
    const query = Object.assign({}, params);
    if (limit !== undefined) query["Limit"] = limit;
    if (branchId !== undefined) query["BranchId"] = branchId;
    if (searchValue !== undefined) query["SearchValue"] = searchValue;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Reserves an guest user.
   * @param {integer} data.hostId - Host id.
   * @param {integer} data.userGroupId - User group id.
   * @param {integer} data.slot - Slot.
   * @param {Object} params - additional query params
   */
  postUserGuestsReserve(data = {}, params = {}) {
    const url = `/api/v3.0/userguests/reserve`;
    const body = data;
    return this.client.request("post", url, body, params);
  }

  /**
   * Attempts to release guest users on specified host.
   * @param {integer} hostId - Host id.
   * @param {Object} params - additional query params
   */
  postUserGuestsHostByHostIdRelease(hostId, params = {}) {
    const url = `/api/v3.0/userguests/host/${hostId}/release`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Attempts to release guest users on specified host.
   * @param {integer} userId - Guest user id.
   * @param {Object} params - additional query params
   */
  postUserGuestsByUserIdRelease(userId, params = {}) {
    const url = `/api/v3.0/userguests/${userId}/release`;
    return this.client.request("post", url, {}, params);
  }

  /**
   * Gets joined guest user id.
   * @param {Object} params - additional query params
   */
  getUserGuestsJoined(options = {}, params = {}) {
    const url = `/api/v3.0/userguests/joined`;
    return this.client.request("get", url, {}, params);
  }
}
