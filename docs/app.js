async function main() {
  async function handleCC() {
    // cors 때문에 (port가 달라서) 오류가 난다.
    document.querySelector("#box").textContent = await (
      await fetch("http://127.0.0.1:3000")
    ).text();
  }
  document.querySelector("#goodBtn").addEventListener("click", handleCC);
}

document.addEventListener("DOMContentLoaded", main);
