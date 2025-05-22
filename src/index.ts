import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Select: ambil semua users
  const users = await prisma.user.findMany();
  console.log('All users:', users);

  // Insert: buat user baru
  const alice = await prisma.user.create({
    data: { name: 'Alice', email: 'alice@example.com' }
  });
  console.log('Created user:', alice);

  // Update: ubah nama user
  const updated = await prisma.user.update({
    where: { id: alice.id },
    data: { name: 'Alice Cooper' }
  });
  console.log('Updated user:', updated);

  // Delete: hapus user
  const deleted = await prisma.user.delete({
    where: { id: alice.id }
  });
  console.log('Deleted user:', deleted);

  // Join: ambil posts dengan author
  const postsWithAuthor = await prisma.post.findMany({
    include: { author: true }
  });
  console.log('Posts with authors:', postsWithAuthor);

  // Transaction: contoh atomic
  await prisma.$transaction(async (tx) => {
    const bob = await tx.user.create({ data: { name: 'Bob', email: 'bob@example.com' } });
    await tx.post.create({ data: { title: 'Hello Bob', authorId: bob.id } });
  });

  // JSON: simpan dan ambil profile
  const eve = await prisma.user.create({
    data: { name: 'Eve', email: 'eve@example.com', profile: { age: 30, bio: 'Developer' } }
  });
  console.log('Eve profile:', await prisma.user.findUnique({ where: { id: eve.id }, select: { profile: true } }));
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });