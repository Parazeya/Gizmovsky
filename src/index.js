import { GizmoClient } from "./GizmoClient.js";
import { Apps as AppsV1 } from "./v1/Apps.js";
import { Attributes as AttributesV1 } from "./v1/Attributes.js";
import { Export as ExportV1 } from "./v1/Export.js";
import { HostComputers as HostComputersV1 } from "./v1/HostComputers.js";
import { HostGroups as HostGroupsV1 } from "./v1/HostGroups.js";
import { Hosts as HostsV1 } from "./v1/Hosts.js";
import { Invoices as InvoicesV1 } from "./v1/Invoices.js";
import { Licenses as LicensesV1 } from "./v1/Licenses.js";
import { MonetaryUnit as MonetaryUnitV1 } from "./v1/MonetaryUnit.js";
import { Points as PointsV1 } from "./v1/Points.js";
import { Products as ProductsV1 } from "./v1/Products.js";
import { Registration as RegistrationV1 } from "./v1/Registration.js";
import { Reports as ReportsV1 } from "./v1/Reports.js";
import { Reservations as ReservationsV1 } from "./v1/Reservations.js";
import { Service as ServiceV1 } from "./v1/Service.js";
import { Stats as StatsV1 } from "./v1/Stats.js";
import { Stock as StockV1 } from "./v1/Stock.js";
import { UserGroups as UserGroupsV1 } from "./v1/UserGroups.js";
import { Users as UsersV1 } from "./v1/Users.js";
import { UserSessions as UserSessionsV1 } from "./v1/UserSessions.js";
import { Verifications as VerificationsV1 } from "./v1/Verifications.js";
// v2
import { ApplicationCategories as ApplicationCategoriesV2 } from './v2/ApplicationCategories.js';
import { ApplicationDeployments as ApplicationDeploymentsV2 } from './v2/ApplicationDeployments.js';
import { ApplicationEnterprises as ApplicationEnterprisesV2 } from './v2/ApplicationEnterprises.js';
import { ApplicationExecutables as ApplicationExecutablesV2 } from './v2/ApplicationExecutables.js';
import { ApplicationGroups as ApplicationGroupsV2 } from './v2/ApplicationGroups.js';
import { ApplicationLicenses as ApplicationLicensesV2 } from './v2/ApplicationLicenses.js';
import { ApplicationPersonalFiles as ApplicationPersonalFilesV2 } from './v2/ApplicationPersonalFiles.js';
import { Applications as ApplicationsV2 } from './v2/Applications.js';
import { ApplicationTasks as ApplicationTasksV2 } from './v2/ApplicationTasks.js';
import { Assets as AssetsV2 } from './v2/Assets.js';
import { AssetTransactions as AssetTransactionsV2 } from './v2/AssetTransactions.js';
import { AssetTypes as AssetTypesV2 } from './v2/AssetTypes.js';
import { AssistanceRequest as AssistanceRequestV2 } from './v2/AssistanceRequest.js';
import { AssistanceRequestType as AssistanceRequestTypeV2 } from './v2/AssistanceRequestType.js';
import { Attributes as AttributesV2 } from './v2/Attributes.js';
import { Auth as AuthV2 } from './v2/Auth.js';
import { BillingProfiles as BillingProfilesV2 } from './v2/BillingProfiles.js';
import { Companion as CompanionV2 } from './v2/Companion.js';
import { DepositTransactions as DepositTransactionsV2 } from './v2/DepositTransactions.js';
import { Devices as DevicesV2 } from './v2/Devices.js';
import { Events as EventsV2 } from './v2/Events.js';
import { HostGroups as HostGroupsV2 } from './v2/HostGroups.js';
import { HostIcons as HostIconsV2 } from './v2/HostIcons.js';
import { HostLayoutGroups as HostLayoutGroupsV2 } from './v2/HostLayoutGroups.js';
import { Hosts as HostsV2 } from './v2/Hosts.js';
import { InvoicePayments as InvoicePaymentsV2 } from './v2/InvoicePayments.js';
import { Invoices as InvoicesV2 } from './v2/Invoices.js';
import { Log as LogV2 } from './v2/Log.js';
import { MonetaryUnits as MonetaryUnitsV2 } from './v2/MonetaryUnits.js';
import { Operators as OperatorsV2 } from './v2/Operators.js';
import { Orders as OrdersV2 } from './v2/Orders.js';
import { PaymentIntent as PaymentIntentV2 } from './v2/PaymentIntent.js';
import { PaymentMethods as PaymentMethodsV2 } from './v2/PaymentMethods.js';
import { PaymentProviders as PaymentProvidersV2 } from './v2/PaymentProviders.js';
import { PointsTransactions as PointsTransactionsV2 } from './v2/PointsTransactions.js';
import { ProductGroups as ProductGroupsV2 } from './v2/ProductGroups.js';
import { Products as ProductsV2 } from './v2/Products.js';
import { ProductsStock as ProductsStockV2 } from './v2/ProductsStock.js';
import { Recovery as RecoveryV2 } from './v2/Recovery.js';
import { Registers as RegistersV2 } from './v2/Registers.js';
import { RegisterTransactions as RegisterTransactionsV2 } from './v2/RegisterTransactions.js';
import { Reservations as ReservationsV2 } from './v2/Reservations.js';
import { SalePresets as SalePresetsV2 } from './v2/SalePresets.js';
import { Shift as ShiftV2 } from './v2/Shift.js';
import { ShiftCount as ShiftCountV2 } from './v2/ShiftCount.js';
import { SmsProviders as SmsProvidersV2 } from './v2/SmsProviders.js';
import { StockTransactions as StockTransactionsV2 } from './v2/StockTransactions.js';
import { StoreOptions as StoreOptionsV2 } from './v2/StoreOptions.js';
import { Taxes as TaxesV2 } from './v2/Taxes.js';
import { Tokens as TokensV2 } from './v2/Tokens.js';
import { UserAgreements as UserAgreementsV2 } from './v2/UserAgreements.js';
import { UserGroups as UserGroupsV2 } from './v2/UserGroups.js';
import { Users as UsersV2 } from './v2/Users.js';
import { Variables as VariablesV2 } from './v2/Variables.js';
import { Verifications as VerificationsV2 } from './v2/Verifications.js';
// v3
import { AgeRestrictions as AgeRestrictionsV3 } from "./v3/AgeRestrictions.js";
import { ApiKeys as ApiKeysV3 } from "./v3/ApiKeys.js";
import { ApplicationCategories as ApplicationCategoriesV3 } from "./v3/ApplicationCategories.js";
import { ApplicationDeployments as ApplicationDeploymentsV3 } from "./v3/ApplicationDeployments.js";
import { ApplicationEnterprises as ApplicationEnterprisesV3 } from "./v3/ApplicationEnterprises.js";
import { ApplicationExecutables as ApplicationExecutablesV3 } from "./v3/ApplicationExecutables.js";
import { ApplicationGroups as ApplicationGroupsV3 } from "./v3/ApplicationGroups.js";
import { ApplicationLicenses as ApplicationLicensesV3 } from "./v3/ApplicationLicenses.js";
import { ApplicationLinks as ApplicationLinksV3 } from "./v3/ApplicationLinks.js";
import { ApplicationPersonalFiles as ApplicationPersonalFilesV3 } from "./v3/ApplicationPersonalFiles.js";
import { Applications as ApplicationsV3 } from "./v3/Applications.js";
import { ApplicationStats as ApplicationStatsV3 } from "./v3/ApplicationStats.js";
import { ApplicationTasks as ApplicationTasksV3 } from "./v3/ApplicationTasks.js";
import { Assets as AssetsV3 } from "./v3/Assets.js";
import { AssetTransactions as AssetTransactionsV3 } from "./v3/AssetTransactions.js";
import { AssetTypes as AssetTypesV3 } from "./v3/AssetTypes.js";
import { AssistanceRequests as AssistanceRequestsV3 } from "./v3/AssistanceRequests.js";
import { AssistanceRequestTypes as AssistanceRequestTypesV3 } from "./v3/AssistanceRequestTypes.js";
import { Attributes as AttributesV3 } from "./v3/Attributes.js";
import { Auth as AuthV3 } from "./v3/Auth.js";
import { BillingProfiles as BillingProfilesV3 } from "./v3/BillingProfiles.js";
import { Branches as BranchesV3 } from "./v3/Branches.js";
import { Carts as CartsV3 } from "./v3/Carts.js";
import { ClientOptions as ClientOptionsV3 } from "./v3/ClientOptions.js";
import { ClientTasks as ClientTasksV3 } from "./v3/ClientTasks.js";
import { Companions as CompanionsV3 } from "./v3/Companions.js";
import { DepositPayments as DepositPaymentsV3 } from "./v3/DepositPayments.js";
import { DepositTransactions as DepositTransactionsV3 } from "./v3/DepositTransactions.js";
import { Devices as DevicesV3 } from "./v3/Devices.js";
import { DiscountGroups as DiscountGroupsV3 } from "./v3/DiscountGroups.js";
import { Discounts as DiscountsV3 } from "./v3/Discounts.js";
import { Documents as DocumentsV3 } from "./v3/Documents.js";
import { DocumentTypes as DocumentTypesV3 } from "./v3/DocumentTypes.js";
import { Events as EventsV3 } from "./v3/Events.js";
import { EventStream as EventStreamV3 } from "./v3/EventStream.js";
import { Feeds as FeedsV3 } from "./v3/Feeds.js";
import { Files as FilesV3 } from "./v3/Files.js";
import { Fiscalizations as FiscalizationsV3 } from "./v3/Fiscalizations.js";
import { HostComputers as HostComputersV3 } from "./v3/HostComputers.js";
import { HostGroups as HostGroupsV3 } from "./v3/HostGroups.js";
import { HostIcons as HostIconsV3 } from "./v3/HostIcons.js";
import { HostLayoutGroups as HostLayoutGroupsV3 } from "./v3/HostLayoutGroups.js";
import { Hosts as HostsV3 } from "./v3/Hosts.js";
import { Instance as InstanceV3 } from "./v3/Instance.js";
import { Inventories as InventoriesV3 } from "./v3/Inventories.js";
import { InventoryAdjustmentReasons as InventoryAdjustmentReasonsV3 } from "./v3/InventoryAdjustmentReasons.js";
import { InvoicePayments as InvoicePaymentsV3 } from "./v3/InvoicePayments.js";
import { Invoices as InvoicesV3 } from "./v3/Invoices.js";
import { Logs as LogsV3 } from "./v3/Logs.js";
import { Mappings as MappingsV3 } from "./v3/Mappings.js";
import { MonetaryUnits as MonetaryUnitsV3 } from "./v3/MonetaryUnits.js";
import { News as NewsV3 } from "./v3/News.js";
import { Notifications as NotificationsV3 } from "./v3/Notifications.js";
import { Operators as OperatorsV3 } from "./v3/Operators.js";
import { Options as OptionsV3 } from "./v3/Options.js";
import { PaymentIntents as PaymentIntentsV3 } from "./v3/PaymentIntents.js";
import { PaymentMethods as PaymentMethodsV3 } from "./v3/PaymentMethods.js";
import { PaymentProviders as PaymentProvidersV3 } from "./v3/PaymentProviders.js";
import { Payments as PaymentsV3 } from "./v3/Payments.js";
import { PluginLibrary as PluginLibraryV3 } from "./v3/PluginLibrary.js";
import { PointsTransactions as PointsTransactionsV3 } from "./v3/PointsTransactions.js";
import { PresetReservationTime as PresetReservationTimeV3 } from "./v3/PresetReservationTime.js";
import { PresetTimeSale as PresetTimeSaleV3 } from "./v3/PresetTimeSale.js";
import { PresetTimeSaleMoney as PresetTimeSaleMoneyV3 } from "./v3/PresetTimeSaleMoney.js";
import { PresetTopUp as PresetTopUpV3 } from "./v3/PresetTopUp.js";
import { ProductGroups as ProductGroupsV3 } from "./v3/ProductGroups.js";
import { ProductOrders as ProductOrdersV3 } from "./v3/ProductOrders.js";
import { Products as ProductsV3 } from "./v3/Products.js";
import { ProductStock as ProductStockV3 } from "./v3/ProductStock.js";
import { Promotions as PromotionsV3 } from "./v3/Promotions.js";
import { PublicOptions as PublicOptionsV3 } from "./v3/PublicOptions.js";
import { Recoveries as RecoveriesV3 } from "./v3/Recoveries.js";
import { Registers as RegistersV3 } from "./v3/Registers.js";
import { RegisterTransactions as RegisterTransactionsV3 } from "./v3/RegisterTransactions.js";
import { RemoteControl as RemoteControlV3 } from "./v3/RemoteControl.js";
import { ReportModules as ReportModulesV3 } from "./v3/ReportModules.js";
import { ReportPresets as ReportPresetsV3 } from "./v3/ReportPresets.js";
import { Reports as ReportsV3 } from "./v3/Reports.js";
import { Reservations as ReservationsV3 } from "./v3/Reservations.js";
import { SalePresets as SalePresetsV3 } from "./v3/SalePresets.js";
import { Schedules as SchedulesV3 } from "./v3/Schedules.js";
import { SecurityProfiles as SecurityProfilesV3 } from "./v3/SecurityProfiles.js";
import { Sessions as SessionsV3 } from "./v3/Sessions.js";
import { ShiftCounts as ShiftCountsV3 } from "./v3/ShiftCounts.js";
import { Shifts as ShiftsV3 } from "./v3/Shifts.js";
import { Skins as SkinsV3 } from "./v3/Skins.js";
import { SmsProviders as SmsProvidersV3 } from "./v3/SmsProviders.js";
import { Stock as StockV3 } from "./v3/Stock.js";
import { StockCount as StockCountV3 } from "./v3/StockCount.js";
import { StockTransactions as StockTransactionsV3 } from "./v3/StockTransactions.js";
import { System as SystemV3 } from "./v3/System.js";
import { Tasks as TasksV3 } from "./v3/Tasks.js";
import { Taxes as TaxesV3 } from "./v3/Taxes.js";
import { TimeProducts as TimeProductsV3 } from "./v3/TimeProducts.js";
import { Tokens as TokensV3 } from "./v3/Tokens.js";
import { UserAgreements as UserAgreementsV3 } from "./v3/UserAgreements.js";
import { UserGroups as UserGroupsV3 } from "./v3/UserGroups.js";
import { UserGuests as UserGuestsV3 } from "./v3/UserGuests.js";
import { UserPermissionSets as UserPermissionSetsV3 } from "./v3/UserPermissionSets.js";
import { Users as UsersV3 } from "./v3/Users.js";
import { UserSessions as UserSessionsV3 } from "./v3/UserSessions.js";
import { Variables as VariablesV3 } from "./v3/Variables.js";
import { Verifications as VerificationsV3 } from "./v3/Verifications.js";
import { WaitingLines as WaitingLinesV3 } from "./v3/WaitingLines.js";
// Unusable, waiting for API updates

