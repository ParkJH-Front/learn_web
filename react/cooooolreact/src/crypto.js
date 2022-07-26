import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";

function Coin() {
  const [lodding, setLodding] = useState(true);
  const [coins, setCoins] = useState([])

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json)
      .then((data) =>
        setCoins([data]);
        setLodding(false);
      )
  });
  
  return (
    <div>
      <h1>{lodding}</h1>
    </div>
  );
}

export default Coin;
