import { useQuery } from "@tanstack/react-query";
import { getClient } from "@/mock/fake-data";

export const useClient = (chatId: string) => {
  const { data: client, isLoading } = useQuery({
    queryKey: ["client", chatId],
    queryFn: () => getClient(chatId),
    enabled: !!chatId
  });

  return { client, isLoading };
};