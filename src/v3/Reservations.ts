import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Reservations {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getReservations
   */
  getReservations(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; dateFrom?: string; dateTo?: string; status?: any; userId?: any; contactPhone?: string; contactEmail?: string; expand?: string[]; branchId?: any; hostGroupId?: any; paymentStatus?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/reservations`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.status !== undefined) query['Status'] = options.status;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.contactPhone !== undefined) query['ContactPhone'] = options.contactPhone;
    if (options.contactEmail !== undefined) query['ContactEmail'] = options.contactEmail;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.branchId !== undefined) query['BranchId'] = options.branchId;
    if (options.hostGroupId !== undefined) query['HostGroupId'] = options.hostGroupId;
    if (options.paymentStatus !== undefined) query['PaymentStatus'] = options.paymentStatus;
    return this.client.request('get', url, {}, query);
  }

  /**
   * postReservations
   */
  postReservations(data: { userId?: any; contactPhone?: any; contactEmail?: any; note?: any; date?: string; duration?: any; branchId?: any; hosts?: any[]; users?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ pin?: string; id?: any }>> {
    const url = `/api/v3/reservations`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putReservations
   */
  putReservations(data: { id?: any; userId?: any; date?: string; duration?: any; contactPhone?: any; contactEmail?: any; note?: any; pin?: string; status?: number; hosts?: any[]; users?: any[]; branchId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/reservations`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getReservationsById
   */
  getReservationsById(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any; userId?: any; date?: string; duration?: any; contactPhone?: any; contactEmail?: any; note?: any; pin?: string; status?: number; hosts?: any[]; users?: any[]; branchId?: any; paymentStatus?: number; activationTime?: any; expireAfter?: any; cancellationGracePeriod?: any; cancellationRefundPercentage?: any; loginBlockBeforeTime?: any; loginBlockAfterTime?: any; finalizedById?: any; createdTime?: string; operatorId?: any; orderId?: any }>> {
    const url = `/api/v3/reservations/${id}`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getReservationsAvailability
   */
  getReservationsAvailability(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; start?: string; duration?: any; branchId?: any; userGroups?: any[] } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/reservations/availability`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.start !== undefined) query['Start'] = options.start;
    if (options.duration !== undefined) query['Duration'] = options.duration;
    if (options.branchId !== undefined) query['BranchId'] = options.branchId;
    if (options.userGroups !== undefined) query['UserGroups'] = options.userGroups;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getReservationsOffer
   */
  getReservationsOffer(options: { date?: string; duration?: any; hosts?: any[]; users?: any[]; userGroupId?: any; userId?: any; contactPhone?: string; contactEmail?: string; note?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ offerId?: string; start?: string; duration?: any; discount?: any; reward?: any; total?: any; fee?: any; minimumPayment?: any; offers?: any[]; hosts?: any[]; cartId?: string; points?: any }>>> {
    const url = `/api/v3/reservations/offer`;
    const query: Record<string, any> = { ...params };
    if (options.date !== undefined) query['Date'] = options.date;
    if (options.duration !== undefined) query['Duration'] = options.duration;
    if (options.hosts !== undefined) query['Hosts'] = options.hosts;
    if (options.users !== undefined) query['Users'] = options.users;
    if (options.userGroupId !== undefined) query['UserGroupId'] = options.userGroupId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.contactPhone !== undefined) query['ContactPhone'] = options.contactPhone;
    if (options.contactEmail !== undefined) query['ContactEmail'] = options.contactEmail;
    if (options.note !== undefined) query['Note'] = options.note;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getReservationsHostsNext
   */
  getReservationsHostsNext(options: { paginationLimit?: any; paginationSortBy?: string; paginationIsAsc?: boolean; paginationIsScroll?: boolean; paginationCursor?: string; expand?: string[]; startDate?: string; isDeleted?: boolean; branchId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ data?: any[]; nextCursor?: any; prevCursor?: any }>> {
    const url = `/api/v3/reservations/hosts/next`;
    const query: Record<string, any> = { ...params };
    if (options.paginationLimit !== undefined) query['Pagination.Limit'] = options.paginationLimit;
    if (options.paginationSortBy !== undefined) query['Pagination.SortBy'] = options.paginationSortBy;
    if (options.paginationIsAsc !== undefined) query['Pagination.IsAsc'] = options.paginationIsAsc;
    if (options.paginationIsScroll !== undefined) query['Pagination.IsScroll'] = options.paginationIsScroll;
    if (options.paginationCursor !== undefined) query['Pagination.Cursor'] = options.paginationCursor;
    if (options.expand !== undefined) query['Expand'] = options.expand;
    if (options.startDate !== undefined) query['StartDate'] = options.startDate;
    if (options.isDeleted !== undefined) query['IsDeleted'] = options.isDeleted;
    if (options.branchId !== undefined) query['BranchId'] = options.branchId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getReservationsHostsByHostIdNext
   */
  getReservationsHostsByHostIdNext(hostId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ nextReservationId?: any; nextReservationTime?: any; nextReservationDuration?: any }>> {
    const url = `/api/v3/reservations/hosts/${hostId}/next`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putReservationsByIdCancel
   */
  putReservationsByIdCancel(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/reservations/${id}/cancel`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * postReservationsByIdHosts
   */
  postReservationsByIdHosts(id: string | number, data: { hostId?: any; slot?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/reservations/${id}/hosts`;
    return this.client.request('post', url, data, params);
  }

  /**
   * putReservationsByIdComplete
   */
  putReservationsByIdComplete(id: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/reservations/${id}/complete`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putReservationsByIdHostsMove
   */
  putReservationsByIdHostsMove(id: string | number, data: { hostId?: any; moveHostId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/reservations/${id}/hosts/move`;
    return this.client.request('put', url, data, params);
  }

  /**
   * putReservationsByIdHostsByHostIdComplete
   */
  putReservationsByIdHostsByHostIdComplete(id: string | number, hostId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/reservations/${id}/hosts/${hostId}/complete`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * putReservationsByIdUsers
   */
  putReservationsByIdUsers(id: string | number, data: { userId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: any }>> {
    const url = `/api/v3/reservations/${id}/users`;
    return this.client.request('put', url, data, params);
  }

  /**
   * deleteReservationsByIdUsersByUserId
   */
  deleteReservationsByIdUsersByUserId(id: string | number, userId: string | number, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/reservations/${id}/users/${userId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * getReservationsByIdNote
   */
  getReservationsByIdNote(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<string>> {
    const url = `/api/v3/reservations/${id}/note`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * putReservationsByIdNote
   */
  putReservationsByIdNote(id: string | number, data: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/reservations/${id}/note`;
    return this.client.request('put', url, data, params);
  }

  /**
   * getReservationsByIdOrder
   */
  getReservationsByIdOrder(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ subTotal?: any; taxTotal?: any; pointsTotal?: any; fee?: any; discount?: any; total?: any; paid?: any; outstanding?: any; pointsAward?: any; paymentStatus?: number; invoiceStatus?: number; payments?: any[]; minimumPayment?: any }>> {
    const url = `/api/v3/reservations/${id}/order`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * getReservationsByIdPayments
   */
  getReservationsByIdPayments(id: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<any>>> {
    const url = `/api/v3/reservations/${id}/payments`;
    return this.client.request('get', url, {}, params);
  }
}
