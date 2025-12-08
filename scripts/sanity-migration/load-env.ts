/**
 * Helper script to load environment variables from .env.local
 * Import this at the top of migration scripts to load env vars
 */

import { readFileSync } from 'fs';
import { resolve } from 'path';

function loadEnv() {
  try {
    const envPath = resolve(process.cwd(), '.env.local');
    const envFile = readFileSync(envPath, 'utf-8');

    // Parse .env.local file
    envFile.split('\n').forEach((line) => {
      // Skip empty lines and comments
      if (!line || line.startsWith('#')) return;

      const [key, ...valueParts] = line.split('=');
      const value = valueParts.join('=').trim();

      if (key && value) {
        process.env[key.trim()] = value;
      }
    });

    console.log('✓ Environment variables loaded from .env.local\n');
  } catch (error) {
    console.error('⚠️  Warning: Could not load .env.local file');
    console.error('Make sure .env.local exists with your Sanity credentials\n');
  }
}

// Auto-load on import
loadEnv();
