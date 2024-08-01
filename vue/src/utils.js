export function isEmpty(d)
{

    return (d !== null && d !== '' && d !== 'undefined') ? d : "---"
}

export const removeEmpty = obj => Object.entries(obj).reduce((a, [k, v]) => (v == null || v == "undefined" ? a : (a[k] = v, a)), {});
export const toJson = obj => JSON.stringify(removeEmpty(obj))

export const replaceEmpty = obj => Object.entries(obj).map((p)=>(p !== "undefined" ? p : "---"))

export const removeProps = (obj, props) => props.forEach(prop => delete obj[prop])