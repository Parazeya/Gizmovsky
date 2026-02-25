import { EventSourcePlus } from "event-source-plus";

/**
 * EventStream - Manages event streaming subscription with typed event filtering.
 * Auto-generated from EventMetadata.json
 * 
 * Usage:
 *   const stream = new EventStream(client);
 *   stream.assetCheckedOut().invoiceCreated().run(callback);
 */
export class EventStream {
  /**
   * Create a new EventStream instance
   * @param {GizmoClient} client - The Gizmo API client
   */
  constructor(client, options = {}) {
    this.client = client;
    this.options = options;
    this.filters = [];
    this.eventSource = null;
    this.controller = null;
    this.onmessage = null;
    this.onerror = null;
    this.onabort = null;

    // Initialize authorization headers
    this._initializeAuth();
  }

  /**
   * Initialize authorization headers from client
   * @private
   */
  _initializeAuth() {
    if (this.client.bearerToken) {
      this.options.headers = {
        ...this.options.headers,
        'Authorization': `Bearer ${this.client.bearerToken}`
      };
    } else if (this.client.auth && this.client.auth.username && this.client.auth.password) {
      // Create Basic Auth header
      const credentials = `${this.client.auth.username}:${this.client.auth.password}`;
      const encodedCredentials = Buffer.from(credentials).toString('base64');
      this.options.headers = {
        ...this.options.headers,
        'Authorization': `Basic ${encodedCredentials}`
      };
    }
  }

  /**
   * Get the base URL for event streaming
   * @returns {string} The EventSource URL with current filters
   */
  _getEventStreamUrl() {
    let url = `${this.client.baseURL}/v3.0/events/stream`;

    if (this.filters.length > 0) {
      const filterParam = this.filters.join('&filters=');
      url += `?filters=${filterParam}`;
    }
    return url;
  }

  /**
   * Indicates asset being checked out
   * @returns {EventStream} Returns this for method chaining
   */
  assetCheckedOut() {
    this.filters.push(2400);
    return this;
  }

  /**
   * Indicates asset being checked in
   * @returns {EventStream} Returns this for method chaining
   */
  assetCheckedIn() {
    this.filters.push(2401);
    return this;
  }

  /**
   * Indicates assistance request creation
   * @returns {EventStream} Returns this for method chaining
   */
  assistanceRequestCreated() {
    this.filters.push(900);
    return this;
  }

  /**
   * Indicates assistance request status change
   * @returns {EventStream} Returns this for method chaining
   */
  assistanceRequestChange() {
    this.filters.push(901);
    return this;
  }

  /**
   * Branch created event
   * @returns {EventStream} Returns this for method chaining
   */
  branchBranchCreated() {
    this.filters.push(1100);
    return this;
  }

  /**
   * Branch updated event
   * @returns {EventStream} Returns this for method chaining
   */
  branchBranchUpdated() {
    this.filters.push(1101);
    return this;
  }

  /**
   * Branch deleted event
   * @returns {EventStream} Returns this for method chaining
   */
  branchDeleted() {
    this.filters.push(1102);
    return this;
  }

  /**
   * Branch undeleted event
   * @returns {EventStream} Returns this for method chaining
   */
  branchUndeleted() {
    this.filters.push(1103);
    return this;
  }

  /**
   * Operator added event
   * @returns {EventStream} Returns this for method chaining
   */
  branchOperatorAdded() {
    this.filters.push(1104);
    return this;
  }

  /**
   * Operator removed event
   * @returns {EventStream} Returns this for method chaining
   */
  branchOperatorRemoved() {
    this.filters.push(1105);
    return this;
  }

  /**
   * Operators default branch change event
   * @returns {EventStream} Returns this for method chaining
   */
  branchOperatorsDefaultBranchChange() {
    this.filters.push(1106);
    return this;
  }

  /**
   * Barcode scanned event
   * @returns {EventStream} Returns this for method chaining
   */
  branchBarcodeScanned() {
    this.filters.push(2100);
    return this;
  }

  /**
   * Smartcard reader data event
   * @returns {EventStream} Returns this for method chaining
   */
  branchSmartcardReaderDataEvent() {
    this.filters.push(2101);
    return this;
  }

  /**
   * Событие ошибки фискального принтера
   * @returns {EventStream} Returns this for method chaining
   */
  branchОшибка() {
    this.filters.push(2102);
    return this;
  }

