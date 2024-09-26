import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logos.svg";

export const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-900 text-white flex justify-between items-center p-4 mb-8 font-bold md:text-2xl">
        <div className="font-bold">
          <img className="w-32" src={Logo} alt="logo" />
        </div>
        <div className="space-x-4">
          <a href="#features" className="hover:text-blue-400">
            Features
          </a>
          <a href="#wallets" className="hover:text-blue-400">
            Wallets
          </a>
          <a href="#support" className="hover:text-blue-400">
            Support
          </a>
        </div>
      </nav>
    </div>
  );
};

export const Hero = () => {
  return (
    <div>
      <section className="flex flex-col items-center text-center p-8 bg-gradient-to-r from-purple-500 to-indigo-500">
        <h1 className="text-4xl font-bold text-white">
          Manage Your Crypto Easily
        </h1>
        <p className="text-white mt-4">
          A secure, beautiful wallet for all your digital assets.
        </p>
        <Link
          to="/verify-wallet"
          className="bg-blue-600 text-white px-4 py-2 rounded-md mt-6 font-bold text-2xl"
        >
          Verify wallet
        </Link>
      </section>
    </div>
  );
};

export const Features = () => {
  return (
    <div>
      <section id="features" className="p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">Manage Assets</h3>
            <p>Track and swap your assets effortlessly across networks.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">Secure Wallet</h3>
            <p>Your crypto is safe with built-in security features.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">Mobile Access</h3>
            <p>Manage crypto on the go with mobile apps.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export const WalletDashboard = () => (
  <section className="p-8 bg-gray-100">
    <h2 className="text-2xl font-bold mb-4">Wallet Overview</h2>
    <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">Total Balance</h3>
        <p className="text-xl font-bold">$15,800</p>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        Send
      </button>
      <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
        Receive
      </button>
    </div>

    <h3 className="text-xl font-semibold mt-8">Recent Transactions</h3>
    <ul className="mt-4 space-y-2">
      <li className="bg-white p-4 rounded-lg shadow-md">
        <p className="font-semibold">Sent 0.5 BTC</p>
        <p className="text-sm text-gray-500">Transaction ID: abc123</p>
      </li>
      <li className="bg-white p-4 rounded-lg shadow-md">
        <p className="font-semibold">Received 1.2 ETH</p>
        <p className="text-sm text-gray-500">Transaction ID: def456</p>
      </li>
    </ul>
  </section>
);

export const Exchange = () => (
  <section className="p-8 bg-gray-100">
    <h2 className="text-2xl font-bold mb-4">Exchange Crypto</h2>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between mb-4">
        <input
          type="number"
          placeholder="Amount"
          className="border p-2 rounded-lg w-1/2 mr-4"
        />
        <select className="border p-2 rounded-lg w-1/2">
          <option>Bitcoin (BTC)</option>
          <option>Ethereum (ETH)</option>
          <option>Litecoin (LTC)</option>
        </select>
      </div>
      <div className="flex justify-between mb-4">
        <input
          type="number"
          placeholder="Receive"
          className="border p-2 rounded-lg w-1/2 mr-4"
        />
        <select className="border p-2 rounded-lg w-1/2">
          <option>Ethereum (ETH)</option>
          <option>Bitcoin (BTC)</option>
          <option>Litecoin (LTC)</option>
        </select>
      </div>
      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg w-full">
        Exchange Now
      </button>
    </div>
  </section>
);

export const Portfolio = () => (
  <section className="p-8 bg-gray-50">
    <h2 className="text-2xl font-bold mb-6">Portfolio</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Bitcoin (BTC)</h3>
        <p className="text-xl font-bold">$10,200</p>
        <p className="text-sm text-gray-500">1.5 BTC</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Ethereum (ETH)</h3>
        <p className="text-xl font-bold">$5,000</p>
        <p className="text-sm text-gray-500">3 ETH</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Litecoin (LTC)</h3>
        <p className="text-xl font-bold">$600</p>
        <p className="text-sm text-gray-500">10 LTC</p>
      </div>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="bg-gray-900 text-white p-6 mt-16">
    <div className="container mx-auto flex justify-between">
      <div className="space-y-2">
        <div className="font-bold">
          <img className="w-32" src={Logo} alt="logo" />
        </div>
        <p>© 2024 Crypto Wallet</p>
      </div>
      <div className="space-x-4">
        <a href="#features" className="hover:text-blue-400">
          Features
        </a>
        <a href="#wallets" className="hover:text-blue-400">
          Wallets
        </a>
        <a href="#support" className="hover:text-blue-400">
          Support
        </a>
      </div>
    </div>
  </footer>
);
