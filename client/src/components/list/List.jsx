import React from "react";
import "./list.scss";
import { listData } from "../../lib/dummydata";
import { Card } from "../card/Card";

const List = () => {
  return (
    <div className="list">
      {listData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
