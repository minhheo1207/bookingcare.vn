import React from "react";

export default function HomeFooter() {
  return (
    <footer className="hc-footer">
      <div className="hc-container hc-footer__inner">
        <div>
          <div className="hc-footer__brand">BOOKINGCARE</div>
          <div className="hc-footer__muted">
            Nền tảng đặt lịch khám và chăm sóc sức khỏe
          </div>
        </div>

        <div className="hc-footer__cols">
          <div className="hc-footer__col">
            <div className="hc-footer__colTitle">Dịch vụ</div>
            <a href="#specialties">Chuyên khoa</a>
            <a href="#facilities">Cơ sở y tế</a>
            <a href="#doctors">Bác sĩ</a>
            <a href="#handbooks">Cẩm nang</a>
          </div>

          <div className="hc-footer__col">
            <div className="hc-footer__colTitle">Hỗ trợ</div>
            <a href="#!">Liên hệ</a>
            <a href="#!">Điều khoản</a>
            <a href="#!">Chính sách</a>
          </div>
        </div>
      </div>

      <div className="hc-footer__bottom">
        <div className="hc-container">
          © {new Date().getFullYear()} BookingCare
        </div>
      </div>
    </footer>
  );
}
