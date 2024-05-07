/* eslint-disable no-console */
export async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error("couldn't copy text: ", error);
  }
}
