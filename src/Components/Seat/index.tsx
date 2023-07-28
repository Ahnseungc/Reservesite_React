import React, { FC, useCallback, useState } from "react";
import { Box, ReservedBox } from "./style";

interface Props {
  state: boolean;
}

const Seat: FC<Props> = (state) => {
  const [rev, setRev] = useState(state.state);

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
