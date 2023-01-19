import { Box, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";

export const TabsModal = ({ open, handleClose, urlModal }) => {
  const [data, setData] = useState({});

  const getData = async (urlModal) => {
    const response = await fetch(urlModal);
    const data = await response.json();
    setData(data);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const dataModal = data?.effect_entries?.map((entrie, index) => (
    <div key={index}>
      <p>{`Effect: ${entrie.effect}`}</p>
      <p>{`Short_effect: ${entrie.short_effect}`}</p>
    </div>
  ));

  useEffect(() => {
    urlModal && getData(urlModal);
  }, [urlModal]);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>{dataModal}</Box>
    </Modal>
  );
};
