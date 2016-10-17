/* eslint-disable no-process-env */
const config = {
  app: {
		name: process.env.npm_package_name,
		version: process.env.npm_package_version,
    host: process.env.HOST,
    port: process.env.PORT
  },
	express: {
		log: {
			enable: ['false', '0'].indexOf(process.env.EXPRESS_LOG_ENABLE || 'false') === -1,
			format: process.env.EXPRESS_LOG_FORMAT || 'tiny',
			minimumHttpStatusCode: parseInt(process.env.EXPRESS_MINIMUM_HTTP_STATUS_CODE, 10) || 400,
		}
	},
	node: {
		version: process.version
	}
};

export default config;
