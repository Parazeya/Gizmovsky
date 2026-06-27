import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class ApplicationCategories {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Get all application categories.
   */
  getApplicationCategories(options: { paginationLimit?: number; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: any; categoryName?: string; parentId?: number; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v2.0/applicationcategories`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.categoryName !== undefined) query['CategoryName'] = options.categoryName;
    if (options.parentId !== undefined) query['ParentId'] = options.parentId;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Create an application category.
   */
  postApplicationCategories(data: { name?: string; parentId?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number }>> {
    const url = `/api/v2.0/applicationcategories`;
    return this.client.request('post', url, data, params);
  }

  /**
   * Update an application category.
   */
  putApplicationCategories(data: { id?: number; name?: string; parentId?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/applicationcategories`;
    return this.client.request('put', url, data, params);
  }

  /**
   * Get an application category by id.
   */
  getApplicationCategoriesById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; guid?: string; name?: string; parentId?: number }>> {
    const url = `/api/v2.0/applicationcategories/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Delete an application category.
   */
  deleteApplicationCategoriesById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v2.0/applicationcategories/${id}`;
    return this.client.request('delete', url, {}, params);
  }
}
