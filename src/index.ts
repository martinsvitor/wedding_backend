import './setupModuleAlias';
import app from './app';
import { config } from './config';
import prisma from './lib/prisma';

const port = config.port;

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Handle graceful shutdown

const shutdown = async () => {
  console.log('Shutting down server...');
  await prisma.$disconnect();
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
