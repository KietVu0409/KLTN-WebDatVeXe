import React, {useEffect} from "react";
import {Form, Button, Col, Row, Input, DatePicker, Select, InputNumber} from "antd";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import {CLOSE_DRAWER} from "../../redux/types/DrawerTypes";
import {createPriceHeader} from "../../redux/actions/priceHeaderAction";
import {getListStationAction} from "../../redux/actions/stationAction";
import {useParams} from "react-router-dom";
import { createPriceLine } from "../../redux/actions/priceAction";

const {Option} = Select;

export default function AddPriceLine(props) {
	const dispatch = useDispatch();
	const {listStation} = useSelector((state) => state.StationReducer);

	const SignupSchema = Yup.object().shape({
		price: Yup.string().required("Vui lòng nhập"),
		fromStation: Yup.string().required("Vui lòng nhập"),
		toStation: Yup.string().required("Vui lòng nhập"),
		typeSeat: Yup.string().required("Vui lòng nhập"),
	});

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			price: "",
			fromStation: "",
			toStation: "",
			typeSeat: "",
		},
		validationSchema: SignupSchema,
		onSubmit: (values) => {
			const params = {
				...values,
				fromStation: +values.fromStation,
				toStation: +values.toStation,
				price: +values.price,
				priceHeaderId: +props.id,
			};
			dispatch(createPriceLine(params, +props.id));
			dispatch({type: CLOSE_DRAWER});
		},
	});

	const handleChange = (name) => {
		return (e) => {
			formik.setFieldValue(name, e.target?.value);
		};
	};

	useEffect(() => {
		dispatch(getListStationAction());
	}, []);

	const renderStation = () => {
		return listStation.map((item, index) => {
			return {label: `${item.name}-${item.province}`, value: item.id};
		});
	};

	return (
		<Form layout="vertical" name="basic" autoComplete="off">
			<Row gutter={16}>
				<Col span={12}>
					<Form.Item label="Đi Từ" name="fromStation">
						<Select onChange={(value) => formik.setFieldValue("fromStation", value)} options={renderStation()}></Select>
						<p className="text-red-500 text-xs italic mb-0">{formik.errors.fromStation}</p>
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item label="Đến" name="toStation">
						<Select onChange={(value) => formik.setFieldValue("toStation", value)} options={renderStation()}></Select>
						<p className="text-red-500 text-xs italic mb-0">{formik.errors.toStation}</p>
					</Form.Item>
				</Col>
			</Row>
			<Row gutter={24}>
				<Col span={12}>
					<Form.Item label="Loại Xe">
						<Select onChange={(value) => formik.setFieldValue("typeSeat", value)} placeholder="Please select type" name="typeSeat">
							<Option value="normal">Xe Thường</Option>
							<Option value="normal-bed">Xe Giường Thường</Option>
							<Option value="luxury">Xe Giường Luxury</Option>
							<Option value="limousine">Xe Giường Limousine</Option>
							<Option value="double">Xe Phòng Đôi Limousine</Option>
						</Select>
						<p className="text-red-500 text-xs italic mb-0">{formik.errors.typeSeat}</p>
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item label="Nhập giá">
						<Input placeholder="Nhập giá..." name="price" onChange={handleChange("price")} />
						<p className="text-red-500 text-xs italic mb-0">{formik.errors.price}</p>
					</Form.Item>
				</Col>
			</Row>

			<Form.Item>
				<Button
					type="primary"
					htmlType="submit"
					onClick={() => {
						formik.handleSubmit();
					}}
				>
					Lưu
				</Button>
			</Form.Item>
		</Form>
	);
}
