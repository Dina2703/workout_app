import React from "react";
import { Box } from "@mui/material";
import HorizontalBodyPart from "./HorizontalBodyPart";

function HorizontalScrollbar({ data, setBodyPart, bodyPart }) {
  return (
    <div>
      {data.map((item) => (
        <Box key={item.id || item} title={item.id || item} m="0 40px">
          <HorizontalBodyPart
            item={item}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
        </Box>
      ))}
    </div>
  );
}

export default HorizontalScrollbar;
