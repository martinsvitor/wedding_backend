import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	await prisma.$connect();

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
}

main()
	.catch((error) => {
		console.error(error);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
