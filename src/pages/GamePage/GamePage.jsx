import { useLocation, useParams } from "react-router-dom";

import { Cards } from "../../components/Cards/Cards";

export function GamePage() {
  const { pairsCount } = useParams();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const isErrorLimitedMode = searchParams.get("errorLimitedMode") === "true";

  return (
    <>
      <Cards pairsCount={parseInt(pairsCount, 10)} previewSeconds={5} isErrorLimitedMode={isErrorLimitedMode}></Cards>
    </>
  );
}
