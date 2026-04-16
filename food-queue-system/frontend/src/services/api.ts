interface OrderResponse {
  id: number;
  item: string;
  status: string;
}

interface QueueResponse {
  queue_length: number;
}

export const createOrder = async (item: string): Promise<OrderResponse> => {
  const response = await fetch('http://localhost:8000/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item }),
  });
  return response.json();
};

export const getQueue = async (): Promise<QueueResponse> => {
  const response = await fetch('http://localhost:8000/queue');
  return response.json();
};