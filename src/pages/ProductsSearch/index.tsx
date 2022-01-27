import {useCallback, useEffect, useState} from "react";
import ProductAPI from "../../api/request/productAPI";
import useFetchPageableData from "../../utils/hooks/useFetchPageableData";
import {Col, Input, Row, Table, Typography} from "antd";
import {ProductType} from "../../constants/types";
import {getColumns} from "./columns";

const {Title} = Typography;

export const ProductSearch = () => {
    const [pageableData, fetchData, {loading}] = useFetchPageableData<ProductType>({fetchAPIFunc: ProductAPI.fetch});
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchData({page: 0})
    }, [fetchData]);

    const handleSearchChange = (e: any) => {
        setSearch(e.target.value);
    };

    const Header = useCallback(() => {
        return <Row>
            <Col md={20}>
                <Title level={4}>Product Search</Title>
            </Col>
            <Col md={4} style={{textAlign: 'right'}}>
                <Input placeholder={'Search'} onChange={handleSearchChange}/>
            </Col>
        </Row>
    }, []);

    return <Row>
        <Col md={24}>
            <Header/>
        </Col>
        <Col md={24}>
            <Table<ProductType>
                loading={loading}
                dataSource={searchFunc(pageableData.items, search)}
                columns={getColumns()}
                rowKey={(record) => record.id}
                pagination={{
                    position: ['bottomRight'],
                    pageSize: pageableData.pageSize,
                    total: pageableData.totalElements,
                    pageSizeOptions: [20, 50, 100],
                    onChange: (page, pageSize) => {
                        fetchData({page: page - 1, pageSize})
                    }
                }}
            />
        </Col>
    </Row>
}

function searchFunc(data: Array<ProductType>, searchValue: string) {
    const search = searchValue.toLowerCase();

    return data?.filter(item => item.name?.toLowerCase().includes(search))
        .sort((a, b) => {
            let nameA = a.name.toLowerCase();
            let nameB = b.name.toLowerCase();

            let result = nameA.indexOf(searchValue) - nameB.indexOf(searchValue);
            if (result > 0) {
                return 1
            } else if (result === 0) {
                if (nameA < nameB) {
                    return -1
                }
                if (nameA > nameB) {
                    return 1
                }
                return 0
            }
            return -1
        })
}