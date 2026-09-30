function formatMessage(now) {
  return "Page loaded at " + now.toISOString();
}
if (typeof document !== "undefined") {
  document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("out").textContent = formatMessage(new Date());
  });
}
if (typeof module !== "undefined") module.exports = { formatMessage };
