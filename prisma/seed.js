const { PrismaClient } = require('@prisma/client');
const products = require('./products.json');
const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: products,
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
