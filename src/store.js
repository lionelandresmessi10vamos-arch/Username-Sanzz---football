import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useGameStore = create(persist((set) => ({
  activeTab: 'Home',
  manager: { name: 'SANZZ', level: 1, xp: 0, reputation: 72 },
  wallet: { coins: 12500, cash: 2500000, tickets: 3 },
  squad: [],
  setTab: (activeTab) => set({ activeTab }),
}), { name: 'sanzz-football-save' }))
