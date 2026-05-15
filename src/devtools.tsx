import panelHTML from "url:./devtools-panel/index.html"

chrome.devtools.panels.create(
  "Tiny Reader",
  null,
  panelHTML.split("/").pop()
)

export default function DevTools() {
  return <div>DevTools page loaded</div>
}
