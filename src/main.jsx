import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const WA = "081314272462";

const services = [
  {
    icon: "📦",
    title: "Pengiriman Barang",
    desc: "Pengiriman barang dengan aman, cepat, dan terpercaya.",
  },
  {
    icon: "🏍️",
    title: "Kurir Motor",
    desc: "Antar jemput barang, dokumen, dan kebutuhan lainnya.",
  },
  {
    icon: "🍔",
    title: "Makanan & Minuman",
    desc: "Pesan makanan dan minuman, kami bantu mengantarkannya.",
  },
  {
    icon: "🚚",
    title: "Jasa Angkut",
    desc: "Membantu mengangkut berbagai barang sesuai kebutuhan.",
  },
  {
    icon: "🏠",
    title: "Jasa Pindahan",
    desc: "Solusi praktis untuk pindahan rumah maupun kos.",
  },
  {
    icon: "🛵",
    title: "Transportasi",
    desc: "Layanan transportasi orang maupun pengiriman barang.",
  },
];

function App() {
  const [nama, setNama] = useState("");
  const [layanan, setLayanan] = useState("Pengiriman Barang");
  const [asal, setAsal] = useState("");
  const [tujuan, setTujuan] = useState("");
  const [catatan, setCatatan] = useState("");

  const kirimPesanan = (e) => {
    e.preventDefault();

    const pesan = `Halo TULUNG YA MAS 👋

Saya ingin memesan layanan.

Nama: ${nama}
Layanan: ${layanan}
Lokasi penjemputan: ${asal}
Tujuan: ${tujuan}
Catatan: ${catatan || "-"}

Mohon informasi tarif dan ketersediaannya. Terima kasih.`;

    window.open(
      `https://wa.me/${WA}?text=${encodeURIComponent(pesan)}`,
      "_blank"
    );
  };

  const pesanWA = () => {
    window.open(
      `https://wa.me/${WA}?text=${encodeURIComponent(
        "Halo TULUNG YA MAS, saya ingin menanyakan layanan."
      )}`,
      "_blank"
    );
  };

  return (
    <div className="app">
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: #05070b;
          color: #f5f7fa;
          font-family: Arial, Helvetica, sans-serif;
        }

        .app {
          background: #05070b;
          min-height: 100vh;
          overflow: hidden;
        }

        .container {
          width: min(1100px, 92%);
          margin: auto;
        }

        header {
          position: sticky;
          top: 0;
          z-index: 99;
          background: rgba(5, 7, 11, 0.96);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid #1b2534;
        }

        .navbar {
          min-height: 76px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 900;
          font-size: 20px;
          letter-spacing: 1px;
        }

        .brandIcon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          background: #087fff;
          color: white;
          font-size: 23px;
          box-shadow: 0 0 20px rgba(0, 119, 255, .3);
        }

        .brand span {
          color: #1684ff;
        }

        .navLinks {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .navLinks a {
          color: #c7d0dd;
          text-decoration: none;
          font-size: 14px;
          transition: .2s;
        }

        .navLinks a:hover {
          color: #1684ff;
        }

        .btn {
          border: none;
          border-radius: 10px;
          padding: 13px 20px;
          background: #087fff;
          color: white;
          text-decoration: none;
          font-weight: bold;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: .2s;
        }

        .btn:hover {
          transform: translateY(-2px);
          background: #2991ff;
          box-shadow: 0 5px 25px rgba(0, 119, 255, .2);
        }

        .btnOutline {
          background: transparent;
          border: 1px solid #087fff;
          color: #1684ff;
        }

        .hero {
          padding: 90px 0 80px;
          position: relative;
        }

        .hero:before {
          content: "";
          position: absolute;
          width: 450px;
          height: 450px;
          background: #087fff;
          filter: blur(180px);
          opacity: .12;
          right: -150px;
          top: 0;
          pointer-events: none;
        }

        .heroContent {
          max-width: 800px;
          position: relative;
        }

        .tag {
          display: inline-block;
          color: #1684ff;
          background: rgba(8, 127, 255, .1);
          border: 1px solid rgba(8, 127, 255, .25);
          border-radius: 50px;
          padding: 8px 14px;
          font-size: 13px;
          margin-bottom: 24px;
        }

        h1 {
          font-size: clamp(38px, 7vw, 76px);
          line-height: 1.08;
          font-weight: 900;
          letter-spacing: -2px;
        }

        h1 .blue {
          color: #1684ff;
        }

        .heroDesc {
          margin-top: 24px;
          max-width: 580px;
          color: #aab6c5;
          font-size: 18px;
          line-height: 1.8;
        }

        .heroButtons {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 32px;
        }

        .stats {
          display: flex;
          flex-wrap: wrap;
          gap: 35px;
          margin-top: 50px;
        }

        .stat strong {
          display: block;
          font-size: 23px;
          color: white;
        }

        .stat small {
          display: block;
          margin-top: 6px;
          color: #8491a3;
        }

        section {
          padding: 75px 0;
        }

        .sectionLabel {
          color: #1684ff;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 12px;
          font-weight: bold;
        }

        .sectionTitle {
          font-size: clamp(28px, 4vw, 43px);
          margin-bottom: 18px;
        }

        .sectionDesc {
          color: #9aa8b8;
          max-width: 600px;
          line-height: 1.8;
        }

        .services {
          background: #0a0e15;
          border-top: 1px solid #172131;
          border-bottom: 1px solid #172131;
        }

        .serviceGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 40px;
        }

        .serviceCard {
          background: #0e1420;
          border: 1px solid #202c3c;
          border-radius: 16px;
          padding: 27px;
          transition: .25s;
        }

        .serviceCard:hover {
          transform: translateY(-5px);
          border-color: #087fff;
          box-shadow: 0 10px 35px rgba(0, 119, 255, .08);
        }

        .serviceIcon {
          width: 56px;
          height: 56px;
          display: grid;
          place-items: center;
          background: #15253a;
          border-radius: 13px;
          font-size: 28px;
          margin-bottom: 20px;
        }

        .serviceCard h3 {
          font-size: 19px;
          margin-bottom: 12px;
        }

        .serviceCard p {
          color: #9aa8b8;
          font-size: 14px;
          line-height: 1.8;
        }

        .orderSection {
          background: #05070b;
        }

        .orderGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 45px;
          align-items: start;
        }

        .orderInfo {
          padding-top: 10px;
        }

        .infoItem {
          display: flex;
          gap: 15px;
          margin-top: 25px;
          align-items: center;
        }

        .infoIcon {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          border-radius: 12px;
          background: #10213a;
          display: grid;
          place-items: center;
          font-size: 22px;
        }

        .infoItem small {
          display: block;
          color: #8795a7;
          margin-top: 5px;
        }

        .orderForm {
          background: #0c121c;
          border: 1px solid #202c3c;
          border-radius: 18px;
          padding: 28px;
        }

        .orderForm h3 {
          font-size: 23px;
          margin-bottom: 22px;
        }

        .field {
          margin-bottom: 17px;
        }

        .field label {
          display: block;
          margin-bottom: 9px;
          font-size: 14px;
          color: #c5d0dd;
        }

        .field input,
        .field select,
        .field textarea {
          width: 100%;
          padding: 14px;
          border: 1px solid #263447;
          border-radius: 9px;
          background: #070b12;
          color: white;
          outline: none;
          font-size: 14px;
        }

        .field input:focus,
        .field select:focus,
        .field textarea:focus {
          border-color: #087fff;
        }

        .field textarea {
          min-height: 90px;
          resize: vertical;
        }

        .submitBtn {
          width: 100%;
          margin-top: 8px;
        }

        .coverage {
          background: #0a0e15;
          border-top: 1px solid #172131;
        }

        .coverageBox {
          border: 1px solid #23344b;
          background: linear-gradient(135deg, #101a29, #080c13);
          padding: 35px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
        }

        .coverageBox h3 {
          font-size: 25px;
          margin-bottom: 12px;
        }

        .coverageBox p {
          color: #9aa8b8;
          line-height: 1.8;
        }

        footer {
          padding: 35px 0;
          border-top: 1px solid #1b2534;
          color: #8491a3;
        }

        .footerFlex {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footerBrand {
          color: white;
          font-weight: bold;
          font-size: 20px;
        }

        .footerBrand span {
          color: #1684ff;
        }

        .waFloat {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 100;
          border-radius: 50px;
          padding: 16px 22px;
          box-shadow: 0 5px 25px rgba(0, 0, 0, .4);
        }

        @media (max-width: 800px) {
          .navLinks {
            display: none;
          }

          .hero {
            padding: 70px 0 55px;
          }

          .serviceGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .orderGrid {
            grid-template-columns: 1fr;
          }

          .coverageBox {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 500px) {
          .serviceGrid {
            grid-template-columns: 1fr;
          }

          .heroDesc {
            font-size: 16px;
          }

          .stats {
            gap: 22px;
          }

          .orderForm {
            padding: 20px;
          }

          .heroButtons .btn {
            width: 100%;
          }

          .waFloat {
            right: 15px;
            bottom: 15px;
          }
        }
      `}</style>

      {/* HEADER */}
      <header>
        <div className="container navbar">
          <div className="brand">
            <div className="brandIcon">⚡</div>
            <div>
              TULUNG <span>YA MAS</span>
            </div>
          </div>

          <nav className="navLinks">
            <a href="#beranda">Beranda</a>
            <a href="#layanan">Layanan</a>
            <a href="#pesan">Pesan</a>
            <a href="#kontak">Kontak</a>
          </nav>

          <a className="btn" href="#pesan">
            Pesan Sekarang
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="beranda">
        <div className="container">
          <div className="heroContent">
            <div className="tag">
              ⚡ Layanan Cepat • Praktis • Terpercaya
            </div>

            <h1>
              Butuh Bantuan?
              <br />
              <span className="blue">TULUNG YA MAS!</span>
            </h1>

            <p className="heroDesc">
              Solusi untuk pengiriman, transportasi, angkut barang,
              makanan, hingga berbagai kebutuhan perjalanan Anda.
              Tinggal pesan, kami siap membantu.
            </p>

            <div className="heroButtons">
              <a href="#pesan" className="btn">
                📦 Pesan Layanan
              </a>

              <button className="btn btnOutline" onClick={pesanWA}>
                💬 Hubungi WhatsApp
              </button>
            </div>

            <div className="stats">
              <div className="stat">
                <strong>6+</strong>
                <small>Jenis layanan</small>
              </div>

              <div className="stat">
                <strong>Banyuwangi</strong>
                <small>Area layanan utama</small>
              </div>

              <div className="stat">
                <strong>Fleksibel</strong>
                <small>Sesuai pesanan</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="layanan">
        <div className="container">
          <div className="sectionLabel">Layanan Kami</div>

          <h2 className="sectionTitle">
            Apa yang bisa kami bantu?
          </h2>

          <p className="sectionDesc">
            Berbagai kebutuhan dalam satu layanan. Praktis, fleksibel,
            dan tinggal menghubungi kami.
          </p>

          <div className="serviceGrid">
            {services.map((service, index) => (
              <div className="serviceCard" key={index}>
                <div className="serviceIcon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER */}
      <section className="orderSection" id="pesan">
        <div className="container orderGrid">
          <div className="orderInfo">
            <div className="sectionLabel">Pemesanan</div>

            <h2 className="sectionTitle">
              Pesan layanan
              <br />
              dengan mudah.
            </h2>

            <p className="sectionDesc">
              Isi informasi pesanan Anda. Setelah menekan tombol
              pemesanan, pesan akan diteruskan ke WhatsApp kami
              untuk konfirmasi lebih lanjut.
            </p>

            <div className="infoItem">
              <div className="infoIcon">📱</div>
              <div>
                <strong>WhatsApp</strong>
                <small>0813-1427-2462</small>
              </div>
            </div>

            <div className="infoItem">
              <div className="infoIcon">📍</div>
              <div>
                <strong>Wilayah layanan</strong>
                <small>Seluruh Kabupaten Banyuwangi</small>
              </div>
            </div>

            <div className="infoItem">
              <div className="infoIcon">🕐</div>
              <div>
                <strong>Jam pelayanan</strong>
                <small>Fleksibel, sesuai pesanan dan ketersediaan</small>
              </div>
            </div>
          </div>

          <form className="orderForm" onSubmit={kirimPesanan}>
            <h3>Formulir Pesanan</h3>

            <div className="field">
              <label>Nama pemesan</label>
              <input
                type="text"
                placeholder="Masukkan nama Anda"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label>Pilih layanan</label>
              <select
                value={layanan}
                onChange={(e) => setLayanan(e.target.value)}
              >
                {services.map((s, i) => (
                  <option key={i}>{s.title}</option>
                ))}
              </select>
            </div>

            <div className="field">
              <label>Lokasi penjemputan</label>
              <input
                type="text"
                placeholder="Masukkan lokasi awal"
                value={asal}
                onChange={(e) => setAsal(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label>Lokasi tujuan</label>
              <input
                type="text"
                placeholder="Masukkan lokasi tujuan"
                value={tujuan}
                onChange={(e) => setTujuan(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label>Catatan tambahan</label>
              <textarea
                placeholder="Detail barang, pesanan, waktu, atau informasi lainnya..."
                value={catatan}
                onChange={(e) => setCatatan(e.target.value)}
              />
            </div>

            <button type="submit" className="btn submitBtn">
              💬 Kirim Pesanan via WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="coverage">
        <div className="container">
          <div className="coverageBox">
            <div>
              <div className="sectionLabel">Area Pelayanan</div>

              <h3>Siap melayani Banyuwangi!</h3>

              <p>
                Melayani berbagai wilayah di Kabupaten Banyuwangi.
                Pesanan luar kota juga dapat dilakukan berdasarkan
                ketersediaan armada, jarak, rute, dan kesepakatan tarif.
              </p>
            </div>

            <button className="btn" onClick={pesanWA}>
              Hubungi Kami →
            </button>
          </div>
        </div>
      </section>

  {/* FOOTER */}
      <footer id="kontak">
        <div className="container footerFlex">
          <div>
            <div className="footerBrand">
              TULUNG <span>YA MAS</span>
            </div>

            <p style={{ marginTop: 10 }}>
              Solusi pengiriman dan transportasi Anda.
            </p>
          </div>

          <div>
            <p>WhatsApp: 0813-1427-2462</p>
            <p style={{ marginTop: 8 }}>
              © 2026 TULUNG YA MAS
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <button className="btn waFloat" onClick={pesanWA}>
        💬 WhatsApp
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
