const PdfViewer = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <embed
        src="/Portfolio-Website-V2/Resume.pdf"
        className="w-full h-full"
        type="application/pdf"
      />
    </div>
  );
};

export default PdfViewer;
