import Footer from "@/components/HomeComponents/Footer";
import Navigation from "@/components/HomeComponents/Navigation";
import { DetailLoader } from "@/components/skeleton/page";

const Loading = () => {
  return (
    <div className="flex items-center flex-col">
      <Navigation></Navigation>
      <DetailLoader></DetailLoader>
      <Footer></Footer>
    </div>
  );
};

export default Loading;
