const Footer = () => {
  return (
    <footer className="section-padding py-16 border-t border-border">
      <div className="case-column">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h3 className="font-serif text-2xl font-medium text-foreground mb-2">
              Let's work together
            </h3>
            <p className="text-muted-foreground">
              Available for freelance projects and collaborations.
            </p>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-4">
            <a 
              href="mailto:hello@anoushka.design" 
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              hello@anoushka.design
            </a>
            <div className="flex gap-6">
              <a 
                href="#" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="#" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Dribbble
              </a>
              <a 
                href="#" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Anoushka. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed with care
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
