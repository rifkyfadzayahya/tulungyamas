# TULUNG YA MAS — Website starter

Starter web responsif React + Vite + Firebase Auth + Firestore.

## Setup lokal
1. Install Node.js LTS.
2. Di folder project, jalankan `npm install`.
3. Jalankan `npm run dev` untuk preview lokal.
4. Untuk build, jalankan `npm run build`.

Firebase Web config ada di `src/firebase.js`. Konfigurasi Web Firebase bersifat publik untuk client; keamanan data harus melalui Firestore Security Rules.

## Firestore Rules
Review dan deploy isi `firestore.rules` melalui Firebase Console > Firestore Database > Rules. Rules ini adalah titik awal dan perlu diuji sebelum penggunaan real. Pesanan publik bisa dibuat, tetapi pembacaan dan pengubahan pesanan hanya admin. Role admin/driver perlu disiapkan melalui dokumen `users/{uid}` secara manual di Console pada tahap awal.

## Status
Ini starter UI dan form pemesanan, bukan sistem operasional siap transaksi. Dashboard admin/driver, role enforcement UI, tracking, assignment, upload bukti, laporan, dan payment gateway belum selesai. Jangan gunakan untuk transaksi nyata sampai security rules dan seluruh alur diuji.
