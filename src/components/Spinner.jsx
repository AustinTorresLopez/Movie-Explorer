export default function Spinner() {
  return (
    <div style={{display: "grid", placeItems: "center", padding: "32x"}}>
      <div
        aria-label="Cargando"
        role="status"
        style={{
          width: 40,
          height: 40,
          border: "4px solid #ddd",
          borderTopColor: "#333",
          borderRadius: "50%",
          animation: "spin 1s linear infinite"
        }}
      />
      <style>
        {'@keyframes spin { from {transform: rotate(0)} to {transform: rotate(360deg)} }'}
      </style>
    </div>
  )
}
