export function isEmpty(d)
{

    return (d !== null && d !== '' && d !== 'undefined') ? d : "---"
}

export const removeEmpty = obj => Object.entries(obj).reduce((a, [k, v]) => (v == null || v == "undefined" ? a : (a[k] = v, a)), {});
export const toJson = obj => JSON.stringify(removeEmpty(obj))

export const replaceEmpty = obj => Object.entries(obj).map((p)=>(p !== "undefined" ? p : "---"))

export const removeProps = (obj, props) => props.forEach(prop => delete obj[prop])

export function cleanup(obj)
{
    const removeFields = ['date_updated', 'date_created']
    removeProps(obj, removeFields)
    return obj
}

export async function post(url, payload, token, onResponse)
{
    var body = JSON.stringify({
            Token: token,
            Payload: payload
        })

    fetch(url, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: body
    })
    .then((response) => {
        response.json().then((data) => {
            if (onResponse) onResponse(data)
        })
    })
    .catch((err) => {
        if (onResponse) onResponse(err)
        console.error(err);
    });
}