  /**
   * Ошибка терминала оплаты
   * @returns {EventStream} Returns this for method chaining
   */
  branchОшибка2() {
    this.filters.push(2103);
    return this;
  }

  /**
   * Indicates an database entity chgange
   * @returns {EventStream} Returns this for method chaining
   */
  databaseEntityDatabaseEntityChange() {
    this.filters.push(100);
    return this;
  }

  /**
   * Maintenance changed event
   * @returns {EventStream} Returns this for method chaining
   */
  hostComputerMaintenanceChanged() {
    this.filters.push(1700);
    return this;
  }

  /**
   * Security changed event
   * @returns {EventStream} Returns this for method chaining
   */
  hostComputerSecurityChanged() {
    this.filters.push(1701);
    return this;
  }

  /**
   * Input lock changed event
   * @returns {EventStream} Returns this for method chaining
   */
  hostComputerInputLockChanged() {
    this.filters.push(1702);
    return this;
  }

  /**
   * Connection changed event
   * @returns {EventStream} Returns this for method chaining
   */
  hostComputerConnectionChanged() {
    this.filters.push(1703);
    return this;
  }

  /**
   * Client version changed event
   * @returns {EventStream} Returns this for method chaining
   */
  hostComputerClientVersionChanged() {
    this.filters.push(1704);
    return this;
  }

  /**
   * Host layout group created event
   * @returns {EventStream} Returns this for method chaining
   */
  hostLayoutGroupHostLayoutGroupCreated() {
    this.filters.push(1500);
    return this;
  }

  /**
   * Host layout group updated event
   * @returns {EventStream} Returns this for method chaining
   */
  hostLayoutGroupHostLayoutGroupUpdated() {
    this.filters.push(1501);
    return this;
  }

  /**
   * Host layout group removed event
   * @returns {EventStream} Returns this for method chaining
   */
  hostLayoutGroupHostLayoutGroupRemoved() {
    this.filters.push(1502);
    return this;
  }

  /**
   * Host layout created event
   * @returns {EventStream} Returns this for method chaining
   */
  hostLayoutHostLayoutCreated() {
    this.filters.push(1400);
    return this;
  }

  /**
   * Host layout updated event
   * @returns {EventStream} Returns this for method chaining
   */
  hostLayoutHostLayoutUpdated() {
    this.filters.push(1401);
    return this;
  }

  /**
   * Host layout removed event
   * @returns {EventStream} Returns this for method chaining
   */
  hostLayoutHostLayoutRemoved() {
    this.filters.push(1402);
    return this;
  }

  /**
   * Host in order state changed
   * @returns {EventStream} Returns this for method chaining
   */
  hostInOrderStateChanged() {
    this.filters.push(800);
    return this;
  }

  /**
   * Host lock state changed
   * @returns {EventStream} Returns this for method chaining
   */
  hostLockStateChanged() {
    this.filters.push(801);
    return this;
  }

  /**
   * Instance authentication changed event
   * @returns {EventStream} Returns this for method chaining
   */
  instanceInstanceAuthenticationChanged() {
    this.filters.push(2200);
    return this;
  }

  /**
   * Instance authorization changed event
   * @returns {EventStream} Returns this for method chaining
   */
  instanceInstanceAuthorizationChanged() {
    this.filters.push(2201);
    return this;
  }

  /**
   * Indicates creation of an invoice
   * @returns {EventStream} Returns this for method chaining
   */
  invoiceCreated() {
    this.filters.push(1900);
    return this;
  }

  /**
   * Indicates creation of an invoice payment
   * @returns {EventStream} Returns this for method chaining
   */
  invoicePayment() {
    this.filters.push(1901);
    return this;
  }

  /**
   * Indicates log being cleared
   * @returns {EventStream} Returns this for method chaining
   */
  logCleared() {
    this.filters.push(2001);
    return this;
  }

  /**
   * Indicates options change
   * @returns {EventStream} Returns this for method chaining
   */
  optionsChange() {
    this.filters.push(1300);
    return this;
  }

  /**
   * Indicates payment intent creation
   * @returns {EventStream} Returns this for method chaining
   */
  paymentIntentCreated() {
    this.filters.push(700);
    return this;
  }

  /**
   * Indicates payment intent completion
   * @returns {EventStream} Returns this for method chaining
   */
  paymentIntentCompleted() {
    this.filters.push(701);
    return this;
  }

