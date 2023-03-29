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
          link: "https://www.jotform.com/signup/",
        },
        {
          title: "Form Oluşturun",
          link: "https://www.jotform.com/build",
        },
        {
          title: "Formlarım",
          link: "https://www.jotform.com/myforms/",
        },
        {
          title: "Fiyatlandırma",
          link: "https://www.jotform.com/pricing/",
        },
        {
          title: "Jotform Kurumsal",
          link: "https://www.jotform.com/enterprise/?utm_medium=referral&utm_source=jotform.com&utm_content=JotForm_Enterprise&utm_campaign=enterprise_common_footer",
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
          link: "https://www.jotform.com/theme-store/",
        },
        {
          title: "Form Widget'ları",
          link: "https://www.jotform.com/theme-store/",
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
          link: "https://www.jotform.com/contact/",
        },
        {
          title: "Kullanıcı Kılavuzu",
          link: "https://www.jotform.com/help/",
        },
        {
          title: "Yardım",
          link: "#",
        },
        {
          title: "Web Seminerleri",
          link: "https://www.jotform.com/webinars/",
        },
        {
          title: "Kötüye Kullanımı Bildir",
          link: "https://www.jotform.com/report-abuse/",
        },
        {
          title: "Telif Hakkı Konusu Bildir",
          link: "https://www.jotform.com/copyright/",
        },
      ],
    },
    {
      title: "Şirket",
      items: [
        {
          title: "Hakkımızda",
          link: "https://www.jotform.com/about/",
        },
        {
          title: "Kariyer",
          link: "https://www.jotform.com/tr/about/istanbul/",
        },
        {
          title: "Medya Kiti",
          link: "https://www.jotform.com/resources/",
        },
        {
          title: "Haberlerde Jotform",
          link: "https://www.jotform.com/resources/in-the-news/",
        },
        {
          title: "Bültenler",
          link: "https://www.jotform.com/newsletters/",
        },
        {
          title: "Blog",
          link: "https://www.jotform.com/blog/",
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
              <a href="https://play.google.com/store/apps/details?id=com.jotform.v2&referrer=adjust_reftag%3DcJ6rkpUgK45J5%26utm_source%3DJotform.com%2BWebsite%26utm_campaign%3Dfooter%26utm_content%3D_%26utm_term%3Dcta_android%26utm_medium%3Dfooter">
                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
              </a>
              <a href="https://apps.apple.com/app/id1391524277?mt=8&pt=119101370&ct=Jotform.com+Website">
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
              href="https://www.facebook.com/Jotform"
              className="w-8 h-8 rounded-lg text-gray-700 hover:bg-purple-700 hover:bg-opacity-10 flex items-center justify-center"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/jotform_official/"
              className="w-8 h-8 rounded-lg text-gray-700 hover:bg-purple-700 hover:bg-opacity-10 flex items-center justify-center"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/jotform"
              className="w-8 h-8 rounded-lg text-gray-700 hover:bg-purple-700 hover:bg-opacity-10 flex items-center justify-center"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/jotform/"
              className="w-8 h-8 rounded-lg text-gray-700 hover:bg-purple-700 hover:bg-opacity-10 flex items-center justify-center"
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
