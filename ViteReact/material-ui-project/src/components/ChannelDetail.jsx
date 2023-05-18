import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import fetchFromApi from "../utils/fetchFromApi";
import { useState } from "react";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetails, setChannelDetails] = useState({});
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFromApi(`channels?part=snippet%id=${id}`);
        setChannelDetails(data?.items[0]);

        const videosData = await fetchFromApi(
          `search?channelId=${id}&part=snippet%2Cid&order=date`
        );
        setVideos(videosData?.items);
      } catch (err) {
        console.table(err);
      }
    };

    fetchData();
  }, [id]);
  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div
          style={{
            height: "300px",
            zIndex: 10,
          }}
        >
          <img src="./gggrain(1).svg" alt="gradient" style={{
            objectFit:'cover',
            objectPosition:'center',
          }} />
        </div>
        <ChannelCard channelDetails={channelDetails} mt='-105px'/>
      </Box>
      <Box display={'flex'} p={'2'}>
          <Box sx={{
            mr:{sm:'100px'}
          }}>
          </Box>
              <Videos videos={videos}/>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