  /**
   * Indicates payment intent capture
   * @returns {EventStream} Returns this for method chaining
   */
  paymentIntentЗахваченный() {
    this.filters.push(702);
    return this;
  }

  /**
   * Указывает на отказ от намерения произвести оплату
   * @returns {EventStream} Returns this for method chaining
   */
  paymentIntentОтклонено() {
    this.filters.push(703);
    return this;
  }

  /**
   * Указывает на отмену намерения произвести платеж
   * @returns {EventStream} Returns this for method chaining
   */
  paymentIntentОтменен() {
    this.filters.push(704);
    return this;
  }

  /**
   * Indicates payment intent expired
   * @returns {EventStream} Returns this for method chaining
   */
  paymentIntentExpired() {
    this.filters.push(705);
    return this;
  }

  /**
   * Указывает на сбой намерения оплаты
   * @returns {EventStream} Returns this for method chaining
   */
  paymentIntentНеУдалось() {
    this.filters.push(706);
    return this;
  }

  /**
   * Report preset added event
   * @returns {EventStream} Returns this for method chaining
   */
  reportPresetReportPresetAdded() {
    this.filters.push(1200);
    return this;
  }

  /**
   * Report preset updated event
   * @returns {EventStream} Returns this for method chaining
   */
  reportPresetReportPresetUpdated() {
    this.filters.push(1201);
    return this;
  }

  /**
   * Report preset removed event
   * @returns {EventStream} Returns this for method chaining
   */
  reportPresetReportPresetRemoved() {
    this.filters.push(1202);
    return this;
  }

  /**
   * Report preset added event
   * @returns {EventStream} Returns this for method chaining
   */
  reportPresetReportPresetAdded2() {
    this.filters.push(1203);
    return this;
  }

  /**
   * Reservation created
   * @returns {EventStream} Returns this for method chaining
   */
  reservationCreated() {
    this.filters.push(600);
    return this;
  }

  /**
   * Reservation updated
   * @returns {EventStream} Returns this for method chaining
   */
  reservationUpdated() {
    this.filters.push(601);
    return this;
  }

  /**
   * Reservation cancelled
   * @returns {EventStream} Returns this for method chaining
   */
  reservationCancelled() {
    this.filters.push(602);
    return this;
  }

  /**
   * Host added to a reservation
   * @returns {EventStream} Returns this for method chaining
   */
  reservationAdded() {
    this.filters.push(603);
    return this;
  }

  /**
   * Host reservation updated
   * @returns {EventStream} Returns this for method chaining
   */
  reservationUpdated2() {
    this.filters.push(604);
    return this;
  }

  /**
   * Host reservation moved
   * @returns {EventStream} Returns this for method chaining
   */
  reservationMoved() {
    this.filters.push(605);
    return this;
  }

  /**
   * Reservation activated
   * @returns {EventStream} Returns this for method chaining
   */
  reservationActivated() {
    this.filters.push(606);
    return this;
  }

  /**
   * Reservation completed
   * @returns {EventStream} Returns this for method chaining
   */
  reservationCompleted() {
    this.filters.push(607);
    return this;
  }

  /**
   * Reservation expired
   * @returns {EventStream} Returns this for method chaining
   */
  reservationExpired() {
    this.filters.push(608);
    return this;
  }

  /**
   * Host reservation activated
   * @returns {EventStream} Returns this for method chaining
   */
  reservationActivated2() {
    this.filters.push(609);
    return this;
  }

  /**
   * Host reservation cancelled
   * @returns {EventStream} Returns this for method chaining
   */
  reservationCancelled2() {
    this.filters.push(610);
    return this;
  }

  /**
   * Host reservation completed
   * @returns {EventStream} Returns this for method chaining
   */
  reservationCompleted2() {
    this.filters.push(611);
    return this;
  }

  /**
   * Host reservation expired
   * @returns {EventStream} Returns this for method chaining
   */
  reservationExpired2() {
    this.filters.push(612);
    return this;
  }

  /**
   * User added
   * @returns {EventStream} Returns this for method chaining
   */
  reservationAdded2() {
    this.filters.push(613);
    return this;
  }

  /**
   * User removed
   * @returns {EventStream} Returns this for method chaining
   */
  reservationRemoved() {
    this.filters.push(614);
    return this;
  }

  /**
   * Reservation payment status changed
   * @returns {EventStream} Returns this for method chaining
   */
  reservationPaymentStatusChanged() {
    this.filters.push(615);
    return this;
  }

