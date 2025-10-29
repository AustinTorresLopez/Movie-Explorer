export default function ErrorMessage({ message = "Ocurrio un error."}) {
    return (
        <div
            role="alert"
            style={{
                background: "#ffe5e5",
                color: "#b00020",
                border: "1px solid #ffb3b3",
                padding: "12px 16px",
                borderRadius: 8,
                margin: "16px auto",
                maxWidth: 600,
            }}
        >
            <strong>Error:</strong> {message}
        </div>
    )
}