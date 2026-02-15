import { GizmoClient } from "../GizmoClient.js";

export class Reports {
  constructor(client) {
    this.client = client;
  }

  /**
   * Overview report.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.dateFrom - Filter Date From.
   * @param {string} options.dateTo - Filter Date To.
   * @param {Object} params - additional query params
   */
  getReportsOverview(options = {}, params = {}) {
    const url = `/api/v3.0/reports/overview`;
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const query = Object.assign({}, params);
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Financial report.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.dateFrom - Filter Date From.
   * @param {string} options.dateTo - Filter Date To.
   * @param {integer} options.operatorId - Filter Operator Id.
   * @param {integer} options.registerId - Filter Register Id.
   * @param {integer} options.financialReportType - Filter Financial Report Type.
   * @param {Object} params - additional query params
   */
  getReportsFinancial(options = {}, params = {}) {
    const url = `/api/v3.0/reports/financial`;
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const operatorId = options.hasOwnProperty("operatorId")
      ? options["operatorId"]
      : undefined;
    const registerId = options.hasOwnProperty("registerId")
      ? options["registerId"]
      : undefined;
    const financialReportType = options.hasOwnProperty("financialReportType")
      ? options["financialReportType"]
      : undefined;
    const query = Object.assign({}, params);
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (operatorId !== undefined) query["OperatorId"] = operatorId;
    if (registerId !== undefined) query["RegisterId"] = registerId;
    if (financialReportType !== undefined)
      query["FinancialReportType"] = financialReportType;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Host usage report.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.dateFrom - Filter Date From.
   * @param {string} options.dateTo - Filter Date To.
   * @param {integer} options.hostUsageReportType - Filter Host Usage Report Type.
   * @param {integer} options.hostGroupId - Filter Host Group Id.
   * @param {Object} params - additional query params
   */
  getReportsHostusage(options = {}, params = {}) {
    const url = `/api/v3.0/reports/hostusage`;
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const hostUsageReportType = options.hasOwnProperty("hostUsageReportType")
      ? options["hostUsageReportType"]
      : undefined;
    const hostGroupId = options.hasOwnProperty("hostGroupId")
      ? options["hostGroupId"]
      : undefined;
    const query = Object.assign({}, params);
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (hostUsageReportType !== undefined)
      query["HostUsageReportType"] = hostUsageReportType;
    if (hostGroupId !== undefined) query["HostGroupId"] = hostGroupId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Top users report.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.dateFrom - Filter Date From.
   * @param {string} options.dateTo - Filter Date To.
   * @param {integer} options.topUsersNumber - Filter number of top users to display.
   * @param {Object} params - additional query params
   */
  getReportsTopusers(options = {}, params = {}) {
    const url = `/api/v3.0/reports/topusers`;
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const topUsersNumber = options.hasOwnProperty("topUsersNumber")
      ? options["topUsersNumber"]
      : undefined;
    const query = Object.assign({}, params);
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (topUsersNumber !== undefined) query["TopUsersNumber"] = topUsersNumber;
    return this.client.request("get", url, {}, query);
  }

  /**
   * User report.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.dateFrom - Filter Date From.
   * @param {string} options.dateTo - Filter Date To.
   * @param {integer} options.userId - Filter User Id.
   * @param {Object} params - additional query params
   */
  getReportsUser(options = {}, params = {}) {
    const url = `/api/v3.0/reports/user`;
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const userId = options.hasOwnProperty("userId")
      ? options["userId"]
      : undefined;
    const query = Object.assign({}, params);
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (userId !== undefined) query["UserId"] = userId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Product report.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.dateFrom - Filter Date From.
   * @param {string} options.dateTo - Filter Date To.
   * @param {integer} options.productId - Filter Product Id.
   * @param {integer} options.userId - Filter User Id.
   * @param {Object} params - additional query params
   */
  getReportsProduct(options = {}, params = {}) {
    const url = `/api/v3.0/reports/product`;
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const productId = options.hasOwnProperty("productId")
      ? options["productId"]
      : undefined;
    const userId = options.hasOwnProperty("userId")
      ? options["userId"]
      : undefined;
    const query = Object.assign({}, params);
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (productId !== undefined) query["ProductId"] = productId;
    if (userId !== undefined) query["UserId"] = userId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Products report.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.dateFrom - Filter Date From.
   * @param {string} options.dateTo - Filter Date To.
   * @param {integer} options.productId - Filter Product Id.
   * @param {integer} options.userId - Filter User Id.
   * @param {boolean} options.hideUnused - Hide unused products.
   * @param {Object} params - additional query params
   */
  getReportsProducts(options = {}, params = {}) {
    const url = `/api/v3.0/reports/products`;
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const productId = options.hasOwnProperty("productId")
      ? options["productId"]
      : undefined;
    const userId = options.hasOwnProperty("userId")
      ? options["userId"]
      : undefined;
    const hideUnused = options.hasOwnProperty("hideUnused")
      ? options["hideUnused"]
      : undefined;
    const query = Object.assign({}, params);
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (productId !== undefined) query["ProductId"] = productId;
    if (userId !== undefined) query["UserId"] = userId;
    if (hideUnused !== undefined) query["HideUnused"] = hideUnused;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Products log report.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.dateFrom - Filter Date From.
   * @param {string} options.dateTo - Filter Date To.
   * @param {integer} options.productId - Filter Product Id.
   * @param {integer} options.operatorId - Filter Operator Id.
   * @param {integer} options.productTransactionType - Filter Product Transaction Type.
   * @param {Object} params - additional query params
   */
  getReportsProductslog(options = {}, params = {}) {
    const url = `/api/v3.0/reports/productslog`;
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const productId = options.hasOwnProperty("productId")
      ? options["productId"]
      : undefined;
    const operatorId = options.hasOwnProperty("operatorId")
      ? options["operatorId"]
      : undefined;
    const productTransactionType = options.hasOwnProperty(
      "productTransactionType",
    )
      ? options["productTransactionType"]
      : undefined;
    const query = Object.assign({}, params);
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (productId !== undefined) query["ProductId"] = productId;
    if (operatorId !== undefined) query["OperatorId"] = operatorId;
    if (productTransactionType !== undefined)
      query["ProductTransactionType"] = productTransactionType;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Stock report.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.dateFrom - Filter Date From.
   * @param {string} options.dateTo - Filter Date To.
   * @param {Object} params - additional query params
   */
  getReportsStock(options = {}, params = {}) {
    const url = `/api/v3.0/reports/stock`;
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const query = Object.assign({}, params);
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Transactions log report.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.dateFrom - Filter Date From.
   * @param {string} options.dateTo - Filter Date To.
   * @param {integer} options.operatorId - Filter Operator Id.
   * @param {integer} options.registerId - Filter Register Id.
   * @param {integer} options.userId - Filter User Id.
   * @param {integer} options.voidOperatorId - Filter Void Operator Id.
   * @param {integer} options.transactionsLogActionType - Filter Transactions Log Action Type.
   * @param {Object} params - additional query params
   */
  getReportsTransactionslog(options = {}, params = {}) {
    const url = `/api/v3.0/reports/transactionslog`;
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const operatorId = options.hasOwnProperty("operatorId")
      ? options["operatorId"]
      : undefined;
    const registerId = options.hasOwnProperty("registerId")
      ? options["registerId"]
      : undefined;
    const userId = options.hasOwnProperty("userId")
      ? options["userId"]
      : undefined;
    const voidOperatorId = options.hasOwnProperty("voidOperatorId")
      ? options["voidOperatorId"]
      : undefined;
    const transactionsLogActionType = options.hasOwnProperty(
      "transactionsLogActionType",
    )
      ? options["transactionsLogActionType"]
      : undefined;
    const query = Object.assign({}, params);
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (operatorId !== undefined) query["OperatorId"] = operatorId;
    if (registerId !== undefined) query["RegisterId"] = registerId;
    if (userId !== undefined) query["UserId"] = userId;
    if (voidOperatorId !== undefined) query["VoidOperatorId"] = voidOperatorId;
    if (transactionsLogActionType !== undefined)
      query["TransactionsLogActionType"] = transactionsLogActionType;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Shifts log report.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.dateFrom - Filter Date From.
   * @param {string} options.dateTo - Filter Date To.
   * @param {integer} options.operatorId - Filter Operator Id.
   * @param {integer} options.registerId - Filter Register Id.
   * @param {integer} options.shiftsLogReportType - Filter Shifts Log Report Type.
   * @param {Object} params - additional query params
   */
  getReportsShiftslog(options = {}, params = {}) {
    const url = `/api/v3.0/reports/shiftslog`;
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const operatorId = options.hasOwnProperty("operatorId")
      ? options["operatorId"]
      : undefined;
    const registerId = options.hasOwnProperty("registerId")
      ? options["registerId"]
      : undefined;
    const shiftsLogReportType = options.hasOwnProperty("shiftsLogReportType")
      ? options["shiftsLogReportType"]
      : undefined;
    const query = Object.assign({}, params);
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (operatorId !== undefined) query["OperatorId"] = operatorId;
    if (registerId !== undefined) query["RegisterId"] = registerId;
    if (shiftsLogReportType !== undefined)
      query["ShiftsLogReportType"] = shiftsLogReportType;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Assets log report.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.dateFrom - Filter Date From.
   * @param {string} options.dateTo - Filter Date To.
   * @param {integer} options.assetTypeId - Filter Asset Type Id.
   * @param {integer} options.assetId - Filter Asset Id.
   * @param {integer} options.checkOutOperatorId - Filter Check Out Operator Id.
   * @param {integer} options.checkInOperatorId - Filter Check In Operator Id.
   * @param {integer} options.userId - Filter User Id.
   * @param {Object} params - additional query params
   */
  getReportsAssetslog(options = {}, params = {}) {
    const url = `/api/v3.0/reports/assetslog`;
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const assetTypeId = options.hasOwnProperty("assetTypeId")
      ? options["assetTypeId"]
      : undefined;
    const assetId = options.hasOwnProperty("assetId")
      ? options["assetId"]
      : undefined;
    const checkOutOperatorId = options.hasOwnProperty("checkOutOperatorId")
      ? options["checkOutOperatorId"]
      : undefined;
    const checkInOperatorId = options.hasOwnProperty("checkInOperatorId")
      ? options["checkInOperatorId"]
      : undefined;
    const userId = options.hasOwnProperty("userId")
      ? options["userId"]
      : undefined;
    const query = Object.assign({}, params);
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (assetTypeId !== undefined) query["AssetTypeId"] = assetTypeId;
    if (assetId !== undefined) query["AssetId"] = assetId;
    if (checkOutOperatorId !== undefined)
      query["CheckOutOperatorId"] = checkOutOperatorId;
    if (checkInOperatorId !== undefined)
      query["CheckInOperatorId"] = checkInOperatorId;
    if (userId !== undefined) query["UserId"] = userId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Invoice report.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.dateFrom - Filter Date From.
   * @param {string} options.dateTo - Filter Date To.
   * @param {integer} options.invoiceId - Filter Invoice Id.
   * @param {Object} params - additional query params
   */
  getReportsInvoice(options = {}, params = {}) {
    const url = `/api/v3.0/reports/invoice`;
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const invoiceId = options.hasOwnProperty("invoiceId")
      ? options["invoiceId"]
      : undefined;
    const query = Object.assign({}, params);
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (invoiceId !== undefined) query["InvoiceId"] = invoiceId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Invoices log report.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.dateFrom - Filter Date From.
   * @param {string} options.dateTo - Filter Date To.
   * @param {integer} options.operatorId - Filter Operator Id.
   * @param {integer} options.registerId - Filter Register Id.
   * @param {integer} options.paymentStatusType - Filter Payment Status Type.
   * @param {integer} options.voidedStatusType - Filter Voided Status Type.
   * @param {Object} params - additional query params
   */
  getReportsInvoiceslog(options = {}, params = {}) {
    const url = `/api/v3.0/reports/invoiceslog`;
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const operatorId = options.hasOwnProperty("operatorId")
      ? options["operatorId"]
      : undefined;
    const registerId = options.hasOwnProperty("registerId")
      ? options["registerId"]
      : undefined;
    const paymentStatusType = options.hasOwnProperty("paymentStatusType")
      ? options["paymentStatusType"]
      : undefined;
    const voidedStatusType = options.hasOwnProperty("voidedStatusType")
      ? options["voidedStatusType"]
      : undefined;
    const query = Object.assign({}, params);
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (operatorId !== undefined) query["OperatorId"] = operatorId;
    if (registerId !== undefined) query["RegisterId"] = registerId;
    if (paymentStatusType !== undefined)
      query["PaymentStatusType"] = paymentStatusType;
    if (voidedStatusType !== undefined)
      query["VoidedStatusType"] = voidedStatusType;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Z report.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.date - Filter Date.
   * @param {Object} params - additional query params
   */
  getReportsZ(options = {}, params = {}) {
    const url = `/api/v3.0/reports/z`;
    const date = options.hasOwnProperty("date") ? options["date"] : undefined;
    const query = Object.assign({}, params);
    if (date !== undefined) query["Date"] = date;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Z log report.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.dateFrom - Filter Date From.
   * @param {string} options.dateTo - Filter Date To.
   * @param {Object} params - additional query params
   */
  getReportsZlog(options = {}, params = {}) {
    const url = `/api/v3.0/reports/zlog`;
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const query = Object.assign({}, params);
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Application report.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.dateFrom - Filter Date From.
   * @param {string} options.dateTo - Filter Date To.
   * @param {integer} options.applicationId - Filter Application Id.
   * @param {integer} options.userId - Filter User Id.
   * @param {Object} params - additional query params
   */
  getReportsApplication(options = {}, params = {}) {
    const url = `/api/v3.0/reports/application`;
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const applicationId = options.hasOwnProperty("applicationId")
      ? options["applicationId"]
      : undefined;
    const userId = options.hasOwnProperty("userId")
      ? options["userId"]
      : undefined;
    const query = Object.assign({}, params);
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (applicationId !== undefined) query["ApplicationId"] = applicationId;
    if (userId !== undefined) query["UserId"] = userId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Applications report.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.dateFrom - Filter Date From.
   * @param {string} options.dateTo - Filter Date To.
   * @param {integer} options.userId - Filter User Id.
   * @param {boolean} options.hideUnused - Hide unused applications.
   * @param {Object} params - additional query params
   */
  getReportsApplications(options = {}, params = {}) {
    const url = `/api/v3.0/reports/applications`;
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const userId = options.hasOwnProperty("userId")
      ? options["userId"]
      : undefined;
    const hideUnused = options.hasOwnProperty("hideUnused")
      ? options["hideUnused"]
      : undefined;
    const query = Object.assign({}, params);
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (userId !== undefined) query["UserId"] = userId;
    if (hideUnused !== undefined) query["HideUnused"] = hideUnused;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Sessions log report.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.dateFrom - Filter Date From.
   * @param {string} options.dateTo - Filter Date To.
   * @param {integer} options.userId - Filter User Id.
   * @param {integer} options.hostId - Filter Host Id.
   * @param {integer} options.operatorId - Filter Operator Id.
   * @param {Object} params - additional query params
   */
  getReportsSessionslog(options = {}, params = {}) {
    const url = `/api/v3.0/reports/sessionslog`;
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const userId = options.hasOwnProperty("userId")
      ? options["userId"]
      : undefined;
    const hostId = options.hasOwnProperty("hostId")
      ? options["hostId"]
      : undefined;
    const operatorId = options.hasOwnProperty("operatorId")
      ? options["operatorId"]
      : undefined;
    const query = Object.assign({}, params);
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (userId !== undefined) query["UserId"] = userId;
    if (hostId !== undefined) query["HostId"] = hostId;
    if (operatorId !== undefined) query["OperatorId"] = operatorId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * License report.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.dateFrom - Filter Date From.
   * @param {string} options.dateTo - Filter Date To.
   * @param {integer} options.licenseId - Filter License Id.
   * @param {Object} params - additional query params
   */
  getReportsLicense(options = {}, params = {}) {
    const url = `/api/v3.0/reports/license`;
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const licenseId = options.hasOwnProperty("licenseId")
      ? options["licenseId"]
      : undefined;
    const query = Object.assign({}, params);
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (licenseId !== undefined) query["LicenseId"] = licenseId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Licenses report.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.dateFrom - Filter Date From.
   * @param {string} options.dateTo - Filter Date To.
   * @param {integer} options.applicationId - Filter Application Id.
   * @param {boolean} options.hideUnused - Hide unused licenses.
   * @param {Object} params - additional query params
   */
  getReportsLicenses(options = {}, params = {}) {
    const url = `/api/v3.0/reports/licenses`;
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const applicationId = options.hasOwnProperty("applicationId")
      ? options["applicationId"]
      : undefined;
    const hideUnused = options.hasOwnProperty("hideUnused")
      ? options["hideUnused"]
      : undefined;
    const query = Object.assign({}, params);
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (applicationId !== undefined) query["ApplicationId"] = applicationId;
    if (hideUnused !== undefined) query["HideUnused"] = hideUnused;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Orders log report.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.dateFrom - Filter Date From.
   * @param {string} options.dateTo - Filter Date To.
   * @param {integer} options.orderSource - Filter Order Source.
   * @param {integer} options.orderStatus - Filter Order Status.
   * @param {integer} options.operatorId - Filter Operator Id.
   * @param {integer} options.userId - Filter User Id.
   * @param {Object} params - additional query params
   */
  getReportsOrderslog(options = {}, params = {}) {
    const url = `/api/v3.0/reports/orderslog`;
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const orderSource = options.hasOwnProperty("orderSource")
      ? options["orderSource"]
      : undefined;
    const orderStatus = options.hasOwnProperty("orderStatus")
      ? options["orderStatus"]
      : undefined;
    const operatorId = options.hasOwnProperty("operatorId")
      ? options["operatorId"]
      : undefined;
    const userId = options.hasOwnProperty("userId")
      ? options["userId"]
      : undefined;
    const query = Object.assign({}, params);
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (orderSource !== undefined) query["OrderSource"] = orderSource;
    if (orderStatus !== undefined) query["OrderStatus"] = orderStatus;
    if (operatorId !== undefined) query["OperatorId"] = operatorId;
    if (userId !== undefined) query["UserId"] = userId;
    return this.client.request("get", url, {}, query);
  }

  /**
   * Orders statistics report.
   * @param {Object} options - options object with possible query parameters
   * @param {string} options.dateFrom - Filter Date From.
   * @param {string} options.dateTo - Filter Date To.
   * @param {integer} options.orderSource - Filter Order Source.
   * @param {integer} options.orderStatus - Filter Order Status.
   * @param {integer} options.operatorId - Filter Operator Id.
   * @param {integer} options.userId - Filter User Id.
   * @param {Object} params - additional query params
   */
  getReportsOrdersstatistics(options = {}, params = {}) {
    const url = `/api/v3.0/reports/ordersstatistics`;
    const dateFrom = options.hasOwnProperty("dateFrom")
      ? options["dateFrom"]
      : undefined;
    const dateTo = options.hasOwnProperty("dateTo")
      ? options["dateTo"]
      : undefined;
    const orderSource = options.hasOwnProperty("orderSource")
      ? options["orderSource"]
      : undefined;
    const orderStatus = options.hasOwnProperty("orderStatus")
      ? options["orderStatus"]
      : undefined;
    const operatorId = options.hasOwnProperty("operatorId")
      ? options["operatorId"]
      : undefined;
    const userId = options.hasOwnProperty("userId")
      ? options["userId"]
      : undefined;
    const query = Object.assign({}, params);
    if (dateFrom !== undefined) query["DateFrom"] = dateFrom;
    if (dateTo !== undefined) query["DateTo"] = dateTo;
    if (orderSource !== undefined) query["OrderSource"] = orderSource;
    if (orderStatus !== undefined) query["OrderStatus"] = orderStatus;
    if (operatorId !== undefined) query["OperatorId"] = operatorId;
    if (userId !== undefined) query["UserId"] = userId;
    return this.client.request("get", url, {}, query);
  }
}
