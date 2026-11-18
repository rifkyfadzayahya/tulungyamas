
import React from "react";

export default function App() {
  return (
    <div style={{
      background: "#080b12",
      color: "#ffffff",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif"
    }}>
      <header style={{
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #1c2638"
      }}>
        <h2 style={{ color: "#168cff", margin: 0 }}>
          TULUNG <span style={{ color: "#ffffff" }}>YA MAS</span>
        </h2>
        <button style={{
          background: "#168cff",
          color: "white",
          border: "none",
          padding: "12px 18px",
          borderRadius: "10px"
        }}>
          ☰
        </button>
      </header>

      <section style={{
        padding: "50px 22px",
        textAlign: "center",
        background: "linear-gradient(180, #101a2b, #080b12)"
      }}>
        <p style={{ color: "#168cff", letterSpacing: "3px" }}>
          LAYANAN ANTAR & TRANSPORTASI
        </p>

        <h1 style={{
          fontSize: "38px",
          lineHeight: "1.2"
        }}>
          Butuh Bantuan?
          <br />
          <span style={{ color: "#168cff" }}>
            Tulung Ya Mas!
          </span>
        </h1>

        <p style={{
          color: "#b8c3d4",
          lineHeight: "1.8"
        }}>
          Solusi pengiriman, transportasi dan berbagai
          kebutuhan perjalanan Anda. Cepat, mudah,
          aman dan terpercaya.
        </p>

        <a
          href="https://wa.me/6281314272462"
          style={{
            display: "inline-block",
            background: "#168cff",
            color: "white",
            padding: "15px 25px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold",
            marginTop: "15px"
          }}
        >
          Pesan Sekarang via WhatsApp
        </a>
      </section>

      <section style={{ padding: "25px 20px" }}>
        <h2 style={{ textAlign: "center" }}>
          Layanan Kami
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "15px"
        }}>
          {[
            ["📦", "Pengiriman Barang"],
            ["🏍️", "Kurir Motor"],
            ["🍔", "Makanan & Minuman"],
            ["🚚", "Jasa Angkut"],
            ["🏠", "Jasa Pindahan"],
            ["🚌", "Transportasi"],
          ].map((item, index) => (
            <div key={index} style={{
              background: "#111827",
              border: "1px solid #1e3555",
              padding: "22px 12px",
              borderRadius: "15px",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "32px" }}>
                {item[0]}
              </div>
              <h3 style={{
                fontSize: "15px",
                marginTop: "12px"
              }}>
                {item[1]}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section style={{
        margin: "20px",
        padding: "25px",
        borderRadius: "18px",
        background: "#101a2b",
        textAlign: "center"
      }}>
        <h2 style={{ color: "#168cff" }}>
          Area Pelayanan
        </h2>

        <p style={{ color: "#cbd5e1", lineHeight: "1.8" }}>
          Melayani seluruh wilayah Kabupaten Banyuwangi.
          Pengiriman luar kota juga tersedia sesuai
          jarak, rute, armada dan kesepakatan.
        </p>
      </section>

      <section style={{
        padding: "30px 20px",
        textAlign: "center"
      }}>
        <h2>Hubungi Kami</h2>

        <p style={{ color: "#b8c3d4" }}>
          Butuh layanan kami? Hubungi langsung melalui WhatsApp.
        </p>

        <a
          href="https://wa.me/6281314272462"
          style={{
            display: "inline-block",
            background: "#16a34a",
            color: "white",
            padding: "15px 25px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          💬 WhatsApp 0813-1427-2462
        </a>
      </section>

      <footer style={{
        padding: "25px 15px",
        textAlign: "center",
        borderTop: "1px solid #1c2638",
        color: "#8b9bb4"
      }}>
        <h3 style={{ color: "#168cff" }}>
          TULUNG YA MAS
        </h3>

        <p>Solusi Pengiriman & Transportasi</p>

        <p style={{ fontSize: "13px" }}>
          © 2026 TULUNG YA MAS
        </p>
      </footer>
    </div>
  );
}
