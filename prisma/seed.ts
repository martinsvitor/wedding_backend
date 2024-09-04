import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	// await prisma.$connect();
	await prisma.guest.deleteMany();
	await prisma.invitation.deleteMany();
	await prisma.$executeRaw`ALTER SEQUENCE "Guest_id_seq" RESTART WITH 1`
	await prisma.$executeRaw`ALTER SEQUENCE "Invitation_id_seq" RESTART WITH 1`

	const invitation = await prisma.invitation.create({
		data: {
			invitedGuests: {
				create: [
					{
						name: "Vitor Martins",
						gender: "Male",
						willAttend: null,
					},
					{
						name: "Talita Meier",
						gender: "Female",
						willAttend: null,
					},
				],
			},
		},
	});
	console.log({ invitation });

	const updatedLoggedInGuest = await prisma.invitation.update({
		where:{
			id: 1,
			invitedGuests: {
				some: {
					 id: 1
				}
			}
		},
		data: {
			firstLoginAt: new Date()
		}
	})

	console.log(updatedLoggedInGuest);
}

main()
	.catch((error) => {
		console.error(error);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
