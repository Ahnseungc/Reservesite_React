import React, { FC, useCallback, useEffect, useState } from "react";
import { Box, ReservedBox } from "./style";

interface Props {
  state: boolean;
  seatNum: number;
}

const Seat: FC<Props> = ({ state, seatNum }) => {
  const [rev, setRev] = useState(state);
  sessionStorage.setItem(seatNum.toString(), rev.toString());

  const eathandler = useCallback(
    (e: any) => {
      rev ? setRev(false) : setRev(true);
    },
    [rev]
  );

  return rev ? (
    <Box onClick={eathandler}>좌석</Box>
  ) : (
    <ReservedBox onClick={eathandler}>매진</ReservedBox>
  );
};

export default Seat;
