import React from "react";
import "./listpage.scss";
import { listData } from "../../lib/dummydata";
import { SearchFilter } from "../../components/searchFilter/SearchFilter";
import { Card } from "../../components/card/Card";
import Mmap from "../../components/map/Mmap";
const ListPage = () => {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listConatiner">
        <div className="wrapper">
          <SearchFilter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Mmap items={data} />
      </div>
    </div>
  );
};

export default ListPage;
