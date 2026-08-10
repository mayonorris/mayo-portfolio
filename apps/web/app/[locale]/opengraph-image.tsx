import { ImageResponse } from "next/og";

export const alt = "Mayo Kadanga ? Economic Data Scientist & Analytics Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#f5efe6",
          color: "#171a20",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px 82px",
          width: "100%",
        }}
      >
        <div style={{ background: "#bd4d24", height: 12, width: 120 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1 }}>Mayo Kadanga</div>
          <div style={{ color: "#bd4d24", fontSize: 34, fontWeight: 700 }}>
            Economic Data Scientist & Analytics Builder
          </div>
        </div>
        <div style={{ borderTop: "2px solid #c9c0b5", fontSize: 29, paddingTop: 30 }}>
          From evidence to decisions. From models to digital systems.
        </div>
      </div>
    ),
    size,
  );
}
