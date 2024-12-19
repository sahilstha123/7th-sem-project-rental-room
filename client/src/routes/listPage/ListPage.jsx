import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { SearchFilter } from "../../components/searchFilter/SearchFilter";
import { Card } from "../../components/card/Card";
import Mmap from "../../components/map/Mmap";
import "./listpage.scss";

const ListPage = () => {
  const post = useLoaderData();
  // console.log({ post });
  // Check if post is defined and an array before mapping over it
  if (!post || !Array.isArray(post)) {
    return <div>No data available</div>;
  }

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <SearchFilter />
          {post.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Mmap items={post} />
      </div>
    </div>
  );
};

export default ListPage;
