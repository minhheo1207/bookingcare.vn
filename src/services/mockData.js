// src/services/mockData.js

// --- 1. IMPORT ẢNH TỪ ASSETS ---

// Import ảnh Chuyên khoa
import imgCoXuongKhop from "../assets/images/ChuyenKhoa/coxuongkhop.png";
import imgSanPhuKhoa from "../assets/images/ChuyenKhoa/sanphukhoa.png";
import imgTaiMuiHong from "../assets/images/ChuyenKhoa/taimuihong.png";
import imgTieuHoa from "../assets/images/ChuyenKhoa/tieuhoa.png";
import imgTimMach from "../assets/images/ChuyenKhoa/timmach.png";

// Import ảnh Cơ sở vật chất
import imgBenhVien from "../assets/images/CoSoVatChat/benhvien.png";
import imgChuanDoan from "../assets/images/CoSoVatChat/chuandoanhinhanh.png";
import imgPhongKham from "../assets/images/CoSoVatChat/chuyenkhoa.png";
import imgNhaKhoa from "../assets/images/CoSoVatChat/nhakhoa.png";
import imgXetNghiem from "../assets/images/CoSoVatChat/trungtamxetnghiem.png";

// Import ảnh Bác sĩ
import imgDrTimMach from "../assets/images/BacSiNoiBat/bstimmach(Trần Ngọc vũ).png";
import imgDrSanPhuKhoa from "../assets/images/BacSiNoiBat/bsphusan(Đỗ Thị Ngọc Lan).png";
import imgDrTaiMuiHong from "../assets/images/BacSiNoiBat/bstaimuihong(Trần Ngọc Sĩ).png";
import imgDrTieuHoa from "../assets/images/BacSiNoiBat/bstieuhoa(Bùi Ngọc Anh).png";
import imgDrCoXuongKhop from "../assets/images/BacSiNoiBat/bscoxuongkhop(Lê Đình Nguyên).png";

// Import ảnh Cẩm nang (CẬP NHẬT MỚI)
import imgCamNangDaDay from "../assets/images/CamNang/viem-loet-da-day-trieu-chung-1_6765e.png"; // Tên file dài
import imgCamNangHuyetAp from "../assets/images/CamNang/tanghuyetap.png";
import imgCamNangViemXoang from "../assets/images/CamNang/viemxoang.png";
import imgCamNangKhamThai from "../assets/images/CamNang/khamthaidinhky.png";
import imgCamNangMun from "../assets/images/CamNang/nguyen-nhan-gay-mun.png";

// Hàm helper cũ (giữ lại để phòng hờ)
const img = (q) =>
  `https://source.unsplash.com/1200x800/?${encodeURIComponent(q)}`;

