import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Fingerprint,
  Globe,
  Lock,
  ShieldCheck,
} from "lucide-react";

const fitur = [
  {
    ikon: Lock,
    judul: "HTTP Header & SSL/TLS Analyzer",
    deskripsi:
      "Memindai konfigurasi header keamanan seperti CSP, HSTS, dan CORS, serta memeriksa validitas sertifikat SSL/TLS.",
  },
  {
    ikon: ClipboardCheck,
    judul: "OWASP ASVS Compliance Engine",
    deskripsi:
      "Matriks verifikasi interaktif berbasis OWASP ASVS Level 1 & 2 dengan perhitungan skor kepatuhan secara real-time.",
  },
  {
    ikon: Fingerprint,
    judul: "PII & Data Leakage Audit",
    deskripsi:
      "Menganalisis respons API target dari potensi kebocoran data pribadi (Personally Identifiable Information).",
  },
  {
    ikon: FileText,
    judul: "Security Scorecard & PDF Report",
    deskripsi:
      "Visualisasi tingkat risiko dan ekspor laporan audit berformat PDF secara instan.",
  },
];

const langkah = [
  "Masukkan URL target aplikasi web yang akan diaudit.",
  "Mesin memindai header keamanan dan sertifikat SSL/TLS.",
  "Isi checklist OWASP ASVS untuk menghitung skor kepatuhan.",
  "Audit kebocoran data pribadi pada respons API.",
  "Unduh security scorecard dalam format PDF.",
];

const kolom =
  "rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

export default function Beranda() {
  return (
    <>
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:p-2 focus:bg-white focus:text-slate-900"
      >
        Lewati ke konten utama
      </a>

      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
        <nav
          aria-label="Navigasi utama"
          className="mx-auto flex max-w-6xl flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold text-slate-900"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            Tripleemat
          </Link>
          <ul className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <li>
              <a
                href="#fitur"
                className="rounded text-slate-700 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Fitur
              </a>
            </li>
            <li>
              <a
                href="#cara-kerja"
                className="rounded text-slate-700 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Cara Kerja
              </a>
            </li>
            <li>
              <a
                href="#kontak"
                className="rounded text-slate-700 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Kontak
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="konten" className="flex-1">
        <section
          aria-labelledby="judul-utama"
          className="bg-gradient-to-br from-brand via-brand to-brand-dark text-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/25 px-3 py-1 text-sm font-medium text-cyan-200">
              <Globe className="h-4 w-4" aria-hidden="true" />
              OWASP ASVS · NIST SP 800-53
            </p>
            <h1
              id="judul-utama"
              className="mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl"
            >
              Automated Security &amp; Compliance Assessment
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-200">
              Tripleemat membantu security auditor, pengembang web, dan tim IT
              mengevaluasi serta menilai tingkat kepatuhan siber aplikasi web
              berdasarkan standar OWASP ASVS dan NIST SP 800-53.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#fitur"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-brand hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Jelajahi Fitur
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#kontak"
                className="inline-flex items-center gap-2 rounded-lg border border-white/60 px-5 py-3 font-semibold text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </section>

        <section id="fitur" aria-labelledby="judul-fitur" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <h2 id="judul-fitur" className="text-3xl font-bold text-slate-900">
              Fitur Utama
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Empat kemampuan inti untuk menilai keamanan dan kepatuhan
              aplikasi web Anda.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {fitur.map((f) => (
                <li key={f.judul}>
                  <article className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <f.ikon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-slate-900">
                      {f.judul}
                    </h3>
                    <p className="mt-2 text-slate-600">{f.deskripsi}</p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
            <section id="cara-kerja" aria-labelledby="judul-cara">
              <h2 id="judul-cara" className="text-3xl font-bold text-slate-900">
                Cara Kerja
              </h2>
              <ol className="mt-8 space-y-5">
                {langkah.map((l, i) => (
                  <li key={l} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand font-semibold text-white">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-slate-700">{l}</p>
                  </li>
                ))}
              </ol>
            </section>
            <aside
              aria-label="Informasi tambahan"
              className="rounded-xl bg-brand p-6 text-white"
            >
              <p className="text-lg font-semibold">Standar yang Didukung</p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300"
                    aria-hidden="true"
                  />
                  <span>OWASP ASVS Level 1 &amp; Level 2</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300"
                    aria-hidden="true"
                  />
                  <span>NIST SP 800-53</span>
                </li>
              </ul>
            </aside>
          </div>
        </div>

        <section id="kontak" aria-labelledby="judul-kontak" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <h2 id="judul-kontak" className="text-3xl font-bold text-slate-900">
              Hubungi Kami
            </h2>
            <p className="mt-3 text-slate-600">
              Sampaikan kebutuhan Anda, tim kami akan segera merespons.
            </p>
            <form className="mt-8 grid max-w-xl gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="nama" className="font-medium">Nama lengkap</label>
                <input id="nama" name="nama" type="text" required
                  autoComplete="name" className={kolom} />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-medium">Surel</label>
                <input id="email" name="email" type="email" required
                  autoComplete="email" aria-describedby="email-bantuan"
                  className={kolom} />
                <p id="email-bantuan" className="text-sm text-slate-600">
                  Gunakan alamat surel yang aktif.
                </p>
              </div>

              <fieldset className="flex flex-col gap-1">
                <legend className="font-medium">Peran</legend>
                <label>
                  <input type="radio" name="peran" value="pengguna" /> Pengguna
                </label>
                <label>
                  <input type="radio" name="peran" value="mitra" /> Mitra
                </label>
              </fieldset>

              <div className="flex flex-col gap-1">
                <label htmlFor="pesan" className="font-medium">Pesan</label>
                <textarea id="pesan" name="pesan" rows={4} className={kolom} />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Kirim
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-brand-dark text-slate-300">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 font-semibold text-white">
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            Tripleemat
          </div>
          <p>© 2026 Tripleemat</p>
        </div>
      </footer>
    </>
  );
}
