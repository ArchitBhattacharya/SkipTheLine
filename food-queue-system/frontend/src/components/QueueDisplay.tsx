import { useEffect, useState } from "react";
import { getQueue } from "../services/api";

function QueueDisplay(): JSX.Element {
  const [queue, setQueue] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(async () => {
      const data = await getQueue();
      setQueue(data.queue_length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return <div>Queue Length: {queue}</div>;
}

export default QueueDisplay;