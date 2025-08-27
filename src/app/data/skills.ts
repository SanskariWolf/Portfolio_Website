// src/app/data/skills.ts
export interface Skill {
  logo: string;
  name: string;
  quote: string;
}

export const SKILLS: Skill[] = [
  {
    logo: "assets/skills/angular.svg",
    name: "Angular",
    quote: "Crafting dynamic SPAs with elegance ⚡"
  },
  {
    logo: "assets/skills/nodejs.svg",
    name: "Node.js",
    quote: "Where backend magic brews 🔮"
  },
  {
    logo: "assets/skills/rust.svg",
    name: "Rust",
    quote: "Fearless concurrency, wolf-approved 🐺"
  },
  {
    logo: "assets/skills/solidity.svg",
    name: "Solidity",
    quote: "Building trust, one smart contract at a time ⛓️"
  },
  {
    logo: "assets/skills/unity.svg",
    name: "Unity",
    quote: "Turning imagination into interactive worlds 🎮"
  },
  // ➕ add more skills easily
];
