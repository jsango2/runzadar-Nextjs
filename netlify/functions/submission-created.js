const https = require("https");

const ALLOWED_FORM_NAMES = new Set(["contact", "heroForm"]);

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function parseEventBody(eventBody) {
  try {
    return JSON.parse(eventBody || "{}");
  } catch {
    return {};
  }
}

function pickField(data, keys) {
  for (const key of keys) {
    if (data[key]) return String(data[key]).trim();
  }
  return "";
}

function callResend({ apiKey, payload }) {
  const body = JSON.stringify(payload);

  return new Promise((resolve, reject) => {
    const req = https.request(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(body),
        },
      },
      (res) => {
        let rawData = "";
        res.on("data", (chunk) => {
          rawData += chunk;
        });
        res.on("end", () => {
          const ok = res.statusCode >= 200 && res.statusCode < 300;
          if (!ok) {
            return reject(
              new Error(`Resend error ${res.statusCode}: ${rawData}`),
            );
          }
          return resolve(rawData);
        });
      },
    );

    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

function buildEmailHtml({ fullName, firstName, birthYear }) {
  const greetingName = escapeHtml(firstName || fullName || "");
  const participantLine = fullName
    ? `<p style="margin:0 0 6px 0;"><strong>Polaznik:</strong> ${escapeHtml(
        fullName,
      )}</p>`
    : "";
  const birthYearLine = birthYear
    ? `<p style="margin:0;"><strong>Godina rođenja:</strong> ${escapeHtml(
        birthYear,
      )}</p>`
    : "";

  return `<!doctype html>
<html lang="hr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Škola trčanja Zadar</title>
  </head>
  <body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,Helvetica,sans-serif;color:#1b1f23;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f6f8;padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="620" cellspacing="0" cellpadding="0" style="max-width:620px;background:#ffffff;border-radius:14px;overflow:hidden;">
            <tr>
              <td style="background:#003f5c;padding:24px 28px;color:#ffffff;">
                <p style="margin:0;font-size:12px;letter-spacing:.8px;text-transform:uppercase;opacity:.9;">Škola trčanja Zadar</p>
                <h1 style="margin:8px 0 0 0;font-size:24px;line-height:1.25;">Hvala na prijavi za besplatni trening</h1>
              </td>
            </tr>

            <tr>
              <td style="padding:24px 28px;">
                <p style="margin:0 0 16px 0;">Poštovani${
                  greetingName ? ` ${greetingName}` : ""
                },</p>
                <p style="margin:0 0 14px 0;">
                  zahvaljujemo na ukazanom povjerenju i prijavi u Školu trčanja Zadar.
                  Želja nam je da vam trčanje postane ugodna navika, pa ćemo vam ga približiti postupno,
                  kroz kvalitetan odabir vježbi i opterećenja.
                </p>
                <p style="margin:0 0 20px 0;">
                  Kad se trening kvalitetno rasporedi kroz duži period, do cilja se zaista dolazi s osmijehom.
                </p>

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f8fbff;border:1px solid #e4edf5;border-radius:10px;padding:14px;">
                  <tr>
                    <td>
                      <p style="margin:0 0 8px 0;font-weight:bold;">Vaši podaci prijave</p>
                      ${participantLine}
                      ${birthYearLine}
                    </td>
                  </tr>
                </table>

                <h2 style="margin:22px 0 10px 0;font-size:18px;color:#003f5c;">Raspored treninga (sljedeći tjedan)</h2>
                <p style="margin:0 0 6px 0;"><strong>Ujutro:</strong></p>
                <p style="margin:0 0 12px 0;">Ponedjeljak / Srijeda / Subota - 8:00, Park Vladimira Nazora (sredina parka, 50 m od ribica)</p>

                <p style="margin:0 0 6px 0;"><strong>Popodne:</strong></p>
                <ul style="margin:0 0 12px 20px;padding:0;">
                  <li style="margin:0 0 4px 0;">Ponedjeljak - 20:00, Park Vladimira Nazora</li>
                  <li style="margin:0 0 4px 0;">Utorak - 20:00, Park Vladimira Nazora</li>
                  <li style="margin:0 0 4px 0;">Srijeda - 20:00, Atletska staza Višnjik (iza zapadnog gola, uz skakalište u vis)</li>
                  <li style="margin:0 0 4px 0;">Četvrtak - 20:00, Park Vladimira Nazora</li>
                  <li style="margin:0 0 4px 0;">Petak - 19:30, Park Vladimira Nazora</li>
                </ul>

                <p style="margin:0 0 12px 0;"><strong>Nedjelja:</strong> nema treninga.</p>
                <p style="margin:0 0 18px 0;">Dođite na bilo koji od navedenih termina. Prvi treninzi su besplatni.</p>

                <h2 style="margin:22px 0 10px 0;font-size:18px;color:#003f5c;">Članarina nakon probnih treninga</h2>
                <p style="margin:0 0 16px 0;">Mjesečna članarina iznosi <strong>28 EUR</strong> (za studente <strong>24 EUR</strong>).</p>

                <h2 style="margin:22px 0 10px 0;font-size:18px;color:#003f5c;">Facebook grupa</h2>
                <p style="margin:0 0 16px 0;">
                  Aktualna događanja možete pratiti i u grupi:
                  <a href="https://www.facebook.com/groups/690783747698491" style="color:#0a66c2;">facebook.com/groups/690783747698491</a>
                </p>

                <h2 style="margin:22px 0 10px 0;font-size:18px;color:#003f5c;">Podaci za uplatu članarine</h2>
                <p style="margin:0 0 4px 0;"><strong>Primatelj:</strong> SPORT ZONE j.d.o.o.</p>
                <p style="margin:0 0 4px 0;"><strong>Adresa:</strong> Ante Starčevića 8, Zadar</p>
                <p style="margin:0 0 4px 0;"><strong>IBAN:</strong> HR4924840081135097153</p>
                <p style="margin:0 0 16px 0;"><strong>Opis plaćanja:</strong> vaše ime i prezime</p>

                <p style="margin:0 0 8px 0;">Slobodno se javite ako trebate dodatne informacije.</p>
                <p style="margin:0;">Hvala,<br />Jure Šango<br /><strong>Škola trčanja Zadar</strong></p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function buildEmailText({ fullName, firstName, birthYear }) {
  const greetingName = firstName || fullName || "";
  const participant = fullName ? `Polaznik: ${fullName}\n` : "";
  const year = birthYear ? `Godina rođenja: ${birthYear}\n` : "";

  return `Poštovani${greetingName ? ` ${greetingName}` : ""},

zahvaljujemo na prijavi u Školu trčanja Zadar.

${participant}${year}
Raspored treninga (sljedeći tjedan):

Ujutro:
- Ponedjeljak / Srijeda / Subota - 8:00, Park Vladimira Nazora (sredina parka, 50 m od ribica)

Popodne:
- Ponedjeljak - 20:00, Park Vladimira Nazora
- Utorak - 20:00, Park Vladimira Nazora
- Srijeda - 20:00, Atletska staza Višnjik (iza zapadnog gola, uz skakalište u vis)
- Četvrtak - 20:00, Park Vladimira Nazora
- Petak - 19:30, Park Vladimira Nazora

Nedjelja: nema treninga.

Dođite na bilo koji od navedenih termina. Prvi treninzi su besplatni.

Nakon probnih treninga, mjesečna članarina iznosi 28 EUR (za studente 24 EUR).

Facebook grupa:
https://www.facebook.com/groups/690783747698491

Podaci za uplatu članarine:
- PRIMATELJ: SPORT ZONE j.d.o.o.
- ADRESA: Ante Starčevića 8, Zadar
- IBAN: HR4924840081135097153
- Opis plaćanja: vaše ime i prezime

Slobodno se javite ako trebate dodatne informacije.

Hvala,
Jure Šango
Škola trčanja Zadar`;
}

exports.handler = async (event) => {
  const body = parseEventBody(event.body);
  const payload = body.payload || body || {};
  const data = payload.data || {};
  const formName =
    payload.form_name || data["form-name"] || data.form_name || "";

  if (!ALLOWED_FORM_NAMES.has(formName)) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `No action for form "${formName || "unknown"}".`,
      }),
    };
  }

  const email = pickField(data, ["email", "Email", "e-mail"]).toLowerCase();
  if (!email) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Submission has no recipient email." }),
    };
  }

  const firstName = pickField(data, ["ime", "Ime", "firstName", "first_name"]);
  const lastName = pickField(data, [
    "prezime",
    "Prezime",
    "lastName",
    "last_name",
  ]);
  const birthYear = pickField(data, [
    "Godina rodjenja",
    "Godina rođenja",
    "god rođ",
    "godina",
  ]);
  const fullName = [firstName, lastName].filter(Boolean).join(" ");

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const replyTo = process.env.RESEND_REPLY_TO;

  if (!apiKey || !fromEmail) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "RESEND_API_KEY and RESEND_FROM_EMAIL must be configured.",
      }),
    };
  }

  const subject = "Potvrda prijave - Škola trčanja Zadar";
  const html = buildEmailHtml({ fullName, firstName, birthYear });
  const text = buildEmailText({ fullName, firstName, birthYear });

  const resendPayload = {
    from: fromEmail,
    to: [email],
    subject,
    html,
    text,
  };

  if (replyTo) {
    resendPayload.reply_to = replyTo;
  }

  try {
    await callResend({ apiKey, payload: resendPayload });
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Auto-reply sent." }),
    };
  } catch (error) {
    console.error("Failed to send auto-reply email", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to send auto-reply.",
        details: error.message,
      }),
    };
  }
};
