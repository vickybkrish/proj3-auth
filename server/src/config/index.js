export const dbConfig = {
  secret: 'SomeRandomSecretString',
  db: 'mongodb://localhost:27017/auth',
};

export const emailConfig = {
  service: 'Gmail',
  auth: {
    user: '',
    pass: '',
  },
};

export const ROOT_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000';
