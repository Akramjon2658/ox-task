import {useEffect} from "react";
import ProductAPI from "../../api/request/productAPI";
import useFetchPageableData from "../../utils/hooks/useFetchPageableData";
import {Table} from "antd";
import {ProductType} from "../../constants/types";
import {getColumns} from "./columns";

export const Products = () => {
    const [pageableData, fetchData, {loading}] = useFetchPageableData<ProductType>({fetchAPIFunc: ProductAPI.fetch});

    useEffect(() => {
        fetchData({page: 0})
    }, [fetchData]);

    return <Table<ProductType>
        loading={loading}
        dataSource={pageableData.items}
        columns={getColumns()}
        rowKey={(record) => record.id}
        pagination={{
            position: ['topRight', 'bottomRight'],
            pageSize: pageableData.pageSize,
            total: pageableData.totalElements,
            pageSizeOptions: [20, 50, 100],
            onChange: (page, pageSize) => {
                fetchData({page: page - 1, pageSize})
            }
        }}
    />
}