import { useState } from "react";
import { TbCheck } from "react-icons/tb";
import { SiReaddotcv } from "react-icons/si";

const DownloadCVButton = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/docs/DinushkaCV.pdf";
    link.download = "Dinushka_CV.pdf";
    link.click();

    setDownloaded(true);

    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={downloaded}
      className={`
        px-6 py-3 font-medium
        transition-all duration-300 ease-in-out
        flex items-center gap-2 group
        ${
          downloaded
            ? "bg-[var(--color-blue)] text-white scale-105"
            : "bg-[var(--color-white)] text-black hover:bg-white"
        }
      `}
    >
      {downloaded ? (
        <>
          <span>Downloaded</span>
          <TbCheck className="text-xl" />
        </>
      ) : (
        <>
          <span>Career Snapshot</span>
          <SiReaddotcv className="ml-2 group-hover:translate-x-1 group-hover:text-[var(--color-blue)] transition-all duration-400 text-xl" />
        </>
      )}
    </button>
  );
};

export default DownloadCVButton;
