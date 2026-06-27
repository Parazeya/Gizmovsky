import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Reports {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * getReportsOverview
   */
  getReportsOverview(options: { dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ operatorsStatistics?: any[]; averageMemberUsagePeriodMinutes?: any; averageGuestUsagePeriodMinutes?: any; averageUtilizationPercentage?: any; uniqueMembersLogins?: any; uniqueGuestsLogins?: any; memberCounters?: any; utilizationChart?: any[]; financialChart?: any[]; totalPayInOut?: any; totalRevenue?: any; averageRevenuePerMember?: any; averageRevenuePerGuest?: any; revenuePerGroup?: any[] }>> {
    const url = `/api/v3/reports/overview`;
    const query: Record<string, any> = { ...params };
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getReportsFinancial
   */
  getReportsFinancial(options: { dateFrom?: string; dateTo?: string; operatorId?: any; registerId?: any; financialReportType?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ operatorId?: any; operatorName?: any; registerId?: any; registerName?: any; financialReportType?: number; deposits?: any[]; withdrawals?: any[]; depositVoids?: any[]; groupInvoices?: any[]; groupVoidInvoices?: any[]; depositsSummary?: any[]; salesSummary?: any[]; voidInvoicesPaidCash?: any[]; voidInvoicesNoRefundOrUnpaid?: any; pastSalesPaymentsSummary?: any[]; paymentMethods?: any[]; registerTransactions?: any[] }>> {
    const url = `/api/v3/reports/financial`;
    const query: Record<string, any> = { ...params };
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.registerId !== undefined) query['RegisterId'] = options.registerId;
    if (options.financialReportType !== undefined) query['FinancialReportType'] = options.financialReportType;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getReportsHostusage
   */
  getReportsHostusage(options: { dateFrom?: string; dateTo?: string; hostUsageReportType?: any; hostGroupId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ hostGroupId?: any; hostGroupName?: any; hostUsageReportType?: number; hostGroups?: any[]; totalHoursUsed?: any; totalEstimatedRevenue?: any }>> {
    const url = `/api/v3/reports/hostusage`;
    const query: Record<string, any> = { ...params };
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.hostUsageReportType !== undefined) query['HostUsageReportType'] = options.hostUsageReportType;
    if (options.hostGroupId !== undefined) query['HostGroupId'] = options.hostGroupId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getReportsTopusers
   */
  getReportsTopusers(options: { dateFrom?: string; dateTo?: string; topUsersNumber?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ topUsersNumber?: any; memberCounters?: any; topSpenders?: any[]; topPointEarners?: any[]; topPointSpenders?: any[]; topSessions?: any[]; topSessionDuration?: any[] }>> {
    const url = `/api/v3/reports/topusers`;
    const query: Record<string, any> = { ...params };
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.topUsersNumber !== undefined) query['TopUsersNumber'] = options.topUsersNumber;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getReportsUser
   */
  getReportsUser(options: { dateFrom?: string; dateTo?: string; userId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ user?: any; pointsEarned?: any; redeemed?: any; logins?: any; loginTime?: any; deposits?: any; withdrawals?: any; products?: any; fixedTime?: any; sessions?: any; timeProducts?: any; moneySpend?: any; checkOutItems?: any; photo?: any; sessionTimeChartRecords?: any[]; invoicesChartRecords?: any[] }>> {
    const url = `/api/v3/reports/user`;
    const query: Record<string, any> = { ...params };
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getReportsProduct
   */
  getReportsProduct(options: { dateFrom?: string; dateTo?: string; productId?: any; userId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ productId?: any; productName?: any; userId?: any; userName?: any; userGroups?: any[]; salesChart?: any[]; salesChartPerDay?: any[]; salesChartPerHour?: any[]; stockChartMin?: any[]; stockChartMax?: any[]; timeUsageChart?: any[] }>> {
    const url = `/api/v3/reports/product`;
    const query: Record<string, any> = { ...params };
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.productId !== undefined) query['ProductId'] = options.productId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getReportsProducts
   */
  getReportsProducts(options: { dateFrom?: string; dateTo?: string; productId?: any; userId?: any; hideUnused?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ userId?: any; userName?: any; products?: any[] }>> {
    const url = `/api/v3/reports/products`;
    const query: Record<string, any> = { ...params };
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.productId !== undefined) query['ProductId'] = options.productId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.hideUnused !== undefined) query['HideUnused'] = options.hideUnused;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getReportsProductslog
   */
  getReportsProductslog(options: { dateFrom?: string; dateTo?: string; productId?: any; operatorId?: any; productTransactionType?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ productId?: any; productName?: any; operatorId?: any; operatorName?: any; productTransactionType?: any; productTransactions?: any[] }>> {
    const url = `/api/v3/reports/productslog`;
    const query: Record<string, any> = { ...params };
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.productId !== undefined) query['ProductId'] = options.productId;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.productTransactionType !== undefined) query['ProductTransactionType'] = options.productTransactionType;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getReportsStock
   */
  getReportsStock(options: { dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ products?: any[] }>> {
    const url = `/api/v3/reports/stock`;
    const query: Record<string, any> = { ...params };
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getReportsTransactionslog
   */
  getReportsTransactionslog(options: { dateFrom?: string; dateTo?: string; operatorId?: any; registerId?: any; userId?: any; voidOperatorId?: any; transactionsLogActionType?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ operatorId?: any; operatorName?: any; registerId?: any; registerName?: any; userId?: any; userName?: any; transactionsLogActionType?: any; transactions?: any[] }>> {
    const url = `/api/v3/reports/transactionslog`;
    const query: Record<string, any> = { ...params };
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.registerId !== undefined) query['RegisterId'] = options.registerId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.voidOperatorId !== undefined) query['VoidOperatorId'] = options.voidOperatorId;
    if (options.transactionsLogActionType !== undefined) query['TransactionsLogActionType'] = options.transactionsLogActionType;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getReportsShiftslog
   */
  getReportsShiftslog(options: { dateFrom?: string; dateTo?: string; operatorId?: any; registerId?: any; shiftsLogReportType?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ operatorId?: any; operatorName?: any; registerId?: any; registerName?: any; shiftsLogReportType?: number; shifts?: any[]; totalExpectedExcludingStartCashActive?: any; totalDuration?: any; totalExpectedExcludingStartCash?: any; totalDifference?: any }>> {
    const url = `/api/v3/reports/shiftslog`;
    const query: Record<string, any> = { ...params };
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.registerId !== undefined) query['RegisterId'] = options.registerId;
    if (options.shiftsLogReportType !== undefined) query['ShiftsLogReportType'] = options.shiftsLogReportType;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getReportsAssetslog
   */
  getReportsAssetslog(options: { dateFrom?: string; dateTo?: string; assetTypeId?: any; assetId?: any; checkOutOperatorId?: any; checkInOperatorId?: any; userId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ assetTypeId?: any; assetTypeName?: any; assetId?: any; assetName?: any; checkOutOperatorId?: any; checkOutOperatorName?: any; checkInOperatorId?: any; checkInOperatorName?: any; userId?: any; userName?: any; assetTransactions?: any[] }>> {
    const url = `/api/v3/reports/assetslog`;
    const query: Record<string, any> = { ...params };
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.assetTypeId !== undefined) query['AssetTypeId'] = options.assetTypeId;
    if (options.assetId !== undefined) query['AssetId'] = options.assetId;
    if (options.checkOutOperatorId !== undefined) query['CheckOutOperatorId'] = options.checkOutOperatorId;
    if (options.checkInOperatorId !== undefined) query['CheckInOperatorId'] = options.checkInOperatorId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getReportsInvoice
   */
  getReportsInvoice(options: { dateFrom?: string; dateTo?: string; invoiceId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ invoiceId?: any; invoice?: any; soldProducts?: any[]; payments?: any[]; refunds?: any[] }>> {
    const url = `/api/v3/reports/invoice`;
    const query: Record<string, any> = { ...params };
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.invoiceId !== undefined) query['InvoiceId'] = options.invoiceId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getReportsInvoiceslog
   */
  getReportsInvoiceslog(options: { dateFrom?: string; dateTo?: string; operatorId?: any; registerId?: any; paymentStatusType?: any; voidedStatusType?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ paymentStatusType?: any; voidedStatusType?: any; operatorId?: any; operatorName?: any; registerId?: any; registerName?: any; invoices?: any[] }>> {
    const url = `/api/v3/reports/invoiceslog`;
    const query: Record<string, any> = { ...params };
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.registerId !== undefined) query['RegisterId'] = options.registerId;
    if (options.paymentStatusType !== undefined) query['PaymentStatusType'] = options.paymentStatusType;
    if (options.voidedStatusType !== undefined) query['VoidedStatusType'] = options.voidedStatusType;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getReportsZ
   */
  getReportsZ(options: { date?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ dateFrom?: string; dateTo?: string; companyName?: any; operatorId?: any; operatorName?: any; registerId?: any; registerName?: any; financialReportType?: number; deposits?: any[]; withdrawals?: any[]; depositVoids?: any[]; groupInvoices?: any[]; groupVoidInvoices?: any[]; depositsSummary?: any[]; salesSummary?: any[]; voidInvoicesPaidCash?: any[]; voidInvoicesNoRefundOrUnpaid?: any; pastSalesPaymentsSummary?: any[]; paymentMethods?: any[]; registerTransactions?: any[]; z?: any }>> {
    const url = `/api/v3/reports/z`;
    const query: Record<string, any> = { ...params };
    if (options.date !== undefined) query['Date'] = options.date;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getReportsZlog
   */
  getReportsZlog(options: { dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Record<string, any>>> {
    const url = `/api/v3/reports/zlog`;
    const query: Record<string, any> = { ...params };
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getReportsApplication
   */
  getReportsApplication(options: { dateFrom?: string; dateTo?: string; applicationId?: any; userId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ userId?: any; userName?: any; applicationId?: any; applicationName?: any; application?: any; executables?: any[]; hoursPerUserGroupChart?: any[]; hoursPerHostGroupChart?: any[] }>> {
    const url = `/api/v3/reports/application`;
    const query: Record<string, any> = { ...params };
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.applicationId !== undefined) query['ApplicationId'] = options.applicationId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getReportsApplications
   */
  getReportsApplications(options: { dateFrom?: string; dateTo?: string; userId?: any; hideUnused?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ userId?: any; userName?: any; applications?: any[] }>> {
    const url = `/api/v3/reports/applications`;
    const query: Record<string, any> = { ...params };
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.hideUnused !== undefined) query['HideUnused'] = options.hideUnused;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getReportsSessionslog
   */
  getReportsSessionslog(options: { dateFrom?: string; dateTo?: string; userId?: any; hostId?: any; operatorId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ userId?: any; userName?: any; hostId?: any; hostName?: any; operatorId?: any; operatorName?: any; sessions?: any[] }>> {
    const url = `/api/v3/reports/sessionslog`;
    const query: Record<string, any> = { ...params };
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.hostId !== undefined) query['HostId'] = options.hostId;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getReportsLicense
   */
  getReportsLicense(options: { dateFrom?: string; dateTo?: string; licenseId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ licenseId?: any; licenseName?: any; licenseUsage?: any; licenseTimeChart?: any[] }>> {
    const url = `/api/v3/reports/license`;
    const query: Record<string, any> = { ...params };
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.licenseId !== undefined) query['LicenseId'] = options.licenseId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getReportsLicenses
   */
  getReportsLicenses(options: { dateFrom?: string; dateTo?: string; applicationId?: any; hideUnused?: boolean } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ licenseId?: any; licenseName?: any; applicationId?: any; applicationName?: any; licenses?: any[] }>> {
    const url = `/api/v3/reports/licenses`;
    const query: Record<string, any> = { ...params };
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.applicationId !== undefined) query['ApplicationId'] = options.applicationId;
    if (options.hideUnused !== undefined) query['HideUnused'] = options.hideUnused;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getReportsOrderslog
   */
  getReportsOrderslog(options: { dateFrom?: string; dateTo?: string; orderSource?: any; orderStatus?: any; operatorId?: any; userId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ orderSource?: any; orderStatus?: any; operatorId?: any; operatorName?: any; userId?: any; userName?: any; orders?: any[] }>> {
    const url = `/api/v3/reports/orderslog`;
    const query: Record<string, any> = { ...params };
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.orderSource !== undefined) query['OrderSource'] = options.orderSource;
    if (options.orderStatus !== undefined) query['OrderStatus'] = options.orderStatus;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getReportsOrdersstatistics
   */
  getReportsOrdersstatistics(options: { dateFrom?: string; dateTo?: string; orderSource?: any; orderStatus?: any; operatorId?: any; userId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ orderSource?: any; orderStatus?: any; operatorId?: any; operatorName?: any; userId?: any; userName?: any; operatorsPerformance?: any[]; ordersChart?: any[] }>> {
    const url = `/api/v3/reports/ordersstatistics`;
    const query: Record<string, any> = { ...params };
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.orderSource !== undefined) query['OrderSource'] = options.orderSource;
    if (options.orderStatus !== undefined) query['OrderStatus'] = options.orderStatus;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * getReportsUserregistration
   */
  getReportsUserregistration(options: { dateFrom?: string; dateTo?: string; userGroupId?: any } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ totalRegistrations?: any; registrationChart?: any[] }>> {
    const url = `/api/v3/reports/userregistration`;
    const query: Record<string, any> = { ...params };
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    if (options.userGroupId !== undefined) query['UserGroupId'] = options.userGroupId;
    return this.client.request('get', url, {}, query);
  }
}
