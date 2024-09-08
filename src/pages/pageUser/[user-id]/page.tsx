import Image from "next/image";
import { useRouter } from "next/router";

interface Params {
  "user-id": string; // Задайте тип для user-id
}

export default function PageUserId({ params }: { params: Params }) {
  return (
    <div>
      <h1>User страница</h1>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  );
}
