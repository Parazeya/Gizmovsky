import type { GizmoClient } from '../GizmoClient.js';
import type { GizmoResponse } from '../GizmoClient.js';

export class Reports {
  client: GizmoClient;

  constructor(client: GizmoClient) {
    this.client = client;
  }

  /**
   * Returns summary report.
   */
  getReportsApiReportsSalesummary(options: { start?: string; end?: string; employeeId?: number; registerId?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ invoicePaymentTotal?: number; invoicePaymentCount?: number; depositPaymentTotal?: number; depositPaymentCount?: number; paymentTotal?: number; totalPaymentCount?: number; total?: number; outstanding?: number; tax?: number; cost?: number; net?: number; revenue?: number; withdrawals?: number; proceeds?: number; nonDepositSales?: number; proceedsCurrent?: number; proceedsPrevious?: number; refundsTotal?: number; cashRefunds?: number; depositRefunds?: number; invoiceCount?: number; invoiced?: number; voidedInvoicesCount?: number; voidedInvocesSubTotal?: number; voidedInvocesTotal?: number; payInsOutsTotal?: number; paymentsByMethod?: any; invoicedByOperator?: any; withdrawalsByOperator?: any; proceedsByMethod?: any; proceedsByOperator?: any; voidsByOperator?: any; refundsByOperator?: any; refundsByMethod?: any; totalsByOperator?: any; payInsOutsByOperator?: any }>> {
    const url = `/api/reports/salesummary`;
    const query: Record<string, any> = { ...params };
    if (options.start !== undefined) query['start'] = options.start;
    if (options.end !== undefined) query['end'] = options.end;
    if (options.employeeId !== undefined) query['employeeId'] = options.employeeId;
    if (options.registerId !== undefined) query['registerId'] = options.registerId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns sale reports.
   */
  getReportsApiReportsSale(options: { start?: string; end?: string; employeeId?: number; registerId?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ products?: any[]; fixedTime?: any[]; deletedTimeProducts?: any[]; sessionTime?: number; sessionTimeTotal?: number; sessionTimeMinutes?: number; productTotal?: number; fixedTimeTotal?: number; timeTotal?: number; deletedTimeTotal?: number }>> {
    const url = `/api/reports/sale`;
    const query: Record<string, any> = { ...params };
    if (options.start !== undefined) query['start'] = options.start;
    if (options.end !== undefined) query['end'] = options.end;
    if (options.employeeId !== undefined) query['employeeId'] = options.employeeId;
    if (options.registerId !== undefined) query['registerId'] = options.registerId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns user spending report.
   */
  getReportsApiReportsUsersSpending(options: { userId?: number; max?: number; start?: string; end?: string; userGroupId?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<{ userId?: number; username?: string; cash?: number; deposits?: number; creditCard?: number; points?: number; total?: number }>>> {
    const url = `/api/reports/users/spending`;
    const query: Record<string, any> = { ...params };
    if (options.userId !== undefined) query['userId'] = options.userId;
    if (options.max !== undefined) query['max'] = options.max;
    if (options.start !== undefined) query['start'] = options.start;
    if (options.end !== undefined) query['end'] = options.end;
    if (options.userGroupId !== undefined) query['userGroupId'] = options.userGroupId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Return points earning report.
   */
  getReportsApiReportsUsersPointsEarning(options: { userId?: number; max?: number; start?: string; end?: string; userGroupId?: number } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<Array<any>>> {
    const url = `/api/reports/users/points/earning`;
    const query: Record<string, any> = { ...params };
    if (options.userId !== undefined) query['userId'] = options.userId;
    if (options.max !== undefined) query['max'] = options.max;
    if (options.start !== undefined) query['start'] = options.start;
    if (options.end !== undefined) query['end'] = options.end;
    if (options.userGroupId !== undefined) query['userGroupId'] = options.userGroupId;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns general user report.
   */
  getReportsApiReportsUsersByUserIdGeneral(userId: string | number, options: Record<string, any> = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ userId?: number; created?: string; totalPoints?: number; totalPointsRedeemed?: number; totalDeposits?: number; totalWitdrawals?: number; totalSpent?: number; totalProductSpent?: number; totalSessionSpent?: number; totalTimeProductSpent?: number; totalSessions?: number; totalSessionTime?: number; totalFixedTimeSpent?: number; membershipDuration?: any; totalTimeSpent?: number }>> {
    const url = `/api/reports/users/${userId}/general`;
    return this.client.request('get', url, {}, params);
  }

  /**
   * Returns overview report.
   */
  getReportsApiReportsOverview(options: { dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; operatorsStatistics?: any[]; averageMemberUsagePeriodMinutes?: string; averageGuestUsagePeriodMinutes?: string; averageUtilizationPercentage?: number; uniqueMembersLogins?: number; uniqueGuestsLogins?: number; memberCounters?: any; utilizationChart?: any[]; financialChart?: any[]; totalPayInOut?: number; totalRevenue?: number; averageRevenuePerMember?: number; averageRevenuePerGuest?: number; revenuePerGroup?: any[] }>> {
    const url = `/api/reports/overview`;
    const query: Record<string, any> = { ...params };
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns financial report.
   */
  getReportsApiReportsFinancial(options: { operatorId?: number; registerId?: number; financialReportType?: any; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; operatorId?: number; operatorName?: string; registerId?: number; registerName?: string; financialReportType?: any; deposits?: any[]; withdrawals?: any[]; depositVoids?: any[]; groupInvoices?: any[]; groupVoidInvoices?: any[]; depositsSummary?: any[]; salesSummary?: any[]; voidInvoicesPaidCash?: any[]; voidInvoicesNoRefundOrUnpaid?: any; pastSalesPaymentsSummary?: any[]; paymentMethods?: any[]; registerTransactions?: any[] }>> {
    const url = `/api/reports/financial`;
    const query: Record<string, any> = { ...params };
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.registerId !== undefined) query['RegisterId'] = options.registerId;
    if (options.financialReportType !== undefined) query['FinancialReportType'] = options.financialReportType;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns financial report.
   */
  getReportsApiReportsFinancialOperatorByOperatorId(operatorId: string | number, options: { operatorId?: number; registerId?: number; financialReportType?: any; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; operatorId?: number; operatorName?: string; registerId?: number; registerName?: string; financialReportType?: any; deposits?: any[]; withdrawals?: any[]; depositVoids?: any[]; groupInvoices?: any[]; groupVoidInvoices?: any[]; depositsSummary?: any[]; salesSummary?: any[]; voidInvoicesPaidCash?: any[]; voidInvoicesNoRefundOrUnpaid?: any; pastSalesPaymentsSummary?: any[]; paymentMethods?: any[]; registerTransactions?: any[] }>> {
    const url = `/api/reports/financial/operator/${operatorId}`;
    const query: Record<string, any> = { ...params };
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.registerId !== undefined) query['RegisterId'] = options.registerId;
    if (options.financialReportType !== undefined) query['FinancialReportType'] = options.financialReportType;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns financial report.
   */
  getReportsApiReportsFinancialOperatorByOperatorIdRegisterByRegisterId(operatorId: string | number, registerId: string | number, options: { operatorId?: number; registerId?: number; financialReportType?: any; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; operatorId?: number; operatorName?: string; registerId?: number; registerName?: string; financialReportType?: any; deposits?: any[]; withdrawals?: any[]; depositVoids?: any[]; groupInvoices?: any[]; groupVoidInvoices?: any[]; depositsSummary?: any[]; salesSummary?: any[]; voidInvoicesPaidCash?: any[]; voidInvoicesNoRefundOrUnpaid?: any; pastSalesPaymentsSummary?: any[]; paymentMethods?: any[]; registerTransactions?: any[] }>> {
    const url = `/api/reports/financial/operator/${operatorId}/register/${registerId}`;
    const query: Record<string, any> = { ...params };
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.registerId !== undefined) query['RegisterId'] = options.registerId;
    if (options.financialReportType !== undefined) query['FinancialReportType'] = options.financialReportType;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns financial report.
   */
  getReportsApiReportsFinancialRegisterByRegisterId(registerId: string | number, options: { operatorId?: number; registerId?: number; financialReportType?: any; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; operatorId?: number; operatorName?: string; registerId?: number; registerName?: string; financialReportType?: any; deposits?: any[]; withdrawals?: any[]; depositVoids?: any[]; groupInvoices?: any[]; groupVoidInvoices?: any[]; depositsSummary?: any[]; salesSummary?: any[]; voidInvoicesPaidCash?: any[]; voidInvoicesNoRefundOrUnpaid?: any; pastSalesPaymentsSummary?: any[]; paymentMethods?: any[]; registerTransactions?: any[] }>> {
    const url = `/api/reports/financial/register/${registerId}`;
    const query: Record<string, any> = { ...params };
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.registerId !== undefined) query['RegisterId'] = options.registerId;
    if (options.financialReportType !== undefined) query['FinancialReportType'] = options.financialReportType;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns HostUsage report.
   */
  getReportsApiReportsHostusage(options: { hostUsageReportType?: any; hostGroupId?: number; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; hostGroupId?: number; hostGroupName?: string; hostUsageReportType?: any; hostGroups?: any[]; totalHoursUsed?: string; totalEstimatedRevenue?: number }>> {
    const url = `/api/reports/hostusage`;
    const query: Record<string, any> = { ...params };
    if (options.hostUsageReportType !== undefined) query['HostUsageReportType'] = options.hostUsageReportType;
    if (options.hostGroupId !== undefined) query['HostGroupId'] = options.hostGroupId;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns HostUsage report.
   */
  getReportsApiReportsHostusageHostgroupByHostGroupId(hostGroupId: string | number, options: { hostUsageReportType?: any; hostGroupId?: number; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; hostGroupId?: number; hostGroupName?: string; hostUsageReportType?: any; hostGroups?: any[]; totalHoursUsed?: string; totalEstimatedRevenue?: number }>> {
    const url = `/api/reports/hostusage/hostgroup/${hostGroupId}`;
    const query: Record<string, any> = { ...params };
    if (options.hostUsageReportType !== undefined) query['HostUsageReportType'] = options.hostUsageReportType;
    if (options.hostGroupId !== undefined) query['HostGroupId'] = options.hostGroupId;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns Product report.
   */
  getReportsApiReportsProductByProductId(productId: string | number, options: { productId?: number; userId?: number; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; productId?: number; productName?: string; userId?: number; userName?: string; userGroups?: any[]; salesChart?: any[]; salesChartPerDay?: any[]; salesChartPerHour?: any[]; stockChartMin?: any[]; stockChartMax?: any[]; timeUsageChart?: any[] }>> {
    const url = `/api/reports/product/${productId}`;
    const query: Record<string, any> = { ...params };
    if (options.productId !== undefined) query['ProductId'] = options.productId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns Products report.
   */
  getReportsApiReportsProducts(options: { userId?: number; hideUnused?: boolean; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; userId?: number; userName?: string; products?: any[] }>> {
    const url = `/api/reports/products`;
    const query: Record<string, any> = { ...params };
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.hideUnused !== undefined) query['HideUnused'] = options.hideUnused;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns Products report.
   */
  getReportsApiReportsProductsUserByUserId(userId: string | number, options: { userId?: number; hideUnused?: boolean; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; userId?: number; userName?: string; products?: any[] }>> {
    const url = `/api/reports/products/user/${userId}`;
    const query: Record<string, any> = { ...params };
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.hideUnused !== undefined) query['HideUnused'] = options.hideUnused;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns ProductsLog report.
   */
  getReportsApiReportsProductslog(options: { productId?: number; operatorId?: number; productTransactionType?: any; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; productId?: number; productName?: string; operatorId?: number; operatorName?: string; productTransactionType?: any; productTransactions?: any[] }>> {
    const url = `/api/reports/productslog`;
    const query: Record<string, any> = { ...params };
    if (options.productId !== undefined) query['ProductId'] = options.productId;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.productTransactionType !== undefined) query['ProductTransactionType'] = options.productTransactionType;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns ProductsLog report.
   */
  getReportsApiReportsProductslogProductByProductId(productId: string | number, options: { productId?: number; operatorId?: number; productTransactionType?: any; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; productId?: number; productName?: string; operatorId?: number; operatorName?: string; productTransactionType?: any; productTransactions?: any[] }>> {
    const url = `/api/reports/productslog/product/${productId}`;
    const query: Record<string, any> = { ...params };
    if (options.productId !== undefined) query['ProductId'] = options.productId;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.productTransactionType !== undefined) query['ProductTransactionType'] = options.productTransactionType;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns ProductsLog report.
   */
  getReportsApiReportsProductslogProductByProductIdOperatorByOperatorId(productId: string | number, operatorId: string | number, options: { productId?: number; operatorId?: number; productTransactionType?: any; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; productId?: number; productName?: string; operatorId?: number; operatorName?: string; productTransactionType?: any; productTransactions?: any[] }>> {
    const url = `/api/reports/productslog/product/${productId}/operator/${operatorId}`;
    const query: Record<string, any> = { ...params };
    if (options.productId !== undefined) query['ProductId'] = options.productId;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.productTransactionType !== undefined) query['ProductTransactionType'] = options.productTransactionType;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns ProductsLog report.
   */
  getReportsApiReportsProductslogOperatorByOperatorId(operatorId: string | number, options: { productId?: number; operatorId?: number; productTransactionType?: any; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; productId?: number; productName?: string; operatorId?: number; operatorName?: string; productTransactionType?: any; productTransactions?: any[] }>> {
    const url = `/api/reports/productslog/operator/${operatorId}`;
    const query: Record<string, any> = { ...params };
    if (options.productId !== undefined) query['ProductId'] = options.productId;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.productTransactionType !== undefined) query['ProductTransactionType'] = options.productTransactionType;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns Stock report.
   */
  getReportsApiReportsStock(options: { dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; products?: any[] }>> {
    const url = `/api/reports/stock`;
    const query: Record<string, any> = { ...params };
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns TransactionsLog report.
   */
  getReportsApiReportsTransactionslog(options: { operatorId?: number; registerId?: number; userId?: number; userName?: string; voidOperatorId?: number; transactionsLogActionType?: any; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; operatorId?: number; operatorName?: string; registerId?: number; registerName?: string; userId?: number; userName?: string; transactionsLogActionType?: any; transactions?: any[] }>> {
    const url = `/api/reports/transactionslog`;
    const query: Record<string, any> = { ...params };
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.registerId !== undefined) query['RegisterId'] = options.registerId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.userName !== undefined) query['UserName'] = options.userName;
    if (options.voidOperatorId !== undefined) query['VoidOperatorId'] = options.voidOperatorId;
    if (options.transactionsLogActionType !== undefined) query['TransactionsLogActionType'] = options.transactionsLogActionType;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns TransactionsLog report.
   */
  getReportsApiReportsTransactionslogOperatorByOperatorId(operatorId: string | number, options: { operatorId?: number; registerId?: number; userId?: number; userName?: string; voidOperatorId?: number; transactionsLogActionType?: any; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; operatorId?: number; operatorName?: string; registerId?: number; registerName?: string; userId?: number; userName?: string; transactionsLogActionType?: any; transactions?: any[] }>> {
    const url = `/api/reports/transactionslog/operator/${operatorId}`;
    const query: Record<string, any> = { ...params };
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.registerId !== undefined) query['RegisterId'] = options.registerId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.userName !== undefined) query['UserName'] = options.userName;
    if (options.voidOperatorId !== undefined) query['VoidOperatorId'] = options.voidOperatorId;
    if (options.transactionsLogActionType !== undefined) query['TransactionsLogActionType'] = options.transactionsLogActionType;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns TransactionsLog report.
   */
  getReportsApiReportsTransactionslogOperatorByOperatorIdRegisterByRegisterId(operatorId: string | number, registerId: string | number, options: { operatorId?: number; registerId?: number; userId?: number; userName?: string; voidOperatorId?: number; transactionsLogActionType?: any; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; operatorId?: number; operatorName?: string; registerId?: number; registerName?: string; userId?: number; userName?: string; transactionsLogActionType?: any; transactions?: any[] }>> {
    const url = `/api/reports/transactionslog/operator/${operatorId}/register/${registerId}`;
    const query: Record<string, any> = { ...params };
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.registerId !== undefined) query['RegisterId'] = options.registerId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.userName !== undefined) query['UserName'] = options.userName;
    if (options.voidOperatorId !== undefined) query['VoidOperatorId'] = options.voidOperatorId;
    if (options.transactionsLogActionType !== undefined) query['TransactionsLogActionType'] = options.transactionsLogActionType;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns TransactionsLog report.
   */
  getReportsApiReportsTransactionslogOperatorByOperatorIdRegisterByRegisterIdUserByUserId(operatorId: string | number, registerId: string | number, userId: string | number, options: { operatorId?: number; registerId?: number; userId?: number; userName?: string; voidOperatorId?: number; transactionsLogActionType?: any; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; operatorId?: number; operatorName?: string; registerId?: number; registerName?: string; userId?: number; userName?: string; transactionsLogActionType?: any; transactions?: any[] }>> {
    const url = `/api/reports/transactionslog/operator/${operatorId}/register/${registerId}/user/${userId}`;
    const query: Record<string, any> = { ...params };
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.registerId !== undefined) query['RegisterId'] = options.registerId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.userName !== undefined) query['UserName'] = options.userName;
    if (options.voidOperatorId !== undefined) query['VoidOperatorId'] = options.voidOperatorId;
    if (options.transactionsLogActionType !== undefined) query['TransactionsLogActionType'] = options.transactionsLogActionType;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns ShiftsLog report.
   */
  getReportsApiReportsShiftslog(options: { operatorId?: number; registerId?: number; shiftsLogReportType?: any; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; operatorId?: number; operatorName?: string; registerId?: number; registerName?: string; shiftsLogReportType?: any; shifts?: any[]; totalExpectedExcludingStartCashActive?: number; totalDuration?: string; totalExpectedExcludingStartCash?: number; totalDifference?: number }>> {
    const url = `/api/reports/shiftslog`;
    const query: Record<string, any> = { ...params };
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.registerId !== undefined) query['RegisterId'] = options.registerId;
    if (options.shiftsLogReportType !== undefined) query['ShiftsLogReportType'] = options.shiftsLogReportType;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns ShiftsLog report.
   */
  getReportsApiReportsShiftslogOperatorByOperatorId(operatorId: string | number, options: { operatorId?: number; registerId?: number; shiftsLogReportType?: any; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; operatorId?: number; operatorName?: string; registerId?: number; registerName?: string; shiftsLogReportType?: any; shifts?: any[]; totalExpectedExcludingStartCashActive?: number; totalDuration?: string; totalExpectedExcludingStartCash?: number; totalDifference?: number }>> {
    const url = `/api/reports/shiftslog/operator/${operatorId}`;
    const query: Record<string, any> = { ...params };
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.registerId !== undefined) query['RegisterId'] = options.registerId;
    if (options.shiftsLogReportType !== undefined) query['ShiftsLogReportType'] = options.shiftsLogReportType;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns ShiftsLog report.
   */
  getReportsApiReportsShiftslogOperatorByOperatorIdRegisterByRegisterId(operatorId: string | number, registerId: string | number, options: { operatorId?: number; registerId?: number; shiftsLogReportType?: any; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; operatorId?: number; operatorName?: string; registerId?: number; registerName?: string; shiftsLogReportType?: any; shifts?: any[]; totalExpectedExcludingStartCashActive?: number; totalDuration?: string; totalExpectedExcludingStartCash?: number; totalDifference?: number }>> {
    const url = `/api/reports/shiftslog/operator/${operatorId}/register/${registerId}`;
    const query: Record<string, any> = { ...params };
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.registerId !== undefined) query['RegisterId'] = options.registerId;
    if (options.shiftsLogReportType !== undefined) query['ShiftsLogReportType'] = options.shiftsLogReportType;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns ShiftsLog report.
   */
  getReportsApiReportsShiftslogRegisterByRegisterId(registerId: string | number, options: { operatorId?: number; registerId?: number; shiftsLogReportType?: any; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; operatorId?: number; operatorName?: string; registerId?: number; registerName?: string; shiftsLogReportType?: any; shifts?: any[]; totalExpectedExcludingStartCashActive?: number; totalDuration?: string; totalExpectedExcludingStartCash?: number; totalDifference?: number }>> {
    const url = `/api/reports/shiftslog/register/${registerId}`;
    const query: Record<string, any> = { ...params };
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.registerId !== undefined) query['RegisterId'] = options.registerId;
    if (options.shiftsLogReportType !== undefined) query['ShiftsLogReportType'] = options.shiftsLogReportType;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns InvoicesLog report.
   */
  getReportsApiReportsInvoiceslog(options: { operatorId?: number; registerId?: number; paymentStatusType?: any; voidedStatusType?: any; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; paymentStatusType?: any; voidedStatusType?: any; operatorId?: number; operatorName?: string; registerId?: number; registerName?: string; invoices?: any[] }>> {
    const url = `/api/reports/invoiceslog`;
    const query: Record<string, any> = { ...params };
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.registerId !== undefined) query['RegisterId'] = options.registerId;
    if (options.paymentStatusType !== undefined) query['PaymentStatusType'] = options.paymentStatusType;
    if (options.voidedStatusType !== undefined) query['VoidedStatusType'] = options.voidedStatusType;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns InvoicesLog report.
   */
  getReportsApiReportsInvoiceslogOperatorByOperatorId(operatorId: string | number, options: { operatorId?: number; registerId?: number; paymentStatusType?: any; voidedStatusType?: any; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; paymentStatusType?: any; voidedStatusType?: any; operatorId?: number; operatorName?: string; registerId?: number; registerName?: string; invoices?: any[] }>> {
    const url = `/api/reports/invoiceslog/operator/${operatorId}`;
    const query: Record<string, any> = { ...params };
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.registerId !== undefined) query['RegisterId'] = options.registerId;
    if (options.paymentStatusType !== undefined) query['PaymentStatusType'] = options.paymentStatusType;
    if (options.voidedStatusType !== undefined) query['VoidedStatusType'] = options.voidedStatusType;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns InvoicesLog report.
   */
  getReportsApiReportsInvoiceslogOperatorByOperatorIdRegisterByRegisterId(operatorId: string | number, registerId: string | number, options: { operatorId?: number; registerId?: number; paymentStatusType?: any; voidedStatusType?: any; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; paymentStatusType?: any; voidedStatusType?: any; operatorId?: number; operatorName?: string; registerId?: number; registerName?: string; invoices?: any[] }>> {
    const url = `/api/reports/invoiceslog/operator/${operatorId}/register/${registerId}`;
    const query: Record<string, any> = { ...params };
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.registerId !== undefined) query['RegisterId'] = options.registerId;
    if (options.paymentStatusType !== undefined) query['PaymentStatusType'] = options.paymentStatusType;
    if (options.voidedStatusType !== undefined) query['VoidedStatusType'] = options.voidedStatusType;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns InvoicesLog report.
   */
  getReportsApiReportsInvoiceslogRegisterByRegisterId(registerId: string | number, options: { operatorId?: number; registerId?: number; paymentStatusType?: any; voidedStatusType?: any; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; paymentStatusType?: any; voidedStatusType?: any; operatorId?: number; operatorName?: string; registerId?: number; registerName?: string; invoices?: any[] }>> {
    const url = `/api/reports/invoiceslog/register/${registerId}`;
    const query: Record<string, any> = { ...params };
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.registerId !== undefined) query['RegisterId'] = options.registerId;
    if (options.paymentStatusType !== undefined) query['PaymentStatusType'] = options.paymentStatusType;
    if (options.voidedStatusType !== undefined) query['VoidedStatusType'] = options.voidedStatusType;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns Invoice report.
   */
  getReportsApiReportsInvoiceByInvoiceId(invoiceId: string | number, options: { invoiceId?: number; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; invoiceId?: number; invoice?: any; soldProducts?: any[]; payments?: any[]; refunds?: any[] }>> {
    const url = `/api/reports/invoice/${invoiceId}`;
    const query: Record<string, any> = { ...params };
    if (options.invoiceId !== undefined) query['InvoiceId'] = options.invoiceId;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns Applications report.
   */
  getReportsApiReportsApplications(options: { userId?: number; hideUnused?: boolean; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; userId?: number; userName?: string; applications?: any[] }>> {
    const url = `/api/reports/applications`;
    const query: Record<string, any> = { ...params };
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.hideUnused !== undefined) query['HideUnused'] = options.hideUnused;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns Application report.
   */
  getReportsApiReportsApplicationByApplicationId(applicationId: string | number, options: { applicationId?: number; userId?: number; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; userId?: number; userName?: string; applicationId?: number; applicationName?: string; application?: any; executables?: any[]; hoursPerUserGroupChart?: any[]; hoursPerHostGroupChart?: any[] }>> {
    const url = `/api/reports/application/${applicationId}`;
    const query: Record<string, any> = { ...params };
    if (options.applicationId !== undefined) query['ApplicationId'] = options.applicationId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns Application report.
   */
  getReportsApiReportsApplicationByApplicationIdUserByUserId(applicationId: string | number, userId: string | number, options: { applicationId?: number; userId?: number; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; userId?: number; userName?: string; applicationId?: number; applicationName?: string; application?: any; executables?: any[]; hoursPerUserGroupChart?: any[]; hoursPerHostGroupChart?: any[] }>> {
    const url = `/api/reports/application/${applicationId}/user/${userId}`;
    const query: Record<string, any> = { ...params };
    if (options.applicationId !== undefined) query['ApplicationId'] = options.applicationId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns OrdersLog report.
   */
  getReportsApiReportsOrderslog(options: { orderSource?: any; orderStatus?: any; operatorId?: number; userId?: number; userName?: string; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; orderSource?: any; orderStatus?: any; operatorId?: number; operatorName?: string; userId?: number; userName?: string; orders?: any[] }>> {
    const url = `/api/reports/orderslog`;
    const query: Record<string, any> = { ...params };
    if (options.orderSource !== undefined) query['OrderSource'] = options.orderSource;
    if (options.orderStatus !== undefined) query['OrderStatus'] = options.orderStatus;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.userName !== undefined) query['UserName'] = options.userName;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns OrdersLog report.
   */
  getReportsApiReportsOrderslogOperatorByOperatorId(operatorId: string | number, options: { orderSource?: any; orderStatus?: any; operatorId?: number; userId?: number; userName?: string; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; orderSource?: any; orderStatus?: any; operatorId?: number; operatorName?: string; userId?: number; userName?: string; orders?: any[] }>> {
    const url = `/api/reports/orderslog/operator/${operatorId}`;
    const query: Record<string, any> = { ...params };
    if (options.orderSource !== undefined) query['OrderSource'] = options.orderSource;
    if (options.orderStatus !== undefined) query['OrderStatus'] = options.orderStatus;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.userName !== undefined) query['UserName'] = options.userName;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns OrdersLog report.
   */
  getReportsApiReportsOrderslogOperatorByOperatorIdUserByUserId(operatorId: string | number, userId: string | number, options: { orderSource?: any; orderStatus?: any; operatorId?: number; userId?: number; userName?: string; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; orderSource?: any; orderStatus?: any; operatorId?: number; operatorName?: string; userId?: number; userName?: string; orders?: any[] }>> {
    const url = `/api/reports/orderslog/operator/${operatorId}/user/${userId}`;
    const query: Record<string, any> = { ...params };
    if (options.orderSource !== undefined) query['OrderSource'] = options.orderSource;
    if (options.orderStatus !== undefined) query['OrderStatus'] = options.orderStatus;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.userName !== undefined) query['UserName'] = options.userName;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns OrdersLog report.
   */
  getReportsApiReportsOrderslogUserByUserId(userId: string | number, options: { orderSource?: any; orderStatus?: any; operatorId?: number; userId?: number; userName?: string; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; orderSource?: any; orderStatus?: any; operatorId?: number; operatorName?: string; userId?: number; userName?: string; orders?: any[] }>> {
    const url = `/api/reports/orderslog/user/${userId}`;
    const query: Record<string, any> = { ...params };
    if (options.orderSource !== undefined) query['OrderSource'] = options.orderSource;
    if (options.orderStatus !== undefined) query['OrderStatus'] = options.orderStatus;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.userName !== undefined) query['UserName'] = options.userName;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns SessionsLog report.
   */
  getReportsApiReportsSessionslog(options: { userId?: number; userName?: string; hostId?: number; operatorId?: number; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; userId?: number; userName?: string; hostId?: number; hostName?: string; operatorId?: number; operatorName?: string; sessions?: any[] }>> {
    const url = `/api/reports/sessionslog`;
    const query: Record<string, any> = { ...params };
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.userName !== undefined) query['UserName'] = options.userName;
    if (options.hostId !== undefined) query['HostId'] = options.hostId;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns SessionsLog report.
   */
  getReportsApiReportsSessionslogOperatorByOperatorId(operatorId: string | number, options: { userId?: number; userName?: string; hostId?: number; operatorId?: number; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; userId?: number; userName?: string; hostId?: number; hostName?: string; operatorId?: number; operatorName?: string; sessions?: any[] }>> {
    const url = `/api/reports/sessionslog/operator/${operatorId}`;
    const query: Record<string, any> = { ...params };
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.userName !== undefined) query['UserName'] = options.userName;
    if (options.hostId !== undefined) query['HostId'] = options.hostId;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns SessionsLog report.
   */
  getReportsApiReportsSessionslogOperatorByOperatorIdUserByUserId(operatorId: string | number, userId: string | number, options: { userId?: number; userName?: string; hostId?: number; operatorId?: number; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; userId?: number; userName?: string; hostId?: number; hostName?: string; operatorId?: number; operatorName?: string; sessions?: any[] }>> {
    const url = `/api/reports/sessionslog/operator/${operatorId}/user/${userId}`;
    const query: Record<string, any> = { ...params };
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.userName !== undefined) query['UserName'] = options.userName;
    if (options.hostId !== undefined) query['HostId'] = options.hostId;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns SessionsLog report.
   */
  getReportsApiReportsSessionslogOperatorByOperatorIdUserByUserIdHostByHostId(operatorId: string | number, userId: string | number, hostId: string | number, options: { userId?: number; userName?: string; hostId?: number; operatorId?: number; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; userId?: number; userName?: string; hostId?: number; hostName?: string; operatorId?: number; operatorName?: string; sessions?: any[] }>> {
    const url = `/api/reports/sessionslog/operator/${operatorId}/user/${userId}/host/${hostId}`;
    const query: Record<string, any> = { ...params };
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.userName !== undefined) query['UserName'] = options.userName;
    if (options.hostId !== undefined) query['HostId'] = options.hostId;
    if (options.operatorId !== undefined) query['OperatorId'] = options.operatorId;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns User report.
   */
  getReportsApiReportsUserByUserId(userId: string | number, options: { userId?: number; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; user?: any; pointsEarned?: number; redeemed?: number; logins?: number; loginTime?: string; deposits?: number; withdrawals?: number; products?: number; fixedTime?: number; sessions?: number; timeProducts?: number; moneySpend?: number; checkOutItems?: number; photo?: string; sessionTimeChartRecords?: any[]; invoicesChartRecords?: any[] }>> {
    const url = `/api/reports/user/${userId}`;
    const query: Record<string, any> = { ...params };
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns Top Users Report report.
   */
  getReportsApiReportsTopusersByTopUsersNumber(topUsersNumber: string | number, options: { topUsersNumber?: number; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; topUsersNumber?: number; memberCounters?: any; topSpenders?: any[]; topPointEarners?: any[]; topPointSpenders?: any[]; topSessions?: any[]; topSessionDuration?: any[] }>> {
    const url = `/api/reports/topusers/${topUsersNumber}`;
    const query: Record<string, any> = { ...params };
    if (options.topUsersNumber !== undefined) query['TopUsersNumber'] = options.topUsersNumber;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns Licenses report.
   */
  getReportsApiReportsLicenses(options: { applicationId?: number; hideUnused?: boolean; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; licenseId?: number; licenseName?: number; applicationId?: number; applicationName?: number; licenses?: any[] }>> {
    const url = `/api/reports/licenses`;
    const query: Record<string, any> = { ...params };
    if (options.applicationId !== undefined) query['ApplicationId'] = options.applicationId;
    if (options.hideUnused !== undefined) query['HideUnused'] = options.hideUnused;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns Licenses report.
   */
  getReportsApiReportsLicensesApplicationByApplicationId(applicationId: string | number, options: { applicationId?: number; hideUnused?: boolean; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; licenseId?: number; licenseName?: number; applicationId?: number; applicationName?: number; licenses?: any[] }>> {
    const url = `/api/reports/licenses/application/${applicationId}`;
    const query: Record<string, any> = { ...params };
    if (options.applicationId !== undefined) query['ApplicationId'] = options.applicationId;
    if (options.hideUnused !== undefined) query['HideUnused'] = options.hideUnused;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns License report.
   */
  getReportsApiReportsLicenseByLicenseId(licenseId: string | number, options: { licenseId?: number; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; licenseId?: number; licenseName?: string; licenseUsage?: any; licenseTimeChart?: any[] }>> {
    const url = `/api/reports/license/${licenseId}`;
    const query: Record<string, any> = { ...params };
    if (options.licenseId !== undefined) query['LicenseId'] = options.licenseId;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns Z Log report.
   */
  getReportsApiReportsZlog(options: { dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any }>> {
    const url = `/api/reports/zlog`;
    const query: Record<string, any> = { ...params };
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns Z report.
   */
  getReportsApiReportsZ(options: { date?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; operatorId?: number; operatorName?: string; registerId?: number; registerName?: string; financialReportType?: any; deposits?: any[]; withdrawals?: any[]; depositVoids?: any[]; groupInvoices?: any[]; groupVoidInvoices?: any[]; depositsSummary?: any[]; salesSummary?: any[]; voidInvoicesPaidCash?: any[]; voidInvoicesNoRefundOrUnpaid?: any; pastSalesPaymentsSummary?: any[]; paymentMethods?: any[]; registerTransactions?: any[]; z?: any }>> {
    const url = `/api/reports/z`;
    const query: Record<string, any> = { ...params };
    if (options.date !== undefined) query['Date'] = options.date;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns Assets Log report.
   */
  getReportsApiReportsAssetslog(options: { assetTypeId?: number; assetId?: number; checkOutOperatorId?: number; checkInOperatorId?: number; userId?: number; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; assetTypeId?: number; assetTypeName?: string; assetId?: number; assetName?: string; checkOutOperatorId?: number; checkOutOperatorName?: string; checkInOperatorId?: number; checkInOperatorName?: string; userId?: number; userName?: string; assetTransactions?: any[] }>> {
    const url = `/api/reports/assetslog`;
    const query: Record<string, any> = { ...params };
    if (options.assetTypeId !== undefined) query['AssetTypeId'] = options.assetTypeId;
    if (options.assetId !== undefined) query['AssetId'] = options.assetId;
    if (options.checkOutOperatorId !== undefined) query['CheckOutOperatorId'] = options.checkOutOperatorId;
    if (options.checkInOperatorId !== undefined) query['CheckInOperatorId'] = options.checkInOperatorId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns Assets Log report.
   */
  getReportsApiReportsAssetslogAssettypeByAssetTypeId(assetTypeId: string | number, options: { assetTypeId?: number; assetId?: number; checkOutOperatorId?: number; checkInOperatorId?: number; userId?: number; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; assetTypeId?: number; assetTypeName?: string; assetId?: number; assetName?: string; checkOutOperatorId?: number; checkOutOperatorName?: string; checkInOperatorId?: number; checkInOperatorName?: string; userId?: number; userName?: string; assetTransactions?: any[] }>> {
    const url = `/api/reports/assetslog/assettype/${assetTypeId}`;
    const query: Record<string, any> = { ...params };
    if (options.assetTypeId !== undefined) query['AssetTypeId'] = options.assetTypeId;
    if (options.assetId !== undefined) query['AssetId'] = options.assetId;
    if (options.checkOutOperatorId !== undefined) query['CheckOutOperatorId'] = options.checkOutOperatorId;
    if (options.checkInOperatorId !== undefined) query['CheckInOperatorId'] = options.checkInOperatorId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns Assets Log report.
   */
  getReportsApiReportsAssetslogAssettypeByAssetTypeIdAssetByAssetId(assetTypeId: string | number, assetId: string | number, options: { assetTypeId?: number; assetId?: number; checkOutOperatorId?: number; checkInOperatorId?: number; userId?: number; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; assetTypeId?: number; assetTypeName?: string; assetId?: number; assetName?: string; checkOutOperatorId?: number; checkOutOperatorName?: string; checkInOperatorId?: number; checkInOperatorName?: string; userId?: number; userName?: string; assetTransactions?: any[] }>> {
    const url = `/api/reports/assetslog/assettype/${assetTypeId}/asset/${assetId}`;
    const query: Record<string, any> = { ...params };
    if (options.assetTypeId !== undefined) query['AssetTypeId'] = options.assetTypeId;
    if (options.assetId !== undefined) query['AssetId'] = options.assetId;
    if (options.checkOutOperatorId !== undefined) query['CheckOutOperatorId'] = options.checkOutOperatorId;
    if (options.checkInOperatorId !== undefined) query['CheckInOperatorId'] = options.checkInOperatorId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }

  /**
   * Returns Assets Log report.
   */
  getReportsApiReportsAssetslogAssetByAssetId(assetId: string | number, options: { assetTypeId?: number; assetId?: number; checkOutOperatorId?: number; checkInOperatorId?: number; userId?: number; dateFrom?: string; dateTo?: string } = {}, params: Record<string, any> = {}): Promise<GizmoResponse<{ name?: string; dateFrom?: string; dateTo?: string; companyName?: string; reportType?: any; assetTypeId?: number; assetTypeName?: string; assetId?: number; assetName?: string; checkOutOperatorId?: number; checkOutOperatorName?: string; checkInOperatorId?: number; checkInOperatorName?: string; userId?: number; userName?: string; assetTransactions?: any[] }>> {
    const url = `/api/reports/assetslog/asset/${assetId}`;
    const query: Record<string, any> = { ...params };
    if (options.assetTypeId !== undefined) query['AssetTypeId'] = options.assetTypeId;
    if (options.assetId !== undefined) query['AssetId'] = options.assetId;
    if (options.checkOutOperatorId !== undefined) query['CheckOutOperatorId'] = options.checkOutOperatorId;
    if (options.checkInOperatorId !== undefined) query['CheckInOperatorId'] = options.checkInOperatorId;
    if (options.userId !== undefined) query['UserId'] = options.userId;
    if (options.dateFrom !== undefined) query['DateFrom'] = options.dateFrom;
    if (options.dateTo !== undefined) query['DateTo'] = options.dateTo;
    return this.client.request('get', url, {}, query);
  }
}