function createV1Categories(client) {
  return {
    apps: new AppsV1(client),
    attributes: new AttributesV1(client),
    export: new ExportV1(client),
    hostComputers: new HostComputersV1(client),
    hostGroups: new HostGroupsV1(client),
    hosts: new HostsV1(client),
    invoices: new InvoicesV1(client),
    licenses: new LicensesV1(client),
    monetaryUnit: new MonetaryUnitV1(client),
    points: new PointsV1(client),
    products: new ProductsV1(client),
    registration: new RegistrationV1(client),
    reports: new ReportsV1(client),
    reservations: new ReservationsV1(client),
    service: new ServiceV1(client),
    stats: new StatsV1(client),
    stock: new StockV1(client),
    userGroups: new UserGroupsV1(client),
    users: new UsersV1(client),
    userSessions: new UserSessionsV1(client),
    verifications: new VerificationsV1(client),
  };
}

function createV2Categories(client) {
  return {
    applicationCategories: new ApplicationCategoriesV2(client),
    applicationDeployments: new ApplicationDeploymentsV2(client),
    applicationEnterprises: new ApplicationEnterprisesV2(client),
    applicationExecutables: new ApplicationExecutablesV2(client),
    applicationGroups: new ApplicationGroupsV2(client),
    applicationLicenses: new ApplicationLicensesV2(client),
    applicationPersonalFiles: new ApplicationPersonalFilesV2(client),
    applications: new ApplicationsV2(client),
    applicationTasks: new ApplicationTasksV2(client),
    assets: new AssetsV2(client),
    assetTransactions: new AssetTransactionsV2(client),
    assetTypes: new AssetTypesV2(client),
    assistanceRequest: new AssistanceRequestV2(client),
    assistanceRequestType: new AssistanceRequestTypeV2(client),
    attributes: new AttributesV2(client),
    auth: new AuthV2(client),
    billingProfiles: new BillingProfilesV2(client),
    companion: new CompanionV2(client),
    depositTransactions: new DepositTransactionsV2(client),
    devices: new DevicesV2(client),
    events: new EventsV2(client),
    hostGroups: new HostGroupsV2(client),
    hostIcons: new HostIconsV2(client),
    hostLayoutGroups: new HostLayoutGroupsV2(client),
    hosts: new HostsV2(client),
    invoicePayments: new InvoicePaymentsV2(client),
    invoices: new InvoicesV2(client),
    log: new LogV2(client),
    monetaryUnits: new MonetaryUnitsV2(client),
    operators: new OperatorsV2(client),
    orders: new OrdersV2(client),
    paymentIntent: new PaymentIntentV2(client),
    paymentMethods: new PaymentMethodsV2(client),
    paymentProviders: new PaymentProvidersV2(client),
    pointsTransactions: new PointsTransactionsV2(client),
    productGroups: new ProductGroupsV2(client),
    products: new ProductsV2(client),
    productsStock: new ProductsStockV2(client),
    recovery: new RecoveryV2(client),
    registers: new RegistersV2(client),
    registerTransactions: new RegisterTransactionsV2(client),
    reservations: new ReservationsV2(client),
    salePresets: new SalePresetsV2(client),
    shift: new ShiftV2(client),
    shiftCount: new ShiftCountV2(client),
    smsProviders: new SmsProvidersV2(client),
    stockTransactions: new StockTransactionsV2(client),
    storeOptions: new StoreOptionsV2(client),
    taxes: new TaxesV2(client),
    tokens: new TokensV2(client),
    userAgreements: new UserAgreementsV2(client),
    userGroups: new UserGroupsV2(client),
    users: new UsersV2(client),
    variables: new VariablesV2(client),
    verifications: new VerificationsV2(client),
  };
}

