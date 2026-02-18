import { useState } from "react";
import { Mail, Instagram, Phone } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ebbaImg from "@/assets/Ebba.jpg";
import billyImg from "@/assets/Billy_delat_pa_tre.jpeg";

const navLinks = [
  { label: "Gallery", href: "#gallery" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const galleryImages = [
  {
    src: billyImg,
    title: "Billy delat på tre",
    role: "Role TBD",
    credit: "Photo credit TBD",
  },
];

const theatreCredits = [
  {
    production: "Kreon",
    role: "Actor",
    director: "",
    venue: "",
    year: "",
  },
  {
    production: "Billy delat på tre",
    role: "Actor",
    director: "TBD",
    venue: "Stockholms konstnärliga högskola",
    year: "2025",
  },
  {
    production: "Ingénue",
    role: "Director, Writer",
    director: "Ebba König Winqvist",
    venue: "Telefonfabriken",
    year: "2004",
  },
];

const Index = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-serif text-lg tracking-wide text-foreground"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
          >
            Ebba König Winqvist
          </button>
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
          <div className="w-64 h-80 md:w-80 md:h-[26rem] overflow-hidden mb-10">
            <img
              src={ebbaImg}
              alt="Ebba König Winqvist"
              className="w-full h-full object-cover object-top grayscale"
            />
          </div>
          <h1
            className="text-4xl md:text-6xl tracking-wide mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Ebba König Winqvist
          </h1>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Actor
          </p>
        </div>
      </header>

      {/* Gallery */}
      <section id="gallery" className="py-16 md:py-24 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl mb-12 text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="aspect-[3/4] overflow-hidden group cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog
        open={lightbox !== null}
        onOpenChange={() => setLightbox(null)}
      >
        <DialogContent className="max-w-3xl p-2 bg-background border-border">
          {lightbox !== null && (
            <div>
              <img
                src={galleryImages[lightbox].src}
                alt={galleryImages[lightbox].title}
                className="w-full max-h-[80vh] object-contain"
              />
              <div className="p-4 text-center">
                <p className="font-medium text-foreground">
                  {galleryImages[lightbox].title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {galleryImages[lightbox].role} · {galleryImages[lightbox].credit}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Resume */}
      <section id="resume" className="py-16 md:py-24 scroll-mt-20 bg-secondary/50">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl mb-12 text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            Theatre Credits
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Production</TableHead>
                <TableHead>Role</TableHead>
                <TableHead className="hidden md:table-cell">Director</TableHead>
                <TableHead className="hidden md:table-cell">Venue</TableHead>
                <TableHead>Year</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {theatreCredits.map((c, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{c.production}</TableCell>
                  <TableCell>{c.role}</TableCell>
                  <TableCell className="hidden md:table-cell">{c.director}</TableCell>
                  <TableCell className="hidden md:table-cell">{c.venue}</TableCell>
                  <TableCell>{c.year}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl mb-12"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            Contact
          </h2>
          <div className="flex flex-col items-center gap-4 text-muted-foreground">
            <a
              href="mailto:ebba@example.com"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              ebba@example.com
            </a>
            <a
              href="tel:+46700000000"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              +46 70 000 00 00
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @ebbakonigwinqvist
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ebba König Winqvist. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
