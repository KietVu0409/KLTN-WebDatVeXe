import React from "react";
import InputSearchTrip from "../components/Input/InputSearchTrip";
import Slider from "react-slick";
import {List, Card} from "antd";
import "../Sass/css/Home.css";

import kh1 from '../images/kh1.PNG';
import kh2 from '../images/kh2.PNG';
import kh3 from '../images/kh3.PNG';
import kh4 from '../images/kh4.PNG';


export default function Home() {

	const settings = {
		className: "center",
		infinite: true,
		autoplay: true,
		slidesToShow: 3,
		swipeToSlide: true,
	};
	const settings2 = {
		className: "center",
		infinite: true,
		autoplay: true,
		slidesToShow: 2,
		swipeToSlide: true,
	};
	return (
		<>
			<div className="home_banner">
				<img src="./images/banner1.png" alt="123" className="img_banner" />
				<div className="home_content">
					<div className="home_around w-full">
						<div className="title_banner">
							<a href="https://vexere.com/vi-VN/nhung-cau-hoi-thuong-gap.html" target="_blank" rel="noreferrer">
								<h2 className="homepage__Title-bs2n93-3 LVkvx">VeXeRe - Cam kết hoàn 150% nếu nhà xe không giữ vé</h2>
							</a>
						</div>
					</div>
					<div className="home_search_content w-full">
						<InputSearchTrip />
					</div>
				</div>
			</div>
			<div className="home_slide">
				<div className="home_slide_content" style={{marginBottom: '-80px'}}>
					<h2 className="home_slide_title mt-5">Ưu đãi nổi bật</h2>
					<div className="home_slide_carousel">
						<Slider {...settings} className="slide_main">
							<div >
								<a href="https://vexere.com/vi-VN/bai-viet/uu-dai-khach-hang-moi">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/161/img_card.png?v=101" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Giảm 20% dành cho khách hàng lần đầu đặt dịch vụ của nhà xe tại Vexere</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vi-VN/bai-viet/nha-xe-giam-gia-hai-phong-travel">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/254/img_card.png?v=37" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Giảm đến 50% khi đặt dịch vụ xe Hải Phòng Travel tại Vexere</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vi-VN/referral?utm_source=banner&utm_medium=main&utm_campaign=referral_main_banner_2024">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/166/img_card.png?v=4" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Giới thiệu bạn mới - Nhận quà khủng từ Vexere</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vi-VN/bai-viet/dat-ve-xe-khach-khu-hoi">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/220/img_card.png?v=38" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Nhận ưu đãi x2 khi đặt dịch vụ xe khách khứ hồi</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/khuyen-mai/?utm_source=banner&utm_medium=main&utm_campaign=khuyenmai_main_banner_2024">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/137/img_card.png?v=7" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Tổng hợp chương trình khuyến mãi trong tháng</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vi-VN/bai-viet/uu-dai-bat-ngo">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/210/img_card.png?v=6" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Ưu đãi bất ngờ khi đặt Vexere</p>
								</a>
							</div>
						</Slider>
					</div>
				</div>
				<div className="home_slide_content" style={{marginBottom: '-80px'}}>
					<h2 className="home_slide_title mt-5">Ưu đãi từ đối tác của Vexere</h2>
					<div className="home_slide_carousel">
						<Slider {...settings} className="slide_main">
							<div >
								<a href="https://vexere.com/vi-VN/bai-viet/uu-dai-the-tin-dung-hdsaison">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/294/img_card.png?v=4" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Giảm đến 100K khi thanh toán dịch vụ xe khách bằng Thẻ Tín dụng HDSAISON</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vi-VN/bai-viet/uu-dai-khi-mo-the-tin-dung-vib">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/160/img_card.png?v=26" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Nhận ưu đãi dịch vụ xe khách 500K khi mở thẻ tín dụng VIB tại Vexere</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vi-VN/bai-viet/uu-dai-shopeepay">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/156/img_card.png?v=46" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Giảm 10K khi thanh toán đơn hàng Vexere từ 100K bằng ví ShopeePay</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vi-VN/bai-viet/uu-dai-vnpay">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/208/img_card.png?v=52" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Giảm đến 30K khi thanh toán dịch vụ Vexere bằng ví VNPAY</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vi-VN/bai-viet/uu-dai-grab">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/306/img_card.png?v=1" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Nhận ưu đãi di chuyển Grab đến 50K khi đặt dịch vụ xe khách tại Vexere</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vi-VN/bai-viet/uu-dai-sim-du-lich-gohub">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/305/img_card.png?v=3" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Giảm 20% khi mua SIM/eSIM du lịch Gohub dành riêng cho khách hàng của Vexere</p>
								</a>
								
							</div>
							<div>
								<a href="https://vexere.com/vi-VN/bai-viet/uu-dai-pnj">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/295/img_card.png?v=7" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Mừng sinh nhật Vexere - Tặng ưu đãi mua trang sức PNJ giảm đến 800K</p>
								</a>
								
							</div>
						</Slider>
					</div>
				</div>
				<div className="home_slide_content" style={{marginBottom: '-80px'}}>
					<h2 className="home_slide_title mt-5">Vexere có gì mới?</h2>
					<div className="home_slide_carousel">
						<Slider {...settings} className="slide_main">
							<div >
								<a href="https://vexere.com/vi-VN/bai-viet/dat-ve-tau-hoa">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/217/img_card.png?v=6" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Vexere chính thức ra mắt dịch vụ đặt vé tàu hỏa</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vi-VN/bai-viet/bao-hiem-chuyen-di">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/217/img_card.png?v=6" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>“Bảo hiểm chuyến đi” chính thức ra mắt tại Vexere</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vi-VN/bai-viet/bao-hiem-huy-tre-chuyen-bay">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/300/img_card.png?v=8" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Bồi thường đến 1.000.000 VNĐ với bảo hiểm trễ, huỷ chuyến bay tại Vexere</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vi-VN/bai-viet/thue-xe-san-bay-noi-bai-di-ha-noi">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/282/img_card.png?v=2" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Thuê xe 4 chỗ, 7 chỗ từ Sân bay Nội Bài đi Nội thành Hà Nội</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vi-VN/bai-viet/uu-dai-grabhttps://vexere.com/vn/thue-xe/xe-may?utm_source=banner&utm_medium=main&utm_campaign=thuexemay_main_banner_2024">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/178/img_card.png?v=6" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Thuê xe máy giá rẻ, chất lượng tại Vexere</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vn/thue-xe/?utm_source=banner&utm_medium=main&utm_campaign=thuexedulich_main_banner_2024">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/42/img_card.png?v=5" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Thuê xe du lịch: limousine, ghế ngồi, cabin, giường nằm tại Vexere</p>
								</a>
								
							</div>
							<div>
								<a href="https://vexere.com/vi-VN/bai-viet/hop-on-hop-off">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/175/img_card.png?v=6" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Xe buýt Hop On Hop Off ở Thành phố Hồ Chí Minh</p>
								</a>
								
							</div>
						</Slider>
					</div>
				</div>
				<div className="home_slide_content" style={{marginBottom: '-80px'}}>
					<h2 className="home_slide_title mt-5">Tính năng mới</h2>
					<div className="home_slide_carousel">
						<Slider {...settings} className="slide_main">
							<div >
								<a href="https://vexere.com/vi-VN/bai-viet/gioi-thieu-tinh-nang-gps">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/198/img_card.png?v=17" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Chủ động và an tâm hơn trong mọi hành trình với tính năng GPS định vị xe khách</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vi-VN/bai-viet/bao-hiem-chuyen-di">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/289/img_card.png?v=10" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Cách sử dụng tính năng GPS xem vị trí xe khách</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vi-VN/bai-viet/danh-sach-nha-xe-co-gps">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/288/img_card.png?v=7" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Các tuyến đường/nhà xe có hỗ trợ tính năng xem vị trí xe</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vi-VN/bai-viet/chon-xe-chat-luong">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/290/img_card.png?v=5" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Bí kíp chọn xe khách chất lượng cao tại Vexere</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vi-VN/bai-viet/tim-xe-dua-tren-cac-tieu-chi-pho-bien">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/302/img_card.png?v=5" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Tìm xe theo nhu cầu dựa trên các tiêu chí phổ biến</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vi-VN/bai-viet/chon-diem-don-gan-nhat">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/301/img_card.png?v=4" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Cách chọn điểm đón xe gần bạn nhất</p>
								</a>
								
							</div>
							
						</Slider>
					</div>
				</div>
				<div className="home_slide_content" style={{marginBottom: '-80px'}}>
					<h2 className="home_slide_title mt-5">Thuê xe máy</h2>
					<div className="home_slide_carousel">
						<Slider {...settings} className="slide_main">
							<div>
								<a href="https://vexere.com/vn/thue-xe/xe-may-tai-phan-thiet.vi?utm_source=banner&utm_medium=main&utm_campaign=thuexemay_phanthiet_main_banner_2023">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/209/img_card.png?v=23" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Thuê xe máy Phan Thiết - Mũi Né</p>
								</a>
							</div>
							<div >
								<a href="https://vexere.com/vn/thue-xe/xe-may-tai-da-lat.vi?utm_source=banner&utm_medium=main&utm_campaign=thuexemay_dalat_main_banner_2023">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/244/img_card.png?v=5" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Thuê xe máy tại Đà Lạt</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vn/thue-xe/xe-may-tai-nha-trang.vi?utm_source=banner&utm_medium=main&utm_campaign=thuexemay_nhatrang_main_banner_2023">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/248/img_card.png?v=4" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Thuê xe máy tại Nha Trang</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vn/thue-xe/xe-may-tai-vung-tau.vi?utm_source=banner&utm_medium=main&utm_campaign=thuexemay_vungtau_main_banner_2023">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/245/img_card.png?v=4" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Thuê xe máy tại Vũng Tàu</p>
								</a>
							</div>
							
							<div>
								<a href="https://vexere.com/vn/thue-xe/xe-may-tai-sapa.vi?utm_source=banner&utm_medium=main&utm_campaign=thuexemay_sapa_main_banner_2023">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/238/img_card.png?v=7" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Thuê xe máy tại Sapa</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vn/thue-xe/xe-may-tai-ha-giang.vi?utm_source=banner&utm_medium=main&utm_campaign=thuexemay_hagiang_main_banner_2023">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/240/img_card.png?v=10" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Thuê xe máy tại Hà Giang</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vn/thue-xe/xe-may-tai-dien-bien-phu.vi?utm_source=banner&utm_medium=main&utm_campaign=thuexemay_dienbien_main_banner_2023">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/285/img_card.png?v=3" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Thuê xe máy tại Điện Biên</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vn/thue-xe/xe-may-tai-quy-nhon.vi?utm_source=banner&utm_medium=main&utm_campaign=thuexemay_quynhon_main_banner_2023">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/283/img_card.png?v=3" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Thuê xe máy tại Quy Nhơn</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vn/thue-xe/xe-may-tai-da-nang.vi?utm_source=banner&utm_medium=main&utm_campaign=thuexemay_danang_main_banner_2023">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/250/img_card.png?v=3" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Thuê xe máy tại Đà Nẵng</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vn/thue-xe/xe-may-tai-hue.vi?utm_source=banner&utm_medium=main&utm_campaign=thuexemay_hue_main_banner_2023">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/251/img_card.png?v=3" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Thuê xe máy tại Huế</p>
								</a>
							</div>
							
						</Slider>
					</div>
				</div>
				<div className="home_slide_content" style={{marginBottom: '-80px'}}>
					<h2 className="home_slide_title mt-5">Thuê xe du lịch</h2>
					<div className="home_slide_carousel">
						<Slider {...settings} className="slide_main">
							<div >
								<a href="https://vexere.com/vn/thue-xe/di-mui-ne-tu-sai-gon.vi?utm_source=banner&utm_medium=main&utm_campaign=thuexedulich_muine_main_banner_2024">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/259/img_card.png?v=3" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Thuê xe Sài Gòn đi Mũi Né</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vn/thue-xe/di-vung-tau-tu-sai-gon.vi?utm_source=banner&utm_medium=main&utm_campaign=thuexedulich_vungtau_main_banner_2024">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/256/img_card.png?v=3" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Thuê xe Sài Gòn đi Vũng Tàu</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vn/thue-xe/di-da-lat-tu-sai-gon.vi?utm_source=banner&utm_medium=main&utm_campaign=thuexedulich_dalat_main_banner_2024">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/255/img_card.png?v=6" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Thuê xe Sài Gòn đi Đà Lạt</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vn/thue-xe/di-ho-tram-tu-sai-gon.vi?utm_source=banner&utm_medium=main&utm_campaign=thuexedulich_hotram_main_banner_2024">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/260/img_card.png?v=3" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Thuê xe Sài Gòn đi Hồ Tràm</p>
								</a>
							</div>
							
							<div>
								<a href="https://vexere.com/vn/thue-xe/di-tay-ninh-tu-sai-gon.vi?utm_source=banner&utm_medium=main&utm_campaign=thuexedulich_tayninh_main_banner_2024">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/261/img_card.png?v=3" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Thuê xe Sài Gòn đi Tây Ninh</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vn/thue-xe/di-long-hai-tu-sai-gon.vi?utm_source=banner&utm_medium=main&utm_campaign=thuexedulich_longhai_main_banner_2024">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/262/img_card.png?v=2" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Thuê xe Sài Gòn đi Long Hải</p>
								</a>
							</div>
							<div>
								<a href="https://vexere.com/vn/thue-xe/di-dong-nai-tu-sai-gon.vi?utm_source=banner&utm_medium=main&utm_campaign=thuexedulich_dongnai_main_banner_2024">
									<img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/263/img_card.png?v=2" alt="123" style={{width: '100%', height: '100%'}}/>
									<p style={{color: "black", fontWeight: 'bold', padding:8}}>Thuê xe Sài Gòn đi Đồng Nai</p>
								</a>
							</div>
							
							
						</Slider>
					</div>
				</div>
				<div className="home_slide_content" style={{paddingBottom: '220px'}}>
					<h2 className="home_slide_title mt-5">Khách hàng nói gì về Vexere</h2>
					<div className="home_slide_carousel">
						<Slider {...settings2} className="slide_main">	
							<div style={{}}>
								<div>
									<img src={kh1} alt="123" style={{width: '50%', height: 'auto'}}/>
									<p style={{color: '#317ce6', fontWeight: 'bold', fontSize: 20 }}>Anh Nguyễn Tuấn Quỳnh</p>
									<p style={{fontWeight: 'bolder', fontSize: 16}}>CEO Saigon Books</p>
								</div>
								
								<div>
									<p style={{color: "#5e5e5e", fontWeight: 'bold', width: '80%'}}>Lần trước tôi có việc gấp phải đi công tác, lên mạng tìm đặt vé xe thì tình cờ tìm thấy Vexere. Sau khi tham khảo, tôi quyết định đặt vé và thanh toán. Công nhận rất tiện và nhanh chóng. Chỉ một lúc sau, nhà xe liên hệ xác nhận vé ngay và thông báo thời gian xe dự kiến đón để tôi chuẩn bị. Tôi khá bất ngờ vì nhà xe có thông tin của mình nhanh đến vậy. Chuyến đi hôm đó rất tuyệt. Tôi nhất định sẽ tiếp tục ủng hộ Vexere.</p>
								</div>
								
							</div>
							<div>
								<img src={kh2} alt="123" style={{width: '50%', height: '50%'}}/>
								<p style={{color: '#317ce6', fontWeight: 'bold', fontSize: 20 }}>Shark Phi</p>
								<p style={{fontWeight: 'bolder', fontSize: 16}}>Giám đốc BSSC</p>
								<p style={{color: "#5e5e5e", fontWeight: 'bold', width: '80%'}}>Các đối tác của Vexere đều là những hãng xe lớn, có uy tín nên tôi hoàn toàn yên tâm khi lựa chọn đặt vé cho bản thân và gia đình. Nhờ hiển thị rõ nhà xe và vị trí chỗ trống trên xe, tôi rất dễ dàng tìm chuyến mình muốn và chỗ mình muốn ngồi. Còn hình thức thanh toán có cả thẻ, ví, tại nhà xe và tốc độ thanh toán thì siêu nhanh, tiết kiệm cho tôi rất nhiều thời gian.</p>
							</div>
							<div>
								<img src={kh3} alt="123" style={{width: '50%', height: '50%'}}/>
								<p style={{color: '#317ce6', fontWeight: 'bold', fontSize: 20 }}>Chị Tú Ngô</p>
								<p style={{fontWeight: 'bolder', fontSize: 16}}>YOLA Co-Founder</p>
								<p style={{color: "#5e5e5e", fontWeight: 'bold', width: '80%'}}>Vexere là ứng dụng đầu tiên tôi nghĩ tới khi cần đặt vé xe. Vì không những Vexere có nhiều ưu đãi lớn mà còn có nhiều hãng xe chất lượng, tôi được tuỳ chọn chỗ yêu thích nên tôi rất hài lòng.</p>
							</div>
							<div>
								<img src={kh4} alt="123" style={{width: '50%', height: '50%'}}/>
								<p style={{color: '#317ce6', fontWeight: 'bold', fontSize: 20 }}>Bữu Vi Vu</p>
								<p style={{fontWeight: 'bolder', fontSize: 16}}>Travel tiktoker</p>
								<p style={{color: "#5e5e5e", fontWeight: 'bold', width: '80%'}}>Tôi thường chọn đặt vé tại Vexere mỗi khi du lịch cùng người thân, bạn bè. Bên cạnh việc đặt vé nhanh chóng, thuận tiện, Vexere còn có các đợt Flashsale định kỳ lên đến 50%. Săn vé thành công vào các dịp này giúp tôi tiết kiệm đáng kể chi phí đi lại cho mỗi chuyến đi.</p>
							</div>
						</Slider>
					</div>
				</div>

				

				{/* <div className="home_slide_content2" id="news">
					<h2 className="home_slide_title">Bài viết nổi bật</h2>
					<List
						grid={{gutter: 16, column: 3}}
						dataSource={data}
						renderItem={(item) => (
							<List.Item>
								<Card style={{height: "290px"}} title={<img src={item.img} style={{height: "200px", width: "100%"}} alt />}>
									<p className="font-bold text-sm"> {item.title}</p>
								</Card>
							</List.Item>
						)}
					/>
					,
				</div> */}

				<div className="home_slide_content3">
					<h2 className="home_slide_title">Nền tảng kết nối người dùng và nhà xe</h2>
					<div className="seo-content">
						<div className="card">
							<div className="icon-container">
								<img className=" lazyloaded" data-src="https://storage.googleapis.com/fe-production/svgIcon/bus-car-icon.svg" src="https://storage.googleapis.com/fe-production/svgIcon/bus-car-icon.svg" alt="busCar-icon" />
							</div>
							<div className="card-content">
								<p className="base__Headline-sc-1tvbuqk-7 OkeDq color--light-dark">2000+ nhà xe chất lượng cao</p>
								<p className="base__Body02-sc-1tvbuqk-14 VqdXU color--medium-sub">5000+ tuyến đường trên toàn quốc, chủ động và đa dạng lựa chọn.</p>
							</div>
						</div>
						<div className="card">
							<div className="icon-container">
								<img className=" lazyloaded" data-src="https://storage.googleapis.com/fe-production/svgIcon/yellow-ticket-icon.svg" src="https://storage.googleapis.com/fe-production/svgIcon/yellow-ticket-icon.svg" alt="easybook-icon" />
							</div>
							<div className="card-content">
								<p className="base__Headline-sc-1tvbuqk-7 OkeDq color--light-dark">Đặt vé dễ dàng</p>
								<p className="base__Body02-sc-1tvbuqk-14 VqdXU color--medium-sub">Đặt vé chỉ với 60s. Chọn xe yêu thích cực nhanh và thuận tiện.</p>
							</div>
						</div>
						<div className="card">
							<div className="icon-container">
								<img className=" lazyloaded" data-src="https://storage.googleapis.com/fe-production/svgIcon/completement-icon.svg" src="https://storage.googleapis.com/fe-production/svgIcon/completement-icon.svg" alt="guarantee-icon" />
							</div>
							<div className="card-content">
								<p className="base__Headline-sc-1tvbuqk-7 OkeDq color--light-dark">Đảm bảo có vé</p>
								<p className="base__Body02-sc-1tvbuqk-14 VqdXU color--medium-sub">Hoàn ngay 150% nếu không có vé, mang đến hành trình trọn vẹn.</p>
							</div>
						</div>
						<div className="card">
							<div className="icon-container">
								<img className=" lazyloaded" data-src="https://storage.googleapis.com/fe-production/svgIcon/coupon-icon.svg" src="https://storage.googleapis.com/fe-production/svgIcon/coupon-icon.svg" alt="deal-icon" />
							</div>
							<div className="card-content">
								<p className="base__Headline-sc-1tvbuqk-7 OkeDq color--light-dark">Nhiều ưu đãi</p>
								<p className="base__Body02-sc-1tvbuqk-14 VqdXU color--medium-sub">Hàng ngàn ưu đãi cực chất độc quyền tại VeXeRe.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="home_slide_content4" id="partner">
					<h2 className="home_slide_title mt-5">Trang web đã được kết nối đến</h2>
					<div className="grid grid-cols-6 home_slide_tv">
						<a href="https://vnexpress.net/vexere-ho-tro-5-000-ve-tet-2021-cho-sinh-vien-4211920.html" target="_blank" rel="noreferrer">
							<img className=" lazyloaded" data-src="https://storage.googleapis.com/fe-production/images/logo-baochi/logo-vne.png" src="https://storage.googleapis.com/fe-production/images/logo-baochi/logo-vne.png" alt="express" />
						</a>
						<a href="https://www.youtube.com/watch?v=du_TpvYVNg0" target="_blank" rel="noreferrer">
							<img className=" lazyloaded" data-src="https://storage.googleapis.com/fe-production/images/logo-baochi/logo-vtv.png" src="https://storage.googleapis.com/fe-production/images/logo-baochi/logo-vtv.png" alt="vtv" />
						</a>
						<a href="http://cesti.gov.vn/chi-tiet/3403/doi-moi-sang-tao/khoi-nghiep-voi-he-thong-ban-ve-xe-truc-tuyen" target="_blank" rel="noreferrer">
							<img className=" lazyloaded" data-src="https://storage.googleapis.com/fe-production/images/logo-baochi/logo-cesti.png" src="https://storage.googleapis.com/fe-production/images/logo-baochi/logo-cesti.png" alt="cesti" />
						</a>
						<a href="https://dantri.com.vn/kinh-doanh/cong-ty-co-phan-ve-xe-re-goi-von-thanh-cong-tu-cac-nha-dau-tu-uy-tin-20191225100127703.htm" target="_blank" rel="noreferrer">
							<img className=" lazyloaded" data-src="https://storage.googleapis.com/fe-production/images/logo-baochi/logo-dantri.png" src="https://storage.googleapis.com/fe-production/images/logo-baochi/logo-dantri.png" alt="dan-tri" />
						</a>
						<a href="https://tuoitre.vn/blog/quy-dau-tu-nhat-va-singapore-tiep-suc-vexerecom-767367.htm" target="_blank" rel="noreferrer">
							<img className=" lazyloaded" data-src="https://storage.googleapis.com/fe-production/images/logo-baochi/logo-tuoitre.png" src="https://storage.googleapis.com/fe-production/images/logo-baochi/logo-tuoitre.png" alt="tuoi-tre" />
						</a>
						<a href="https://www.youtube.com/watch?v=qT30wzsFKGw" target="_blank" rel="noreferrer">
							<img className=" lazyloaded" data-src="https://storage.googleapis.com/fe-production/images/logo-baochi/logo-fbnc.png" src="https://storage.googleapis.com/fe-production/images/logo-baochi/logo-fbnc.png" alt="fbnc" />
						</a>
					</div>
				</div>
				<div className="home_slide_content5" id="station">
					<h2 className="home_slide_title mt-5">Bến xe nổi bật</h2>
					<div className="grid grid-cols-4 gap-20">
						<a
							href="https://vexere.com/vi-VN/ben-xe-mien-dong"
							data-bg="https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg"
							className="BusStationCard__Wrapper-sc-759o96-0 kKZSxH lazyloaded"
							style={{
								backgroundImage: 'url("https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg")', 
							}}
						>
							<header className="BusStationCard__Header-sc-759o96-1 iSiVXT" >Bến xe Miền Đông</header>
						</a>

						<a
							href="https://vexere.com/vi-VN/ben-xe-mien-tay"
							data-bg="https://media.vov.vn/sites/default/files/styles/large_watermark/public/2022-01/ben_xe_mien_tay_sang_27_tet_-.jpg"
							className="BusStationCard__Wrapper-sc-759o96-0 kKZSxH lazyloaded"
							style={{
								backgroundImage: 'url("https://media.vov.vn/sites/default/files/styles/large_watermark/public/2022-01/ben_xe_mien_tay_sang_27_tet_-.jpg")',
							}}
						>
							<header className="BusStationCard__Header-sc-759o96-1 iSiVXT" >Bến xe Miền Tây</header>
						</a>
						<a
							href="https://vexere.com/vi-VN/ben-xe-an-suong"
							data-bg="data:image/jpeg;base64,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"
							className="BusStationCard__Wrapper-sc-759o96-0 kKZSxH lazyloaded"
							style={{
								backgroundImage: 'url("data:image/jpeg;base64,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")',
							}}
						>
							<header className="BusStationCard__Header-sc-759o96-1 iSiVXT">Bến xe An Sương</header>
						</a>
						<a
							href="https://vexere.com/vi-VN/ben-xe-nga-tu-ga"
							data-bg="data:image/jpeg;base64,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"
							className="BusStationCard__Wrapper-sc-759o96-0 kKZSxH lazyloaded"
							style={{
								backgroundImage: 'url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFRUXFRUXFRgYFxoYFRUXFRUYFhcVFhcYHSggGBolHRYVIjEhJikrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQMEBQYHAgj/xABREAACAAMEBAgJBwkGBQUAAAABAgADEQQSITEFBkFREyJTYXGBkZIHFjJSobHB0dIUFSNCYpPhQ1RygqKywuLwJDM0RHOjF2N0g7M1lLTT8f/EABkBAAMBAQEAAAAAAAAAAAAAAAABAwIEBf/EAC8RAAICAQMCBQIFBQEAAAAAAAABAhEDEiFSEzEEMkFRoSJhFEJxkcEjM4Gx8GP/2gAMAwEAAhEDEQA/AKhApBwKR7BxBUgUg4EAHN2CKx3SLVqjq/KtEtnm3sHuihoKBVO7njMpKKtjSsqN2BdjT11OsnmMf129hhVdUbGPyVel3+KJdeJrQzKrsFdjXU1YsY/IL1lj6zDqXq9ZB/lpXWgPrhddD6bMYKwVI25dCWUZWaT92vuhzJ0fJGUmUOiWvujLzr2HoMIqI7WUTkCegExu9onyZQq1xdwAFT0ARD2jXGUvkoSBtJoO0AiF1/sHTMmTRs45SZp6JbH1CF00BajlZp/3T+6NLka7F/JkO4pUlFdx2qpESWj9b5Ew3TVSMxmR0qQGHZC6z9h9Ne5lcvVO2nKzTetaesw6l6j28/5Zut5Y9bxtUmYrAMpBByIxELARnrv2H0kY5J8HNvP5NF6Zi/wkw6TwY205tIHS7exI19BHcLryNdNGUS/BTafrTpA6L5/hEOZXgmfbakHRLJ/iEakDB0jPWn7h04mby/BINtqPVKA9bxAa8anJYZcp1mM99ipvAACi1FKdcbSpih+GJK2WSd08DtlzPdDx5ZuaTYpQSWxkUCkdUgUjvIHNIOkHSDCwCOaQI7pAgCxGkAx1BQxBUgUg4OAYVI0XUdKWUfadz2G7/DGdiNM1Wl0ssocxPeYt7Yhn8puHcnBHUJIYUrHIVOhC6w3BhZDAB1DTS+keBllqVYmijnO3HdjDyK/rlKbg0cZKxvYVADDAnHAVGfPCGVW021pjm8amuNanGleN/VIcaPt6JVjKSaynC+CQuWKqWoT9rPdCNn0POmksioxG6YFcVwrRlrTrMOV1ctQykHIA0mSwMOuM3Iulh+5JeOswZKmQPknbSg8rPEQ30ppszgFmyJZavFYVV1IFbyuGqKQ0m6u2hFLNJRVofKnDfWgCg41y6obvK2EiudOMW3eVUUEC1eo5PD6Jk9qZpRxNVK1V6hsKG8oNGwwrVaYUjQFMULUnR5L8Ma3EqF2KWIoaUzABOO87waXtWEMltewtepHatHIAMdAQgO1aFgYbx0phMBekUzwsy62EHdOln0MPbFwVoq/hOWuj5nM8o/7ij2xrH50KflZicHSDpBx6ZyHNI6pBgQYEABQI6pBQBQjSBSO6QKRpiOKQdI6pApCA5pGp6Hl3ZEobpafuiMuuxrMlaADcAOzCObP2RXGLJCghER1wgAJJAAFSTgABtJ2RzFBUQohhNYKarEcUhW2Ei8BjuqK9sADkGOyARQ0IOBByNYjPks8/5gDokj2sYaSFnTJsyWtrccHcDMsuSRecFrlCpIIW4f1xCGJ2vVShv2aaZR80gsg/RIIZeo0hJ7NpMC6GRhvEyh/aSvph1bdHz0R3bSFpoisxCy7KMFFaD6Hm2mOrJoxpiKw0hamVwGUjgBUMt4ZSd0AyLGr9tmmrlOlpzsR1BfbEpYNTkGM6YZn2FHBy+sAlm6zQ7ob2iXKlmUrW+0kzZhRaT0A4ql2JKpQAAdrKNsObVoyzIt+bbrQqVC3mtry1vEXgtVZRUg1puMFjosiSwAAoAAFAAKAAbABkIVVYqtk0dZGmTJYmWotLdZbX7VaaF2l8IApM3jcXHCFJyWBODFDMMyakpfpJk3jO7oCbzmgvS5gr9kwgLUlYVV4rUjSNhkS3nS2lqiqpd0Unis7KuQJNWVsOaFLBrPJmzCFYFbtmMs0YMxtDOq1UgXRVB1YnZCGWQGFEiq27XGzy1tFKsbM0sTagqtHmBGKORRipJFBtFOeJCfpuWkqbN4zCU5lkKKs8yqqEQV4xLMoHOYAJ0RX/AAgJXR8/oQ9kxDENN8IKKyOZM3gWkMzEpRpc4X2WS/GoCVltlXEqa0MPNKaZl2zRtpmSqlAhAJ20RJlebyqdRhx2khPsY8RApB0gwI9M5AqQYEdAQYEAWFSBHVIOAQhSBSO6RzSGBzApHREFAArY5dZiDe6jtYCL7aprvOKCbwaywHYAAzJm04tgE2GmNTswil6DStolD7YPZj7ItNvBR5rcC7vMQpLdReoCoAlkV4ovCtdtcco4/EvdHX4VK3YaJMrLltaGfh1vOhC3pYKl76cXBAQFoQRjEFpmaGedLmTbTwVeCnS1VmSXLWvAhaCpZyorQHB2qRQRZ7IheeszgmlqiFLzUDTBkFCgniDOp20whlJ0tbDX+y+ea0IqRMUItC1a3A9TlW7TceaJXM90Vmfa7XwLLP4Yi6fILhi3HVJfExA4WStSNj7iYttu0YZs2TeecCLHNvEOyrf+jVSwGBb6SYd+HNDeVpHSJH9whN04FClSCaGpmGhI+psIxbGJG1zbas2ssI8q+TSgDXAqYAlsSWZhU0pc6joiRelbM7WSzLNSfNMw8JMEslX4eYt9C3mIHY77t0YcWErJo6Y0i30lTVebLCOHqeGn3pnCOoBqUIZAKUww2Q9+U6Uur9Gl6qBqXaYBb5oT5JIYjbQ76R1MlaVuXRNS/c8q7LuXq3qAEVvUquV2lDnjAMiU0DbJKvKT6RSjykULdQM8uShmB2JKywrzFANacGYf6s6NtSz1eYjBeBCkHIPKs0qUrL+kTMH6sSTWS3lyOHIlFq3vouEH0wwUcHS7wQOdTUmBYrNpG+peat29L4RaqQwDLfuXUBWq7ycQcgcENFG0ZqjbFCE2Z8puH0Qus0pUq+7FainGwxMWLTGqtqawpZ1Uuy2lzW+q/R8EZUtiWrsu12xKvonSJvqLWoDg3TQhpZMxXF2mYCgrmPKMKnRGkDX+1gGrkEFvJYC6l2lMKHjZ8bmEADfRWgbWttM6YE4N5wmGhxUSpc6SlRtJRkyyAA2Q30pqrar1ZV2gtZnS644KQ8tT5ovzbSxbZUUBJiZs2iLaJMxPlK33n3w9XYpLurUJeOBLqTd8kBiBCVl1Xngpftb3QGDoHmEMrNeu32a9hQUYmvVhBYHOgdVJsiRapRKkzpSKgrgrcG97ZgL7k16YErVGeLWLRwq3S8sulDgsgyhLummJIlnPK9Dq26sGYZA4dllyrPMlFeN9I0xLvCE3th41DU4ZxzM1ODOWE4Bb0sheDqLstboVqvRiuBRqcUjENCsKGFo1Dd5lpZp6S5c+YDRAQxUFnUNXi3r5QVAyvZkxJDQBFjeQ1pQTeEWaJowCTJdyjEE+dLqemDlappwCSTPLqk7hasqMTxLhBvVxGN1s1oAMFEMW1EshHGtDY1DEGWoagpxgBQtRMTmSGJxgsBGxakSpcu4bcplMjFlogVprLOMuaMcAquxoDjwdchE3I0RJkaPtkuRMExHE+ZgQQpeUDdBHMAeuGc7U6wEmsxwKIbomYLwaMksioJBVWbGuJJJrWJ9LNJWzzpcml0iexAyBnF2alNlSeyGnuBiVIMCAojoCPSOQICDgQdIYgoEHSBAA6+Z7R+bzvun90djQVp/N533bj2RoHzrbvzeT95M+CCOk7f8Am8jvTPhji/E5eK/cv04e5QRq9aj/AJeb3CPXBjVq1/m8zsHvi+C36Q5Gz/7vujr5XpDzLMOqafbGX4nL7L9zSxw92VTV/V20JPRnksqi9iaeaQNvPFyFkfzfVCHD6Q3Wf7ub8cFwukDyA6JUz2vEp5Mknbo0lBe47FkfzfSPfCR0dOqeNTdguHpxhMHSHnSPun/+yCI0hykodEk+14nqn7o19P3HC2Cb53oHoxg/m6bTyzhXYuOWeH9V6IaIlvYAielDkRJX2tCRlW8sU+VUYKGoJMvIkgHHnBgTn7obUV6MkRo2Z57bdq7eqFE0e1MXbLO907hz+gREzrLb1UsbWQACT9FJyHVHZ0bb/wA7b7uV7odz90K49qZKjR7UxmPsxqNnQKR0LBjW++zC9hhvFIifmu3fnj9yV7oRewWsOqG1zasGIwlDyaV+rziM3LkhpX2TJ0aOHnP32Pthwkq6AKnDeanrJivnQtq22yd2oPUscS9DWhq/2yfgSD9IMxnkIPqrzILS9GT62NKEUNDgRealKXaDHDDdBixy61u1I3knedp+03bECdXp+212j70j1CDGrUzbarR9+8Z1emtD/wAMn/kkvHiDE1POSKV7IXR6CgFB7zWKho7QvDJfW0TyL0xf79/ycxpZPWVr1wraNWgq1M2ccQMZ0zawG/nhu06cgjb7RLQFUGvBrXfdFe2kDAfUXsH9bT2xWvFFNruemY59sJ+KEgkgitKVqWOf60Zcl6zDfiWoz+ZeyCe2ChBK0IIz39cVK0aqWVApMtTV0UZ5swG0w6XU6zcmndr7Y1tV6/gSdtrSN/FSxDNz1zRBeLujxm69c78YVTVuy8KZXBJUS1ccUZFmU+odsPBqtZ+TTuCNdX/0YPG1+UjvmfRYzmSuu0fzwBYtEj8pI/8AcH44lBq3I5NO4vuhVdASPMXur7oOqubFpfFEP8l0R58j78/HAib+YZHmL3V90HB1I82Gl8UU8+E1tlnX7w/DHJ8JczkE7590ZxJlXwSCSOgisdTbGQMK1hdJVYa96NCPhJm8hL7zQhatep05SglolaGoLEgqwYbd4EUhbK2+HthklTicyB6b38MRnSR2+CjrzRTLro/X20TZqSxKki+6rXj4AnE+VsFYU05rzPk2iZKWXKIRqAkPWlAcaPnjFU1Ts5FrlY4jhDTolOYPWqzsbXOJNSX2ZZDLmiNrrV9v5ORt66Lxq/rNaLRJtEwpLDS1FwANRmuu1DVjXyVypnEHJ1+tLMFuyqMQDRWrQ4GnGhxqjKZNH2plNHrMYHaLsmoPbWKfo2y/SrjvPYpPsiHhZas2X2TX+jpirlFFt0lrhPs7CWnBlQqkXlJOOYJDDaDEBJ16tBtLz6pXgxKpdNy6GvVpezvXsawy07LLTWOwhSOtVJ9JMREqQDNddwU+v3iPZ8PCL1WvQl4uVZHXuXeVrpaJ5EljLuuQrXVoaHMVr1dcHateLWjst5OKxA4grQGgisaHs920yj/zJY7WA9sLaVshM6ZU432Xdkbo9QjM4qOLt6nGpN53v+X+S96xawWmTZ7PNVlDOAJnFBF4y0cUByzaK/K1ptUy9NMwX5a8QhFwDGjYUxwhfwi2K40k3mIZCAoqQDLCjADbRhjzxV5NiJViCQRTeKqahlpz4dkebg3xJ/f+Tu8C/q39n/pk2dd7byw+7l/DAna02qX5E6l4B2oqGrsq3jiDTHYMqRXzY4e6TS8USnkS0pzhkVtnOWEenjiulN17HDklWaC/UserGstpm2hVmziyUYkXVGS4HBYi7brZbZbOrWhryFlOC+UpI83eILVGxVtFPORk75C+2K9abJRandHBiS/EP/G37nW/KPtD6zT5MoIk51UFiAOc1J9MWHV7WKdNmgTJsx1uk0zqchUc1YpOiZYZSNx9arFo1Qsf9pFDQ3Xp03cPTHpeJhU7H4SX9SKY607rNN4ZxJnTlQGl0tS6RgwABOFRD06QnnRnDibMDC00Zg7VZSgUAmuQNIrOlZatOdiLpLEldoJxIp01izWVaaGngKSOFl4UxHHU1p007Y8rxTrQ1yRSaqcl+pC2PS05y16dMa6t4VdjRgy0IqcxU4wzOmp/LzfvX98I6LSrBwpABNK5ninZBvo+hIpkSOmmFY9KX9qLr1ZwQf8AWkvshWxW6Y/CkzHqAtGvNWgqaVrWlfXCPzi/KN3j74V0dZ+NOT7C9uJhP5DzRyx7s9bxS/p4n9v5OG0gfPbvGEjpE/aPXDlrBzQ2kWcXiOaLQVujz5OkF84Hc0CHPybmgRbpE9Y2sct7t8LhU1W6wrziowPVDibwhApKOe2tfQMo0EtHImr5w7RB6UL1soKS57qTcMsKCciScNlRDaU0wLxpc5iS31Gw4lBlzsOwxpTNQVJoN5OHbES2mmE8IFUyq3We8L1SDxgK+SDTnziUscWqZbF4l4Zal/1kVqG5W1gzJbKgSYWZkYYXCPKZjvyiN0hbJ7MzpIe6zvdDS3vBBdulqbaH0RctFB0QtOmhizE+ULiiuCpzQ+4ZRQ3locjUUPQdsYWCOtz+1Ek97KlojWC0SpRlPZ5rJMlPgssi6ziYuIIxzQ0qNsRNhe1Ak8Aworfknzuke2NGUgioNRv2Rw1pRTQuoO0FgD2EwQ8Pjg3KK79ynVkqd9ip2qwzGx4N60UeScboAr6IjfmOcs8uJb3WlrXimt7DAYbov/Dpeu31vVpdvC9XdTOscHSMnbOlfeL74vj+i6M5J63qZT5ejpy1cSnvKQyi6akrQrs30hO2aOtDT0nNJZmZw82iEqDeBa6DW79bKLxZbXLc0SYjkCpCsGIG+gMOLRNVBedlVd7EAY5YmFJWjFLuV7Xe0T53BpJkzGuEm9cNOMoBHGHMMRuisJo63UY8DMrQAcXecY0RLfKKlxNllQQCwdboJyBNaCFJdrlspZZiMozYMCowriQaDAxHHghjjpXY3CWjszNpui7deIEmYVqQMAKiu/oh3pDR9tmMl2S6qJaLQ3c1UV276xd5WmLOTQT5RJ+2uPphTTVrMmSzrdvYAXzRAWNKsd0XT+nT6E2ouWv1RTdBaNt0qcswy24tCAbtCQynYeaO9JauWiYGCyiK5YrhXrxic1d0vNmzCsybZyLpurLPHY518o4AVizKYkscdWtdykZ2jM9H6oWmWD9GSTdqarsUDad9Yl9EaHtcqaswSqXdhKUauY8qLZaNMWeWxWZOlqwzDMARXEYQmdYLL+cStn1xvis5au4oz0O09yl6Y1ftzzCySzxiS3GQYkkk4tzx0mhdJLIeUqnj4MOES7gQQaFqXqjMbou83TdmW7enyxeW8tWGKkkAjmwMNdI6xyElsUnSi5QmWCcCalQeioPZEpY4yqzXUreynWHVW3KwJl1ArgZiUyoK8aCtmqWkGcsFABocJqgV+tQXt9YuWpGkJ86QzzyGPCEI1At5QBU0UAEVqK0iX0hpOTIAM2YqA5VzNM6AYmK6vpr0JpR85mknUfSAN4XQ2H5QYjHA74PxFt/nL97GgWPWayTGurPSpyDVSvML4FYd6T0tJs4BnOEDGgwJqRjkoMZSXcrLK5RSb2RTLPqdaAihrlQADxq4030hJdSLTfLVlUpTyjX92Ljo/WKzT34OVNDOQSBdYYAY+UBEoIcUk7Rm1JFD8SrT50rvN8MCL7WCimtmemihaZ/uJv8Apv8AumM6lS5ZRyzUcXLi3Sb1a3qmlBTi9sXzWi0XLOw2uQo68T6AYpKzEEq5wf0nCXr9clugXKU3gmtdsRm9zmzbsmURl0Y4avGmhk/RNzLmqrGkRFg0es0BUb6Ys1EoaFFS9evUpXBsK7OeJW2sUsEiWwNWmO/QuwdZNesxHyNIGWqGULkxQ958CWvE0ABGFFNITMNK1fsSWsNmMuyWWWcGXhKjZVmLH94RETrXesySznLmTCB9lwp/eDdsTeuE6pkKcSspWbLFnC19KntiK0tYLloeUBTjkL0McPXAwmnexotikcHLSWMbiKvYPfFI1zsJSdwmyZj0FQB6qRf5vlGm807Yz+3u1stDCt1VV7tdiywWPWaekbo1LsWyr6Uhzq3ZHtNpa1PhdmXyQMC9bwUcwwiBkpLMwiYxVOPiBU1AN0Yc9ImdTbeZbupHFaW7HmMtGcEdQYfrc0QtjnBCxaXfqjBQcArGlHyxpjhGfQg6pFx1N0U8pmmNS68tbhG0MQ2WzCkPtdgDZG5mSnep7YY6kWybME0THLBBKCA0F0ccYUHMvZC2vM2lnC+c46rtT7BG12OhV09imWW13Zc2WcnCEfpI4I6qF/REjP4uj5QBNJs6Yzjfc4g6sB1iGVssdJUmYBQOrA/pK7CvWBEnbbMx0fZSASFacTzXpjU9UZOdJ7/oMnsEoSpLGaFZ1ZmBVmymMopdH2YndZ5wWwWWWGqCqGoBFQiZ0OP1hFbnz76SkCYorLXMtVywwphS8Yf6yzGpZ5ZBHB2eWCDneZQT6hANOoukcaBJkWyTXO+gP/dW7/H6I1URkGkbLwM0qpJuhCDzlQ3orTqjWbJaOElpMpS+itTdeUGnphot4fa0UHWfR7va5rXGuUJLUw4suufSAIg7JZGmB7oJZQCABXNgD6407WOddss4kHyCO3AeuKh4P5tLSwp5Uth0UKt7ITW5meNa0vcZaw2UpLs14EMZNCDmLrGnoMIaWsqpLszL9eTU9N81p1kxY/CLIYmW4BugMCesGKva7aZqSJYTGWpQUNS9XLDCmGdNsBiaqTRq2r5/ssimH0Mr9wRQPCBMY2sgnBUQLzChPrJjQNDyTLkSpbDjLLRTlmFAIijeEKzMLQJlDdZAK7KjCG+xfKn0yK0pYJCPdE66LiEgozYsgY4gU2xO+Ee0A/J1BqODL9IalDTqirWy0cMVolCERTQlixUUvZYVoMIkNaZzNMlqwIMuzyUIOYYIC3pPohEL2dIS0NP+TWuUxOCut47LrC63oYxstYxLSVlEtgoJIMtGxzF9Q1Oqsavq1pAzrNKmMMStDzlCUJ66V64EVwOrRLVgRxe5j6PfAjR0kZM0LZz5U5T0lD7Y5GgLNykv9j3w88VbNyad0RydVrNyad0RHUufwap8Rs+hrOc5qHpuH2xx8xWblJf7Hvh0dVrNyad0QXitZuTXuiDUufwFPiJNoaznEzEPdgNoWQTUupP6pMdnVWzcmvdEDxVs3Jp3RBqXP4CnxD+bJXKj0e+E10NIGTr2LHZ1Us3Jp3RA8VLNyad0Qalz+Ap8TldDSBky9iwBoaR5ydiwZ1Us3JJ3RA8VbNySd0Qalz+Ap8TuXouSMnA6Log20XKObg9N0wkdUrNySd2C8UbNyad38YWpc/gKfEW+apJABZaDIcWggzo6VSl9abuLTshAao2Xk07v4wXilZuTXuwWufwFPiLS9GSBiGQHeLtY6bRskmpZCd5ukw38UrNyad0QPFOz8mndgtc/gKfEcNo6QTiyE84WFhZpfKD0e+GQ1Us/Jp3RA8U7Nyad38Ydx5/AU+I9axy2FC6kbjQj1wUvR0pfJKg8wAMMvFKzcmnd/GB4o2bk07v4wWufwFPiSD2JWFCQRuIBhOVoeUpqoQHeFFYZHVCzcmnd/GC8TrNyad38YLjz+Bb8SXFl+16Pxjl7CGFGoRzrX1xFeJ9m5JO7+MEdT7NySdh98Frn8BvxJOVopFxVVB5lEG2jUJqVUneVBPpiK8TrNySdh98H4n2fk19Pvh7c/gN+JKNotCalVJ/RFf6whaVZKCgwAyAGHZEJ4nWfk1/a98DxPs/mL2t74NufwLfiT3yc7/RBRB+JkjzB2t74EFrn8Bb4lY/4h2jfJ7D8Ud+P1p82V3T8UZ2sikPpcgxKcFEpGVl38fLR5srun4oHj3aPNld0/FFNEgx0JJjGxsuXj1aPNl90/FAGvVo82X3T8UU7gTB8CYWwFyGvM/zZfdb4o58erR5krsb4op/BGCaSYNvYC5pr3O2iUvSGp+9AbXqcNkk9Ab4ooNolGERIiqxpqzDnTo0Px7n+ZK7G+KDGvU/zJfdb4opEqWYUEsxNpGy7ePU7k5fY3xwY16m8nL7G+KKVcO+AFMFIC6+PU3k5fY3xR149TeTl9jfFFKunfBXTvhbDLt48zOTT9r4oMa9zOST0++KTdO+Ep17fAkhNmhStdJhH92naffHB16fkk7TGZ3DvPbC9lVhXExR4qVmFOzRhr03JL2mD8eW5Je0+6KEL3PHXG3mJ7Gy+ePJ5Je8fdAOvZ5Fe+fhih4745N6HSAv3j5/yR3z8MDx9/wCQPvD8EUCrQRZoewbmgeP45D/c/kgDwgD83/3f5IzxmaEmnMIKQrNJ8fRyB+9/kgRmPyuZv9Ag41oRmxW1yqLFUtM4h24zDHziPbF10kuA64oE56sTvJPaY65rcjB7C4tZ89u+ffBi2N5799vfDOCIjGk3bJJbW2ZeZ3298di2HlJn3h98MZg4o6oQhUgtkuLYeVmd8++D+WNyszv/AIxD1gwYNKDUXDQVXViWZsQOMa0wrhEhMk0BPNDHUyX9Cx3zD6FURN2pOKeiKqP0kpPcpzW6YDhNfPmp6oMaRm7Zz/s+6INnqekw5tpy64jpRW2SvzjM5Z+xfhjr5xm8s3dX4Yr16BWDSg1MsXzjN5Y9xfdB/OM3lj3F90V29/VTAv8AT2mFoQamWL5ym8t/tr7o5OkJpzm/sD3RAX+ntg1c1zPbDUEGpl/4GI/StpeUVuFRWtaiuVMu2J/g4rGuopwX6/8ABFpQ+klGW4l88z98vu/zR189z/8Al9n80VvhjvPbA4Y7z2xDQi2osnz5O3S+z+aB8+zd0vs/mit8Od5gcMd5g0INRZPn2b5sv0++COnZnmp6ffFfeflSo3wSOTmYNCDUTp1gfzU9MJtptz9VPTERHaLUHmg0oLZYOHMHDbhRAh6UIsOmXorHchPYCYzsZRouuVlaUk1GxIUDD7YAw70Z4y09nPFZvcnDscwIIR3JFSBzj1xmzY5eSWwAr/XPHAsMzzfSN1d+6HqyCTtGVMM8d8PGv4tfFK4CgNKkDEXeb+q44lKmBCGyuM19I2dcBbK5yUnoiwvIAJV2ZWqaC5gbrGpyx/GG0uSQxQn6xrWgIoSM+qvWIFMdFj1OlUsy12u/oYr7Ik9ILSWx5odaq6Fmmyy2VKgmYwxGIaY5rnzx3rFo6ZLkOzqQKEVqNx5+aOtVoOf8xjknNeqHekMx0RI2XRcuprwmAqMQBUCoBw6DTbjth5Y9XzaWNK1UUFLoFSCQCWOFaYRzLdWX9SrwYiYn6BZZDTyGVAxVS2AZlDMQvFxNEbCta9dGOjno9eY+yFY2IcE1K3TTfQ0jiJzhagUAwrhUgHi/jEAIE7EKVgic+iJzQVoCySGBI4VmoGpU8EAMLpyNMYPWKevBhAjI1CTVq3scSF+riIercRflXCKpr8vFkn7T+pYtyuKVqKDM1y2RW9ebPfWSAVHHbE1p5PMDHTLykY+YokCsT1n1SnuFKtJKsKhgzFOshMOv1wwt+h5ko0ZpZ/Qa8O0DOObUjplCUe6GFYMQZQwtZVBJrTI580FmRGO5WcOQqHZvyGeBPujsywMqHHMA828CCwG2zrh5ISl/oqOrGEeC4p/SG3pGzKHUquI3y/TdEIBPhTvMCOMIEaoDQvC9xaHHj3Mt6lj/AAiMwnmtDzD1V9sah4ak4tmpvmk9ChaH9oxmFp/DspX1QSe4orYSEONHj6RcK/8A5WsNt0OrD5fUfd7YQ2S8+04UwqP6yhpOtWZGFd1ac46OaEGfjZVqSPV7xCU6dspzjdSJOG46VEgtuZs2OZJIwNCcl3CH9mtYNCwLmpOPFFWwJquJwpjEVJRSC14KFoTgcfJByB2mA7jigOhvAU/vAcyuYTDEQaGHY9AaoLSw2b/RSueZFTnDbXyWTYpgGdRTCuJwyGeeUSeg5BSzSEIAKyZa4ZYIBEZr8hNgnhTQ0WhrQjjrlujrflIrzbmXpo4PKaeZspLgRBLIJeYwAIYUO29SpFKqYb2LSsyTVZV28WBqRxlouBDbNv8ARhGyyqUriKCgrXjXaZscsK5HE5ZR3aLHdmMcfJ85V5qc2R7I5HKlRf8ANaOdJ6bnGzcG1xgwet43+D4QYlRQXJhJOVaCgw21yySyDUqaZZEAmowrvxiyTxLu8daMKXseMBQ4kkb7tOk7xHVqSVcUkkEHLznBqaYYYADm68MrIacSFV1DFTUEg4HKtMMf6yiIURI2y0vMIDYlagUHG6K5nrhpOklcCKHHDoJB9IMVRMeaItrSqlLta04wrmt3qz9UPTTjX6M2VRSmGAwplEPY/LqNmMOZ7EKxqa0Jz5oUlZpQbRZ01jYX+MGVkuTBTj0GRIOZG/8ACGukdMGeku9lLuhQdrLLCVwxxAJPT0RcdatTpEuxvaWmPVJQKAm/n5KXm4xqSBQkgVjL1nLd+0CABsIIYlq7wQopz80EoSROKT3RZdC2+4LpmMqCvkqKCvGyOWO4bYk7SZc6hLSnYFgtTcm5mlDjmADlTGKpoZhMcLkDuzrStMaRYzogZOjnFaMMru3AV5+yIuKvc6oZMyjSuv3RFactEtpNFM0UNbrMGTjm8SDSta49Zito1P654tWltEKsl2UkXRW6QcRQGuPXFUWLQqtieRtu2q+BQTSd0PrDNDrNDMqkIGXe5DywEqTlTIc3TEZfHp25R1JYA7Y0TJWzyQyzBlQk16ASB6IXlIVwIOWezKgr1RGFzVssR7RCtmJqhrtp6T74AE70CHnyYQIdgbJrhq41tMo8IssS1YAFCxJZqk5imQ7IqVo8Fbsa/KZfcI/ijWK9Pogwen0R5vXnfc7elD2Mf/4STdloldh98dS/BPaBiJ0rsMa8W5j3a+mkd3ub0Q/xGQXSgY43goteBEySca5tzfZ5oidZdQrRZbO0+YyFVKA3TU8YhBmBtMbzeHN3TFf8IFnWbo61LhUSi4wIxlETAf2Y1HxE9SsTxRox3VPVebbEmiVTilA3GAIDVIwI3qduyH2kfB9aZIV2Q3VoKgocSxpXj1xJ3RNeBubwdomy2ApMkqwOeMt6DnFQ7dka28tWFGVWB2EVBIxGBik88oypdjEcSlGyM02ZkqUDLIF0itaZAYjLdXd15Rllv1hea7yph4rM4SjVHGa8tcguKjfE/rTrWsx58pfIu0BvVqQaAqMgatXbkK1FYztn4F8RRg4Iwwu3cAARkT6AucDySydyDgk9iflar20qHRGmUNBQjACoK54UOY5oQtGr+kATesrsKGoug58+ezpjYNXJst7PLZVuXlBKhmWjHPDDPPnrWHE0njXVaqnDjvxsAcOappWJPxD9UdKwqrswGZw7KAJZAZAyAjiupat7HAitRXnoYVXR9oKlpcpzTAlUYq7KQr5CmanrBi6TZws2kLxFJa2e0T0lk3uCmTgxeWGyNZkiuGRcjaIvmrej2lWWQhLVEpL2IxZheYmozvExqeXSuwo47PP9s0ZNE28EY1xK0NQThdIpidvPWHdoYTUIYBa1ONb94ZkVFaHbX1xpet2os6Y7T7KeOwN5GIGOFChGGzI4YDojLFkzFmFJisHBpRwSVJBoGU55AGtcK05qRnrV2RnBxEE0YykmoAyFaZlbwHoANRDCYXKnoPqiz2C1zpc9H4jXHBVWxvbAhAJNPKPWa5461o+zS9JWMM4RGvEMRLWqla4CpNRdZTXbnQZQ3l09zWNOW1iWu8i9omcBss6v3Lrn0KYwKXLJqd0ej9b0DWC2ylGK2RiCBQHivgDl9TLnEZT4HrPLmWx0mojqZDm64BFRMl0oDtoTFXnUlqS7GVicXRU9DFkdDTJwTz5YeuLsunF81h1iNVbVexn/ACsnqQD1CEn1SsZ/yydVR6o5ZZoSe6Z3YZzxKlRkWmNNiZZ3l3c7+0GhIIUjI7qjpijMh3R6Omak2E5yB1Mw9sIN4PbAfyJH67e+NQzwiqRPP1Mr1SPOt2FzLFwEA16fZG+t4OLCfqP3zCFo8GdhoaLMwBwDj0VEU/EQIdGRh20849kKSzgv6XujUrJ4PbLMl3hwqMKq6FlqjjylNE2eqkIT/BvKyExx1qSOogV7Yr1EY0MoVRAi6/8ADdfzl/uT8UHC1oeg0nb2QrLgQI846x5LyEdnKBAjLGAZdsVjXr+5PR/GsCBDxeYUuxQfB1/jf+x8MbFZ8x0eyDgRuXcxi8h5v0p/iJn+pM/8rxxb/KldA/fMCBHVE5n3Nu1M/wAIvSP3RE223o98CBHDLzHZHyozDS39+3+lav8A5dqjW7P5I6B6oECN5fQxj7sX3Rj3hJ/xh/0Jf/neBAgw+Ziz+UoreWP+9+5G7aif4KT+gvqgQIpn7Inh7g1o/wAPpD/oJn7s6Ml8E3/qEn9b9xoECNY/7cjUvOjemjhoECOVnQBM4WTKDgQACOWgQIBMqerHl23/AKhvW0OrR5UCBHcuxzvudwIECAD/2Q==")',
							}}
						>
							<header className="BusStationCard__Header-sc-759o96-1 iSiVXT">Bến xe Ngã Tư Ga</header>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}