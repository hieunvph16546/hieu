import { config } from 'constants/config';

const getFullMethod = (microServiceName: string, methodVersion: string, methodName: string): string => {
  return microServiceName + methodVersion + methodName;
};

const API_METHOD = {
  MS_AUTH: {
    LOGIN: getFullMethod(config.MS_AUTH, config.VER_1_0, 'token'),
    LOGOUT: getFullMethod(config.MS_AUTH, config.VER_1_0, 'logout'),
    REFRESH_TOKEN: getFullMethod(config.MS_AUTH, config.VER_1_0, 'refreshtoken'),
    USER_PERMISSION: getFullMethod(config.MS_AUTH, config.VER_1_0, 'userpermission'),
  },
  MS_ADMIN: {
    LIST_NOTIFY_BIRTHDAY: getFullMethod(config.MS_ADMIN, config.VER_1_0, 'notify/sme/list-customer-birthday'),
    DELETE_NOTIFY_BIRTHDAY: getFullMethod(config.MS_ADMIN, config.VER_1_0, 'notify/sme/delete-customer-notification'),
    LIST_WARNING_SAVING: getFullMethod(config.MS_ADMIN, config.VER_1_0, 'warning/warningProduct'),
    WARNING_SAVING: getFullMethod(config.MS_ADMIN, config.VER_1_0, 'warning/saving'),
    WARNING_INSURRANCE: getFullMethod(config.MS_ADMIN, config.VER_1_0, 'warning/ttbh'),
    WARNING_CREDIT: getFullMethod(config.MS_ADMIN, config.VER_1_0, 'warning/loan'),
    WARNING_FINANCE_COMMERCE: getFullMethod(config.MS_ADMIN, config.VER_1_0, 'warning/international-payment'),
    WARNING_GUARANTEE: getFullMethod(config.MS_ADMIN, config.VER_1_0, 'warning/guarantee'),
    WARNING_EVALUATE: getFullMethod(config.MS_ADMIN, config.VER_1_0, 'warning/dglts'),
    GET_ALL_LOAN_NOTIFICATION: getFullMethod(config.MS_ADMIN, config.VER_1_0, 'notify/micro-lending/auto-loans'),
  },
  MS_CATEGORY: {
    CHECK_AUTHEN_DEVICE: getFullMethod(config.MS_CATEGORY, config.VER_1_0, 'device/check-login'),
    BLOCK_USER_INFO: getFullMethod(config.MS_CATEGORY, config.VER_1_0, 'blocks/findBlockByRM'),
    COMMON_CATEGORY: getFullMethod(config.MS_CATEGORY, config.VER_1_0, 'commons'),
    EXCHANGE_RATE: getFullMethod(config.MS_CATEGORY, config.VER_1_0, 'quotedrates/SME'),
    COMMON: getFullMethod(config.MS_CATEGORY, config.VER_1_0, 'commons'),
    INTEREST_RATE: getFullMethod(config.MS_CATEGORY, config.VER_1_0, 'interest-rate'),
    INTERBANK_RATE: getFullMethod(config.MS_CATEGORY, config.VER_1_0, 'interbank/interbanklist'),
    INTERBANK_RATE_TEMPLATE: getFullMethod(config.MS_CATEGORY, config.VER_1_0, 'template-configs'),
    INTERBANK_RATE_BOUNDARY: getFullMethod(config.MS_CATEGORY, config.VER_1_0, 'interbank/directionalboundary'),
    PRODUCT_GROUP_TYPE: getFullMethod(config.MS_CATEGORY, config.VER_1_0, 'producttype/product-group-type'),
    INDUSTRY: getFullMethod(config.MS_CATEGORY, config.VER_1_0, 'industries'),
    OPP_PRODUCT_RULE: getFullMethod(config.MS_CATEGORY, config.VER_1_0, 'oppProductRule/search'),
    BRANCHES_BY_USER: getFullMethod(config.MS_CATEGORY, config.VER_1_0, 'branches/getBranchByUser'),
    BLOCKS: getFullMethod(config.MS_CATEGORY, config.VER_1_0, 'blocks'),
  },
  MS_RM_PROFILE: {
    BASIC_USER_INFO: getFullMethod(config.MS_RM_PROFILE, config.VER_1_0, 'employees/username/'),
    DETAIL_USER_INFO: getFullMethod(config.MS_RM_PROFILE, config.VER_1_0, 'employees/'),
    DOWNLOAD_ATTACHMENT: getFullMethod(config.MS_RM_PROFILE, config.VER_1_0, 'files/download/'),
    FIND_RM_BY_BRANCH: getFullMethod(config.MS_RM_PROFILE, config.VER_1_0, 'employees/findRMByBranches'),
    EMPLOYEE_ACCOUNT_TYPE: getFullMethod(config.MS_RM_PROFILE, config.VER_1_0, 'employee-account-types'),
    FIND_RM_BY_LEVEL_CODE: getFullMethod(config.MS_RM_PROFILE, config.VER_1_0, 'employees/findRmByBranchAndLevelCode'),
  },
  MS_ACTIVITY: {
    CALENDAR_EVENT: getFullMethod(config.MS_ACTIVITY, config.VER_1_0, 'events'),
    COMPLETE_CALENDAR: getFullMethod(config.MS_ACTIVITY, config.VER_1_0, 'events/completeApp'),
    TODO_EVENT: getFullMethod(config.MS_ACTIVITY, config.VER_1_0, 'to-do'),
    COMPLETE_TODO: getFullMethod(config.MS_ACTIVITY, config.VER_1_0, 'to-do/complete'),
  },
  MS_RELATIONSHIP: {
    TODO_LIST: getFullMethod(config.MS_RM_RELATIONSHIP, config.VER_1_0, 'graph-relationship/assignsTask'),
  },
  MS_CUSTOMER: {
    RM_MANAGEMENT: getFullMethod(config.MS_CUSTOMER, config.VER_1_0, 'customers/rmManagement-mb'),
    RISK_COLLATERAL: getFullMethod(config.MS_CUSTOMER, config.VER_1_0, 'customers/collateral-mb'),
    PRODUCT_GROUP_CUSTOMER: getFullMethod(config.MS_CUSTOMER, config.VER_1_0, 'products/product-group-customer-mb'),
    PRODUCT_DETAIL_COMMON: getFullMethod(config.MS_CUSTOMER, config.VER_1_0, 'products/product-detail-common'),
  },
  MS_SALE: {
    SALEKIT_FUNCTION: getFullMethod(config.MS_SALE, config.VER_1_0, 'sale-kit/functions'),
    CATEGORIES_PRODUCTS: getFullMethod(config.MS_SALE, config.VER_1_0, 'sale-kit/categories-products'),
    PRODUCT_DETAIL: getFullMethod(config.MS_SALE, config.VER_1_0, 'sale-kit/product-detail'),
    CHECK_ACCOUNT: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/check-account'),
    TOWN_DISTRICT: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/town-district'),
    INDUSTRY: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/industry'),
    COUNTRY: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/countries'),
    SAVE_CUSTOMER_INFO: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/customer-info'),
    SERVICE_PACKAGE: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/service-package'),
    BEAUTIFUL_ACCOUNT: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/beautiful-account'),
    CHOOSE_ACCOUNT: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/choose-account'),
    SEARCH_OPPORTUNITIES: getFullMethod(config.MS_SALE, config.VER_1_0, 'opportunities_onboarding/search?size=10'),
    UPLOAD_GTTT: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/upload'),
    FILE_ONBOARDING_ACCOUNT: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/file'),
    DOWNLOAD_ONBOARDING_ACCOUNT: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/download'),
    VALIDATE_ONBOARDING_ACCOUNT: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/file/validate'),
    SAVE_GTTT: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/identity-paper'),
    GET_LIST_IDENTIFY_PAPER: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/identity-paper'),
    APPROVAL_LEVEL: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/approval-level'),
    CREATE_BIZ_ACCOUNT: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/customer/biz-corp-user'),
    CREATE_ACCOUNT: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/customer/account'),
    OPEN_CODE: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/customer/code'),
    GET_CUSTOMER_OPENING: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/customer-info'),
    DELETE_CUSTOMER_OPENING: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/customer-info/hide'),
    CONFIRM_SIGNATURE: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/signature-completed'),
    // Open account level 3
    POST_SEND_APPROVAL_CODE: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/send-approval-code'),
    POST_VERIFY_APPROVAL_CODE: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/verify-approval-code'),
    PUT_CUSTOMER_IDENTIFICATION: getFullMethod(
      config.MS_SALE,
      config.VER_1_0,
      'onboarding-account/customer-identification',
    ),
    PUT_ACCOUNT_IDENTIFICATION: getFullMethod(
      config.MS_SALE,
      config.VER_1_0,
      'onboarding-account/account-identification',
    ),
    PUT_PACKAGE_BIZ: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/package-biz-corp'),
    POST_REGISTER_SMS_BANKING: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/register-sms-banking'),
    DELETE_BIZ_USER: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/biz-user'),
    PUT_BIZ_USER: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/biz-user'),
    POST_BIZ_USER: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/biz-user'),
    POST_PROCESS_DONE: getFullMethod(config.MS_SALE, config.VER_1_0, 'onboarding-account/end-process'),
    TARGET_ONBOARDING_SEARCH: getFullMethod(config.MS_SALE, config.VER_1_0, 'targets_onboarding/search'),
    TARGET_ONBOARDING_DETAIL: getFullMethod(config.MS_SALE, config.VER_1_0, 'targets_onboarding/searchByCode'),
    GET_TITLE: getFullMethod(config.MS_SALE, config.VER_1_0, 'opportunities_onboarding/getTitle'),
    ADD_OR_UPDATE_OPPOTUNITY: getFullMethod(config.MS_SALE, config.VER_1_0, 'opportunities_onboarding'),
    OPPORTUNITY_DETAIL_BY_CODE: getFullMethod(config.MS_SALE, config.VER_1_0, 'opportunities_onboarding/searchByCode'),
    PRODUCTS_BY_OPPORTUNITY: getFullMethod(
      config.MS_SALE,
      config.VER_1_0,
      'opportunities_onboarding/searchOpportunityProducts',
    ),
    OPPORTUNITY_CHECK_RULE_UPDATE: getFullMethod(
      config.MS_SALE,
      config.VER_1_0,
      'opportunities_onboarding/check-rule-update',
    ),
    OPPORTUNITY_CONVERT_TO_TARGET: getFullMethod(config.MS_SALE, config.VER_1_0, 'opportunities_onboarding/convert'),
    TARGET_CHECK_RULE_UPDATE: getFullMethod(config.MS_SALE, config.VER_1_0, 'targets_onboarding/check-rule-update'),
    TARGET_ONBOARDING_UPDATE: getFullMethod(config.MS_SALE, config.VER_1_0, 'targets_onboarding/update'),
  },
  MS_CUSTOMER_ORG: {
    FIND_CUSTOMER: getFullMethod(config.MS_CUSTOMER_ORG, config.VER_1_0, 'customers/findAllFetch'),
    COUNT_CUSTOMER: getFullMethod(config.MS_CUSTOMER_ORG, config.VER_1_0, 'customers/findAllCount'),
    CREDIT_INFORMATION: getFullMethod(config.MS_CUSTOMER_ORG, config.VER_1_0, 'customers/credit-information-mb'),
    COLLATERAL_INFOMATION: getFullMethod(config.MS_CUSTOMER_ORG, config.VER_1_0, 'customers/collateral-information-mb'),
    CUSTOMER_DETAIL: getFullMethod(config.MS_CUSTOMER_ORG, config.VER_1_0, 'customers/mb'),
    COST_COLLECTION: getFullMethod(config.MS_CUSTOMER_ORG, config.VER_1_0, 'customers/cost-collection-mb'),
    GET_SEQUENCE: getFullMethod(config.MS_CUSTOMER_ORG, config.VER_1_0, 'leads/getSequence'),
    LEADS: getFullMethod(config.MS_CUSTOMER_ORG, config.VER_1_0, 'leads'),
    LEADS_SEARCH: getFullMethod(config.MS_CUSTOMER_ORG, config.VER_1_0, 'leads/search'),
    CHANGE_LEAD_STATUS: getFullMethod(config.MS_CUSTOMER_ORG, config.VER_1_0, 'leads/changeStatus'),
    UPDATE_LEAD_DETAIL: getFullMethod(config.MS_CUSTOMER_ORG, config.VER_1_0, 'leads/updateDetails'),
    GET_SEGMENT: getFullMethod(config.MS_CUSTOMER_ORG, config.VER_1_0, 'customers/segment'),
    OPP_CUSTOMER_DETAIL: getFullMethod(config.MS_CUSTOMER_ORG, config.VER_1_0, 'customers/opportunity'),
  },
  MS_REPORT: {
    DASHBORD_CHART: getFullMethod(config.MS_REPORT, config.VER_1_0, 'dashboard/viewSMEDashBoard'),
  },
};
export default API_METHOD;