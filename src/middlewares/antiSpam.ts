const users: { [key: string]: number } = {};

export function antiSpam(user: string): boolean {
  const now = Date.now();
  if (users[user] && now - users[user] < 5000) {
    return true; // User is spamming
  }
  users[user] = now;
  return false;
}
