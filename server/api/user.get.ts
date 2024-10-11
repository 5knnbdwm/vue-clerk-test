import { clerkClient, getAuth } from "#clerk";

export default eventHandler(async (event) => {
  const { userId } = getAuth(event);

  if (!userId) {
    setResponseStatus(event, 403);
    return;
  }

  console.log("endpoint getAuth:", getAuth(event));

  return clerkClient(event).users.getUser(userId);
});
