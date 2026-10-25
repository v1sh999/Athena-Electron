export default function formatTimeLeft(ms) {
    const seconds = Math.floor((ms / 1000) % 60)
      .toString()
      .padStart(2, "0");

    const minutes = Math.floor((ms / (1000 * 60)) % 60)
      .toString()
      .padStart(2, "0");

    const hours = Math.floor(ms / (1000 * 60 * 60))
      .toString()
      .padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  }