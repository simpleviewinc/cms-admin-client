//@ts-check
const { query, nullToUndefined } = require("@simpleview/sv-graphql-client");

/**
 * @typedef BaseArgs
 * @property {string} fields
 * @property {object} [context]
 * @property {string} [context.acct_id]
 * @property {string} [context.token]
 * @property {object} [headers]
*/

class CmsAdminPrefix {
	constructor({ graphUrl, graphServer }) {
		this.name = "cmsAdmin";
		this._graphUrl = graphUrl;
		this._graphServer = graphServer;
	}
	/**
	 * @typedef DeployClientInput
	 * @property {string} client
	 * @property {string} env
	 * @property {string} [branch]
	 * @property {string} [alias]
	 * @property {string} [remote]
	 * @property {string} [push_notification_email]
	*/
	/**
	 * @param {BaseArgs & { input: DeployClientInput }} args
	*/
	async deploy_client({ input, fields, context, headers }) {
		context = context || this._graphServer.context;

		const variables = {
			input
		}

		const response = await query({
			query : `
				mutation($input: cms_admin_deploy_client_input!) {
					cms_admin {
						deploy_client(input: $input) {
							${fields}
						}
					}
				}
			`,
			variables,
			url : this._graphUrl,
			token : context.token,
			headers
		});

		const returnData = response.cms_admin.deploy_client;
		
		nullToUndefined(returnData);
		
		return returnData;
	}
	/**
	 * @typedef ProcessPullRequestInput
	 * @property {string} client
	 * @property {number} num
	*/
	/**
	 * @param {BaseArgs & { input : ProcessPullRequestInput }} args
	 */
	async process_pull_request({ input, fields, context, headers }) {
		context = context || this._graphServer.context;

		const variables = {
			input
		}

		const response = await query({
			query : `
				mutation($input: cms_admin_process_pull_request_input!) {
					cms_admin {
						process_pull_request(input: $input) {
							${fields}
						}
					}
				}
			`,
			variables,
			url : this._graphUrl,
			token : context.token,
			headers
		});

		const returnData = response.cms_admin.process_pull_request;
		
		nullToUndefined(returnData);
		
		return returnData;
	}
	/**
	 * @typedef UnDeployClientInput
	 * @property {string} client
	 * @property {string} env
	*/
	/**
	 * @param {BaseArgs & { input: UnDeployClientInput }} args
	*/
	async undeploy_client({ input, fields, context, headers }) {
		context = context || this._graphServer.context;

		const variables = {
			input
		}

		const response = await query({
			query : `
				mutation($input: cms_admin_undeploy_client_input!) {
					cms_admin {
						undeploy_client(input: $input) {
							${fields}
						}
					}
				}
			`,
			variables,
			url : this._graphUrl,
			token : context.token,
			headers
		});

		const returnData = response.cms_admin.undeploy_client;
		
		nullToUndefined(returnData);
		
		return returnData;
	}
}

module.exports = CmsAdminPrefix;