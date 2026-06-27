import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Applications {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getApplications
   */
  getApplications(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; applicationTitle?: string; categoryId?: any; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/applications`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.applicationTitle !== undefined) query['ApplicationTitle'] = options.applicationTitle;
    if (options.categoryId !== undefined) query['CategoryId'] = options.categoryId;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postApplications
   */
  postApplications(data: { title?: string; description?: any; version?: any; applicationCategoryId?: any; developerId?: any; publisherId?: any; ageRating?: any; releaseDate?: any; defaultExecutableId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/applications`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putApplications
   */
  putApplications(data: { id?: any; title?: string; description?: any; version?: any; applicationCategoryId?: any; developerId?: any; publisherId?: any; ageRating?: any; releaseDate?: any; defaultExecutableId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applications`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getApplicationsById
   */
  getApplicationsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; guid?: string; title?: string; description?: any; version?: any; applicationCategoryId?: any; developerId?: any; publisherId?: any; ageRating?: any; releaseDate?: any; defaultExecutableId?: any }>> {
    const url = `/api/v3/applications/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteApplicationsById
   */
  deleteApplicationsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ applicationDeleteResult?: number }>> {
    const url = `/api/v3/applications/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getApplicationsByIdImages
   */
  getApplicationsByIdImages(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ image?: string }>> {
    const url = `/api/v3/applications/${id}/images`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putApplicationsByIdImages
   */
  putApplicationsByIdImages(id: string | number, data: { image?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applications/${id}/images`;
    return this.client.request('put', url, data, params);
  }

  /**
   * postApplicationsByIdDuplicate
   */
  postApplicationsByIdDuplicate(id: string | number, data: { newTitle?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/applications/${id}/duplicate`;
    return this.client.request('post', url, data, params);
  }
}
