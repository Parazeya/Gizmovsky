import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Applications {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Get all applications.
   */
  getApplications(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; applicationTitle?: string; categoryId?: number; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/applications`;
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
   * Create an application.
   */
  postApplications(data: { title?: string; description?: string; version?: string; applicationCategoryId?: number; developerId?: number; publisherId?: number; ageRating?: number; releaseDate?: string; defaultExecutableId?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/applications`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update an application.
   */
  putApplications(data: { id?: number; title?: string; description?: string; version?: string; applicationCategoryId?: number; developerId?: number; publisherId?: number; ageRating?: number; releaseDate?: string; defaultExecutableId?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/applications`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get an application by id.
   */
  getApplicationsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; guid?: string; title?: string; description?: string; version?: string; applicationCategoryId?: number; developerId?: number; publisherId?: number; ageRating?: number; releaseDate?: string; defaultExecutableId?: number }>> {
    const url = `/api/v2.0/applications/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Delete an application.
   */
  deleteApplicationsById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/applications/${id}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Get the image of the specified application.
   */
  getApplicationsByIdImage(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ image?: string }>> {
    const url = `/api/v2.0/applications/${id}/image`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Update the image of the specified application.
   */
  putApplicationsByIdImage(id: string | number, data: { image?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/applications/${id}/image`;
    return this.client.request('put', url, data, params);
  }
}
