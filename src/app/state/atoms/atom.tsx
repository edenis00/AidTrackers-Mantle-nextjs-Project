"use client";
import { atom } from "recoil";

export const networkIdState = atom({
  key: "networkIdState",
  default: null, // Set your default network ID here
});

export const chainIdState = atom({
  key: "chainIdState",
  default: null, // Set your default chain ID here
});

export const walletAddressState = atom({
  key: "walletAddressState",
  default: null, // Set your default wallet address here
});

export const loadingState = atom({
  key: "loadingState",
  default: false, // Set your default loading state here
});
