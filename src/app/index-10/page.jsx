import Breadcrumb from "@/components/Breadcrumb";
import DashBoardLayerTen from "@/components/DashBoardLayerTen";
import MasterLayout from "@/masterLayout/MasterLayout";

export const metadata = {
  title: "StrategizeIT NEXT JS - Admin Dashboard Multipurpose Bootstrap 5 Template",
  description:
    "StrategizeIT NEXT JS is a developer-friendly, ready-to-use admin template designed for building attractive, scalable, and high-performing web applications.",
};

const Page = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='POS & Inventory' />

        {/* DashBoardLayerTen */}
        <DashBoardLayerTen />
      </MasterLayout>
    </>
  );
};

export default Page;
