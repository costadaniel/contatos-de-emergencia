type AuthContextTypes = {
  authenticatedUser: Object | null;
  updateAuthenticatedUser: (user: Object | null) => void;
};
