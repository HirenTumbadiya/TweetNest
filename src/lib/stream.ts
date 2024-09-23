import { StreamChat } from "stream-chat";

const streanServerClient = StreamChat.getInstance(
  process.env.NEXT_PUBLIC_STREAM_KEY!,
  process.env.STREAM_SECRET_KEY,
);

export default streanServerClient;
