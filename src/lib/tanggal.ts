export function Tanggal(tanggal: string) : string {
  const tanggalBaru = new Date(tanggal).toLocaleString("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).toString().split("/").reverse().join("-");
  return tanggalBaru
}