export const renderIfElse = (condition, ifCallback, elseCallback) =>
  condition() ? ifCallback() : elseCallback();

export const renderIf = (condition, componentCallback) =>
  renderIfElse(condition, componentCallback, () => null);

export const exists = field => field !== undefined && field !== null;

export const isValidValue = field => exists(field) && field !== '0' && field !== '' && field !== 0;

export const caseInsensitiveEquals = (lhs, rhs) => lhs.toLowerCase() === rhs.toLowerCase();
