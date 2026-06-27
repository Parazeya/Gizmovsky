import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class FileImages {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getFileImages
   */
  getFileImages(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; isDeleted?: boolean; fileName?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/fileimages`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.isDeleted !== undefined) query['IsDeleted'] = options.isDeleted;
    if (options.fileName !== undefined) query['FileName'] = options.fileName;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postFileImages
   */
  postFileImages(data: { file?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ guid?: string; id?: any }>> {
    const url = `/api/v3/fileimages`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putFileImages
   */
  putFileImages(data: { id?: any; fileName?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/fileimages`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getFileImagesById
   */
  getFileImagesById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; fileName?: string; guid?: string; size?: any }>> {
    const url = `/api/v3/fileimages/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteFileImagesById
   */
  deleteFileImagesById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/fileimages/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * putFileImagesByIdUndelete
   */
  putFileImagesByIdUndelete(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/fileimages/${id}/undelete`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * getFileImagesFilesExists
   */
  getFileImagesFilesExists(options: { fileName?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: any }>>> {
    const url = `/api/v3/fileimages/files/exists`;
    const query: Record<string, any> = { ...params };
    if (options.fileName !== undefined) query['fileName'] = options.fileName;
    return this.client.request('get', url, {}, query);
  }
}
