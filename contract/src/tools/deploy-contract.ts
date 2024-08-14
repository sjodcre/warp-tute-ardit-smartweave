import fs from 'fs';
import path from 'path';
import { WarpFactory } from 'warp-contracts';
import jwk from '../../.secrets/jwk.json';
import { ArweaveSigner, DeployPlugin, InjectedArweaveSigner } from 'warp-contracts-plugin-deploy';
import Arweave from 'arweave';
import { JWKInterface } from 'arweave/node/lib/wallet';

(async () => {
  const warp = WarpFactory.forMainnet().use(new DeployPlugin());

  const arweave = Arweave.init({});
  const signer = new ArweaveSigner(jwk as JWKInterface);

  
  const contractSrc = fs.readFileSync(path.join(__dirname, '../../dist/contract.js'), 'utf8');

  const initialState = {
    messages: [],
  };

  console.log('Deployment started');
  const { contractTxId } = await warp.deploy({
    wallet: signer,
    initState: JSON.stringify(initialState),
    src: contractSrc,
  });
  console.log('Deployment completed: ' + contractTxId);
})();