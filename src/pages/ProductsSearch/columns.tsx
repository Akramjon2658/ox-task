import {Tag} from "antd";

export function getColumns() {
    return [
        {
            key: '__No',
            title: 'No',
            dataIndex: '__No'
        },
        {
            key: 'id',
            title: 'Id',
            dataIndex: 'id'
        },
        {
            key: 'name',
            title: 'Name',
            dataIndex: 'name',
            render: (name: string) => name?.[0] + name?.slice(1).toLowerCase(),
            sorter: (a: any, b: any) => a.name > b.name ? 1 : -1,
            onFilter: (value: any, record: any) => record.name.includes(value)
        },
        {
            key: 'supplier',
            title: 'Supplier',
            dataIndex: 'supplier'
        },
        {
            key: 'lastUpdateTime',
            title: 'Last updated time',
            dataIndex: 'lastUpdateTime'
        },
        {
            key: 'showMarket',
            title: 'Show market',
            dataIndex: 'showMarket',
            render: (showMarket: boolean) => showMarket ? <Tag color={'blue'}>Yes</Tag> : <Tag color={'red'}>No</Tag>
        },
        {
            key: 'unit',
            title: 'Unit',
            dataIndex: 'unit'
        },
        {
            key: 'sku',
            title: 'SKU',
            dataIndex: 'sku'
        },
    ]
}