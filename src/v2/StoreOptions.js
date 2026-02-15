import { GizmoClient } from "../GizmoClient.js";

export class StoreOptions {
  constructor(client) {
    this.client = client;
  }

  /**
   * Reads options from the store.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.optionsType - Options type.
   * @param {Object} params - additional query params
   */
  getStoreOptions(options = {}, params = {}) {
    const url = `/api/v2.0/storeoptions`;
    const optionsType = options.hasOwnProperty("optionsType")
      ? options["optionsType"]
      : undefined;
    const query = Object.assign({}, params);
    if (optionsType !== undefined) query["optionsType"] = optionsType;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Writes specified options to the store.
   * @param {string} data.optionsType -
   * @param {object} data.values -
   * @param {Object} params - additional query params
   */
  putStoreOptions(data = {}, params = {}) {
    const url = `/api/v2.0/storeoptions`;
    const body = data;
    return this.client.request("put", url, body, params);
  }
}
