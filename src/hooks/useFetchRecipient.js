import { useEffect, useState } from "react";
import * as ServerApi from "utils/serverApi";

export const useFetchRecipientUser = (chat, user) => {
  const [recipientUser, setRecipientUser] = useState(null);
  const [error, setError] = useState(null);

  const recipientId = chat?.members?.find((id) => id !== user?._id);

  useEffect(() => {
    const getUser = async () => {
      if (!recipientId) return null;

      ServerApi.getUserById(recipientId)
        .then((user) => {
          setRecipientUser(user);
        })
        .catch((error) => {
          setError(error);
        });
    };

    getUser();
  }, []);

  return { recipientUser };
};
