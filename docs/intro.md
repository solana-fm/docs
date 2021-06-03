---
title: Introduction
sidebar_position: 1
---

# Introduction

Welcome to **SolanaFM**.
Explore our how-to guides, example codes using the SolanaFM API.
SolanaFM is the only project to fully index the entire Solana Blockchain & provides easy access to Solana's blockchain and data. 

## Getting to know Solana's deep Infrastructure

Solana's documentation can be found here (https://docs.solana.com/).

## So what exactly is an indexer?

#### An indexer is a GUI-less application that: 
1. Fetches **raw** blockchain data from a fully synced node
2. Processes the raw data into a **queryable** (such as GraphQL) format.
3. Stores the queryable dataset into a database for **quick and easy access**.

### What are the use cases of an indexer?

The use cases are endless. From applications like [Solana's explorer](https://explorer.solana.com/), to a decentralized exchange bot. An indexer's main goal is to extend the JSON RPC APIs available from a node, by developing additional APIs that cover a greater amount of edge cases.

```shell
npx @docusaurus/init@latest init my-website classic
```

## Start your site

Run the development server:

```shell
cd my-website

npx docusaurus start
```

Your site starts at `http://localhost:3000`.

Open `docs/intro.md` and edit some lines: the site **reloads automatically** and display your changes.
