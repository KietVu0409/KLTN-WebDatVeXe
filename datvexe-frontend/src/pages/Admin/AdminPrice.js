import React, {Fragment, useEffect} from "react";
import {Layout, Breadcrumb, Table, Popconfirm, Form, Button, Col, Row, Input, DatePicker, Select} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {deleteUserAction} from "../../redux/actions/UserAction";
import {DeleteOutlined, UserAddOutlined} from "@ant-design/icons";
import {OPEN_DRAWER} from "../../redux/types/DrawerTypes";
import AddPriceHeader from "../../components/Add/AddPriceHeader";
import {getPriceHeader, updatePriceHeader} from "../../redux/actions/priceHeaderAction";
import {useParams} from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from "yup";
import _ from "lodash";
import moment from "moment";
import {useHistory} from "react-router-dom";
import {getPriceLineByHeaderId} from "../../redux/actions/priceAction";
import AddPriceLine from "../../components/Add/AddPriceLine";

const {Content} = Layout;

const dateFormat = "YYYY/MM/DD";
const {Option} = Select;

const formatCurrency = (amount) => {
	return new Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND",
	}).format(amount);
};

const formatDate = (dateString) => {
	const date = new Date(dateString);
	const options = {year: "numeric", month: "2-digit", day: "2-digit"};
	return date.toLocaleDateString("vi-VN", options);
};

export default function AdminPrice() {
	const history = useHistory();
	const dispatch = useDispatch();
	const {id} = useParams();

	const {priceHeader} = useSelector((state) => state.priceHeaderReducer);
	const {priceLines} = useSelector((state) => state.priceLineReducer);

	const columns = [
		{
			title: "Mã chuyến",
			dataIndex: "id",
		},
		{
			title: "Điểm Băt Đầu",
			dataIndex: "fromStationFK",
			render: (text, item) => {
				return text?.name; // Format ngày tại đây
			},
		},
		{
			title: "Điểm Kết Thúc",
			dataIndex: "toStationFK",
			render: (text, item) => {
				return text?.name; // Format ngày tại đây
			},
		},
		{
			title: "Giá",
			dataIndex: "price",
			render: (text, item) => {
				return formatCurrency(text); // Format ngày tại đây
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

	const goToPricePage = (id) => {
		history.push(`/admin/prices`);
	};

	const SignupSchema = Yup.object().shape({
		title: Yup.string().required("Vui lòng nhập tên"),
		startDate: Yup.string()
			.required("Vui lòng nhập Ngày bắt đầu")
			.test("startDateEndDateValid", "Ngày bắt đầu phải nhỏ hơn hoặc bằng ngày kết thúc", function (startDate) {
				const {endDate} = this.parent; // Lấy ngày kết thúc từ đối tượng cha
				return new Date(startDate) <= new Date(endDate); // So sánh ngày
			}),
		endDate: Yup.string()
			.required("Vui lòng nhập Ngày kết thúc")
			.test("endDateIsValid", "Ngày kết thúc phải lớn hơn hoặc bằng ngày bắt đầu", function (endDate) {
				const {startDate} = this.parent; // Lấy ngày bắt đầu từ đối tượng cha
				return new Date(endDate) >= new Date(startDate); // So sánh ngày
			}),
	});

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			title: "",
			startDate: "",
			endDate: "",
			status: false,
		},
		validationSchema: SignupSchema,
		onSubmit: (values) => {
			console.log(values);
			dispatch(updatePriceHeader(id, values));
		},
	});

	const disablePastDates = (current) => {
		return current && current < moment().startOf("day");
	};

	const handleChange = (name) => {
		return (e) => {
			formik.setFieldValue(name, e.target?.value);
		};
	};

	useEffect(() => {
		if (id) {
			dispatch(getPriceHeader(id));
			dispatch(getPriceLineByHeaderId(id));
		}
	}, [id]);

	useEffect(() => {
		if (priceHeader) {
			formik.setErrors({});
			formik.setFieldValue("title", priceHeader.title);
			formik.setFieldValue("status", priceHeader.status);
			formik.setFieldValue("startDate", moment(priceHeader.startDate).format("YYYY/MM/DD"));
			formik.setFieldValue("endDate", moment(priceHeader.endDate).format("YYYY/MM/DD"));
		}
	}, [priceHeader]);

	return (
		<Content style={{margin: "0 16px"}}>
			<Breadcrumb style={{margin: "16px 0"}}>
				<Breadcrumb.Item>Admin</Breadcrumb.Item>
				<Breadcrumb.Item>
					<span onClick={() => goToPricePage()} style={{cursor: "pointer"}}>
						Price
					</span>
				</Breadcrumb.Item>
				<Breadcrumb.Item>{id}</Breadcrumb.Item>
			</Breadcrumb>

			<Form style={{padding: 12}} layout="vertical" name="basic" autoComplete="off">
				<Form.Item style={{maxWidth: "620px", marginBottom: "16px"}} label="Tên">
					<Input value={formik.values.title} style={{height: "42px", borderRadius: "6px"}} placeholder="Please enter name" name="title" onChange={handleChange("title")} />
					<p className="text-red-500 text-xs italic mb-0">{formik.errors.name}</p>
				</Form.Item>

				<Row gutter={16}>
					<Col span={8}>
						<Form.Item label="Ngày bắt đầu" name="startDate">
							<DatePicker value={moment(formik.values.startDate, dateFormat)} style={{height: "42px", width: "200px", borderRadius: "6px"}} onChange={(dates, dateStrings) => formik.setFieldValue("startDate", dateStrings)} disabledDate={disablePastDates} />
							<p className="text-red-500 text-xs italic mb-0">{formik.errors.startDate}</p>
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item label="Ngày kết thúc" name="endDate">
							<DatePicker value={moment(formik.values.endDate, dateFormat)} style={{height: "42px", width: "200px", borderRadius: "6px"}} onChange={(dates, dateStrings) => formik.setFieldValue("endDate", dateStrings)} disabledDate={disablePastDates} />
							<p className="text-red-500 text-xs italic mb-0">{formik.errors.endDate}</p>
						</Form.Item>
					</Col>
				</Row>

				<Select
					placeholder="Chọn một tùy chọn"
					value={formik.values.status ? "active" : "disActive"}
					onChange={(value) => {
						if (value == "active") {
							formik.setFieldValue("status", true);
						} else {
							formik.setFieldValue("status", false);
						}
					}}
					style={{borderRadius: "14px", width: 200}}
				>
					<Option value="active">Hoạt động</Option>
					<Option value="disActive">Ngưng hoạt động</Option>
				</Select>
				<Form.Item>
					<Button style={{height: "42px", width: "200px", borderRadius: "6px", marginTop: "12px"}} type="primary" htmlType="submit" onClick={() => formik.handleSubmit()}>
						Lưu
					</Button>
				</Form.Item>
			</Form>

			<div className="site-layout-background" style={{padding: 12, minHeight: 360}}>
				<Button
					type="primary"
					className="mb-3"
					onClick={() => {
						dispatch({
							type: OPEN_DRAWER,
							title: "Thêm Bảng Giá",
							content: <AddPriceLine id={id}/>,
						});
					}}
				>
					<UserAddOutlined />
					Thêm
				</Button>
				<Table columns={columns} dataSource={priceLines} />
			</div>
		</Content>
	);
}
