import { auth } from "@clerk/nextjs/server";
import Navbar from "../_components/navbar";
import { redirect } from "next/navigation";

const SubscriptionPage = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/login");
  }

  return (
    <div>
      <Navbar />
      <h1>SubscriptionPage</h1>
    </div>
  );
};

export default SubscriptionPage;