  /**
   * Indicates shift start
   * @returns {EventStream} Returns this for method chaining
   */
  shiftStarted() {
    this.filters.push(1000);
    return this;
  }

  /**
   * Indicates shift end
   * @returns {EventStream} Returns this for method chaining
   */
  shiftEnded() {
    this.filters.push(1001);
    return this;
  }

  /**
   * Indicates shift lock
   * @returns {EventStream} Returns this for method chaining
   */
  shiftLocked() {
    this.filters.push(1002);
    return this;
  }

  /**
   * Indicates shift unlock
   * @returns {EventStream} Returns this for method chaining
   */
  shiftUnlocked() {
    this.filters.push(1003);
    return this;
  }

  /**
   * Indicates product stock level change
   * @returns {EventStream} Returns this for method chaining
   */
  productStockChange() {
    this.filters.push(1600);
    return this;
  }

  /**
   * User session created
   * @returns {EventStream} Returns this for method chaining
   */
  userSessionCreated() {
    this.filters.push(1800);
    return this;
  }

  /**
   * User session moved
   * @returns {EventStream} Returns this for method chaining
   */
  userSessionMoved() {
    this.filters.push(1801);
    return this;
  }

  /**
   * User session state changed
   * @returns {EventStream} Returns this for method chaining
   */
  userSessionStateChanged() {
    this.filters.push(1802);
    return this;
  }

  /**
   * Balance changed
   * @returns {EventStream} Returns this for method chaining
   */
  userIndicatesBalanceChange() {
    this.filters.push(300);
    return this;
  }

  /**
   * Balance changed
   * @returns {EventStream} Returns this for method chaining
   */
  userIndicatesBalanceChange2() {
    this.filters.push(301);
    return this;
  }

  /**
   * Indicates enablement of an user
   * @returns {EventStream} Returns this for method chaining
   */
  userEnabled() {
    this.filters.push(302);
    return this;
  }

  /**
   * Indicates email change
   * @returns {EventStream} Returns this for method chaining
   */
  userEmailChange() {
    this.filters.push(303);
    return this;
  }

  /**
   * Indicates negative balance change
   * @returns {EventStream} Returns this for method chaining
   */
  userNegativeBalanceChange() {
    this.filters.push(304);
    return this;
  }

  /**
   * Indicates usage session change
   * @returns {EventStream} Returns this for method chaining
   */
  userUsageSessionChange() {
    this.filters.push(305);
    return this;
  }

  /**
   * Indicates enablement of an user
   * @returns {EventStream} Returns this for method chaining
   */
  userEnabled2() {
    this.filters.push(306);
    return this;
  }

  /**
   * Indicates picture change
   * @returns {EventStream} Returns this for method chaining
   */
  userPictureChange() {
    this.filters.push(307);
    return this;
  }

  /**
   * Indicates smart card change
   * @returns {EventStream} Returns this for method chaining
   */
  userSmartCardChange() {
    this.filters.push(308);
    return this;
  }

  /**
   * Indicates picture change
   * @returns {EventStream} Returns this for method chaining
   */
  userPictureChange2() {
    this.filters.push(309);
    return this;
  }

  /**
   * Indicates password change
   * @returns {EventStream} Returns this for method chaining
   */
  userPasswordChange() {
    this.filters.push(310);
    return this;
  }

  /**
   * Balance changed
   * @returns {EventStream} Returns this for method chaining
   */
  userIndicatesBalanceChange3() {
    this.filters.push(311);
    return this;
  }

  /**
   * Indicates that user note has been added
   * @returns {EventStream} Returns this for method chaining
   */
  userNoteAdded() {
    this.filters.push(312);
    return this;
  }

  /**
   * Indicates that user note has been updated
   * @returns {EventStream} Returns this for method chaining
   */
  userNoteUpdated() {
    this.filters.push(313);
    return this;
  }

  /**
   * Indicates that user note has been updated
   * @returns {EventStream} Returns this for method chaining
   */
  userNoteDeleted() {
    this.filters.push(314);
    return this;
  }

  /**
   * User added event
   * @returns {EventStream} Returns this for method chaining
   */
  waitingLineRelatedEventsUserAdded() {
    this.filters.push(400);
    return this;
  }

  /**
   * User moved event
   * @returns {EventStream} Returns this for method chaining
   */
  waitingLineRelatedEventsUserMoved() {
    this.filters.push(401);
    return this;
  }

