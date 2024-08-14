import fs from 'fs';
import path from 'path';
import { WarpFactory } from 'warp-contracts';

// Initialize Warp instance
const warp = WarpFactory.forMainnet(); // or WarpFactory.forLocal() if you're using ArLocal

async function createWallet(): Promise<void> {
  try {
    // Create a new wallet
    const jwk = await warp.arweave.wallets.generate();
    const walletAddress = await warp.arweave.wallets.jwkToAddress(jwk);

    // Define the path and filename for the JSON file
    const filePath = path.join(__dirname, `wallet.json`);

    // Save the JWK to a JSON file
    fs.writeFileSync(filePath, JSON.stringify(jwk, null, 2), 'utf8');

    console.log(`Wallet created with address: ${walletAddress}`);
    console.log(`Wallet saved to: ${filePath}`);
  } catch (error) {
    console.error('Error creating wallet:', error);
  }
}

// Run the createWallet function
createWallet();
