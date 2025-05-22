# Prisma ORM Example Project

Proyek ini adalah contoh implementasi dasar ORM menggunakan **Prisma** dengan database SQLite. Proyek mencakup operasi CRUD, relasi antar tabel, transaksi, penggunaan JSON, dan fitur ORM lainnya seperti migration dan seeding.

## Fitur

- Select (findMany, findUnique)
- Insert (create)
- Update
- Delete
- Join antar tabel
- Transaction
- Menyimpan dan membaca data JSON
- Migration database
- Relasi antar tabel

## Instalasi

1. Clone repositori ini:
git clone https://github.com/username/prisma-demo.git
cd prisma-demo

2. Install dependencies:
npm install

3. Inisialisasi Prisma dan database:
npx prisma migrate dev --name init

Cara menjalankan Program
1. Jalankan langsung file TypeScript (dengan ts-node):
npx ts-node src/index.ts

2. Atau gunakan script dari package.json:
npm run start
