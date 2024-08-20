import { generateMnemonic } from 'bip39';
import { SolanaWallet } from './components/solana';
import { useState } from 'react';
import { EthWallet } from './components/ether';

function App() {
  const [mnemonic, setMnemonic] = useState('');

  function GenerateMnemonic() {
    // No need to declare another mnemonic state here, use the one from App

    async function generatePhrase() {
      const phrase = await generateMnemonic();
      setMnemonic(phrase); // Update the App's state
    }

    return (
      <div>
        <button onClick={generatePhrase}>Generate Mnemonic</button>
        <input type="text" value={mnemonic} readOnly />
      </div>
    );
  }

  return (
    <>
      <GenerateMnemonic />
      Solana Wallet
      <SolanaWallet mnemonic={mnemonic} />
      Ethereum Wallet
      <EthWallet mnemonic={mnemonic}/>
    </>
  );
}

export default App;

