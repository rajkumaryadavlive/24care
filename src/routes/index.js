import {
    LabTest,
    AllStake,
    Alltransactions,
    Buy,
    About,
    Contact,
    Doctor,
    ExploreDetails,
    Farms,
    Home,
    Login,
    PrivacyPolicy,
    Stake,
    TermsCondition,
    Pagenotfound,
    Found404,
} from "../pages/index";

import {
    PasswordReset,
    Profile,
    Kyc,
    ContentList,
    Orders,
    ManageOffers,
    AddCategory,
    AddRate,
    PrivacyPolicy as AdminPrivacyPolicy,
    TermsAndConditions,
    EmailList,
    AdminDashboard,
    KycManagement,
    ModelsCreatorList,
    RateList,
    CategoryList,
    TransactionHistory
} from "../pages/admin";

import {
    CreatorDashboard,
    AddContent,
    WalletAddress,
    AddContentPreview,
    CreatorPasswordReset,
    CreatorManageOffers
} from "../pages/creator";

const creatorRoutes = [
    {
        path: "creator/dashboard",
        exact: true,
        name: "Dashboard",
        component: CreatorDashboard,
    },
    {
        path: "creator/add-content",
        exact: true,
        name: "AddContent",
        component: AddContent,
    },
    {
        path: "creator/add-content-preview",
        exact: true,
        name: "AddContentPreview",
        component: AddContentPreview,
    },
    {
        path: "creator/password-reset",
        exact: true,
        name: "passwordReset",
        component: CreatorPasswordReset,
    },
    {
        path: "creator/profile",
        exact: true,
        name: "profile",
        component: Profile,
    },
    {
        path: "creator/kyc",
        exact: true,
        name: "kyc",
        component: Kyc,
    },
    {
        path: "creator/content-list",
        exact: true,
        name: "content list",
        component: ContentList,
    },
    {
        path: "creator/orders",
        exact: true,
        name: "order list",
        component: Orders,
    },
    {
        path: "creator/manage-offers",
        exact: true,
        name: "manage-offers",
        component: CreatorManageOffers,
    },
    {
        path: "creator/wallet-address",
        exact: true,
        name: "WalletAddress",
        component: WalletAddress,
    }
];

const adminRoutes = [
    {
        path: "admin/dashboard",
        exact: true,
        name: "AdminDashboard",
        component: AdminDashboard,
    },
    {
        path: "admin/email-list",
        exact: true,
        name: "EmailList",
        component: EmailList,
    },
    {
        path: "admin/add-category",
        exact: true,
        name: "add-category",
        component: AddCategory,
    },
    {
        path: "admin/add-rate",
        exact: true,
        name: "add-rate",
        component: AddRate,
    },
    {
        path: "admin/privacy-policy",
        exact: true,
        name: "privacy-poicy",
        component: AdminPrivacyPolicy,
    },
    {
        path: "admin/terms-and-conditions",
        exact: true,
        name: "terms-and-conditions",
        component: TermsAndConditions,
    },
    {
        path: "admin/kyc-management",
        exact: true,
        name: "kyc-management",
        component: KycManagement,
    },
    {
        path: "admin/models-creator-list",
        exact: true,
        name: "models-creator-list",
        component: ModelsCreatorList,
    },
    {
        path: "admin/rate-list",
        exact: true,
        name: "RateList",
        component: RateList,
    },
    {
        path: "admin/category-list",
        exact: true,
        name: "CategoryList",
        component: CategoryList,
    },
    {
        path: "admin/transaction-history",
        exact: true,
        name: "TransactionHistory",
        component: TransactionHistory,
    },

    
];

const routes = [
    { path: "/", exact: true, name: "Home", component: Home },
    { path: "login", exact: true, name: "Login", component: Login },
    { path: "doctors", exact: true, name: "Doctor", component: Doctor },
    {
        path: "pagenotfound",
        exact: true,
        name: "Pagenotfound",
        component: Pagenotfound,
    },
    { path: "found404", exact: true, name: "Found404", component: Found404 },
    {
        path: "lab-test",
        exact: true,
        name: "Lab Test",
        component:LabTest,
    },
    { path: "buy", exact: true, name: "Buy", component: Buy },
    {
        path: "explore-details",
        exact: true,
        name: "Explore Details",
        component: ExploreDetails,
    },
    { path: "about", exact: true, name: "about", component:About },
    {
        path: "terms-condition",
        exact: true,
        name: "Terms Condition",
        component: TermsCondition,
    },
    {
        path: "privacy-policy",
        exact: true,
        name: "Privacy Policy",
        component: PrivacyPolicy,
    },
    { path: "contact", exact: true, name: "Contact", component: Contact },
    { path: "all-stake", exact: true, name: "Stake", component: AllStake },
    { path: "farms", exact: true, name: "Farms", component: Farms },
    {
        path: "all-transaction",
        exact: true,
        name: "Alltransactions",
        component: Alltransactions,
    },
    { path: "stake", exact: true, name: "Stake", component: Stake },
    ...creatorRoutes,
    ...adminRoutes,
];

export default routes;
