export const BASE_URL = `https://api.polkadotspace.io`;

export const REGISTER_URL = `${BASE_URL}/auth/api/v1/register`;
export const LOGIN_URL = `${BASE_URL}/auth/api/v1/token`;
export const GET_ALL_USER_URL = `${BASE_URL}/auth/api/v1/user/all`;
export const GET_MYSELF_USER_URL = `${BASE_URL}/auth/api/v1/user/me`;
export const UPDATE_MYSELF_USER_URL = `${BASE_URL}/auth/api/v1/user/update/me`;

export const GET_MY_PROFILE_URL = `${BASE_URL}/auth/api/v1/profile/me`;
export const UPDATE_PROFILE_URL = `${BASE_URL}/auth/api/v1/user/update/me`;

export const CREATE_ARTICLE_URL = `${BASE_URL}/common/api/v1/article/create`;
export const GET_ALL_ARTICLE_URL = `${BASE_URL}/common/api/v1/article/all`;
export const ARTICLE_SEARCH_URL = `${BASE_URL}/common/api/v1/article/search`;
export const TRANSLATE_ARTICLE_URL = `${BASE_URL}/common/api/v1/article/translate/`;

export const CREATE_TICKET_URL = `${BASE_URL}/common/api/v1/ticket/create`;

export const GET_ALL_BLOG_URL = `${BASE_URL}/common/api/v1/blog/all`;
export const GET_A_BLOG_URL = `${BASE_URL}/common/api/v1/blog/`;

export const GET_ALL_WEBSITES_URL = `${BASE_URL}/common/api/v1/websites/all`;
export const CREATE_WEBSITE_REQUEST_URL = `${BASE_URL}/common/api/v1/website_request/create`;

export const CREATE_UPDATE_CLAP_URL = `${BASE_URL}/auth/api/v1/clap/create_or_update`;
export const GET_CLAP_BY_USER_ARTICLE_ID_URL = `${BASE_URL}/auth/api/v1/clap/get_by_user_article_id`;
