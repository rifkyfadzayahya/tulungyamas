
import React, { useState } from "react";

export default function App() {
  const nomorWA = "081314272462";

  const [form, setForm] = useState({
    nama: "",
    layanan: "Pengiriman Barang",
    asal: "",
    tujuan: "",
    detail: "",
  });

  const layananList = [
    { icon: "📦", nama: "Pengiriman Barang", desc: "Kirim paket, barang, dan dokumen dengan aman." },
    { icon: "🏍️", nama: "Kurir Motor", desc: "Antar jemput barang dengan cepat dan praktis." },
    { icon: "🍔", nama: "Makanan & Minuman", desc: "Pesan makanan dan minuman, kami siap mengantarkan." },
    { icon: "🚚", nama: "Jasa Angkut", desc: "Bantu angkut barang sesuai kebutuhan." },
    { icon: "🏠", nama: "Jasa Pindahan", desc: "Bantuan pindahan rumah, kos, dan tempat usaha." },
    { icon: "🚌", nama: "Transportasi", desc: "Transportasi orang maupun barang sesuai kesepakatan." },
    ];

    const kirimWhatsApp = (e) => {
      e.preventDefault();

      const pesan = `Halo TULUNG YA MAS 👋

Saya ingin memesan layanan.

Nama: ${form.nama}
Layanan: ${form.layanan}
Lokasi penjemputan: ${form.asal}
Tujuan: ${form.tujuan}
Detail pesanan: ${form.detail}

Mohon informasi tarif dan ketersediaannya. Terima kasih.`;

      window.open(
        `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`,
        "_blank"
      );
    };

    const ubahForm = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    const warnaBiru = "#1685ff";

    return (
      <div style={{
        background: "#080c14",
        color: "#f4f7fb",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}>

        {/* NAVBAR */}
        <nav style={{
          padding: "18px 6%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #1e293b",
          position: "sticky",
          top: 0,
          background: "#080c14",
          zIndex: 10,
        }}>
          <div style={{ fontSize: 22, fontWeight: "bold" }}>
            TULUNG <span style={{ color: warnaBiru }}>YA MAS</span>
          </div>

          <a href="#pesan" style={{
            background: warnaBiru,
            color: "white",
            padding: "11px 18px",
            borderRadius: 10,
            textDecoration: "none",
            fontWeight: "bold",
          }}>
            Pesan Sekarang
          </a>
        </nav>

        {/* HERO */}
        <section style={{
          padding: "70px 6% 60px",
          textAlign: "center",
          background: "linear-gradient(145deg, #0b1628, #080c14)",
        }}>
          <div style={{
            color: warnaBiru,
            fontWeight: "bold",
            letterSpacing: 3,
            marginBottom: 18,
          }}>
            SOLUSI ANTAR & TRANSPORTASI
          </div>

          <h1 style={{
            fontSize: "clamp(35px, 8vw, 64px)",
            lineHeight: 1.15,
            margin: "0 auto 20px",
            maxWidth: 850,
          }}>
            Ada yang perlu diantar?
            <br />
            <span style={{ color: warnaBiru }}>TULUNG YA MAS!</span>
          </h1>

          <p style={{
            color: "#aab6c8",
            maxWidth: 600,
            margin: "auto",
            fontSize: 17,
            lineHeight: 1.8,
          }}>
            Solusi pengiriman, kurir, makanan, angkut, pindahan,
            dan transportasi. Praktis, mudah, dan tinggal hubungi kami.
          </p>

          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            flexWrap: "wrap",
            marginTop: 30,
          }}>
            <a href="#pesan" style={{
              background: warnaBiru,
              padding: "15px 24px",
              color: "white",
              borderRadius: 12,
              textDecoration: "none",
              fontWeight: "bold",
            }}>
              📲 Pesan Layanan
            </a>

            <a href="#layanan" style={{
              border: "1px solid #334155",
              padding: "15px 24px",
              color: "white",
              borderRadius: 12,
              textDecoration: "none",
            }}>
              Lihat Layanan
            </a>
          </div>

          <div style={{
            marginTop: 35,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 12,
          }}>
            {["⚡ Praktis", "🤝 Ramah", "📍 Banyuwangi"].map((item) => (
              <span key={item} style={{
                background: "#111b2b",
                border: "1px solid #24344a",
                padding: "10px 16px",
                borderRadius: 30,
                color: "#cbd5e1",
              }}>
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* LAYANAN */}
        <section id="layanan" style={{ padding: "55px 6%" }}>
          <div style={{ textAlign: "center", marginBottom: 35 }}>
            <p style={{ color: warnaBiru, fontWeight: "bold", letterSpacing: 2 }}>
              LAYANAN KAMI
            </p>
            <h2 style={{ fontSize: 32, margin: "10px 0" }}>
              Apa yang bisa kami bantu?
            </h2>
            <p style={{ color: "#94a3b8" }}>
              Berbagai layanan untuk kebutuhan sehari-hari.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: 18,
          }}>
            {layananList.map((item, index) => (
              <div key={index} style={{
                background: "#111827",
                border: "1px solid #263449",
                borderRadius: 18,
                padding: 24,
              }}>
                <div style={{ fontSize: 38, marginBottom: 15 }}>
                  {item.icon}
                </div>

                <h3 style={{ margin: "0 0 10px", fontSize: 19 }}>
                  {item.nama}
                </h3>

                <p style={{
                  color: "#9caec4",
                  lineHeight: 1.7,
                  fontSize: 14,
                }}>
                  {item.desc}
                </p>

                <button
                  onClick={() => {
                    setForm({ ...form, layanan: item.nama });
                    document.getElementById("pesan").scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  style={{
                    border: "none",
                    background: "transparent",
                    color: warnaBiru,
                    fontWeight: "bold",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  Pesan layanan →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* KEUNGGULAN */}
        <section style={{
          padding: "50px 6%",
          background: "#0d1420",
        }}>
          <h2 style={{ textAlign: "center", marginBottom: 30 }}>
            Kenapa TULUNG YA MAS?
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 18,
          }}>
            {[
              ["🤝", "Pelayanan Ramah", "Mengutamakan komunikasi dan pelayanan yang baik."],
              ["📱", "Mudah Dipesan", "Pemesanan praktis langsung melalui WhatsApp."],
              ["📍", "Area Banyuwangi", "Melayani seluruh wilayah Kabupaten Banyuwangi."],
              ["🕒", "Fleksibel", "Waktu pelayanan menyesuaikan pesanan dan kesepakatan."],
            ].map((item, index) => (
              <div key={index} style={{
                textAlign: "center",
                padding: 20,
              }}>
                <div style={{ fontSize: 35 }}>{item[0]}</div>
                <h3>{item[1]}</h3>
                <p style={{ color: "#9caec4", lineHeight: 1.6 }}>
                  {item[2]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FORM PEMESANAN */}
        <section id="pesan" style={{ padding: "60px 6%" }}>
          <div style={{
            maxWidth: 650,
            margin: "auto",
            background: "#111827",
            padding: 25,
            border: "1px solid #263449",
            borderRadius: 20,
          }}>
            <h2 style={{ textAlign: "center" }}>
              📋 Form Pemesanan
            </h2>

            <p style={{
              textAlign: "center",
              color: "#9caec4",
              marginBottom: 25,
            }}>
              Isi informasi pesanan, kemudian kirim melalui WhatsApp.
            </p>

            <form onSubmit={kirimWhatsApp}>
              {[
                ["nama", "Nama Anda", "Masukkan nama"],
                ["asal", "Lokasi Penjemputan", "Alamat penjemputan"],
                ["tujuan", "Lokasi Tujuan", "Alamat tujuan"],
              ].map((item) => (
                <div key={item[0]} style={{ marginBottom: 18 }}>
                  <label style={{
                    display: "block",
                    marginBottom: 8,
                    fontWeight: "bold",
                  }}>
                    {item[1]}
                  </label>

                  <input
                    name={item[0]}
                    value={form[item[0]]}
                    onChange={ubahForm}
                    placeholder={item[2]}
                    required
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      padding: 14,
                      background: "#080c14",
                      border: "1px solid #344256",
                      borderRadius: 10,
                      color: "white",
                      fontSize: 15,
                    }}
                  />
                </div>
              ))}

              <div style={{ marginBottom: 18 }}>
                <label style={{
                  display: "block",
                  marginBottom: 8,
                  fontWeight: "bold",
                }}>
                  Pilih Layanan
                </label>

                <select
                  name="layanan"
                  value={form.layanan}
                  onChange={ubahForm}
                  style={{
                    width: "100%",
                    padding: 14,
                    background: "#080c14",
                    border: "1px solid #344256",
                    borderRadius: 10,
                    color: "white",
                    fontSize: 15,
                  }}
                >
                  {layananList.map((item) => (
                    <option key={item.nama} value={item.nama}>
                      {item.nama}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: 22 }}>
                <label style={{
                  display: "block",
                  marginBottom: 8,
                  fontWeight: "bold",
                }}>
                  Detail Pesanan
                </label>

                <textarea
                  name="detail"
                  value={form.detail}
                  onChange={ubahForm}
                  placeholder="Tuliskan detail barang, jumlah, waktu, atau kebutuhan lainnya..."
                  rows="4"
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: 14,
                    background: "#080c14",
                    border: "1px solid #344256",
                    borderRadius: 10,
                    color: "white",
                    fontSize: 15,
                    resize: "vertical",
                  }}
                />
              </div>

              <button type="submit" style={{
                width: "100%",
                background: "#16a34a",
                color: "white",
                border: "none",
                padding: 16,
                borderRadius: 12,
                fontWeight: "bold",
                fontSize: 16,
                cursor: "pointer",
              }}>
                📲 Kirim Pesanan ke WhatsApp
              </button>
            </form>
          </div>
        </section>

        {/* AREA LAYANAN */}
        <section style={{
          padding: "45px 6%",
          textAlign: "center",
          background: "#0d1420",
        }}>
          <h2>📍 Area Pelayanan</h2>
          <p style={{
            color: "#aab6c8",
            lineHeight: 1.8,
            maxWidth: 650,
            margin: "auto",
          }}>
            Melayani seluruh wilayah Kabupaten Banyuwangi.
            Pesanan luar kota dapat dilayani sesuai ketersediaan armada,
            jarak, rute, dan kesepakatan tarif.
          </p>
        </section>

        {/* FOOTER */}
        <footer style={{
          padding: "35px 6%",
          textAlign: "center",
          borderTop: "1px solid #1e293b",
        }}>
          <h2 style={{ margin: 0 }}>
            TULUNG <span style={{ color: warnaBiru }}>YA MAS</span>
          </h2>

          <p style={{ color: "#9caec4", marginTop: 12 }}>
            Solusi pengiriman dan transportasi.
          </p>

          <p style={{ marginTop: 20 }}>
            WhatsApp:{" "}
            <a href={`https://wa.me/${nomorWA}`} style={{
              color: "#22c55e",
              textDecoration: "none",
            }}>
              0813-1427-2462
            </a>
          </p>

          <p style={{ color: "#64748b", fontSize: 13 }}>
            © 2026 TULUNG YA MAS
          </p>
        </footer>

        {/* TOMBOL WHATSAPP */}
        <a
          href={`https://wa.me/${nomorWA}`}
          target="_blank"
          rel="noreferrer"
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            background: "#25d366",
            color: "white",
            padding: "15px 18px",
            borderRadius: 50,
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 5px 20px #0006",
            zIndex: 20,
          }}
        >
          💬 WhatsApp
        </a>

      </div>
    );
}
