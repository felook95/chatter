const oidcConfig = {
  authority: 'http://localhost:8090/realms/chatter',
  client_id: 'chatter-web',
  redirect_uri: 'http://localhost:3000/auth_callback',
  response_type: 'code',
  scope: 'openid profile',
  post_logout_redirect_uri: 'http://localhost:3000',
};

export default oidcConfig;
