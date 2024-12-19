import React from "react";
import "./list.scss";
import { listData } from "../../lib/dummydata";
import { Card } from "../card/Card";

const List = ({ posts }) => {
  return (
    <div className="list">
      {posts.length > 0 ? (
        posts.map((item) => <Card key={item.id} item={item} />)
      ) : (
        <p>No items available.</p>
      )}
    </div>
  );
};

export default List;
