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
import ebbaImg from "@/assets/Ebba_beskuren.jpg";
import billyImg from "@/assets/Billy_delat_pa_tre.jpeg";
import duoImg from "@/assets/Duo.jpg";
import grekImg from "@/assets/Ebba_grek.jpg";
import medeaImg from "@/assets/Medea_fall.jpg";
import medeaSittImg from "@/assets/Medea_sitt.jpg";
import medeaTarImg from "@/assets/Medea_tar.jpg";

const navLinks = [
  { label: "Om", href: "#about" },
  { label: "Galleri", href: "#gallery" },
  { label: "Produktioner", href: "#resume" },
  { label: "Kontakt", href: "#contact" },
];

const galleryImages = [
  {
    src: billyImg,
    title: "Billy delat på tre",
    role: "Roll: Billy",
    credit: "Foto: Per Bolkert",
  },
  {
    src: duoImg,
    title: "I spegeln",
    role: " ",
    credit: "Foto: Mehdi Arabi",
  },
  {
    src: grekImg,
    title: "Ebba grek",
    role: "Roll: Hekabe",
    credit: "Foto: Hjalmar af Klitberg",
  },
  {
    src: medeaImg,
    title: "Medea",
    role: "Roll: Medea",
    credit: "Foto: Hjalmar af Klintberg",
  },
  {
    src: medeaSittImg,
    title: "Medea",
    role: "Roll: Medea",
    credit: "Foto: Hjalmar af Klintberg",
  },
  {
    src: medeaTarImg,
    title: "Medea",
    role: "Roll: Medea",
    credit: "Foto: Hjalmar af Klintberg",
  },
];

const theatreCredits = [
  {
    production: "TOO LATE: KREON ANTIGONE",
    role: "Skådespelare - Antigone",
    director: "Juliann Louise Larsen",
    venue: "Turteatern",
    year: "2026",
  },
  {
    production: "Medea (Departure)",
    role: "Regissör, dramatiker, skådespelare",
    director: "Ebba König Winqvist",
    venue: "Stockholms konstnärliga högskola",
    year: "2025",
  },
  {
    production: "Billy delat på tre",
    role: "Skådespelare - Billy",
    director: "TBD",
    venue: "Stockholms konstnärliga högskola",
    year: "2025",
  },
  {
    production: "I spegeln",
    role: "Skådespelare",
    director: "Samskapad",
    venue: "GBG Mime fest",
    year: "2025",
  },
  {
    production: "Ingénue",
    role: "Regissör, dramatiker",
    director: "Ebba König Winqvist",
    venue: "Telefonfabriken",
    year: "2024",
  },
  {
    production: "Och det vart morgon",
    role: "Regissör, dramatiker",
    director: "Ebba König Winqvist",
    venue: "Audioverk / SCEN DEMON",
    year: "2023",
  },
  {
    production: "Tango",
    role: "Skådespelare - Eleonora",
    director: "Tomas Neumann",
    venue: "Teater Alma",
    year: "2018",
  },
  {
    production: "Balkongen",
    role: "Skådespelare - Chantal",
    director: "Jurek Sawka",
    venue: "Teater Alma",
    year: "2017",
  },
  {
    production: "Mästaren och Margarita",
    role: "Skådespelare - Woland",
    director: "Ivan Mathias Petersson",
    venue: "Teater Alma",
    year: "2016",
  },
];

const Index = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [audioOpen, setAudioOpen] = useState(false);

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
            Kreatör och aktör
          </p>
        </div>
      </header>
      
      {/* Om Ebba */}
      <section id="about" className="py-16 md:py-24 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl mb-8 text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            Om Ebba
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Ebba är en rörelsebaserad kreatör och aktör som utifrån sitt intresse för det förhöjda och outtalade verkar för en konst som utmanar både tanke och ett konventionellt formspråk. Filosofiska frågeställningar får gärna möta det absurda och komiska, ofta med samhällskritiska undertoner. Ebba skapar gärna kollektivt och drev under flera års tid scenen Teater Alma i Stockholm.
            </p>
            <p>
              Utbildad vid Stockholms Konstnärliga Högskola med inriktning mimskådespeleri mellan 2023–2026. Har tidigare gått Biskops Arnös projektlinje i Att skriva Dramatik, Stockholms Elementära teaterskola samt teatervetenskap vid Stockholms universitet.
            </p>
          </div>
        </div>
      </section>
      
      {/* Gallery */}
      <section id="gallery" className="py-16 md:py-24 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl mb-12 text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            Galleri
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
      
      {/* Audio Dialog */}
      <Dialog open={audioOpen} onOpenChange={setAudioOpen}>
        <DialogContent className="max-w-2xl p-6 bg-background border-border">
          <div className="space-y-4">
            <h3
              className="text-2xl text-center"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
            >
              Och det vart morgon
            </h3>

            <p className="text-center text-muted-foreground leading-relaxed">
              Ljudverk av Ebba König Winqvist. Publicerat via SCEN DEMON.
            </p>

            <iframe
              title="Och det vart morgon - SoundCloud"
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1495264783&color=080000"
              className="w-full"
            />

            <div className="text-center">
              <a
                href="https://soundcloud.com/scendemon/och-det-vart-morgon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
              >
                Öppna på SoundCloud
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Resume */}

      {/* Produktioner */}
      <section id="resume" className="py-16 md:py-24 scroll-mt-20 bg-secondary/50">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl mb-12 text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            Produktioner
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produktion</TableHead>
                <TableHead>Roll</TableHead>
                <TableHead className="hidden md:table-cell">Regissör</TableHead>
                <TableHead className="hidden md:table-cell">Scen</TableHead>
                <TableHead>År</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {theatreCredits.map((c, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">
                    <div className="flex flex-col items-start gap-2">
                      <div>
                        {c.production === "TOO LATE: KREON ANTIGONE" ? (
                          <>TOO LATE: KREON <span className="line-through">ANTIGONE</span></>
                        ) : (
                          c.production
                        )}
                      </div>
                  
                      {c.production === "Och det vart morgon" && (
                        <button
                          onClick={() => setAudioOpen(true)}
                          className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Lyssna
                        </button>
                      )}
                    </div>
                  </TableCell>
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
            Kontakt
          </h2>
          <div className="flex flex-col items-center gap-4 text-muted-foreground">
            <a
              href="mailto:ebba.konig.winqvist@gmail.com"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              ebba.konig.winqvist@gmail.com
            </a>
            <a
              href="tel:+46738290180"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              +46 73 829 01 80
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
          © {new Date().getFullYear()} Ebba König Winqvist. Alla rättigheter förbehållna.
        </div>
      </footer>
    </div>
  );
};

export default Index;
