export default function LatihanAudit() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Katalog Alat Laboratorium</h1>
      <img src="/next.svg" alt="" width={120} height={24} />
      <p className="text-gray-700">Stok diperbarui setiap hari.</p>
      <label htmlFor="cari" className="block font-medium">
        Cari alat
      </label>
      <input id="cari" type="search" className="border p-2" />
      <button aria-label="Cari" className="ml-2 border p-2">
        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">
          <circle cx="7" cy="7" r="5" stroke="currentColor" fill="none" />
        </svg>
      </button>
    </div>
  );
}
