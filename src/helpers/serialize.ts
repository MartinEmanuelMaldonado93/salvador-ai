export function serialize(obj: any) {
	return JSON.parse(JSON.stringify(obj));
}