import { useParams } from "react-router";
import { useClient } from "@/hooks/useClient";

import ContactInfoEmpty from "../empty-state/contact-info-empty";
import ContactInfoSkeleton from "@/layouts/skeletons/contact-info-skeleton";
import ContactInfo from "./contact-info";

function ContactDetails() {
  const { chatId = "" } = useParams();
  const { client, isLoading } = useClient(chatId);

  if (!chatId) return <ContactInfoEmpty />

  if (!client && isLoading) return <ContactInfoSkeleton />

  if (client)
    return (
      <ContactInfo client={client} />
    )
}

export default ContactDetails;