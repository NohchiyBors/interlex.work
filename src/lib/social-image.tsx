import { ImageResponse } from "next/og";
import type { Locale } from "@/lib/i18n";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export const socialImageContentType = "image/png";
export const socialImageAlt = "InterLex global hub preview";

const localeLabels: Record<Locale, string> = {
  en: "English",
  ru: "Russian",
  zh: "Chinese",
  it: "Italian",
  fr: "French",
  ka: "Georgian",
  de: "German",
  ar: "Arabic",
  tr: "Turkish",
  es: "Spanish",
};

export function createSocialImage(locale: Locale) {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background: "linear-gradient(135deg, #f7f3ea 0%, #f3ede0 54%, #efe6d1 100%)",
          color: "#08152e",
          fontFamily: "Georgia, serif",
          padding: "64px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "26px",
            border: "1px solid rgba(8, 21, 46, 0.1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "84px",
            height: "100%",
            width: "14px",
            background: "#b39247",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div
              style={{
                display: "flex",
                fontSize: 24,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "#8f6a1f",
              }}
            >
              {"InterLex Global Hub"}
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: "860px",
                fontSize: 84,
                lineHeight: 0.95,
                letterSpacing: "-0.06em",
              }}
            >
              {"Cross-border legal and business advisory for Kazakhstan and Georgia."}
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: "760px",
                fontSize: 30,
                lineHeight: 1.35,
                color: "rgba(8, 21, 46, 0.72)",
              }}
            >
              {"Multilingual intake, brand-level positioning, and clean routing into the right market-specific site."}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: 24,
                color: "rgba(8, 21, 46, 0.68)",
              }}
            >
              <div style={{ display: "flex" }}>{`${localeLabels[locale]} route`}</div>
              <div style={{ display: "flex" }}>{"EN | RU | ZH | FR | DE | AR | TR | ES | IT | KA"}</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "10px",
                textAlign: "right",
              }}
            >
              <div style={{ display: "flex", fontSize: 46, fontWeight: 700 }}>{"interlex.work"}</div>
              <div
                style={{
                  display: "flex",
                  fontSize: 22,
                  color: "rgba(8, 21, 46, 0.68)",
                }}
              >
                {"interlex.kz | interlex.ge"}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
