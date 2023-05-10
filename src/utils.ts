import { Configuration } from "./interfaces";

// This function is used to compose an URL targeting a GlouGlou service.
export function composeURL(fromSettings: Configuration, target: string, parameters?: { [attr: string]: any }) {
    const hasURLParameters = parameters !== undefined && JSON.stringify(parameters) !== "{}";
    const stringifiedURLParameters = hasURLParameters ? fromJSONToKVArray(parameters || {}).map((entry, i) => `${i > 0 ? "&" : ""}${entry[0]}=${encodeURIComponent(entry[1])}`).join("") : ""

    return `http${fromSettings.secure ? "s" : ""}://${fromSettings.domain}${fromSettings.port !== undefined ? `:${fromSettings.port}` : ""}/${target}${hasURLParameters ? "?" : ""}${stringifiedURLParameters}`;
}

function fromJSONToKVArray(object: { [attr: string]: any }) {
    const output = [];
    for (const itemName in object) {
        output.push([itemName, object[itemName]]);
    }

    return output;
}

// This function is used to send a request to the remote GlouGlou instance
export async function sendRequest(composedURL: string) {
    const output = await fetch(composedURL);
    return {
        ok: output.status === 200,
        code: output.statusText,
        body: await output.text() || {}
    }
}