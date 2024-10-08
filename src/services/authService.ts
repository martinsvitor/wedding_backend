import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'vitaliswedding';

export const findGuestByName = async (name: string) => {
  const guest = await prisma.guest.findFirst({
    omit:{
        gender:true,
    },
    where: {
      name: {
        equals: name,
        mode: 'insensitive',
      },
    }
});

  if (!guest) {
    return null;
  }

  const token = jwt.sign({ id: guest.id, name: guest.name }, JWT_SECRET, {
    expiresIn: '1h',
  });

  return { guest, token };
};
