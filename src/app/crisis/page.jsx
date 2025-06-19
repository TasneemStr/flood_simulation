import Breadcrumb from "@/components/Breadcrumb";
import ButtonTabsTwo from "@/components/child/ButtonTabsTwo";
import PricingLayer from "@/components/PricingLayer";
import TabsLayer from "@/components/TabsLayer";
import MasterLayout from "@/masterLayout/MasterLayout";

export const metadata = {
  title: "StrategizeIT NEXT JS - Admin Dashboard",
  description:
    "StrategizeIT  admin template designed for building attractive, scalable, and high-performing web applications.",
};

const Page = () => {
  return (
    <>
    <MasterLayout>
     <TabsLayer />
     </MasterLayout>
    </>
  );
};

export default Page;
