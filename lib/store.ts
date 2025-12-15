import { create } from "zustand"

export const useTeamState = create<{
  team?: Team
  setTeam: (team?: Team) => void
}>((set) => ({
  team: undefined,
  setTeam: (team?: Team) => set({ team }),
}))
