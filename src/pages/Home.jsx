import React, { useState } from "react";
import "../assets/css/home.css";

import HomeCategoryNav from "../components/home/HomeCategoryNav";
import HomeHero from "../components/home/HomeHero";
import HomeSection from "../components/home/HomeSection";
import HomeFooter from "../components/home/HomeFooter";
import HomeDetailModal from "../components/home/HomeDetailModal";

import { homeData } from "../services/mockData";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [variant, setVariant] = useState(null);

  const handleOpen = (item, v) => {
    setSelected(item);
    setVariant(v);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelected(null);
    setVariant(null);
  };

  return (
    <div className="home">
      <HomeCategoryNav />

      <main className="home__main">
        <HomeHero />

        <div className="home__content">
          <HomeSection
            title="Chuyên khoa"
            subtitle="Tìm bác sĩ theo chuyên khoa"
            items={homeData.specialties}
            variant="specialty"
            onOpen={handleOpen}
          />
          <HomeSection
            title="Cơ sở y tế"
            subtitle="Chọn bệnh viện/phòng khám uy tín"
            items={homeData.facilities}
            variant="facility"
            onOpen={handleOpen}
          />
          <HomeSection
            title="Bác sĩ nổi bật"
            subtitle="Đặt lịch khám với bác sĩ giỏi"
            items={homeData.doctors}
            variant="doctor"
            onOpen={handleOpen}
          />
          <HomeSection
            title="Cẩm nang"
            subtitle="Thông tin sức khỏe hữu ích"
            items={homeData.handbooks}
            variant="handbook"
            onOpen={handleOpen}
          />
        </div>
      </main>

      <HomeFooter />

      <HomeDetailModal
        open={open}
        onClose={handleClose}
        item={selected}
        variant={variant}
      />
    </div>
  );
}
