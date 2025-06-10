import Contentstack, {
	QueryOperation,
	Region,
} from "@contentstack/delivery-sdk";

export const Stack = Contentstack.stack({
	apiKey: process.env.CONTENTSTACK_API_KEY as string,
	deliveryToken: process.env.CONTENTSTACK_DELIVERY_TOKEN as string,
	environment: process.env.CONTENTSTACK_ENVIRONMENT as string,
	branch: process.env.CONTENTSTACK_BRANCH,
	host: process.env.CONTENTSTACK_HOST,
	region: Region.EU,
});

export const getData = async ({
	contentTypeUid,
	referenceFieldPath,
	condition,
	params,
	queries,
	msg,
	includeAllReferences = false,
	includeCount = false,
}: {
	contentTypeUid: string;
	referenceFieldPath?: string;
	condition?: { key: string; value: string }[];
	params?: { key: string; value: string }[];
	queries?: { key: string; value: { [key: string]: string } }[];
	msg?: string;
	includeAllReferences?: boolean;
	includeCount?: boolean;
}) => {
	msg && console.log("ECONNRESET :::::::::::::::::::::::::::::::::::", msg);

	try {
		const query = Stack.contentType(contentTypeUid).entry();

		if (referenceFieldPath) {
			query.includeReference(referenceFieldPath);
		}
		if (params && params.length > 0) {
			for (const el of params) {
				if (el.key !== undefined) {
					query.addParams({ [el.key]: el.value });
				}
			}
		}

		if (condition && condition.length > 0) {
			const conditionQuery = query.query();
			for (const el of condition) {
				if (el.key !== undefined) {
					conditionQuery.where(el.key, QueryOperation.EQUALS, el.value);
				}
			}
		}
		if (includeAllReferences) {
			query.addParams({ include_all: true });
		}
		if (queries && queries.length > 0) {
			query.query(queries);
		}
		if (includeCount) {
			query.includeCount();
		}

		const queryResult = await query.find();
		const result = includeCount
			? [queryResult.entries, queryResult.count]
			: queryResult.entries;

		return result;
	} catch (error) {
		console.log("####Request Failing after retry:", error);
		throw error;
	}
};

export default Stack;
