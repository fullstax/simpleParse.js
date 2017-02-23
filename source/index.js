// @flow
export function parseParams(url:String=window.location.search) {
	const strippedQuestionMarkSplit:Array<String> = url.replace(/^\?/,'').split('&'),
		objectified:Object = {}
	strippedQuestionMarkSplit.forEach( kvPair => {
		const [ key, value ] = kvPair.split('=')
		objectified[key] = decodeURIComponent(value)
	})
	return objectified
}

export function encodeParams(dataObject:Object={}) {
	const parametized:Array<String> = []
	for(let key in dataObject) {
		parametized.push(`${key}=${dataObject[key]}`)
	}
	return `?${parametized.join('&')}`
}

window.parseParams = parseParams
window.encodeParams = encodeParams