  /**
   * User removed event
   * @returns {EventStream} Returns this for method chaining
   */
  waitingLineRelatedEventsUserRemoved() {
    this.filters.push(402);
    return this;
  }

  /**
   * Estimation changed event
   * @returns {EventStream} Returns this for method chaining
   */
  waitingLineRelatedEventsEstimationChanged() {
    this.filters.push(403);
    return this;
  }

  /**
   * Waiting line timed out event
   * @returns {EventStream} Returns this for method chaining
   */
  waitingLineRelatedEventsTimedOut() {
    this.filters.push(404);
    return this;
  }


  /**
   * Get all event IDs as an array for filtering
   * @returns {Array<number>} Array of all available event IDs
   */
  static getAllEventIds() {
    return [
      2400, 2401, 900, 901, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 2100,
      2101, 2102, 2103, 100, 1700, 1701, 1702, 1703, 1704, 1500, 1501, 1502,
      1400, 1401, 1402, 800, 801, 2200, 2201, 1900, 1901, 2001, 1300, 700,
      701, 702, 703, 704, 705, 706, 1200, 1201, 1202, 1203, 600, 601, 602,
      603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 1000,
      1001, 1002, 1003, 1600, 1800, 1801, 1802, 300, 301, 302, 303, 304, 305,
      306, 307, 308, 309, 310, 311, 312, 313, 314, 400, 401, 402, 403, 404,
    ];
  }

  /**
   * Add all available events to the filter
   * @returns {EventStream} Returns this for method chaining
   */
  allEvents() {
    this.filters.push(...EventStream.getAllEventIds());
    return this;
  }

  /**
   * Clear all filters
   * @returns {EventStream} Returns this for method chaining
   */
  clearFilters() {
    this.filters = [];
    return this;
  }

  /**
   * Get current filters array
   * @returns {Array<number>} Current event ID filters
   */
  getFilters() {
    return [...this.filters];
  }

  /**
   * Create and start listening to the event stream
   * @param {Function} [onmessage] - Callback function for incoming events
   * @returns {EventStream} Returns this for method chaining
   * @throws {Error} If EventSource is not available in the current environment
   */
  async run(onmessage) {
    return this._createEventSource(onmessage);
  }

  /**
   * Internal method to create and manage the EventSource connection
   * @private
   */
  _createEventSource(onmessage) {
    // Stop existing connection if any
    this.stop();

    if (typeof onmessage !== 'function') {
      throw new Error('onmessage must be a function');
    }

    let onError;
    let onAbort;
    if (typeof this.onerror === 'function') {
      onError = this.onerror;
    }
    if (typeof this.onabort === 'function') {
      onAbort = this.onabort;
    }

    // Build the EventSource URL
    const url = this._getEventStreamUrl();

    try {
      this.eventSource = new EventSourcePlus(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: this.options.headers ? this.options.headers['Authorization'] : undefined,
        }
      });

      const controller = this.controller = this.eventSource.listen({
        async onMessage(message) {
          onmessage(message.data)
        },
        onResponse({ response }) {
          if (!response.ok) {
            console.error('EventSource error response:', response);
            onError(response)
          }
        },
      })

      this.controller.onAbort((_) => {
        console.log('EventSource connection aborted');
        if (onAbort) {
          onAbort(_);
        }
      })

      // this.eventSource = es;
      return this;
    } catch (error) {
      console.error('Failed to create EventSource:', error);
      throw error;
    }
  }

  /**
   * Register an error handler for the event stream
   * @param {Function} onerror - Callback function for errors
   * @returns {EventStream} Returns this for method chaining
   */
  onError(onerror) {
    if (typeof onerror === 'function') {
      this.onerror = onerror;
    }
    return this;
  }

  onAbort(onabort) {
    if (typeof onabort === 'function') {
      this.onabort = onabort;
    }
    return this;
  }

  /**
   * Stop listening to the event stream
   * @returns {void}
   */
  stop() {
    if (this.controller) {
      try {
        this.controller.abort();
      } catch (error) {
        console.error('Error closing EventSource:', error);
      }
      this.eventSource = null;
      this.controller = null;
    }
  }

  /**
   * Check if the event stream is currently running
   * @returns {boolean} True if EventSource is active
   */
  isRunning() {
    return this.controller !== null;
  }
}
