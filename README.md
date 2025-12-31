# ⚡ SolArbBot
### High-Performance Solana Arbitrage Engine & Analytics Dashboard

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Solana](https://img.shields.io/badge/solana-mainnet-green)
![Rust](https://img.shields.io/badge/built%20with-Rust-orange)

**SolArbBot** is a next-generation MEV (Maximal Extractable Value) and arbitrage bot purpose-built for the Solana ecosystem. It combines a low-latency Rust execution client with an on-chain Anchor program to atomically execute swaps across multiple DEXs (Raydium, Orca, Whirlpool) within a single transaction, ensuring risk-free profit generation.

The system includes a modern React-based dashboard for real-time monitoring of opportunities, active strategies, and performance metrics.

---

## 🚀 Key Features

### 🟢 Core Engine (Rust + Anchor)
*   **Atomic Execution**:Leverages on-chain CPI (Cross-Program Invocations) to bundle arbitrage swaps. If any leg fails, the entire transaction reverts.
*   **Zero-Copy Deserialization**: Optimized for sub-millisecond parsing of market data.
*   **Multi-DEX Support**: Native integration with:
    *   Raydium (V4 & Concentrated Liquidity)
    *   Orca Whirlpools
    *   Meteora DLMM
*   **Jito-Solana Integration**: Bundles transactions to bypass network congestion and minimize failed landing rates.

### 🔵 Analytics Dashboard (React + Vite)
*   **Real-Time Visualization**: WebSocket-fed UI updates for tracking active arbitrage loops.
*   **Profit/Loss Tracking**: Historical performance data exported to CSV/JSON.
*   **Strategy Management**: Toggle specific DEX paths and adjust slippage tolerance on the fly.
*   **Dark Mode**: Sleek, professional interface designed for 24/7 monitoring.

---

## 🛠️ Architecture

The repository is structured as a monorepo containing the three critical components:

```
📦 sol-arb-bot
 ┣ 📂 arbi-client       # High-speed Rust off-chain bot (searcher)
 ┣ 📂 solana-program    # On-chain Anchor program (executor)
 ┗ 📂 src               # React frontend dashboard
```

---

## ⚡ Quick Start

### Prerequisites
*   Rust (1.70+) & Cargo
*   Solana CLI (1.16+)
*   Node.js (18+) & Yarn/NPM
*   Anchor AVM

### 1. Build the On-Chain Program
```bash
cd solana-program
anchor build
# The program keypair will be generated in target/deploy
```

### 2. Run the Off-Chain Searcher
```bash
cd arbi-client
cargo run --release
```

### 3. Launch the Dashboard
```bash
npm install
npm run dev
```

---

## 🛡️ Disclaimer

**Use at your own risk.** Arbitrage on Solana is highly competitive. This software is provided "AS IS" without warranty of any kind. The authors are not responsible for any financial losses incurred while running this bot.

---

**Author**: DynamicKarabo
**Version**: 1.0.0
