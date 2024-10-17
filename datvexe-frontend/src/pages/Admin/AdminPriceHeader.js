import React, {Fragment, useEffect} from "react";
import {Layout, Breadcrumb, Table, Popconfirm, Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {deleteUserAction} from "../../redux/actions/UserAction";
import {DeleteOutlined, UserAddOutlined} from "@ant-design/icons";
import {OPEN_DRAWER} from "../../redux/types/DrawerTypes";
import AddPriceHeader from "../../components/Add/AddPriceHeader";
import {getPriceHeaders} from "../../redux/actions/priceHeaderAction";
import {useHistory} from "react-router-dom";

const {Content} = Layout;

const formatDate = (dateString) => {
	const date = new Date(dateString);
	const options = {year: "numeric", month: "2-digit", day: "2-digit"};
	return date.toLocaleDateString("vi-VN", options);
};

export default function AdminUser() {
	const history = useHistory();
	const dispatch = useDispatch();
	const {listPriceHeader} = useSelector((state) => state.priceHeaderReducer);

	const handleRowClick = (id) => {
		history.push(`/admin/prices/${id}`);
	};

	const columns = [
		{
			title: "ID",
			dataIndex: "id",
		},
		{
			title: "Tên",
			dataIndex: "title",
		},
		{
			title: "Ngày Băt Đầu",
			dataIndex: "startDate",
			defaultSortOrder: "descend",
			render: (text, item) => {
				return formatDate(text); // Format ngày tại đây
			},
		},
		{
			title: "Ngày Kết Thúc",
			dataIndex: "endDate",
			render: (text, item) => {
				return formatDate(text); // Format ngày tại đây
			},
		},
		{
			title: "Trạng Thái",
			dataIndex: "status",
			render: (text) => {
				return text ? (
					<div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
						<div style={{width: "8px", height: "8px", background: "green", borderRadius: 99}}></div>
						Hoạt động
					</div>
				) : (
					<div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
						<div style={{width: "8px", height: "8px", background: "red", borderRadius: 99}}></div>
						 Ngừng hoạt động
					</div>
				); // Trả về "Hoạt động" nếu true, ngược lại trả về "Ngừng hoạt động"
			},
		},
		{
			title: "Action",
			render: (text, item) => {
				return (
					<Fragment>
						<div>
							<Popconfirm
								placement="topLeft"
								title={"Bạn có muốn xóa không?"}
								// onConfirm={() => {
								// 	dispatch(deleteUserAction(item.id));
								// }}
								okText="Có"
								cancelText="Không"
							>
								<button className="text-red-700">
									<DeleteOutlined />
								</button>
							</Popconfirm>
						</div>
					</Fragment>
				);
			},
		},
	];

	useEffect(() => {
		dispatch(getPriceHeaders());
	}, []);

	return (
		<Content style={{margin: "0 16px"}}>
			<Breadcrumb style={{margin: "16px 0"}}>
				<Breadcrumb.Item>Admin</Breadcrumb.Item>
				<Breadcrumb.Item>Price</Breadcrumb.Item>
			</Breadcrumb>
			<div className="site-layout-background" style={{padding: 12, minHeight: 360}}>
				<Button
					type="primary"
					className="mb-3"
					onClick={() => {
						dispatch({
							type: OPEN_DRAWER,
							title: "Thêm Bảng Giá",
							content: <AddPriceHeader />,
						});
					}}
				>
					<UserAddOutlined />
					Thêm Bảng Giá
				</Button>
				<Table
					onRow={(record) => ({
						onClick: () => handleRowClick(record.id),
					})}
					columns={columns}
					dataSource={listPriceHeader}
				/>
			</div>
		</Content>
	);
}
