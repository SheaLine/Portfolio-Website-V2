const PdfViewer = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <embed
        src="/Portfolio-Website-V2/Resume.pdf"
        width="80%"
        height="100%"
        type="application/pdf"
      />
    </div>
  );
};

export default PdfViewer;
