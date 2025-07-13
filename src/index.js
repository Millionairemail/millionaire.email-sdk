function verifyEmailIdentity(email) {
  const domain = email.split('@')[1];
  const isMillionaire = domain === 'millionaire.email';

  return {
    email,
    verified: isMillionaire,
    method: isMillionaire ? 'S/MIME (simulated)' : null,
    ens: isMillionaire ? 'unknown.eth' : null,
    issued_by: isMillionaire ? 'Millionaire.email CA (stub)' : null,
  };
}

module.exports = { verifyEmailIdentity };
