import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Documents {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getDocuments
   */
  getDocuments(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; documentTypeId?: any; isDeleted?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/documents`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.documentTypeId !== undefined) query['DocumentTypeId'] = options.documentTypeId;
    if (options.isDeleted !== undefined) query['IsDeleted'] = options.isDeleted;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postDocuments
   */
  postDocuments(data: { file?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ guid?: string; id?: any }>> {
    const url = `/api/v3/documents`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putDocuments
   */
  putDocuments(data: { id?: any; documentTypeId?: any; fileName?: string; description?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/documents`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getDocumentsById
   */
  getDocumentsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; documentTypeId?: any; fileName?: string; description?: any; guid?: string; size?: any }>> {
    const url = `/api/v3/documents/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteDocumentsById
   */
  deleteDocumentsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/documents/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * putDocumentsByIdUndelete
   */
  putDocumentsByIdUndelete(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/documents/${id}/undelete`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * getDocumentsFilesExists
   */
  getDocumentsFilesExists(options: { fileName?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: any }>>> {
    const url = `/api/v3/documents/files/exists`;
    const query: Record<string, any> = { ...params };
    if (options.fileName !== undefined) query['fileName'] = options.fileName;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getDocumentsByIdDescription
   */
  getDocumentsByIdDescription(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<string>> {
    const url = `/api/v3/documents/${id}/description`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putDocumentsByIdDescription
   */
  putDocumentsByIdDescription(id: string | number, data: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/documents/${id}/description`;
    return this.client.request('put', url, data, params);
  }
}
