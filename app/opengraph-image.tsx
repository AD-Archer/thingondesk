import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "thingondesk";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const icon = await readFile(
    join(process.cwd(), "public/branding/icon-rounded.svg"),
  );
  const iconSrc = `data:image/svg+xml;base64,${Buffer.from(icon).toString(
    "base64",
  )}`;

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#ded6c4",
          color: "#251605",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: 72,
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            border: "2px solid rgba(37, 22, 5, 0.14)",
            borderRadius: 24,
            display: "flex",
            gap: 42,
            height: "100%",
            padding: 56,
            width: "100%",
          }}
        >
          <img
            alt=""
            height={190}
            src={iconSrc}
            style={{ borderRadius: 48 }}
            width={190}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                color: "#ef626c",
                fontSize: 34,
                fontWeight: 900,
                letterSpacing: 5,
                textTransform: "uppercase",
              }}
            >
              Hack Club YSWS
            </div>
            <div
              style={{
                fontSize: 112,
                fontWeight: 900,
                letterSpacing: 0,
                lineHeight: 0.92,
                marginTop: 18,
              }}
            >
              thingondesk
            </div>
            <div
              style={{
                color: "rgba(37, 22, 5, 0.72)",
                fontSize: 40,
                fontWeight: 800,
                lineHeight: 1.25,
                marginTop: 28,
                maxWidth: 720,
              }}
            >
              Make something for your desk. Get something for your desk.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
