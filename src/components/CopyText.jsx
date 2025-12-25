import { useState } from "react";
import { LuCopy, LuCheck } from "react-icons/lu";

function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = (e) => {
    e.preventDefault(); // ⛔ stop mail app
    e.stopPropagation(); // ⛔ stop bubbling

    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <span
      onClick={copyEmail}
      style={{
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
      }}
    >
      {email}
      {copied ? (
        <LuCheck style={{ color: "var(--color-blue)" }} size={16} />
      ) : (
        <LuCopy size={16} />
      )}
    </span>
  );
}

export default CopyEmail;
