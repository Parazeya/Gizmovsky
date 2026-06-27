import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Reservations {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Gets reservation status.
   */
  getReservationsApiReservationsByReservationIdStatus(reservationId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<0 | 1>> {
    const url = `/api/reservations/${reservationId}/status`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Sets reservation status.
   */
  postReservationsApiReservationsByReservationIdStatusByStatus(reservationId: string | number, status: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/reservations/${reservationId}/status/${status}`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Adds a user to existing reservation.
   */
  putReservationsApiReservationsByReservationIdUsersByUserId(reservationId: string | number, userId: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/reservations/${reservationId}/users/${userId}`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Removes a user from existing reservation.
   */
  deleteReservationsApiReservationsByReservationIdUsersByUserId(reservationId: string | number, userId: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/reservations/${reservationId}/users/${userId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Adds a host to existing reservation.
   */
  putReservationsApiReservationsByReservationIdHostsByHostId(reservationId: string | number, hostId: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/reservations/${reservationId}/hosts/${hostId}`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Removes a host from existing reservation.
   */
  deleteReservationsApiReservationsByReservationIdHostsByHostId(reservationId: string | number, hostId: string | number, params: Record<string, any> = {}): Promise<void> {
    const url = `/api/reservations/${reservationId}/hosts/${hostId}`;
    return this.client.request('delete', url, {}, params);
  }

  /**
   * Adds new reservation.
   */
  putReservationsApiReservations(params: Record<string, any> = {}): Promise<GizmoResponse<number>> {
    const url = `/api/reservations`;
    return this.client.request('put', url, {}, params);
  }

  /**
   * Updates existing reservation.
   */
  postReservationsApiReservations(params: Record<string, any> = {}): Promise<void> {
    const url = `/api/reservations`;
    return this.client.request('post', url, {}, params);
  }

  /**
   * Gets reservations.
   */
  getReservationsApiReservations(options: { id?: number; status?: any; userId?: number; start?: string; end?: string; take?: number; skip?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ id?: number; userId?: number; note?: string; duration?: number; contactPhone?: string; contactEmail?: string; date?: string; pin?: string; status?: any; endDate?: string; users?: any[]; hosts?: any[] }>>> {
    const url = `/api/reservations`;
    const query: Record<string, any> = { ...params };
    if (options.id !== undefined) query['Id'] = options.id;
    if (options.status !== undefined) query['Status'] = options.status;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.start !== undefined) query['Start'] = options.start;
    if (options.end !== undefined) query['End'] = options.end;
    if (options.take !== undefined) query['Take'] = options.take;
    if (options.skip !== undefined) query['Skip'] = options.skip;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Gets reservation by id.
   */
  getReservationsApiReservationsByReservationId(reservationId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ id?: number; userId?: number; note?: string; duration?: number; contactPhone?: string; contactEmail?: string; date?: string; pin?: string; status?: any; endDate?: string; users?: any[]; hosts?: any[] }>> {
    const url = `/api/reservations/${reservationId}`;
    return this.client.request('get', url, {}, params);
  }
}
