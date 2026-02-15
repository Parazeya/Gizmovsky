import { GizmoClient } from "../GizmoClient.js";

export class Files {
  constructor(client) {
    this.client = client;
  }

  /**
   * Soft deletes a file.
   * @param {integer} id - File id.
   * @param {Object} params - additional query params
   */
  deleteFilesById(id, params = {}) {
    const url = `/api/v3.0/files/${id}`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Hard deletes a file.
   * @param {integer} id - File id.
   * @param {Object} params - additional query params
   */
  deleteFilesByIdHard(id, params = {}) {
    const url = `/api/v3.0/files/${id}/hard`;
    return this.client.request("delete", url, {}, params);
  }

  /**
   * Gets soft deleted files total size.
   * @param {Object} params - additional query params
   */
  getFilesDeletedSize(options = {}, params = {}) {
    const url = `/api/v3.0/files/deleted/size`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Gets soft deleted files count.
   * @param {Object} params - additional query params
   */
  getFilesDeletedCount(options = {}, params = {}) {
    const url = `/api/v3.0/files/deleted/count`;
    return this.client.request("get", url, {}, params);
  }

  /**
   * Purges soft deleted files.
   * @param {Object} params - additional query params
   */
  deleteFiles(params = {}) {
    const url = `/api/v3.0/files`;
    return this.client.request("delete", url, {}, params);
  }
}
