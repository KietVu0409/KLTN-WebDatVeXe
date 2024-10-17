import React from "react";
import {Form, Button, Col, Row, Input, DatePicker} from "antd";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import _ from "lodash";
import {CLOSE_DRAWER} from "../../redux/types/DrawerTypes";
import {createPriceHeader} from "../../redux/actions/priceHeaderAction";

export default function AddPriceHeader(props) {
	const dispatch = useDispatch();

	const SignupSchema = Yup.object().shape({
		title: Yup.string().required("Vui lòng nhập tên"),
		startDate: Yup.string()
			.required("Vui lòng nhập Ngày bắt đầu")
			.test("startDateIsValid", "Ngày bắt đầu phải lớn hơn ngày hiện tại", function (startDate) {
				const today = new Date(); // Ngày hiện tại
				return new Date(startDate) > today; // So sánh
			})
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
			dispatch(createPriceHeader(values));
			dispatch({type: CLOSE_DRAWER});
		},
	});

	const handleChange = (name) => {
		return (e) => {
			formik.setFieldValue(name, e.target?.value);
		};
	};

	return (
		<Form layout="vertical" name="basic" autoComplete="off">
			<Row gutter={16}>
				<Col span={12}>
					<Form.Item label="Tên">
						<Input placeholder="Please enter name" name="title" onChange={handleChange("title")} />
						<p className="text-red-500 text-xs italic mb-0">{formik.errors.name}</p>
					</Form.Item>
				</Col>
			</Row>

			<Row gutter={16}>
				<Col span={8}>
					<Form.Item label="Ngày bắt đầu" name="startDate">
						<DatePicker onChange={(dates, dateStrings) => formik.setFieldValue("startDate", dateStrings)} disabledDate={false} />
						<p className="text-red-500 text-xs italic mb-0">{formik.errors.startDate}</p>
					</Form.Item>
				</Col>
				<Col span={8}>
					<Form.Item label="Ngày kết thúc" name="endDate">
						<DatePicker onChange={(dates, dateStrings) => formik.setFieldValue("endDate", dateStrings)} disabledDate={false} />
						<p className="text-red-500 text-xs italic mb-0">{formik.errors.endDate}</p>
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
