export function parseDomainParam(param: string) {
	param = decodeURIComponent(param);
	if (!/http(s)?:\/\//.test(param)) {
		param = 'https://' + param;
	}
	return new URL(param);
}

export const match = (param) => {
	try {
		parseDomainParam(param);
		return true;
	} catch {
		return false;
	}
};
