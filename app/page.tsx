"use client"

import { HouseList } from "components/features/house-list"
import { SiginIn } from "components/features/sign-in"
import { useTeamState } from "lib/store"
import { FC } from "react"

const Page: FC = () => {
  const { team } = useTeamState()
  return <>{team ? <HouseList team={team} /> : <SiginIn />}</>
}

export default Page
