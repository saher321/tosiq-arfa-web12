export const BASE_URL_API_V1 = "http://localhost:5000/api/v1"

export const LOGIN_URL      = BASE_URL_API_V1 + "/user/login"
export const SIGNUP_URL     = BASE_URL_API_V1 + "/user/register"
export const VERIFY         = BASE_URL_API_V1 + "/user/verify"
export const SEND_OTP       = BASE_URL_API_V1 + "/user/send-otp" // forgot password
export const VERIFY_OTP     = BASE_URL_API_V1 + "/user/verify-otp" // verify otp
export const RESET_PASSWORD = BASE_URL_API_V1 + "/user/reset-password" // reset password

export const NOTE           = BASE_URL_API_V1 + "/notes"
export const CREATE_NOTE    = BASE_URL_API_V1 + "/notes/create"
export const ALL_NOTES      = BASE_URL_API_V1 + "/notes"
export const UPDATE_NOTE    = BASE_URL_API_V1 + "/notes/update"
export const DELETE_NOTE    = BASE_URL_API_V1 + "/notes/delete"