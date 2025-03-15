const oidcConfig = {
  authority: 'http://localhost:8090/realms/chatter',
  client_id: 'chatter-web',
  redirect_uri: 'http://localhost:3000',
  response_type: 'code',
  scope: 'openid profile',
};

export default oidcConfig;
