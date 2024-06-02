const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF, DEPLOY_REPOSITORY,
} = process.env;

module.exports = {
  deploy: {
    production: {
      user: DEPLOY_USER,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPOSITORY,
      path: DEPLOY_PATH,
      'pre-deploy': `scp ./.env ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}`,
      'post-deploy': 'npm ci && npm run build',
    },
  },
};
