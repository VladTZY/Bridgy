export default function getExtension(filename) {
  return filename.split(".").pop().toLowerCase();
}
