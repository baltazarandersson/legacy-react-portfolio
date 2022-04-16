export function useNavigate(page) {
  let pageHeight = window.innerHeight;
  window.scrollTo({ top: pageHeight * page, behavior: "smooth" });
}
