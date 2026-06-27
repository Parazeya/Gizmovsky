import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class ApplicationCategories {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getApplicationCategories
   */
  getApplicationCategories(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; categoryName?: string; parentId?: any; expand?: string[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/applicationcategories`;
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
   * postApplicationCategories
   */
  postApplicationCategories(data: { name?: string; parentId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/applicationcategories`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putApplicationCategories
   */
  putApplicationCategories(data: { id?: any; name?: string; parentId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/applicationcategories`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getApplicationCategoriesById
   */
  getApplicationCategoriesById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; guid?: string; name?: string; parentId?: any }>> {
    const url = `/api/v3/applicationcategories/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * deleteApplicationCategoriesById
   */
  deleteApplicationCategoriesById(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<{ applicationCategoryDeleteResult?: number }>> {
    const url = `/api/v3/applicationcategories/${id}`;
    return this.client.request('delete', url, {}, params);
  }
}
