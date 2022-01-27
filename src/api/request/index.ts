import {PAGE_SIZE} from "../../constants/api";
import {request} from "../index";

export class CoreApi {
    private readonly url: string;

    constructor(url: string) {
        this.url = url;
        this.fetch = this.fetch.bind(this);
    }

    fetch({page = 0, pageSize = PAGE_SIZE}) {
        return request({
            method: 'get',
            url: this.url,
            params: {page, size: pageSize}
        })
    }
}