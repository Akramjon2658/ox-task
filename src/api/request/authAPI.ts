import {authInstance} from "../index";
import {SUB_DOMAIN} from "../../constants/api";
import {authCheckUrl} from "../endpoints";

type CheckDataType = {
    _username: string;
    _password: string;
};

export const AuthAPI = {
    check(checkData: CheckDataType) {
        const params = new URLSearchParams();
        params.append('_username', checkData._username);
        params.append('_password', checkData._password);
        params.append('_subdomain', SUB_DOMAIN);

        return authInstance({
            url: authCheckUrl,
            method: 'post',
            data: params
        })
    }
}