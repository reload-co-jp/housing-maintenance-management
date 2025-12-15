"use client"

import { type FC } from "react"
import { Card } from "components/elements"
import { Button } from "components/elements/form"

const houses: House[] = [
  { id: 1, name: "秋葉原公共マンション", createdAt: new Date() },
]

export const HouseList: FC<{ team: Team }> = ({ team }) => {
  return (
    <>
      <Card>
        <h2>{team.name}</h2>
        <div>
          <Button>新規作成</Button>
        </div>
        <table>
          <tbody>
            {houses.map((house) => (
              <tr key={house.id}>
                <td>{house.name}</td>
                <td>{house.createdAt.toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  )
}
