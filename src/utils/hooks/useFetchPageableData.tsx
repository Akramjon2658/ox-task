import {useCallback, useState} from "react";
import {SimpleObjectType} from "../../constants/types";
import {PAGE_SIZE} from "../../constants/api";

type ParamsType = {
    fetchAPIFunc: (params: SimpleObjectType) => Promise<any>
}

type WrappedDataType<T> = {
    page: number,
    pageSize: number,
    items: Array<T>,
    totalElements: number,
}

type OptionsType = {
    loading: boolean,
}

type ReturnDataType<T> = [WrappedDataType<T>, (params: SimpleObjectType) => void, OptionsType];

function useFetchPageableData<T>({fetchAPIFunc}: ParamsType): ReturnDataType<T> {

    const [wrappedData, setWrappedData] = useState({} as WrappedDataType<T>);
    const [loading, setLoading] = useState(false);

    const fetchData = useCallback((params) => {
        setLoading(true);
        fetchAPIFunc(params)
            .then(res => {
                const data = res.data;
                const pageSize = params.pageSize || PAGE_SIZE;
                setWrappedData({
                    page: data.page,
                    pageSize,
                    items: data.items.map((d: any, idx: number) => {
                        d.__No = data.page * pageSize + idx + 1;
                        return d;
                    }),
                    totalElements: data.total_count
                })
            })
            .finally(() => setLoading(false))
    }, [fetchAPIFunc])

    return [wrappedData, fetchData, {loading}]
}

export default useFetchPageableData;