export const homeData = {
  // ... (Phần specialties, facilities, doctors giữ nguyên code trước đó)
  specialties: [
    {
      id: "sp-ortho",
      title: "Cơ xương khớp",
      meta: "Đau vai gáy, thoái hóa, đau khớp...",
      image: imgCoXuongKhop,
      desc: "Chẩn đoán và điều trị các bệnh lý cơ xương khớp thường gặp. Tư vấn phác đồ phù hợp, kết hợp phục hồi chức năng để giảm đau và tăng vận động.",
      symptoms: [
        "Đau cổ vai gáy",
        "Đau khớp gối/khớp vai",
        "Tê bì tay chân",
        "Thoái hóa",
      ],
      services: [
        "Khám chuyên khoa",
        "Tư vấn phục hồi",
        "Hướng dẫn bài tập",
        "Theo dõi định kỳ",
      ],
      highlights: [
        "Tư vấn rõ ràng",
        "Theo dõi tiến triển",
        "Kế hoạch phục hồi cá nhân",
      ],
      priceFrom: "250.000đ",
      openHours: "Thứ 2–Thứ 7 (07:30–17:00)",
      location: "TP. Hồ Chí Minh",
    },
    {
      id: "sp-cardio",
      title: "Tim mạch",
      meta: "Tăng huyết áp, mạch vành, rối loạn nhịp...",
      image: imgTimMach,
      desc: "Tầm soát nguy cơ tim mạch, theo dõi huyết áp và tư vấn điều trị các bệnh lý tim mạch. Hướng dẫn lối sống và kế hoạch kiểm tra định kỳ.",
      symptoms: [
        "Tức ngực",
        "Khó thở",
        "Hồi hộp đánh trống ngực",
        "Huyết áp cao",
      ],
      services: [
        "Khám tim mạch",
        "Tư vấn thuốc",
        "Tầm soát nguy cơ",
        "Theo dõi định kỳ",
      ],
      highlights: [
        "Đánh giá nguy cơ",
        "Tư vấn cá nhân hóa",
        "Theo dõi dài hạn",
      ],
      priceFrom: "300.000đ",
      openHours: "Thứ 2–Chủ nhật (08:00–20:00)",
      location: "Hà Nội",
    },
    {
      id: "sp-digest",
      title: "Tiêu hóa",
      meta: "Dạ dày, đại tràng, gan mật...",
      image: imgTieuHoa,
      desc: "Tư vấn và điều trị các vấn đề tiêu hóa. Định hướng xét nghiệm phù hợp và tư vấn chế độ ăn, theo dõi đáp ứng điều trị.",
      symptoms: ["Đau thượng vị", "Ợ nóng", "Rối loạn tiêu hóa", "Đầy bụng"],
      services: [
        "Khám tiêu hóa",
        "Tư vấn chế độ ăn",
        "Theo dõi điều trị",
        "Hướng dẫn phòng ngừa",
      ],
      highlights: [
        "Tư vấn dễ hiểu",
        "Định hướng kiểm tra",
        "Theo dõi hiệu quả",
      ],
      priceFrom: "250.000đ",
      openHours: "Thứ 2–Thứ 7 (07:30–17:00)",
      location: "Đà Nẵng",
    },
    {
      id: "sp-ent",
      title: "Tai mũi họng",
      meta: "Viêm xoang, viêm họng, viêm tai...",
      image: imgTaiMuiHong,
      desc: "Khám và điều trị các bệnh lý tai mũi họng thường gặp. Tư vấn chăm sóc tại nhà và phòng ngừa tái phát.",
      symptoms: ["Nghẹt mũi", "Đau họng", "Ù tai", "Chảy mũi kéo dài"],
      services: [
        "Khám TMH",
        "Tư vấn điều trị",
        "Hướng dẫn vệ sinh mũi",
        "Theo dõi tái khám",
      ],
      highlights: ["Khám nhanh", "Chẩn đoán rõ", "Tư vấn phòng ngừa"],
      priceFrom: "220.000đ",
      openHours: "Thứ 2–Thứ 7 (08:00–18:00)",
      location: "TP. Hồ Chí Minh",
    },
    {
      id: "sp-obgyn",
      title: "Sản phụ khoa",
      meta: "Khám thai, phụ khoa, tư vấn sinh sản...",
      image: imgSanPhuKhoa,
      desc: "Khám thai định kỳ, tư vấn phụ khoa và sức khỏe sinh sản. Hướng dẫn chăm sóc trước và sau sinh.",
      symptoms: [
        "Khám thai định kỳ",
        "Rối loạn kinh nguyệt",
        "Tư vấn sinh sản",
      ],
      services: [
        "Khám thai",
        "Tư vấn phụ khoa",
        "Theo dõi thai kỳ",
        "Tư vấn dinh dưỡng",
      ],
      highlights: ["Tư vấn tận tâm", "Theo dõi sát", "Hướng dẫn chi tiết"],
      priceFrom: "280.000đ",
      openHours: "Thứ 2–Chủ nhật (08:00–19:00)",
      location: "Hà Nội",
    },
  ],

  facilities: [
    {
      id: "fa-01",
      title: "Bệnh viện đa khoa",
      meta: "Khám tổng quát & chuyên khoa",
      image: imgBenhVien,
      desc: "Cơ sở khám chữa bệnh đa chuyên khoa, quy trình tiếp nhận rõ ràng, hỗ trợ đặt lịch và tư vấn trước khám.",
      address: "123 Nguyễn Trãi, Quận 1, TP.HCM",
      phone: "1900 1234",
      openHours: "Thứ 2–Chủ nhật (07:00–20:00)",
      services: [
        "Khám tổng quát",
        "Khám chuyên khoa",
        "Xét nghiệm",
        "Chẩn đoán hình ảnh",
      ],
      highlights: ["Nhiều chuyên khoa", "Tiếp nhận nhanh", "Hỗ trợ đặt lịch"],
      rating: 4.6,
    },
    {
      id: "fa-02",
      title: "Phòng khám chuyên khoa",
      meta: "Tư vấn chuyên sâu theo từng lĩnh vực",
      image: imgPhongKham,
      desc: "Phòng khám chuyên khoa với lịch hẹn linh hoạt, phù hợp khám nhanh và theo dõi điều trị định kỳ.",
      address: "45 Lê Duẩn, Hải Châu, Đà Nẵng",
      phone: "1900 5678",
      openHours: "Thứ 2–Thứ 7 (08:00–18:00)",
      services: [
        "Khám chuyên khoa",
        "Tái khám",
        "Tư vấn điều trị",
        "Theo dõi định kỳ",
      ],
      highlights: ["Đặt lịch nhanh", "Tư vấn chuyên sâu", "Dịch vụ gọn"],
      rating: 4.4,
    },
    {
      id: "fa-03",
      title: "Trung tâm xét nghiệm",
      meta: "Xét nghiệm cơ bản đến chuyên sâu",
      image: imgXetNghiem,
      desc: "Dịch vụ xét nghiệm hỗ trợ tầm soát và theo dõi sức khỏe. Trả kết quả nhanh tùy loại xét nghiệm.",
      address: "88 Cầu Giấy, Hà Nội",
      phone: "1900 2468",
      openHours: "Thứ 2–Chủ nhật (07:00–19:00)",
      services: [
        "Xét nghiệm máu",
        "Xét nghiệm đường huyết",
        "Tầm soát",
        "Gói định kỳ",
      ],
      highlights: ["Quy trình nhanh", "Hỗ trợ tư vấn", "Kết quả rõ ràng"],
      rating: 4.5,
    },
    {
      id: "fa-04",
      title: "Chẩn đoán hình ảnh",
      meta: "Siêu âm, X-quang, MRI/CT (tùy nơi)",
      image: imgChuanDoan,
      desc: "Hỗ trợ chẩn đoán hình ảnh phục vụ khám chuyên khoa và theo dõi điều trị.",
      address: "12 Trần Hưng Đạo, Hà Nội",
      phone: "1900 1111",
      openHours: "Thứ 2–Thứ 7 (07:30–17:30)",
      services: ["Siêu âm", "X-quang", "CT", "MRI"],
      highlights: ["Chẩn đoán hỗ trợ tốt", "Quy trình rõ", "Hẹn linh hoạt"],
      rating: 4.3,
    },
    {
      id: "fa-05",
      title: "Nha khoa",
      meta: "Khám răng miệng & điều trị",
      image: imgNhaKhoa,
      desc: "Chăm sóc răng miệng và tư vấn điều trị theo nhu cầu. Hỗ trợ đặt lịch theo khung giờ.",
      address: "220 Võ Văn Tần, TP.HCM",
      phone: "1900 9999",
      openHours: "Thứ 2–Chủ nhật (08:00–20:00)",
      services: ["Khám tổng quát", "Cạo vôi", "Trám răng", "Tư vấn chỉnh nha"],
      highlights: ["Lịch linh hoạt", "Tư vấn rõ", "Chăm sóc sau điều trị"],
      rating: 4.7,
    },
  ],

  doctors: [
    {
      id: "dr-01",
      title: "BS. Trần Ngọc Vũ",
      meta: "Tim mạch · 10+ năm kinh nghiệm",
      image: imgDrTimMach,
      desc: "Tư vấn tầm soát tim mạch, tăng huyết áp và theo dõi điều trị lâu dài. Ưu tiên giải thích dễ hiểu và theo dõi sau khám.",
      specialty: "Tim mạch",
      experience: "10+ năm",
      workplace: "Bệnh viện đa khoa",
      schedule: "Thứ 2–Thứ 6 (09:00–17:00)",
      priceFrom: "350.000đ",
      highlights: ["Tư vấn kỹ", "Theo dõi sau khám", "Kế hoạch điều trị rõ"],
    },
    {
      id: "dr-02",
      title: "BS. Đỗ Thị Ngọc Lan",
      meta: "Sản phụ khoa · 8+ năm kinh nghiệm",
      image: imgDrSanPhuKhoa,
      desc: "Khám thai, tư vấn phụ khoa và chăm sóc sức khỏe sinh sản. Hướng dẫn lịch khám và các mốc quan trọng.",
      specialty: "Sản phụ khoa",
      experience: "8+ năm",
      workplace: "Phòng khám chuyên khoa",
      schedule: "Thứ 2–Thứ 7 (08:00–18:00)",
      priceFrom: "320.000đ",
      highlights: ["Tư vấn tận tâm", "Theo dõi thai kỳ", "Hướng dẫn chi tiết"],
    },
    {
      id: "dr-03",
      title: "BS. Trần Ngọc Sĩ",
      meta: "Tai mũi họng · 7+ năm kinh nghiệm",
      image: imgDrTaiMuiHong,
      desc: "Khám và điều trị viêm xoang, viêm họng và các bệnh lý TMH thường gặp. Tư vấn phòng ngừa tái phát.",
      specialty: "Tai mũi họng",
      experience: "7+ năm",
      workplace: "Bệnh viện đa khoa",
      schedule: "Thứ 3–Chủ nhật (09:00–19:00)",
      priceFrom: "280.000đ",
      highlights: ["Chẩn đoán rõ", "Tư vấn phòng ngừa", "Theo dõi tái khám"],
    },
    {
      id: "dr-04",
      title: "BS. Bùi Ngọc Anh",
      meta: "Tiêu hóa · 9+ năm kinh nghiệm",
      image: imgDrTieuHoa,
      desc: "Tư vấn dạ dày – đại tràng, rối loạn tiêu hóa. Định hướng xét nghiệm phù hợp và theo dõi điều trị.",
      specialty: "Tiêu hóa",
      experience: "9+ năm",
      workplace: "Trung tâm xét nghiệm",
      schedule: "Thứ 2–Thứ 6 (08:30–16:30)",
      priceFrom: "300.000đ",
      highlights: ["Tư vấn chế độ ăn", "Theo dõi tiến triển", "Hướng điều trị"],
    },
    {
      id: "dr-05",
      title: "BS. Lê Đình Nguyên",
      meta: "Cơ xương khớp · 6+ năm kinh nghiệm",
      image: imgDrCoXuongKhop,
      desc: "Thăm khám đau vai gáy, thoái hóa và tư vấn phục hồi chức năng. Ưu tiên phác đồ gọn – dễ làm.",
      specialty: "Cơ xương khớp",
      experience: "6+ năm",
      workplace: "Phòng khám chuyên khoa",
      schedule: "Thứ 2–Thứ 7 (09:00–18:00)",
      priceFrom: "260.000đ",
      highlights: ["Phác đồ rõ", "Bài tập phục hồi", "Theo dõi định kỳ"],
    },
  ],

  // --- 2. CẬP NHẬT PHẦN HANDBOOKS ---
  handbooks: [
    {
      id: "hb-01",
      title: "Dấu hiệu viêm dạ dày thường gặp",
      meta: "Tiêu hóa",
      image: imgCamNangDaDay, // <--- Cập nhật ảnh
      excerpt:
        "Nhận biết sớm các dấu hiệu: đau âm ỉ vùng thượng vị, ợ hơi, buồn nôn. Khi nào nên đi khám và cách chăm sóc cơ bản.",
      readTime: "5 phút đọc",
      sections: [
        {
          title: "Dấu hiệu thường gặp",
          bullets: [
            "Đau vùng thượng vị",
            "Ợ nóng/ợ chua",
            "Buồn nôn",
            "Chán ăn",
          ],
        },
        {
          title: "Khi nào cần đi khám",
          bullets: [
            "Đau kéo dài",
            "Sút cân",
            "Nôn ra máu/đi ngoài phân đen",
            "Sốt hoặc mệt nhiều",
          ],
        },
        {
          title: "Cách phòng ngừa",
          bullets: ["Ăn đúng bữa", "Hạn chế đồ cay", "Giảm rượu bia", "Ngủ đủ"],
        },
      ],
    },
    {
      id: "hb-02",
      title: "Tăng huyết áp: khi nào cần đi khám?",
      meta: "Tim mạch",
      image: imgCamNangHuyetAp, // <--- Cập nhật ảnh
      excerpt:
        "Cách theo dõi huyết áp tại nhà, các dấu hiệu cảnh báo và thời điểm nên khám chuyên khoa.",
      readTime: "6 phút đọc",
      sections: [
        {
          title: "Dấu hiệu cảnh báo",
          bullets: ["Đau đầu", "Chóng mặt", "Tức ngực", "Khó thở"],
        },
        {
          title: "Theo dõi tại nhà",
          bullets: [
            "Đo cùng khung giờ",
            "Ghi lại kết quả",
            "Không đo khi vừa vận động",
          ],
        },
        {
          title: "Khi cần gặp bác sĩ",
          bullets: [
            "Huyết áp ≥ 140/90 nhiều ngày",
            "Có triệu chứng nặng",
            "Đang dùng thuốc nhưng không ổn",
          ],
        },
      ],
    },
    {
      id: "hb-03",
      title: "Viêm xoang: lưu ý chăm sóc tại nhà",
      meta: "Tai mũi họng",
      image: imgCamNangViemXoang, // <--- Cập nhật ảnh
      excerpt:
        "Gợi ý cách vệ sinh mũi, nhận biết dấu hiệu nặng và các thói quen giúp giảm tái phát.",
      readTime: "4 phút đọc",
      sections: [
        {
          title: "Chăm sóc cơ bản",
          bullets: ["Rửa mũi đúng cách", "Uống đủ nước", "Giữ ấm"],
        },
        {
          title: "Dấu hiệu nặng",
          bullets: ["Đau mặt nhiều", "Sốt", "Mủ đặc kéo dài"],
        },
      ],
    },
    {
      id: "hb-04",
      title: "Khám thai định kỳ: mốc quan trọng",
      meta: "Sản phụ khoa",
      image: imgCamNangKhamThai, // <--- Cập nhật ảnh
      excerpt:
        "Các mốc khám thai cần nhớ, xét nghiệm thường gặp và cách chuẩn bị để buổi khám hiệu quả.",
      readTime: "7 phút đọc",
      sections: [
        {
          title: "Các mốc quan trọng",
          bullets: ["Tuần 8–12", "Tuần 16–20", "Tuần 28–32", "Tuần 36+"],
        },
        {
          title: "Chuẩn bị",
          bullets: [
            "Mang hồ sơ",
            "Ghi câu hỏi",
            "Ăn uống phù hợp trước xét nghiệm",
          ],
        },
      ],
    },
    {
      id: "hb-05",
      title: "Mụn viêm: nguyên nhân và cách xử lý",
      meta: "Da liễu",
      image: imgCamNangMun, // <--- Cập nhật ảnh
      excerpt:
        "Vì sao mụn viêm dễ tái phát, cách chăm sóc đúng và khi nào cần gặp bác sĩ da liễu.",
      readTime: "5 phút đọc",
      sections: [
        {
          title: "Nguyên nhân",
          bullets: ["Nội tiết", "Vệ sinh sai", "Chăm sóc da không phù hợp"],
        },
        {
          title: "Xử lý",
          bullets: ["Không nặn", "Làm sạch dịu", "Gặp bác sĩ nếu nặng"],
        },
      ],
    },
  ],
};
