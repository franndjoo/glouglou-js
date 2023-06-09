import { Configuration, Email } from "./interfaces";
import { composeURL, sendRequest } from "./utils";

/** Used to send an email */
export async function sendEmail(config: Configuration, email: Email, optionnalParams?: {[entry: string]: any}) {
    const composedURL = composeURL(config, "send", {
        "api-key": config.apiKey,
        "to": `${email.recipient.name} <${email.recipient.email}>`,
        "subject": email.subject,
        "body": email.body,
        "from-name": email.fromName,
        ...(email.cc !== undefined ? { "cc": `${email.cc.name} <${email.cc.email}>` } : ""),
        ...optionnalParams
    });
    return await sendRequest(composedURL);
}

/** Used to verify the validity if the given API key */
export async function verifyAPIKey(config: Configuration, optionnalParams?: {[entry: string]: any}) {
    const composedURL = composeURL(config, "access-ok", { "api-key": config.apiKey, ...optionnalParams });
    return await sendRequest(composedURL);
}

/** Used to verify that the remote GlouGlou instance is reachable */
export async function pingInstance(config: Configuration, optionnalParams?: {[entry: string]: any}) {
    const composedURL = composeURL(config, "ping", optionnalParams);
    return await sendRequest(composedURL);
}