const rawInviteOnlyAppUrl = process.env.NEXT_PUBLIC_INVITE_ONLY_APP_URL?.trim();

function validateInviteOnlyAppUrl(value: string | undefined) {
  if (!value) return undefined;

  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new Error(
      "NEXT_PUBLIC_INVITE_ONLY_APP_URL must be an absolute HTTPS URL without credentials, query parameters, or fragments.",
    );
  }

  if (url.protocol !== "https:" || url.username || url.password || url.search || url.hash) {
    throw new Error(
      "NEXT_PUBLIC_INVITE_ONLY_APP_URL must be an absolute HTTPS URL without credentials, query parameters, or fragments.",
    );
  }

  return url.href;
}

export const inviteOnlyAppUrl = validateInviteOnlyAppUrl(rawInviteOnlyAppUrl);
