import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/ui/custom/CustomBreadcrumb";
import Wrapper from "@/components/Wrapper";
import { FaYoutube } from "react-icons/fa";
import { useParams } from "react-router";

const video =
  "https://s3.amazonaws.com/cdn.postt.ai/platform-images/landing-page/IntroVideo.webm";
export default function SingleVideoView() {
  const { videoId } = useParams();
  return (
    <Wrapper>
      <div className="px-2 h-[calc(100dvh-85px)] container mx-auto flex flex-col gap-4 pb-4">
        <div className="flex items-center justify-between w-full">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Videos", href: "/videos" },
              { label: videoId, href: `/videos/${videoId}` },
            ]}
          />
          <Button className="bg-[#FF0000] text-white hover:bg-[#ff0000af]">
            <FaYoutube className="text-[##FFFFFF]" />
            Publish To Youtube
          </Button>
        </div>
        <video controls src={video} className="max-w-4xl max-h-full m-auto" />
      </div>
    </Wrapper>
  );
}
