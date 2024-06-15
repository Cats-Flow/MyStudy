import { Cactus } from "@phosphor-icons/react";
import React from "react";

export function NoActivities() {
  return (
    <div className="_div _events">
      <Cactus className="ico" />
      <p>Sem atividades</p>
    </div>
  )
}