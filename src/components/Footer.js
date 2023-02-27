import React from "react";
import Menu from "./ui/Menu";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
function Footer() {
  const menus = [
    {
      title: "Jotform",
      items: [
        {
          title: "Kaydol",
          link: "#",
        },
        {
          title: "Form Oluşturun",
          link: "#",
        },
        {
          title: "Formlarım",
          link: "#",
        },
        {
          title: "Fiyatlandırma",
          link: "#",
        },
        {
          title: "Jotform Kurumsal",
          link: "#",
        },
      ],
    },
    {
      title: "Galeri",
      items: [
        {
          title: "Şablonlar",
          link: "#",
        },
        {
          title: "Form Temaları",
          link: "#",
        },
        {
          title: "Form Widget'ları",
          link: "#",
        },
        {
          title: "Entegrasyonlar",
          link: "#",
        },
      ],
    },
    {
      title: "Destek",
      items: [
        {
          title: "Bize Ulaşın",
          link: "#",
        },
        {
          title: "Kullanıcı Kılavuzu",
          link: "#",
        },
        {
          title: "Yardım",
          link: "#",
        },
        {
          title: "Web Seminerleri",
          link: "#",
        },
        {
          title: "Kötüye Kullanımı Bildir",
          link: "#",
        },
        {
          title: "Telif Hakkı Konusu Bildir",
          link: "#",
        },
      ],
    },
    {
      title: "Şirket",
      items: [
        {
          title: "Hakkımızda",
          link: "#",
        },
        {
          title: "Kariyer",
          link: "#",
        },
        {
          title: "Medya Kiti",
          link: "#",
        },
        {
          title: "Haberlerde Jotform",
          link: "#",
        },
        {
          title: "Bültenler",
          link: "#",
        },
        {
          title: "Blog",
          link: "#",
        },
      ],
    },
  ];

  return (
    <div className="bg-white mt-5 ">
      <div className="container mx-auto ">
        <div className="grid grid-cols-5 pt-10">
          {menus.map((menu, index) => (
            <Menu key={index} {...menu} />
          ))}
          <section>
            <nav className="grid gap-y-4">
              <h6 className="text-lg text-purple-700">Mobil Uygulamalar</h6>
              <a href="">
                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
              </a>
              <a href="">
                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
              </a>
            </nav>
          </section>
        </div>
        <div className="flex justify-between items-center border-t border-gray-400 mt-6 py-6">
          <div className="text-xs text-gray-700 flex gap-x-8">
            © 2023 Jotform Inc.
          </div>
          <nav className="flex gap-x-3">
            <a
              href=""
              className="w-8 h-8 rounded-lg text-gray-700 hover:bg-purple-700 hover:bg-opacity-80 flex items-center justify-center"
            >
              <FaFacebook />
            </a>
            <a
              href=""
              className="w-8 h-8 rounded-lg text-gray-700 hover:bg-purple-700 hover:bg-opacity-80 flex items-center justify-center"
            >
              <FaInstagram />
            </a>
            <a
              href=""
              className="w-8 h-8 rounded-lg text-gray-700 hover:bg-purple-700 hover:bg-opacity-80 flex items-center justify-center"
            >
              <FaTwitter />
            </a>
            <a
              href=""
              className="w-8 h-8 rounded-lg text-gray-700 hover:bg-purple-700 hover:bg-opacity-80 flex items-center justify-center"
            >
              <FaLinkedin />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;
