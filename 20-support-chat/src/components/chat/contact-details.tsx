import { getClient } from "@/mock/fake-data";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import ContactInfoEmpty from "../empty-state/contact-info-empty";
import ContactInfoSkeleton from "@/layouts/skeletons/contact-info-skeleton";
import ContactInfo from "./contact-info";

function ContactDetails() {
  const { chatId } = useParams();

  const { data: client, isLoading } = useQuery({
    queryKey: ["client", chatId],
    queryFn: () => getClient(chatId!),
    enabled: !!chatId
  });

  if (!chatId) return <ContactInfoEmpty />

  if (!client && isLoading) return <ContactInfoSkeleton />

  if (client)
    return (
      <ContactInfo client={client} />
    )
}

export default ContactDetails;