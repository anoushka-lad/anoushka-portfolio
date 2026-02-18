const CaseStudyFooter = () => {
  return (
    <footer
      className="section-padding"
      style={{ paddingTop: "59px", paddingBottom: "79px" }}
    >
      <div
        className="flex items-center justify-between font-body mx-auto"
        style={{ fontSize: "14px", color: "#343434", width: "66%" }}
      >
        <a
          href="https://www.linkedin.com/in/anoushkalad/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity duration-200 hover:opacity-60"
        >
          LinkedIn
        </a>
        <span style={{ color: "#C1BFBA" }} aria-hidden="true">·</span>
        <a
          href="/resume"
          className="transition-opacity duration-200 hover:opacity-60"
        >
          Resume
        </a>
        <span style={{ color: "#C1BFBA" }} aria-hidden="true">·</span>
        <a
          href="mailto:anoulad@gmail.com"
          className="transition-opacity duration-200 hover:opacity-60"
        >
          Email
        </a>
      </div>
    </footer>
  );
};

export default CaseStudyFooter;
