const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export default function MovieCard({ movie, onClick }) {
    const { title, name, poster_path, vote_average } = movie;
    const displayTitle = title || name || "Sin titulo";
    const imgSrc = poster_path ? IMAGE_BASE + poster_path : null;

    return (
        <button
            onClick={onClick}
            style={{
                textAlign: "left",
                border: "1px solid #eee",
                borderRadius: 12,
                overflow: "hidden",
                background: "white",
                cursor: "pointer",
                boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                transition: "transform 0.1s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
                <div style={{ aspectRatio: "2/3", background: "#f3f3f3" }}>
                {imgSrc ? (
                    <img 
                    src={imgSrc} 
                    alt={'Poster de ${displayTitle}'} 
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block"}}
                    loading="lazy"
                    />
                ) : (
                <div style={{ padding: 16, color: "#666"}}> 
                <em>Sin poster</em>
                </div>
            )}
                </div>
                <div style={{ padding: 12 }}>
                    <div style={{ fontWeight: 600, lineHeight: 1.2, marginBottom: 8}}> {displayTitle} </div>
                    <div style={{ fontSize: 14, color: "#555" }}> {vote_average?.toFixed?.(1) ?? "N/A"} </div>
                </div>
            </button>
            )
        }