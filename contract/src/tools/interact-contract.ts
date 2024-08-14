import { WarpFactory } from 'warp-contracts';
import { JWKInterface } from 'arweave/node/lib/wallet';
import { ArweaveSigner, DeployPlugin } from 'warp-contracts-plugin-deploy';

// Import your JWK (owner's wallet)
import jwk from '../../.secrets/jwk.json';
import { ArditState } from '../contracts/types/types';

(async () => {
  // Initialize Warp instance
  const warp = WarpFactory.forMainnet().use(new DeployPlugin());

  // Wrap the JWK in an ArweaveSigner
  const signer = new ArweaveSigner(jwk as JWKInterface);

  // Replace with your actual deployed contract ID
  const contractId = 'plkGahM3PCQELYs-1rzqV4-KBxysPmEHbBweIVNsdUU';

  // Connect to the contract using the owner's wallet
  const ardit = warp.contract<ArditState>(contractId).connect(signer);

  // Write interaction to the contract (post a message)
  const interactionResult = await ardit.writeInteraction({
    function: 'postMessage',
    content: 'Hello world!',
  });

  console.log('Interaction Result:', interactionResult);
})();