function createV3Categories(client) {
  return {
    ageRestrictions: new AgeRestrictionsV3(client),
    apiKeys: new ApiKeysV3(client),
    applicationCategories: new ApplicationCategoriesV3(client),
    applicationDeployments: new ApplicationDeploymentsV3(client),
    applicationEnterprises: new ApplicationEnterprisesV3(client),
    applicationExecutables: new ApplicationExecutablesV3(client),
    applicationGroups: new ApplicationGroupsV3(client),
    applicationLicenses: new ApplicationLicensesV3(client),
    applicationLinks: new ApplicationLinksV3(client),
    applicationPersonalFiles: new ApplicationPersonalFilesV3(client),
    applications: new ApplicationsV3(client),
    applicationStats: new ApplicationStatsV3(client),
    applicationTasks: new ApplicationTasksV3(client),
    assets: new AssetsV3(client),
    assetTransactions: new AssetTransactionsV3(client),
    assetTypes: new AssetTypesV3(client),
    assistanceRequests: new AssistanceRequestsV3(client),
    assistanceRequestTypes: new AssistanceRequestTypesV3(client),
    attributes: new AttributesV3(client),
    auth: new AuthV3(client),
    billingProfiles: new BillingProfilesV3(client),
    branches: new BranchesV3(client),
    carts: new CartsV3(client),
    clientOptions: new ClientOptionsV3(client),
    clientTasks: new ClientTasksV3(client),
    companions: new CompanionsV3(client),
    depositPayments: new DepositPaymentsV3(client),
    depositTransactions: new DepositTransactionsV3(client),
    devices: new DevicesV3(client),
    discountGroups: new DiscountGroupsV3(client),
    discounts: new DiscountsV3(client),
    documents: new DocumentsV3(client),
    documentTypes: new DocumentTypesV3(client),
    events: new EventsV3(client),
    eventStream: (channelName = {}) => new EventStreamV3(client, channelName),
    feeds: new FeedsV3(client),
    files: new FilesV3(client),
    fiscalizations: new FiscalizationsV3(client),
    hostComputers: new HostComputersV3(client),
    hostGroups: new HostGroupsV3(client),
    hostIcons: new HostIconsV3(client),
    hostLayoutGroups: new HostLayoutGroupsV3(client),
    hosts: new HostsV3(client),
    instance: new InstanceV3(client),
    inventories: new InventoriesV3(client),
    inventoryAdjustmentReasons: new InventoryAdjustmentReasonsV3(client),
    invoicePayments: new InvoicePaymentsV3(client),
    invoices: new InvoicesV3(client),
    logs: new LogsV3(client),
    mappings: new MappingsV3(client),
    monetaryUnits: new MonetaryUnitsV3(client),
    news: new NewsV3(client),
    notifications: new NotificationsV3(client),
    operators: new OperatorsV3(client),
    options: new OptionsV3(client),
    paymentIntents: new PaymentIntentsV3(client),
    paymentMethods: new PaymentMethodsV3(client),
    paymentProviders: new PaymentProvidersV3(client),
    payments: new PaymentsV3(client),
    pluginLibrary: new PluginLibraryV3(client),
    pointsTransactions: new PointsTransactionsV3(client),
    presetReservationTime: new PresetReservationTimeV3(client),
    presetTimeSale: new PresetTimeSaleV3(client),
    presetTimeSaleMoney: new PresetTimeSaleMoneyV3(client),
    presetTopUp: new PresetTopUpV3(client),
    productGroups: new ProductGroupsV3(client),
    productOrders: new ProductOrdersV3(client),
    products: new ProductsV3(client),
    productStock: new ProductStockV3(client),
    promotions: new PromotionsV3(client),
    publicOptions: new PublicOptionsV3(client),
    recoveries: new RecoveriesV3(client),
    registers: new RegistersV3(client),
    registerTransactions: new RegisterTransactionsV3(client),
    remoteControl: new RemoteControlV3(client),
    reportModules: new ReportModulesV3(client),
    reportPresets: new ReportPresetsV3(client),
    reports: new ReportsV3(client),
    reservations: new ReservationsV3(client),
    salePresets: new SalePresetsV3(client),
    schedules: new SchedulesV3(client),
    securityProfiles: new SecurityProfilesV3(client),
    sessions: new SessionsV3(client),
    shiftCounts: new ShiftCountsV3(client),
    shifts: new ShiftsV3(client),
    skins: new SkinsV3(client),
    smsProviders: new SmsProvidersV3(client),
    stock: new StockV3(client),
    stockCount: new StockCountV3(client),
    stockTransactions: new StockTransactionsV3(client),
    system: new SystemV3(client),
    tasks: new TasksV3(client),
    taxes: new TaxesV3(client),
    timeProducts: new TimeProductsV3(client),
    tokens: new TokensV3(client),
    userAgreements: new UserAgreementsV3(client),
    userGroups: new UserGroupsV3(client),
    userGuests: new UserGuestsV3(client),
    userPermissionSets: new UserPermissionSetsV3(client),
    users: new UsersV3(client),
    userSessions: new UserSessionsV3(client),
    variables: new VariablesV3(client),
    verifications: new VerificationsV3(client),
    waitingLines: new WaitingLinesV3(client),
  };
}

export class GizmoSDK {
  constructor(config) {
    this.client = new GizmoClient(config);
    this.v1 = createV1Categories(this.client);
    this.v2 = createV2Categories(this.client);
    this.v3 = createV3Categories(this.client);
  }
}
